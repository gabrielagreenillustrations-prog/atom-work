# 0096 — Tabla de Etiquetas: Nombre en Main (premade) con ícono y acciones siempre visibles

**Estado:** vigente
**Fecha:** 2026-10-06
**Componente:** `❖ atom-data-table` · `_table-column`
**Alcance:** Etiquetas, Propuesta B (`01.1 · 07–12`).

## Contexto

La primera versión de la tabla usaba la columna `Tags (premade)` (tag M con el nombre) y un menú de acciones por fila.

## Decisión

- Una sola columna de datos, **Nombre**, en variante `Main (premade)` con el ícono encendido dentro de la celda (`hasImage`), en orden alfabético.
- **Acciones** en `Actions icon-buttons (premade)`: Editar (`Tertiary`) y Eliminar (`Destructive Tertiary`), siempre visibles y con tooltip.

## Por qué

Pedido de diseño: *"el tag no me hace sentido"*, *"las acciones como solo son dos pueden ser los icon buttons el de edit y el de trash como destructive siempre a la vista"* y *"usar la variante main (premade) porque esa se puede activar/encender un icon y así nos ahorramos la columna solo de iconos"*.

## Consecuencias

- Si se decide que el ícono no hace falta, se apaga `hasImage` en la celda; no hay columna que borrar.
- El menú de acciones por fila salió de la tabla; los frames `11` y `12` muestran los tooltips «Editar» y «Eliminar».
