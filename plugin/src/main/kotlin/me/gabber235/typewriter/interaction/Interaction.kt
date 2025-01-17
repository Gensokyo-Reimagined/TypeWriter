package me.gabber235.typewriter.interaction

import me.gabber235.typewriter.entry.Query
import me.gabber235.typewriter.entry.cinematic.CinematicSequence
import me.gabber235.typewriter.entry.dialogue.DialogueSequence
import me.gabber235.typewriter.entry.entries.*
import me.gabber235.typewriter.entry.entries.SystemTrigger.*
import me.gabber235.typewriter.entry.matches
import me.gabber235.typewriter.entry.triggerEntriesFor
import me.gabber235.typewriter.entry.triggerFor
import org.bukkit.entity.Player
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class Interaction(val player: Player) : KoinComponent {
    private val interactionHandler: InteractionHandler by inject()

    private var dialogue: DialogueSequence? = null
    private var cinematic: CinematicSequence? = null
    val hasDialogue: Boolean
        get() = dialogue != null

    val hasCinematic: Boolean
        get() = cinematic != null

    suspend fun tick() {
        dialogue?.tick()
        cinematic?.tick()
    }

    /** Handles an event. All [SystemTrigger]'s are handled by the plugin itself. */
    suspend fun onEvent(event: Event) {
        triggerActions(event)
        handleDialogue(event)
        handleCinematic(event)
    }

    /**
     * Triggers all actions that are registered for the given event.
     *
     * @param event The event that should be triggered
     */
    private fun triggerActions(event: Event) {
        // Trigger all actions
        val actions =
            Query.findWhere<ActionEntry> {
                it in event && it.criteria.matches(event.player.uniqueId)
            }
        actions.forEach { action -> action.execute(event.player) }
        val newTriggers =
            actions.flatMap { it.triggers }.map { EntryTrigger(it) }.filter {
                it !in event
            } // Stops infinite loops
        if (newTriggers.isNotEmpty()) {
            interactionHandler.triggerActions(event.player, newTriggers)
        }
    }

    private fun handleDialogue(event: Event) {
        if (DIALOGUE_END in event) {
            val dialogue = dialogue ?: return
            this.dialogue = null
            dialogue.end()
            return
        }

        if (DIALOGUE_NEXT in event) {
            onDialogueNext()
            return
        }

        // Try to trigger new/next dialogue
        tryTriggerNextDialogue(event)
    }

    /**
     * Tries to trigger a new dialogue. If no dialogue can be found, it will end the dialogue
     * sequence.
     */
    private fun tryTriggerNextDialogue(event: Event) {
        val nextDialogue =
            Query.findWhere<DialogueEntry> { it in event }
                .sortedByDescending { it.criteria.size }
                .firstOrNull { it.criteria.matches(event.player.uniqueId) }

        if (nextDialogue != null) {
            // If there is no sequence yet, start a new one
            if (dialogue == null) {
                dialogue = DialogueSequence(player, nextDialogue)
                dialogue?.init()
            } else {
                // If there is a sequence, trigger the next dialogue
                dialogue?.next(nextDialogue)
            }
        } else if (dialogue?.isActive == false) {
            // If there is no next dialogue and the sequence isn't active anymore, we can end the
            // sequence
            DIALOGUE_END triggerFor player
        }
    }

    /**
     * Called when the player clicks the next button. If there is no next dialogue, the sequence
     * will be ended.
     */
    private fun onDialogueNext() {
        val dialog = dialogue ?: return
        if (dialog.triggers.isEmpty()) {
            DIALOGUE_END triggerFor player
            return
        }
        dialog.triggers triggerEntriesFor player
        return
    }

    private suspend fun handleCinematic(event: Event) {
        if (CINEMATIC_END in event) {
            val cinematic = cinematic ?: return
            this.cinematic = null
            cinematic.end()
            return
        }

        val triggers = event.triggers.filterIsInstance<CinematicStartTrigger>()
        if (triggers.isEmpty()) return
        // If any of the triggers is an override, we should use that one
        // Otherwise, we should use the first one
        val trigger = triggers.firstOrNull { it.override } ?: triggers.first()
        if (cinematic != null && !trigger.override) return

        val cinematic = cinematic
        this.cinematic = null
        cinematic?.end()

        var entries =
            Query.findWhereFromPage<CinematicEntry>(trigger.pageId) {
                it.criteria.matches(event.player.uniqueId)
                        && it.id !in trigger.ignoreEntries
            }

        // If the cinematic is a simulation, we filter out all the entries that should never be
        // simulated.
        if (trigger.simulate) {
            entries = entries.filter { it.shouldSimulate() }
        }

        if (entries.isEmpty() && !trigger.simulate) return

        this.cinematic = CinematicSequence(player, entries, trigger.triggers, trigger.minEndTime)
    }

    suspend fun end() {
        val dialogue = dialogue
        val cinematic = cinematic

        this.dialogue = null
        this.cinematic = null

        dialogue?.end()
        cinematic?.end(force = true)
    }
}
