# 0062 — Panel de métricas v1: del archivo de origen solo queda el panel

**Estado:** vigente · acota el «tal como está» de la [0056](../../06-proceso-y-fuentes/handoff/0056-handoff-v2.md) y la [0058](0058-automatizaciones-dos-versiones-del-panel.md) al panel
**Fecha:** 2026-09-28
**Alcance:** page `Campañas Handoff v1` del archivo de Campañas (`01.6 · 01`, `02` y `06–15`) y
fila `03.9` de la page `Automatizaciones` (`03.9 · 01`, `02` y `05–09`).

## Contexto

Los frames v1 se copiaron completos de «Métricas por plantilla inicial en flujos y campañas». La
pantalla de fondo era una imagen de la UI actual (con la tab Dinámicas en Campañas y «Campañas» en el
encabezado de Gestión de flujos), el overlay era un gris sin token, el acceso era el menú de la UI
actual y `01.6 · 09` tenía el snackbar de ese archivo («¡Copiado con éxito!» con «Cerrar»).

## Decisión

En la versión v1, solo el panel es el del archivo de origen. La pantalla de fondo, el menú de
acceso, el backdrop y los snackbars son los del handoff, con el nuevo DS.

## Por qué

Pedido de diseño: *"en la v1 el panel de métricas está bien porque usamos la versión correcta, pero
el overlay y todo el contenido sigue siendo del handoff y el nuevo design system"* y *"incluso la
snackbar debe ser la nueva"*.

## Consecuencias

- Fondo: el `Layout` de los frames v2 (Resultados en Campañas, Gestión de flujos en
  Automatizaciones), con la fila de origen en *Selected*.
- Backdrop: el de los modales (`bg/overlay-primary` al 70 % con `blur/surface/subtle`), en lugar del
  gris sin token.
- Acceso (`01.6 · 01` y `03.9 · 01`): el `❖ atom-dropdown-menu` del handoff, con el
  `❖ atom-icon-button` de la fila en *Focused*, el ítem de métricas en *Hovered* y el clic hacia el
  panel (`01.6 · 02`, `03.9 · 02`). En Automatizaciones es el menú de `03.3 · 04`; en el origen ese
  clic no tenía destino.
- `01.6 · 09`: `❖ atom-snackbar` Success «Se ha copiado exitosamente.» con icon button de cerrar.
- Los frames pasan de 1280 × 833 a 1280 × 832, como el resto del handoff.
- Se resuelven dos preguntas: el encabezado «Campañas» sobre Gestión de flujos y el snackbar fuera
  del estándar. Sigue abierto que el panel usa variables no publicadas de ese archivo y que las
  flechas de `01.6 · 05` quedaron sin destino.
