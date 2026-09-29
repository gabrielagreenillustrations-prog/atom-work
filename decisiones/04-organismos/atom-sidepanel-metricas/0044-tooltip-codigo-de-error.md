# 0044 — Side panel de métricas: tooltip con el código de error

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** los side panels de métricas de los dos archivos: Campañas `01.6 · 08–10`,
Automatizaciones `03.9 · 05–07`.

## Contexto

Los desgloses de Errores y No entregados muestran cada error en dos líneas, truncado. Diseño armó en
Campañas tres frames con la interacción (`532:140674`, `532:142839`, `532:144892`).

## Decisión

| Paso | Qué se ve |
|---|---|
| Hover sobre un error | La fila en hover y un `❖ atom-tooltip` con el texto completo, el código al final (« - #131049») y el botón «Copiar» con `copy`. |
| Cursor sobre «Copiar» | El mismo tooltip, con el cursor de mano sobre el botón. |
| Clic en «Copiar» | Snackbar «¡Copiado con éxito!». |

Los tres frames llevan el overlay de la [0041](0041-side-panels-de-metricas-con-overlay.md).

## Por qué

Diseño pidió documentar el tooltip del código de error con copiar en el side panel de métricas, y
que lo del side panel aplique a los dos archivos.

## Consecuencias

- Campañas: los frames de diseño quedan como `01.6 · 08` (tooltip), `01.6 · 09` (cursor sobre
  «Copiar») y `01.6 · 10` (snackbar).
- Automatizaciones: `03.9 · 05–07` repiten la interacción sobre el side panel de métricas de flujo.
