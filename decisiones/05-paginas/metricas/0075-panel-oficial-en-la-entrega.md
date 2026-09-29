# 0075 — El panel de métricas que se entrega: la grilla A, dentro de la entrega del archivo de métricas

**Estado:** vigente; la grilla (cuatro cards en una fila), reemplazada por la [0084](0084-cards-del-panel-en-2x2.md)
**Fecha:** 2026-09-28
**Componente:** ❖ atom-sidepanel · Panel de métricas
**Alcance:** archivo *Métricas por plantilla inicial en flujos y campañas* (`tHgzwwQ5gbEzHjxPBvLODo`),
sección «Métricas por plantilla inicial en flujos y campañas» (`13076:21003`, Ready for dev);
Campañas `01.6 · 01–03.1`; Automatizaciones `03.9 · 01–02`. Reemplaza en parte a
[0068](../../06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md): el panel se entrega
dentro de la entrega del archivo, no en frames aparte, y los handoffs llevan también el panel abierto.

## Contexto

La [0068](../../06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) llevó los casos
del panel a una sección nueva del archivo de métricas («Handoff Design System · Panel de métricas de
plantilla»), al lado de la entrega original, y quedaron tres grillas de cards para elegir.

Diseño eligió el panel de `15313:251240` («Exploración · Grid de métricas (v1 con la jerarquía de
v2)») y aclaró: *"El handoff tiene que tener el caso de uso que abre el panel de metricas para mostrar
los copyes diferentes entre campañas y flujos, pero las interacciones del sidepanel se quedan en el
archivo Métricas por plantilla inicial en flujos y campañas"* y *"la idea es reemplazar el panel de
métricas con este panel, dejar tooltips, pantallas con UI antigua, el menu de acciones con el menú de
acciones antiguo, lo unico que cambia es el copy de la acción. Tooltip de copiar sigue igual, máximo
de nombre queda a 3 líneas."*

## Decisión

- **El panel:** el de `15313:251240`, grilla A. Cuatro cards en una fila (Enviados, Entregados, Leídos
  y Respondidos), «N Errores Meta», «Descargar errores» y Recomendaciones. «Plantilla:» va en negrita y
  el nombre llega hasta 3 líneas, con «…».
- **Título y subtítulo:** «Métricas de plantilla» en campañas y en flujos. El subtítulo cambia según
  dónde se abre: «Analiza el rendimiento de cada plantilla utilizada en esta campaña.» o «… en este
  flujo.»
- **La entrega del archivo de métricas** (HU 2, HU3 y Casos edge) lleva este panel en lugar del
  anterior. Quedan como estaban las pantallas con la UI anterior, el menú de acciones anterior, los
  tooltips (flechas de navegación y copiar el error), la alerta de más de 10 plantillas, el estado de
  navegación y de la plantilla, el nombre de cada caso y las secciones colapsadas. Del menú cambia solo
  el copy de la acción: «Métricas de campaña» pasa a «Métricas de plantilla», con «(10)» donde lo tenía.
- **Los handoffs** llevan el caso de uso que abre el panel, con el copy de cada módulo: Campañas
  `01.6 · 01` (acceso) y `01.6 · 02` (panel abierto); Automatizaciones `03.9 · 01` y `03.9 · 02`. Las
  interacciones quedan en el archivo de métricas.

## Por qué

Pedido de diseño, citado arriba.

*Interpretación:*

- De cada panel anterior se conservó lo que define su caso (navegación, tags, nombre, alerta, cursores
  y secciones colapsadas); cambiaron el cuerpo (cards, errores, acciones y recomendaciones), el título,
  el subtítulo y el estilo del nombre.
- «Con fallidos · Sin No entregados» (`15064:5724`) quedó con una sola sección «Errores Meta»,
  colapsada: el panel nuevo no separa Fallidos y No entregados. «Sin errores» (`15064:4234`) sigue sin
  sección de errores ni «Descargar errores».
- En `01.6 · 02` el panel es el de una plantilla, sin navegación, porque la fila de `01.6 · 01` es una
  campaña de tipo Plantilla. En `03.9 · 02` es el de varias (1/10), porque el menú de `03.9 · 01` dice
  «(10)».
- Los paneles que quedaron más bajos que la pantalla se estiraron al alto del frame, para que el side
  panel llegue hasta abajo.

## Consecuencias

- Entrega del archivo de métricas: 21 paneles con el panel nuevo. La card `02.2_` de HU 2 dice
  «Métricas de plantilla», y cambió el copy de tres ítems de menú (`13076:36095`, `13076:40992`,
  `13076:42117`). En «Copiar contenido del error» (`13076:47269`, `13076:47574`) el tooltip y el cursor
  subieron 130 px para quedar junto al primer error. En `13076:24116` hay un panel anterior
  (`13076:24118`) tapado por el nuevo; no se tocó.
- Campañas: el frame con el panel del nuevo DS (`717:130113`) pasó a `01.6 · 02`, con el panel de
  `15316:59879`, y salió su `❖atom-sidepanel · Métricas de plantilla` (`717:130523`). `681:190591`, que
  también se llamaba `01.6 · 01`, pasó a `01.6 · 03 - Menú de fila · Hover en Ver plantilla`, y la
  vista previa, a `01.6 · 03.1` (*interpretación:* `01.6 · 04–18` son los casos anteriores del panel en
  el archivo de métricas y el número se repetiría).
- Automatizaciones: `03.9 · 02` (`254:798318`) es una copia de `15302:40515`, con el panel nuevo.
- En la sección «Handoff Design System · Panel de métricas de plantilla», `01.6 · 02` (`15302:14667`) y
  `03.9 · 02` (`15302:40515`) tienen el panel nuevo; el resto de esa sección no cambió.

## Ver también

- [0065](0065-panel-v1-cuatro-metricas-y-errores-meta.md), [0067](0067-metricas-de-plantilla-en-todas-las-superficies.md),
  [0069](0069-panel-sin-reporte-de-errores-e-iconos.md): métricas, nombre e íconos del panel.
- [0044](../../04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md): tooltip de copiar el error.
