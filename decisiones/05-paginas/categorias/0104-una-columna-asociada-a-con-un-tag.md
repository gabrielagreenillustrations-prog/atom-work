# 0104 — Categorías: una sola columna «Asociada a», con un tag por celda y tooltip

**Estado:** vigente; el color Neutral, reemplazado por [0108](0108-colores-por-tipo-filtros-y-propuesta-unica.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-data-table` (columna de categorización) · `❖ atom-tag` · `❖ atom-tooltip`
**Alcance:** Categorías, todas las tablas (`01.1 · 01–07` y los fondos de 01.2–01.4).

## Contexto

En QA, Respuestas rápidas y Plantillas son dos columnas con checkbox de solo lectura. Una categoría puede estar asociada a una, a la otra o a las dos.

*Dato verificado (benchmark, fuentes públicas):* Freshdesk organiza las respuestas rápidas en carpetas propias de ese módulo; no encontré un caso donde una misma categoría se comparta entre dos módulos. Jira muestra dónde se usa cada campo personalizado en una sola columna.

## Decisión

- Una sola columna, **«Asociada a»**, con un solo tag Ghost Neutral por celda: «Respuestas rápidas», «Plantillas» o «Ambas».
- Tooltip en el tag que nombra la asociación: «Categoría asociada a respuestas rápidas», «…a plantillas» o «…a respuestas rápidas y plantillas».
- El filtro también se llama «Asociada a», con las mismas tres opciones en orden alfabético: Ambas, Plantillas, Respuestas rápidas.
- La columna Activo pasa a **Estado**, con tag Ghost («Activa» / «Inactiva»).

## Por qué

Pedido de diseño: *"la columna solo podrá tener un tag que diga plantillas o respuestas rápidas o ambas y un tooltip de «Categoría asociada a…» … Así no rompemos el pattern de 1 tag a la vez permitido"*.

## Consecuencias

- Table Patterns solo documenta la columna de categorización con un valor (texto, máx. 140 px). Este caso, con tag, conviene documentarlo.
- «Ambas» es un valor nuevo de la UI: no existe en la app.
