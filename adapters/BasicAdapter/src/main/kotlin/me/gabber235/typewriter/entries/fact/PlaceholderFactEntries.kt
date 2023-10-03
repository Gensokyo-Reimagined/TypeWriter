package me.gabber235.typewriter.entries.fact

import me.gabber235.typewriter.adapters.Colors
import me.gabber235.typewriter.adapters.Entry
import me.gabber235.typewriter.adapters.modifiers.Help
import me.gabber235.typewriter.adapters.modifiers.Placeholder
import me.gabber235.typewriter.adapters.modifiers.Regex
import me.gabber235.typewriter.entry.entries.ReadableFactEntry
import me.gabber235.typewriter.extensions.placeholderapi.isPlaceholder
import me.gabber235.typewriter.extensions.placeholderapi.parsePlaceholders
import me.gabber235.typewriter.facts.Fact
import me.gabber235.typewriter.logger
import me.gabber235.typewriter.utils.Icons
import java.util.*

@Entry("number_placeholder", "Computed Fact for a placeholder number", Colors.PURPLE, Icons.HASHTAG)
/**
 * A [fact](/docs/facts) that is computed from a placeholder.
 * This placeholder is evaluated when the fact is read and must return a number or boolean.
 * (the value is also stored in the string value of the fact)
 * <fields.ReadonlyFactInfo />
 *
 * ## How could this be used?
 *
 * Make sure the player has a high enough level.
 * Then allow them to start a quest or enter a dungeon.
 */
class NumberPlaceholderFactEntry(
    override val id: String = "",
    override val name: String = "",
    override val comment: String = "",
    @Placeholder
    @Help("Placeholder to parse (e.g. %player_level%) - Only placeholders that return a number or boolean are supported (the value is also stored in the string value of the fact)!")
    /**
     * The placeholder to parse.
     * For example %player_level%.
     *
     * <Admonition type="caution">
     *      Only placeholders that return a number or boolean are supported (the value is also stored in the string value of the fact)!
     *      If you want to use a placeholder that returns a string,
     *      use the <Link to='value_placeholder'>ValuePlaceholderFactEntry</Link> instead.
     * </Admonition>
     */
    private val placeholder: String = "",
) : ReadableFactEntry {
    override fun read(playerId: UUID): Fact {
        if (!placeholder.isPlaceholder) {
            logger.warning("Placeholder '$placeholder' is not a valid placeholder! Make sure it is only a placeholder starting & ending with %")
            return Fact(id, 0, "")
        }
        val value = placeholder.parsePlaceholders(playerId)
        return Fact(id, value.toIntOrNull() ?: value.toBooleanStrictOrNull()?.toInt() ?: 0, value)
    }
}

fun Boolean.toInt() = if (this) 1 else 0

@Entry("value_placeholder", "Fact for a placeholder value", Colors.PURPLE, Icons.USER_TAG)
/**
 * A [fact](/docs/facts) that is computed from a placeholder.
 * This placeholder is evaluated when the fact is read and can return anything.
 * The value will be computed based on the `values` specified.
 * (the value is also stored in the string value of the fact)
 * <fields.ReadonlyFactInfo/>
 *
 * ## How could this be used?
 *
 * If you only want to run certain actions if the player is in creative mode.
 * Or depending on the weather, change the dialogue of the NPC.
 */
class ValuePlaceholderFactEntry(
    override val id: String = "",
    override val name: String = "",
    override val comment: String = "",
    @Placeholder
    @Help("Placeholder to parse (e.g. %player_gamemode%)")
    private val placeholder: String = "",
    @Regex
    @Help("Values to match the placeholder with and their corresponding fact value. Regex is supported.")
    /**
     * The values to match the placeholder with and their corresponding fact value.
     * (the value is also stored in the string value of the fact)
     * An example would be:
     * ```yaml
     * values:
     *  SURVIVAL: 0
     *  CREATIVE: 1
     *  ADVENTURE: 2
     *  SPECTATOR: 3
     * ```
     * If the placeholder returns `CREATIVE`, the fact value will be `1`.
     *
     * If no value matches, the fact value will be `0`.
     */
    private val values: Map<String, Int> = mapOf()
) : ReadableFactEntry {
    override fun read(playerId: UUID): Fact {
        if (!placeholder.isPlaceholder) {
            logger.warning("Placeholder '$placeholder' is not a valid placeholder! Make sure it is only a placeholder starting & ending with %")
            return Fact(id, 0,"")
        }
        val parsed = placeholder.parsePlaceholders(playerId)
        val value = values[parsed] ?: values.entries.firstOrNull { it.key.toRegex().matches(parsed) }?.value ?: 0
        return Fact(id, value,parsed)
    }
}