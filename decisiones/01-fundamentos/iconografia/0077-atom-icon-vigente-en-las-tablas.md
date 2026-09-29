# 0077 — Íconos: el `❖ atom-icon` vigente en las celdas de las tablas

**Estado:** vigente
**Fecha:** 2026-09-28
**Componente:** ❖ atom-icon
**Alcance:** page Automatizaciones Handoff v1: tablas de Gestión de flujos (también la tabla suelta
`66:69458`) e Historial.

## Contexto

Las celdas de las tablas (`_table-data-cell`, variante *Main (premade)*) traen el ícono en
`↳ ImageProps`, una instancia de `❖ atom-icon (DEPRECATED)` (key `fe75ec1d…`, propiedad
`Glyph#1374:1`). La celda de Canal con copiar de `03.8 · 01–02` también lo tenía, en el slot.

Diseño: *"Usa el atom icon que esté actualizado por favor, no el deprecated."*

## Decisión

Los íconos de las celdas usan el `❖ atom-icon` vigente de la Web Library (set `4cd26eac…`, variantes
`Weight` = Regular / Solid, propiedad `Icon Name#2590:0`). Se cambia con un swap de la instancia
(override) y se conserva el glifo, el tamaño, el color y, en los íconos de marca, la fuente Font Awesome 7
Brands.

## Por qué

Pedido de diseño.

*Interpretación:* el pedido alcanza a los íconos que puse en las tablas. Los que vienen dentro de otros
componentes de la librería (ítems de menú, sidebar, tags, snackbars, empty states) siguen con el
deprecated, porque así los trae su componente. Queda como pregunta.

## Consecuencias

- *Verificado:* 1604 íconos cambiados, 1591 en los frames de Gestión de flujos y 13 en la tabla suelta.
  Después del cambio no queda ningún `❖ atom-icon (DEPRECATED)` en las celdas.
- Historial no tenía íconos en `↳ ImageProps` (su Canal es un botón con ícono) y las tablas de Campañas
  tampoco: no cambiaron.
- Glifo, color y tamaño del texto se copian del ícono anterior: el componente vigente mide 10 × 10 con
  texto de 8 px, y sin copiar el tamaño el ícono queda chico.
