# 0041 — Side panels de métricas: con overlay

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** los side panels de métricas de los dos archivos: Campañas `01.6` y `01.8` (dinámicas),
Automatizaciones `03.9`.

## Contexto

Los side panels de métricas se habían dejado sin overlay dentro de la pantalla: el contenido
scrolleaba con `❖ atom-scrollbar` y la fila de origen quedaba en *Selected*. Los frames nuevos de
diseño (`01.6 · 08–10`) muestran el panel con overlay.

## Decisión

Los side panels de métricas llevan el backdrop de los modales: `bg/overlay-primary` al 70 % con el
effect style `blur/surface/subtle`, cubriendo el frame (1280 × 832). El scroll del contenido y la
fila en *Selected* se mantienen.

## Por qué

Diseño pidió que los side panels de métricas mantengan el overlay, en los dos archivos.

## Consecuencias

- Campañas: `01.6 · 01`, `02`, `06` y `08–10` ya tenían el backdrop; se sumó en `01.8 · 15` y
  `01.8 · 17`.
- `01.6 · 03` (vista previa de plantilla) no es un panel de métricas y queda sin backdrop.
- Automatizaciones: `03.9 · 01`, `03.9 · 02` y `03.9 · 05–07` llevan el backdrop.
