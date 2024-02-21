package me.gabber235.typewriter.facts

import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import me.gabber235.typewriter.entry.*
import me.gabber235.typewriter.entry.entries.ExpirableFactEntry
import me.gabber235.typewriter.entry.entries.PersistableFactEntry
import me.gabber235.typewriter.entry.entries.ReadableFactEntry
import me.gabber235.typewriter.entry.entries.WritableFactEntry
import me.gabber235.typewriter.plugin
import me.gabber235.typewriter.utils.ThreadType.DISPATCHERS_ASYNC
import me.gabber235.typewriter.utils.logErrorIfNull
import org.bukkit.entity.Player
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import java.util.concurrent.ConcurrentHashMap
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.set

private const val FACT_STORAGE_DELAY = 60 * 3

class FactDatabase : KoinComponent {
    private val storage: FactStorage by inject()

    // Local stored version of player facts
    private val cache = ConcurrentHashMap<FactId, FactData>()

    fun initialize() {
        storage.init()

        // Load all the facts from the storage
        runBlocking {
            loadFactsFromPersistentStorage()
        }

        // Filter expired facts every second.
        // After that, save the facts of the players who have facts that expired or changed.
        DISPATCHERS_ASYNC.launch {
            var cycle = 1
            while (plugin.isEnabled) {
                delay(1000)
                removeExpiredFacts()

                if (cycle++ % FACT_STORAGE_DELAY == 0) {
                    storeFactsInPersistentStorage()
                }
            }
        }
    }

    fun shutdown() {
        runBlocking {
            storeFactsInPersistentStorage()
        }
        storage.shutdown()
    }

    private suspend fun loadFactsFromPersistentStorage() {
        val facts = storage.loadFacts()
        cache.clear()
        cache.putAll(facts)
    }

    private suspend fun storeFactsInPersistentStorage() {
        val entries =
            cache.keys.mapNotNull { Query.findById<PersistableFactEntry>(it.entryId) }.associateBy { it.id }

        val facts = cache.entries.filter { (id, data) ->
            val entry = entries[id.entryId] ?: return@filter false

            // If the fact is not persistable, or it has expired, don't store it.
            if (!entry.canPersist(id, data)) return@filter false
            if (entry is ExpirableFactEntry && entry.hasExpired(id, data)) return@filter false

            true
        }.map { (id, data) -> id to data }

        storage.storeFacts(facts)
    }

    private fun removeExpiredFacts() {
        val entries = cache.keys.mapNotNull { Query.findById<ExpirableFactEntry>(it.entryId) }.associateBy { it.id }

        cache.entries.removeIf { (id, data) ->
            val entry = entries[id.entryId] ?: return@removeIf false
            entry.hasExpired(id, data)
        }
    }

    internal operator fun get(id: FactId): FactData? = cache[id]

    internal operator fun set(id: FactId, data: FactData) {
        if (data.numValue == 0 && data.strValue == "") {
            cache.remove(id)
        } else {
            cache[id] = data
        }
    }

    fun modify(player: Player, modifiers: List<Modifier>) {
        modify(player) {
            modifiers.forEach { modifier ->
                this[modifier.fact] = when (modifier.numOperator) {
                    ModifierOperator.ADD -> {
                        val entry =
                                modifier.fact.get().logErrorIfNull("Could not find ${modifier.fact}") ?: return@forEach

                        if (entry !is ReadableFactEntry) {
                            plugin.logger.warning("Tried to add to a non-readable fact: ${modifier.fact}, how do you expect to add if you can't read?")
                            return@forEach
                        }

                        val fact = entry.readForPlayersGroup(player)
                        modifier.numValue + fact.numValue
                    }

                    ModifierOperator.SET -> modifier.numValue
                }
                this[modifier.fact] = when (modifier.strOperator) {
                    ModifierOperator.ADD -> {
                        val entry =
                                modifier.fact.get().logErrorIfNull("Could not find ${modifier.fact}") ?: return@forEach

                        if (entry !is ReadableFactEntry) {
                            plugin.logger.warning("Tried to add to a non-readable fact: ${modifier.fact}, how do you expect to add if you can't read?")
                            return@forEach
                        }

                        val fact = entry.readForPlayersGroup(player)
                        modifier.strValue + fact.strValue
                    }

                    ModifierOperator.SET -> modifier.strValue
                }
            }
        }
    }

    fun modify(player: Player, modifier: FactsModifier.() -> Unit) {
        val pair = FactsModifier().apply(modifier).build()
        val numModifications = pair.first
        val strModifications = pair.second
        if (numModifications.isEmpty()&&strModifications.isEmpty()) return

        for ((id, value) in numModifications) {
            val entry = Query.findById<WritableFactEntry>(id) ?: continue
            entry.write(player, value)
            if (entry is ReadableFactEntry) {
                RefreshFactTrigger(entry.ref()) triggerFor player
            }
        }

        for ((id, value) in strModifications) {
            val entry = Query.findById<WritableFactEntry>(id) ?: continue
            entry.write(player, value)
            if (entry is ReadableFactEntry) {
                RefreshFactTrigger(entry.ref()) triggerFor player
            }
        }
    }
}

class FactsModifier {
    private val numModifications = mutableMapOf<String, Int>()
    private val strModifications = mutableMapOf<String, String>()

    operator fun set(ref: Ref<out WritableFactEntry>, value: Int) = set(ref.id, value)

    operator fun set(id: String, value: Int) {
        numModifications[id] = value
    }

    operator fun set(ref: Ref<out WritableFactEntry>, value: String) = set(ref.id, value)

    operator fun set(id: String, value: String) {
        strModifications[id] = value
    }

    fun build(): Pair<Map<String, Int>,Map<String,String>> = Pair(numModifications,strModifications)
}

fun Player.fact(ref: Ref<out ReadableFactEntry>) = ref.get()?.readForPlayersGroup(this)