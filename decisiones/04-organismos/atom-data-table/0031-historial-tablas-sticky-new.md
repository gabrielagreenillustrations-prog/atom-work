# 0031 — Historial: tablas con `❖ atom-data-table` · *Sticky New*

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Historial de conversaciones — tablas de la sección `10:40532`. Lleva
la [0017](0017-tablas-sticky-new.md) a Historial.

## Contexto

La [0017](0017-tablas-sticky-new.md) migró las tablas de Campañas y de Gestión de flujos. Historial
seguía con la `❖ atom-table` anterior (con `↳ Table Body Props`) y había quedado como pregunta.

## Decisión

Las tablas de Historial pasan a `❖ atom-data-table` (Web Library), como en Campañas: `❖ atom-table`
en **Sticky New** en las tablas con datos, con **F. Actualización** fija a la izquierda y
**Acciones** fija a la derecha, las dos con posición absoluta dentro del slot Columns. Las tablas de
estado conservan su variante: **Loading** en Cargando y **Empty** en el vacío.

## Por qué

Pedido de diseño: *"actualiza de la misma manera qule hicimos la actualización de las tablas en el file de
Campañas pero en automatizaciones, porque vi algunas que estaban outdated."*

*Interpretación:* la columna fija a la izquierda es F. Actualización porque es la primera de la
tabla (Historial no tiene Nombre). El paginador usa el formato de Gestión de flujos:
«1 - 10 de N registros» · «Página 1 de M».

## Consecuencias

- 21 tablas nuevas: 19 en *Sticky New*, `04.1 · 01` en *Loading* y `04.1 · 03` en *Empty* (sin
  paginador y con el copy que tenía el frame).
- Paginador «1 - 10 de 47 registros» · «Página 1 de 5»; en `04.2 · 03` (búsqueda con un resultado),
  «1 - 1 de 1 registros» · «Página 1 de 1».
- El vacío dentro del side panel de `04.4 · 07` usa `❖ atom-table` en variante *Empty*.
- Las cards `10:44934`, `10:44935` y `10:44941` describen la tabla nueva.
- **No se migraron** `04.2 · 04`, `04.2 · 05` y `04.2 · 06` (filtros abiertos): su tabla es un frame
  desacoplado con la versión anterior y la búsqueda de tablas viejas solo tomó instancias. Queda como
  pregunta en `RETOMAR.md`.
