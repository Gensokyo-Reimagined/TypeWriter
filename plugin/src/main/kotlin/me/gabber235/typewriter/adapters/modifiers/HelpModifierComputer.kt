package me.gabber235.typewriter.adapters.modifiers

import me.gabber235.typewriter.adapters.FieldInfo
import me.gabber235.typewriter.adapters.FieldModifier
import me.gabber235.typewriter.adapters.FieldModifier.DynamicModifier

@Target(AnnotationTarget.FIELD, AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
annotation class Help(val text: String)

object HelpModifierComputer : StaticModifierComputer<Help> {
    override val annotationClass: Class<Help> = Help::class.java

    override fun computeModifier(annotation: Help, info: FieldInfo): FieldModifier {
        return DynamicModifier("help", annotation.text)
    }
}
