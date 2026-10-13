# 0081 — Tablas en empty state: paginación «no-data» y empty state centrado

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-data-table` · `❖ atom-pagination` · `❖ atom-empty-state`
**Alcance:** Campañas (10 tablas: `01.1 · 03–05`, `01.8 · 04` y `02.1 · 03–05` de Handoff v1, y
`02.1 · 03–05` de Handoff v2) y Automatizaciones (`03.1 · 03–05`, `04.1 · 03` y el side panel
`04.4 · 07`).

## Contexto

*Dato verificado:*

- En las tablas con empty state, `❖ atom-pagination` estaba en `State=first-page` en 8 tablas. En las
  que ya estaban en `no-data`, los textos seguían con datos: «1 - 30 de 1.6K registros», «Página 1 de
  42», «1 - 10 de 1,165 registros».
- El `❖ atom-empty-state` va dentro de un `❖ atom-table` de 768 de alto, centrado en él, pero ese
  `❖ atom-table` es más alto que su contenedor (606 a 672): el empty state quedaba 48 a 81 px por
  debajo del centro del cuerpo de la tabla.

## Decisión

- Todas las tablas con empty state llevan `❖ atom-pagination` en `State=no-data`, con los textos del
  componente: «Sin registros» y «Sin páginas».
- El `❖ atom-table` que contiene el empty state ocupa el alto de su contenedor (Fill): el empty state
  queda centrado en el cuerpo de la tabla, en los dos ejes.

## Por qué

Pedido de diseño: *"a las tablas en empty state habilitemos el atom paginator en variante no data como
viene del diseño, en todas las tablas en empty state"* y *"en todos los empty states en tablas o
cualquier otras instancias, alinea el empty state al centro"*.

*Interpretación:* «como viene del diseño» son los textos por defecto de la variante `no-data`;
`04.1 · 03` ya los tenía.

## Consecuencias

- `04.4 · 07` (side panel sin conversaciones) ya estaba centrado; su `❖ atom-table` pasó a ocupar el
  alto del panel y sigue centrado.
- El empty state dentro del menú de `03.8 · 07` ya estaba centrado y no se tocó.
- Los dos empty states de la page *Ideación* de Automatizaciones no se tocaron.
