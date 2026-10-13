# 0105 — Categorías: Crear y Editar según Forms Patterns

**Estado:** vigente
**Fecha:** 2026-10-06
**Componente:** `❖ atom-dialog` · `❖ atom-text-field` · `❖ atom-checkbox`
**Alcance:** Categorías, `01.2 · 01–06` y `01.3 · 01–05`.

## Contexto

En QA, Crear está habilitado al abrir y los errores son «Campo requerido *» y «Debes seleccionar al menos una opción». Una primera versión del handoff mostraba un error al presionar Crear sin opciones marcadas.

## Decisión

Según Global Patterns (Forms y Text Field):
- Al abrir: sin errores y con el botón principal deshabilitado.
- **Submit gate:** Crear sigue deshabilitado hasta que el nombre sea válido y haya al menos una opción marcada. Editar, además, hasta que haya cambios. Sin opción marcada no se muestra mensaje: el botón no se habilita.
- Nombre vacío on blur: «Se requiere el nombre» (mensaje estándar «Campo requerido con sustantivo»).
- Nombre duplicado on blur: «El nombre ya está en uso.» (igual que Etiquetas, 0099).
- Sin marcas de requerido en los labels: todos los campos son obligatorios.
- Placeholder con «Ej.»: «Ej. Promociones».

## Por qué

Pedido de diseño: *"Corrige con lo que dice global patterns"*.

## Consecuencias

- *Interpretación:* Etiquetas (0099) quedó sin el caso de nombre vacío on blur, que Forms Patterns sí pide. Falta decidir si se suma.
- El error de un grupo de checkboxes no está documentado (Checkbox está TBD en Global Patterns). Con el submit gate no hace falta.
