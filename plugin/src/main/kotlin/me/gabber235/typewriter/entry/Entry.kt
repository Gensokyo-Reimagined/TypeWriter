package me.gabber235.typewriter.entry

import com.google.gson.annotations.SerializedName
import me.gabber235.typewriter.adapters.Tags
import me.gabber235.typewriter.adapters.modifiers.Help
import me.gabber235.typewriter.entry.entries.ReadableFactEntry
import me.gabber235.typewriter.entry.entries.WritableFactEntry
import me.gabber235.typewriter.facts.FactData
import org.bukkit.entity.Player

interface Entry {
    val id: String
    val name: String
}

@Tags("static")
interface StaticEntry : Entry

@Tags("manifest")
interface ManifestEntry : Entry

@Tags("trigger")
interface TriggerEntry : Entry {
    @Help("The entries that will be fired after this entry.")
    val triggers: List<Ref<TriggerableEntry>>
}

@Tags("triggerable")
interface TriggerableEntry : TriggerEntry {
    @Help("The criteria that must be met before this entry is triggered")
    val criteria: List<Criteria>

    @Help("The modifiers that will be applied when this entry is triggered")
    val modifiers: List<Modifier>
}

@Tags("placeholder")
interface PlaceholderEntry : Entry {
    fun display(player: Player?): String?
}

enum class NumCriteriaOperator {
    @SerializedName("==")
    EQUALS,

    @SerializedName("<")
    LESS_THAN,

    @SerializedName(">")
    GREATER_THAN,

    @SerializedName("<=")
    LESS_THAN_OR_EQUALS,

    @SerializedName(">=")
    GREATER_THAN_OR_EQUAL,

    @SerializedName("ANY")
    ANY,

    ;

    fun isValid(value: Double, criteria: Double): Boolean {
        return when (this) {
            EQUALS -> value == criteria
            LESS_THAN -> value < criteria
            GREATER_THAN -> value > criteria
            LESS_THAN_OR_EQUALS -> value <= criteria
            GREATER_THAN_OR_EQUAL -> value >= criteria
            ANY -> true;
        }
    }
}

enum class StrCriteriaOperator {
    @SerializedName("==")
    EQUALS,

    @SerializedName("CONTAINS")
    CONTAINS,

    @SerializedName("CONTAINED BY")
    CONTAINED_BY,

    @SerializedName("ANY")
    ANY,

    ;

    fun isValid(value: String, criteria: String): Boolean {
        return when (this) {
            EQUALS -> value == criteria
            CONTAINS -> value.contains(criteria)
            CONTAINED_BY -> criteria.contains(value)
            ANY -> true;
        }
    }
}

data class Criteria(
    @Help("The fact to check before triggering the entry")
    val fact: Ref<ReadableFactEntry> = emptyRef(),
    @Help("The operator to use when comparing the fact number value to the criteria number value")
    val numOperator: NumCriteriaOperator = NumCriteriaOperator.EQUALS,
    @Help("The value to compare the fact number value to")
    val numValue: Int = 0,
    @Help("The operator to use when comparing the fact string value to the criteria string value")
    val strOperator: StrCriteriaOperator = StrCriteriaOperator.EQUALS,
    @Help("The string value to compare the fact value to")
    val strValue: String = "",
) {
    fun isValid(fact: FactData?): Boolean {
        val numValue = fact?.numValue ?: 0
        val strValue = fact?.strValue ?: ""
        return numOperator.isValid(numValue.toDouble(), this.numValue.toDouble())&&
                strOperator.isValid(strValue,this.strValue)
    }
}

enum class ModifierOperator {
    @SerializedName("=")
    SET,

    @SerializedName("+")
    ADD;
}

data class Modifier(
    @Help("The fact to modify when the entry is triggered")
    val fact: Ref<WritableFactEntry> = emptyRef(),
    @Help("The operator to use when modifying the fact number value")
    val numOperator: ModifierOperator = ModifierOperator.ADD,
    @Help("The value to modify the fact number value by")
    val numValue: Int = 0,
    @Help("The operator to use when modifying the fact string value")
    val strOperator: ModifierOperator = ModifierOperator.SET,
    @Help("The value to modify the fact sring value by")
    val strValue: String = "",
)
