# 0060 — Panel de métricas (Handoff v2): ícono de información arriba a la derecha

**Estado:** vigente
**Fecha:** 2026-09-26
**Alcance:** page `Handoff v2` de los dos archivos:

- Campañas: `01.6 · 01–10`, `01.8 · 15–17` e `Ideación · 02`.
- Automatizaciones: `03.9 · 01–07`.

Reemplaza el punto 5 de la [0057](0057-panel-de-metricas-v2.md); los otros cuatro siguen.

## Contexto

La 0057 dejó el ícono de información a continuación del porcentaje («463 93% ⓘ»). Quedaba abierta
la pregunta de `RETOMAR.md`: la card Respondidos de `01.6 · 01` tenía otra versión, con el ícono
arriba a la derecha.

## Decisión

El ícono de información va arriba a la derecha de la card, en la misma fila que el ícono de la
métrica. Cantidad y porcentaje siguen juntos en la misma línea («463 93%»).

## Por qué

Pedido de diseño: *"el icono de información en las cards dentro del side panel de métricas para la v2 puede
quedar alineado al extremo derecho superior y así tendrán más armonía las cards"*.

## Consecuencias

- *Verificado:* el ícono (`Info`) pasó del marco `Tendencia` al `Encabezado` de cada card. El
  `Encabezado` ya tenía auto layout horizontal *Space between* y centrado vertical. Por eso el ícono
  queda en el borde derecho, a la altura del ícono de la métrica.
- *Verificado*, después de recargar las pestañas:

  | Archivo | Paneles | Íconos movidos |
  |---|---|---|
  | Campañas | 12 | 60 |
  | Campañas · `Ideación · 02` | 1 | 5 |
  | Automatizaciones | 7 | 35 |

  Ninguno quedó en `Tendencia`.
- Clientes (e Iniciados en dinámicas) sigue sin ícono ni porcentaje.
- Cards de descripción al día: `I628:169260`, `I628:169273` y `199:589964`.
- *Interpretación:* `Ideación · 02` está en la misma page y usa las mismas cards; se alineó para que
  todas las cards v2 sean iguales.
