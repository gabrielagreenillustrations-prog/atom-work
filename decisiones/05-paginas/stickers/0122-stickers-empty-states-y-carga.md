# 0122 — Stickers: empty states con los textos del Web Library y carga con skeleton

**Estado:** vigente
**Fecha:** 2026-10-12
**Componente:** `❖ atom-empty-state` · `❖ atom-skeleton`
**Alcance:** Stickers, `01.1 · 10–12`.

## Contexto

*Dato verificado (Web Library, página Empty state):* sin registros usa `inbox`, «Aún no hay registros» y «Todavía no hay información disponible.»; sin resultados usa `filter-circle-xmark`, «Sin resultados», «Intenta ajustar los filtros o el término de búsqueda.» y «Limpiar filtros». *Dato verificado en QA:* la carga es un spinner centrado.

## Decisión

- `❖ atom-empty-state` va directo en el contenedor de la página, en Fill y centrado, sin frames ni paddings extra, como en las tablas ([0081](../../04-organismos/atom-data-table/0081-empty-state-paginacion-no-data-y-centrado.md)).
- Sin registros: textos genéricos del Web Library. Sin resultados: sin acción, porque Stickers no tiene filtros.
- Cargando: cards con `❖ atom-skeleton` (Shimmer) en la imagen y el nombre.

## Por qué

Pedido de diseño: *"el layout para que se vea con consistencia con tablas, deberia no tener paddings adicionales ni estar en otros frames"*; *"según los patterns del empty state, los textos son genericos"*. Respuestas de diseño: carga *"Cards en skeleton"* y sin resultados *"Sin acción"*.
