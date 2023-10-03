package me.gabber235.typewriter.entry.entries

import me.gabber235.typewriter.adapters.Tags
import me.gabber235.typewriter.adapters.modifiers.Help
import me.gabber235.typewriter.adapters.modifiers.MultiLine
import me.gabber235.typewriter.entry.StaticEntry
import me.gabber235.typewriter.facts.Fact
import me.gabber235.typewriter.facts.FactDatabase
import org.bukkit.inventory.ItemStack
import org.koin.java.KoinJavaComponent.get
import java.util.*

@Tags("fact")
interface FactEntry : StaticEntry {
    @MultiLine
    @Help("A comment to keep track of what this fact is used for.")
    val comment: String
}

@Tags("readable-fact")
interface ReadableFactEntry : FactEntry {
    fun read(playerId: UUID): Fact
}

@Tags("writable-fact")
interface WritableFactEntry : FactEntry {
    fun write(playerId: UUID, value: Int)
    fun write(playerId: UUID, value: String)
}

@Tags("cachable-fact")
interface CachableFactEntry : ReadableFactEntry, WritableFactEntry {

    override fun read(playerId: UUID): Fact {
        val factDatabase: FactDatabase = get(FactDatabase::class.java)
        return factDatabase.getCachedFact(playerId, id) ?: Fact(id, 0, "")
    }

    override fun write(playerId: UUID, value: Int) {
        val existingFact = read(playerId)
        if (!canCache(existingFact)) return
        //we need to rea
        val factDatabase: FactDatabase = get(FactDatabase::class.java)
        factDatabase.setCachedFact(playerId, Fact(id, value, existingFact.strValue))
    }

    override fun write(playerId: UUID, value: String) {
        val existingFact = read(playerId)
        if (!canCache(existingFact)) return
        val factDatabase: FactDatabase = get(FactDatabase::class.java)
        factDatabase.setCachedFact(playerId, Fact(id, existingFact.numValue, value))
    }

    fun canCache(fact: Fact): Boolean = true
}

@Tags("persistable-fact")
interface PersistableFactEntry : CachableFactEntry {
    fun canPersist(fact: Fact): Boolean = true
}

@Tags("expirable-fact")
interface ExpirableFactEntry : CachableFactEntry {
    fun hasExpired(fact: Fact): Boolean = false
}
@Tags("iconed-fact")
interface IconableFactEntry : FactEntry {
    @Help("An ItemStack icon to represent this fact to players")
    val icon: ItemStack
}