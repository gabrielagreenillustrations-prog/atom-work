# 0084 — Panel de métricas: las cuatro cards en 2 × 2

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** ❖ atom-sidepanel · Panel de métricas
**Alcance:** archivo *Métricas por plantilla inicial en flujos y campañas* (`tHgzwwQ5gbEzHjxPBvLODo`):
entrega (`13076:21003`) y sección «Handoff Design System · Panel de métricas de plantilla» (`01.6 · 02`
`15302:14667`, `03.9 · 02` `15302:40515`); Campañas `01.6 · 02` (`717:130113`); Automatizaciones
`03.9 · 02` (`254:798318`). Reemplaza en parte a la [0075](0075-panel-oficial-en-la-entrega.md): la
grilla A, cuatro cards en una fila.

## Contexto

La [0075](0075-panel-oficial-en-la-entrega.md) dejó la grilla A: Enviados, Entregados, Leídos y
Respondidos en una fila.

*Dato verificado:*

- En la fila, cada card medía 86 px de ancho (fila de 368).
- En la entrega del archivo de métricas, las 22 filas de cards ya estaban en 2 × 2, con cards de 180.
- Con un número de siete cifras, el porcentaje de ancho fijo se partía en dos líneas («68%»).

## Decisión

- Las cuatro cards van en dos filas de dos: Enviados y Entregados arriba, Leídos y Respondidos abajo.
  Cada card mide 180 de ancho, con 8 de separación en los dos ejes.
- El porcentaje de cada card toma el ancho de su texto.
- Hay un caso edge con números largos: «Números largos».

## Por qué

Pedido de diseño: *"en métricas, las cards las vamos a dejar a 2 y 2, es decir, el grid quedaría de
ajustarlo a 2 cards y abajo 2 cards para seguridad de números largos, y deja un caso con ese
escenario"*.

*Interpretación:*

- El orden de las cards es el de la fila: de izquierda a derecha y de arriba abajo.
- El porcentaje en ancho automático no estaba en el pedido; se hizo porque con números largos se partía.
- Valores del caso «Números largos»: 1,284,560 enviados; 1,247,318 entregados (97 %); 1,098,012
  leídos (88 %) y 842,975 respondidos (68 %). Cumplen la relación de la
  [0064](0064-valores-de-resultados-coherentes.md): Entregados sobre Enviados; Leídos y Respondidos
  sobre Entregados.

## Consecuencias

- La fila de cards pasa de 101 a 210 de alto y el panel crece 109 px. En `01.6 · 02` y `03.9 · 02`,
  Recomendaciones queda por debajo del borde de la pantalla, como en 11 de los 16 paneles de la entrega, donde la
  pantalla lo recorta.
  *Interpretación:* el panel tiene scroll.
- Archivo de métricas: `01.6 · 02` y `03.9 · 02` de la sección «Handoff Design System» en 2 × 2; 50
  porcentajes en ancho automático; caso «Números largos» (`15328:256194`) con su card de descripción
  (`15328:256314`) en Casos edge (`15064:6009`). Versión de Figma «Antes de cards 2x2».
- Campañas `01.6 · 02`: la fila `725:158204` en 2 × 2 y 2 porcentajes en ancho automático. El frame no
  recortaba su contenido y Recomendaciones salía por debajo de la pantalla: ahora la recorta, como la
  misma pantalla en el archivo de métricas y como `03.9 · 02`. Versión «Antes de cards 2x2».
- Automatizaciones `03.9 · 02`: la fila `254:798630` en 2 × 2 y 2 porcentajes en ancho automático.
  Versión «Antes de cards 2x2».
