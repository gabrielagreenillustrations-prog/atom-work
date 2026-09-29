# 0049 — Listas: orden de las categorías de filtro

**Estado:** vigente solo en la page «Handoff v2» — ver [0056](../../06-proceso-y-fuentes/handoff/0056-handoff-v2.md)
**Fecha:** 2026-09-25
**Alcance:** Campañas · Listas — paneles de filtro (`02.2`).

## Contexto

La [0018](0018-listas-filtro-origen.md) sumó la categoría Origen y, como interpretación, la ubicó
después de Tipo: Tipo · Origen · Estado · Creador · F. Creación · F. Actualización.

## Decisión

Las categorías del panel de filtros van en este orden: **Tipo · Estado · Origen · Creador ·
F. Creación · F. Actualización**.

## Por qué

Pedido de diseño: *"En listas estáticas, vamos a cambiar el orden de los filtros: Tipo, Estado,
Origen, Creador, F. Creación y F. Actualización"*.

## Consecuencias

- Reemplaza el orden que la [0018](0018-listas-filtro-origen.md) dejó como interpretación; el resto
  de la 0018 (la categoría Origen y sus opciones) sigue vigente.
- El orden de los filtros queda igual al de las columnas de la tabla: Tipo · Estado · Origen.
- Figma: los seis paneles de filtro de Listas (`02.2 · 04–09`) muestran este orden. Los frames de
  Estado y Origen abiertos se renombraron para que el nombre coincida con lo que muestran:
  `02.2 · 05 - Filtro · Estado abierto` (`490:353081`) y `02.2 · 09 - Filtro · Origen abierto`
  (`296:801693`). *Verificado el 2026-09-25.*
