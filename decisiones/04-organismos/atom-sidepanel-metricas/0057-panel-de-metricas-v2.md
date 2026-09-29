# 0057 — Panel de métricas (Handoff v2): cinco cambios

**Estado:** vigente, salvo el punto 5 (reemplazado por [0060](0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md))
**Fecha:** 2026-09-26
**Alcance:** Campañas · page `Handoff v2` — paneles de métricas `01.6 · 01–10` y `01.8 · 15–17`.

## Decisión

1. Sin la flecha de tendencia (`arrow-trend-up`) junto al porcentaje.
2. Los textos chicos del desglose pasan de 8 px (`footnote/footnoteRegular`) a 12 px
   (`label/labelRegular`).
3. Los conteos dicen «errores»: «4 errores · 27% del total» (antes «4 mensajes»).
4. Cantidad y porcentaje en la misma línea: «463 93%».
5. El ícono de información va a continuación del porcentaje, en la misma línea.

## Por qué

Pedido de diseño: *"1. Quitar la flecha curva estática junto al porcentaje. 2. Aumentar el tamaño
de textos pequeños de métricas. 3. Cambiar «mensajes» por «errores» en los conteos. 4. Acercar
visualmente cantidad y porcentaje. 5. Mover el ícono de información para alinearlo con el
porcentaje."*

*Interpretación:* «alinearlo con el porcentaje» es ponerlo en la misma línea, después del
porcentaje. En la card Respondidos de `01.6 · 01` había otra versión, sin registro en el repo:
número y porcentaje juntos y el ícono arriba a la derecha. Se dejó igual a las demás (pregunta en
`RETOMAR.md`).

*Interpretación:* «textos pequeños» son los de 8 px del desglose; el porcentaje y las etiquetas de
las cards ya estaban en 12 px.

## Consecuencias

- 12 paneles, 60 cards: la flecha queda oculta y cada card tiene un marco `Cantidad` (número +
  porcentaje + ícono) dentro de `Valor`.
- 84 conteos del desglose con «errores» y 12 px. «No entregados» también dice «errores», porque es
  parte del total de errores.
