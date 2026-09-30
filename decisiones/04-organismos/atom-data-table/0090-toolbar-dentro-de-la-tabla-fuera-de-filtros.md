# 0090 — Toolbar dentro de `❖ atom-data-table`, salvo en los casos de filtros

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-data-table` · `hasToolbar`
**Alcance:** los tres archivos (Campañas, Automatizaciones y la entrega de métricas por plantilla).

## Contexto

*Dato verificado:* en varias pantallas el `❖ atom-toolbar` estaba fuera de la tabla, encima de ella, y la tabla
tenía `hasToolbar` apagado. Se separaron para los casos de filtros: con el toolbar dentro, el panel de filtros
queda detrás de la tabla.

## Decisión

Solo los casos de filtros llevan el toolbar separado. En las demás pantallas, el toolbar va dentro de
`❖ atom-data-table` (`hasToolbar` encendido).

## Por qué

Pedido de diseño: *"para cuando no sean los casos de filtros entonces la toolbar se puede mostrar sin problema la
de la atom-data-table, los casos de filtros los separamos el toolbar y la table porque no se ven los filtros
delante de la tabla"*.

## Consecuencias

- Caso de filtros: pantalla con un `❖ atom-filters-panel` visible o un chip de filtro en Pressed.
- Automatizaciones: 69 tablas con el toolbar dentro. Entrega de métricas: 12. Campañas: ninguna; los 19 toolbars
  separados son casos de filtros.
- Cómo se hizo: `hasToolbar` encendido y el toolbar interno con las mismas propiedades y textos que el separado
  (búsqueda, chips, «Crear flujo»); la tabla sube a la posición del toolbar y crece 64 px, y el separado queda
  oculto. El cuerpo de la tabla no se movió (0 px en todas) y la exportación del toolbar interno es idéntica,
  píxel a píxel, a la del separado (81 de 81).
- `hasAdditionalActions` quedó apagado en el toolbar interno cuando el separado tenía el slot vacío.
- `03.1 · 04 - Pantalla · Sin resultados de filtro` quedó con el toolbar separado: su toolbar tiene chips que el
  interno no muestra igual.
- `03.5 · 06` y `03.4 · 12` quedaron como estaban: sus tablas no tienen el cuerpo que el script espera.
- Versión de Figma «Antes de toolbar dentro de atom-data-table» en Automatizaciones y en el archivo de métricas.
