# 0055 — Resultados: al buscar se deshabilitan los filtros

**Estado:** vigente
**Fecha:** 2026-09-26
**Alcance:** Campañas · Resultados de campañas (estáticas y dinámicas) — buscador y barra de
filtros (`01.2 · 06`, `01.2 · 11`, `01.8 · 07`). No aplica a Listas ni a Automatizaciones.

## Decisión

- Al escribir en el buscador, el chip **Filtros** pasa a Disabled.
- Si había filtros aplicados, también pasan a Disabled los chips aplicados y **Limpiar filtros**.
- Se mantienen el orden de los estados por ciclo de vida y el filtro Creador en orden alfabético.

## Por qué

Pedido de diseño: *"Al comenzar una búsqueda, deshabilitar filtros en campañas unicamente en
resultados de campañas. Pon el ejemplo de cuando no tiene filtros [...] pero si tiene filtros
aplicados al buscar se deshabilita filtros y los aplicados y el limpiar filtros"*.

Es Disabled y no oculto porque la barra de filtros está siempre a la vista
([0053](../atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md)).

## Consecuencias

- Figma: `01.2 · 06` y `01.8 · 07` (sin filtros) con Filtros en Disabled; `01.2 · 11 - Buscador ·
  Con texto y filtros aplicados` con Filtros, el chip «Enviada» y Limpiar filtros en Disabled.
- *Verificado:* `❖ atom-filter-chip` no tiene Disabled cuando `hasFilters` es Yes. El chip aplicado
  se armó con `hasFilters` No + Disabled y pierde el contador: falta en el DS.
- Pregunta: mientras hay búsqueda, ¿los filtros aplicados siguen filtrando los resultados?
