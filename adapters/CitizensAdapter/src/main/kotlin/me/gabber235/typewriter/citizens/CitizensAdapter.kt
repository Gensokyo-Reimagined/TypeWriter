package me.gabber235.typewriter.citizens

import App
import com.google.common.collect.BiMap
import com.google.common.collect.HashBiMap
import it.unimi.dsi.fastutil.Pair
import lirand.api.extensions.server.server
import me.gabber235.typewriter.adapters.Adapter
import me.gabber235.typewriter.adapters.TypewriteAdapter
import me.gabber235.typewriter.logger
import me.gabber235.typewriter.plugin
import me.gabber235.typewriter.utils.syncCommands
import net.citizensnpcs.api.CitizensAPI
import net.citizensnpcs.api.npc.MemoryNPCDataStore
import net.citizensnpcs.api.npc.NPC
import net.citizensnpcs.api.npc.NPCDataStore
import net.citizensnpcs.api.npc.NPCRegistry
import net.citizensnpcs.api.trait.TraitInfo
import org.bukkit.Bukkit
import org.bukkit.command.CommandMap
import org.bukkit.command.CommandSender
import org.bukkit.command.defaults.BukkitCommand
import org.bukkit.entity.Player
import java.lang.reflect.Field
import java.util.*
import java.util.regex.Pattern

//@Deprecated("Use the EntityAdapter instead")
@Adapter("Citizens", "For the Citizens plugin", App.VERSION)
/**
 * The Citizens adapter allows you to create custom interactions with NPCs.
 */
object CitizensAdapter : TypewriteAdapter() {
    private var tmpRegistry: NPCRegistry? = null

    val temporaryNpcMap: BiMap<Pair<UUID, Int>, Int> = HashBiMap.create()
    val temporaryRegistry: NPCRegistry
        get() = tmpRegistry ?: CitizensAPI.createNamedNPCRegistry("typewriter",MemoryNPCDataStore()).also { tmpRegistry = it }
    private val commandMap: CommandMap by lazy {
        val commandMapField: Field = server.javaClass.getDeclaredField("commandMap")
        commandMapField.isAccessible = true
        commandMapField.get(server) as CommandMap
    }

    private val toReplace = Pattern.compile("%[\\d]+%")
    override fun initialize() {
        if (!plugin.server.pluginManager.isPluginEnabled("Citizens")) {
            logger.warning("Citizens plugin not found, try installing it or disabling the Citizens adapter")
            return
        }

        CitizensAPI.getTraitFactory().registerTrait(TraitInfo.create(TypewriterTrait::class.java))
        tmpRegistry = CitizensAPI.createNamedNPCRegistry("typewriter",MemoryNPCDataStore(23500))
        commandMap.register("menreiki1", object : BukkitCommand("playerinstancedwrapper") {
            override fun execute(sender: CommandSender, commandLabel: String, args: Array<out String>): Boolean {
                if(args.size<3){
                    sender.sendMessage("Not enough arguments")
                    return false
                }

                val wrappedCommand =  Arrays.copyOfRange(args,1,args.size).joinToString(" ")
                val sb = StringBuilder()
                val matcher = toReplace.matcher(wrappedCommand)
                while(matcher.find()){
                    matcher.appendReplacement(sb, temporaryNpcMap.get(Pair.of(Bukkit.getPlayerUniqueId(args[0]), Integer.parseInt(matcher.group().replace("%","")))).toString())
                }
                matcher.appendTail(sb)
                return Bukkit.dispatchCommand(sender, sb.toString())
            }
        })
        commandMap.register("menreiki2", object : BukkitCommand("instancedwrapper") {
            override fun execute(sender: CommandSender, commandLabel: String, args: Array<out String>): Boolean {
                if(!(sender is Player)) return false
                if(args.size<2){
                    sender.sendMessage("Not enough arguments")
                    return false
                }

                val wrappedCommand =  args.joinToString(" ")
                val sb = StringBuilder()
                val matcher = toReplace.matcher(wrappedCommand)

                while(matcher.find()){
                    matcher.appendReplacement(sb, temporaryNpcMap.get(Pair.of(sender.uniqueId , Integer.parseInt(matcher.group().replace("%","")))).toString())
                }
                matcher.appendTail(sb)
                return Bukkit.dispatchCommand(sender, sb.toString())
            }
        })
        syncCommands()
    }

    override fun shutdown() {
        CitizensAPI.getTraitFactory().deregisterTrait(TraitInfo.create(TypewriterTrait::class.java))
        tmpRegistry?.deregisterAll()
        tmpRegistry = null
        temporaryNpcMap.clear()
    }
}


class MemoryNPCDataStore(private var lastID: Int = 0) : NPCDataStore {
    override fun clearData(npc: NPC) {}
    override fun createUniqueNPCId(registry: NPCRegistry): Int {
        return lastID++
    }

    override fun loadInto(registry: NPCRegistry) {}
    override fun saveToDisk() {}
    override fun saveToDiskImmediate() {}
    override fun store(npc: NPC) {}
    override fun storeAll(registry: NPCRegistry) {}
    override fun reloadFromSource() {}
}