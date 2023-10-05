package me.gabber235.typewriter.entry

import com.google.gson.annotations.SerializedName
import me.gabber235.typewriter.adapters.Tags
import me.gabber235.typewriter.adapters.modifiers.*
import me.gabber235.typewriter.entry.entries.*
import me.gabber235.typewriter.facts.Fact

interface Entry {
	val id: String
	val name: String
}

@Tags("static")
interface StaticEntry : Entry

@Tags("trigger")
interface TriggerEntry : Entry {
	@Triggers
	@EntryIdentifier(TriggerableEntry::class)
	@Help("The entries that will be fired after this entry.")
	val triggers: List<String>
}

@Tags("triggerable")
interface TriggerableEntry : TriggerEntry {
	@Help("The criteria that must be met before this entry is triggered")
	val criteria: List<Criteria>

	@Help("The modifiers that will be applied when this entry is triggered")
	val modifiers: List<Modifier>
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
	ANY
}
enum class StrCriteriaOperator {
	@SerializedName("ANY")
	ANY,

	@SerializedName("==")
	EQUALS,

	@SerializedName("CONTAINS")
	CONTAINS,

	@SerializedName("CONTAINED BY")
	CONTAINED_BY
}

data class Criteria(
	@Help("The fact to check before triggering the entry")
	@EntryIdentifier(ReadableFactEntry::class)
	val fact: String = "",
	@Help("The operator to use when comparing the fact number value to the criteria number value")
	val numOperator: NumCriteriaOperator = NumCriteriaOperator.EQUALS,
	@Help("The value to compare the fact number value to")
	val numValue: Int = 0,
	@Help("The operator to use when comparing the fact string value to the criteria string value")
	val strOperator: StrCriteriaOperator = StrCriteriaOperator.EQUALS,
	@Help("The value to compare the fact string value to")
	val strValue: String = "",
) {
	fun isValid(fact: Fact?): Boolean {
		val numValue = fact?.numValue ?: 0
		val strValue = fact?.strValue ?: ""
		return when (numOperator) {
			NumCriteriaOperator.EQUALS                -> numValue == this.numValue
			NumCriteriaOperator.LESS_THAN             -> numValue < this.numValue
			NumCriteriaOperator.GREATER_THAN          -> numValue > this.numValue
			NumCriteriaOperator.LESS_THAN_OR_EQUALS   -> numValue <= this.numValue
			NumCriteriaOperator.GREATER_THAN_OR_EQUAL -> numValue >= this.numValue
			NumCriteriaOperator.ANY                   -> true
		} && when (strOperator) {
			StrCriteriaOperator.EQUALS                -> strValue == this.strValue
			StrCriteriaOperator.CONTAINS              -> strValue.contains(this.strValue,false)
			StrCriteriaOperator.CONTAINED_BY          -> this.strValue.contains(strValue,false)
			StrCriteriaOperator.ANY                   -> true
		}
	}
}

enum class ModifierOperator {
	@SerializedName("NONE")
	NONE,

	@SerializedName("=")
	SET,

	@SerializedName("+")
	ADD;
}

data class Modifier(
	@Help("The fact to modify when the entry is triggered")
	@EntryIdentifier(WritableFactEntry::class)
	val fact: String = "",
	@Help("The operator to use when modifying the fact number value")
	val numOperator: ModifierOperator = ModifierOperator.ADD,
	@Help("The value to modify the fact number value by")
	val numValue: Int = 0,
	@Help("The operator to use when modifying the fact string value")
	val strOperator: ModifierOperator = ModifierOperator.ADD,
	@Help("The value to modify the fact string value by")
	val strValue: String = "",
)
