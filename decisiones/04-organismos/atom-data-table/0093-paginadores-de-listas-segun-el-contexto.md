# 0093 — Paginadores de Listas según el contexto

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-pagination` dentro de `❖ atom-data-table`
**Alcance:** Campañas, Handoff v1 y v2 — las pantallas de Listas (`02.1`–`02.5`).

## Contexto

Los 59 paginadores de Listas decían «Registros por página 10 · 1 – 30 de 21 registros · Página 1 de 1» en
`first-page`: el rango no coincidía con los 10 registros por página y la página única no coincidía con el estado.
En Dinámicas, con el mismo selector de 10, el paginador dice «1 – 10 de 12 registros · Página 1 de 2».

## Decisión

- **Con datos (57):** «1 – 10 de 21 registros · Página 1 de 3», en `first-page`. Se mantienen el selector de 10 y
  el total de 21 que ya tenía cada pantalla.
- **Cargando (`02.1 · 01`, v1 y v2):** `State=loading`, con el `❖ atom-skeleton` del componente en el contador en lugar
  del texto, como el paginador de `01.1 · 01`.
- Sin cambios: los `no-data` de «Vacío», «Sin resultados de filtro» y «Error al cargar», y el `single-page` de
  «Buscador · Con texto» («1 – 2 de 2 registros»), que ya coincidían.

## Por qué

Pedido de diseño: *"corrige los paginadores de acuerdo al contexto en listas"*.

*Interpretación:* el contexto es el selector de registros por página (10), el total de la pantalla (21) y el estado
de la pantalla (con datos o cargando).

## Consecuencias

- Las tablas de Listas dibujan 12 filas con scroll vertical; el rango dice 1 – 10. No se tocaron las filas.
- *Verificado el 2026-09-29:* los 59 paginadores de Listas coinciden con su texto; captura de una pantalla
  de Listas con datos y de `02.1 · 01` (cargando) comparada con `01.1 · 01`.
- En el contador de `02.1 · 01` se quitaron el texto de rango, el divisor y el texto de página, que venían de la
  variante `first-page`, y se puso el `❖ atom-skeleton` (Frame=Base) con el radio y el relleno del componente, por
  override de instancia.
- Resultados (`01.2`–`01.7`) sigue con «1 – 30 de 1.6K registros · Página 1 de 42» y el selector en 10: no entró
  en este pedido.
- Versión de Figma «Antes de borrar el stack suelto y paginadores de Listas» en Campañas.
