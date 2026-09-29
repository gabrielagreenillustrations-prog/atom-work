# 0056 — Campañas: page «Handoff v2» con lo nuevo; la page «Campañas» queda como producción

**Estado:** vigente · la [0058](../../04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) lleva el panel de métricas en dos versiones a Automatizaciones · la [0062](../../04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) acota «tal como está» al panel
**Fecha:** 2026-09-26
**Alcance:** Campañas — page `Campañas` (Resultados y Listas) y page nueva `Handoff v2`. Solo el
archivo de Campañas.

## Decisión

**Page `Campañas`:**

- **Panel de métricas** tal como está en el archivo *Métricas por plantilla inicial en flujos y
  campañas* (página Actual UI), con sus interacciones y tooltips: `01.6 · 01–02` y `04–15`.
  `01.6 · 03` (vista previa de plantilla) no cambia.
- **Listas** como producción, sin Origen: columnas Nombre · Tipo · Estado · Clientes · Creador ·
  F. Creación · F. Actualización · Acciones; filtros Tipo · Estado · Creador · F. Creación ·
  F. Actualización.

**Page `Handoff v2`:**

- **Panel de métricas con el nuevo DS**: los paneles que estaban en `01.6` y `01.8 · 15–17`, con
  los cambios de la [0057](../../04-organismos/atom-sidepanel-metricas/0057-panel-de-metricas-v2.md).
- **Listas con MCP**: las pantallas de Listas con la columna y el filtro Origen (`02.2 · 09`).
- **Ideación** de la tabla simplificada de Resultados y del detalle del panel.

## Por qué

Pedido de diseño: *"En la version normal [...] dejaremos el panel de métricas justo como está en el
file de «Métricas por plantilla inicial en flujos y campañas» cn las interacciones, tooltip y demás.
En la v2 quedará todo lo nuevo de nuestro design system"* y *"Lo mismo haremos con la v2 de Listas,
en la v1 lo dejaremos sin columna y filtro de origen [...] Y en la v2 nos llevamos todo lo
relacionado a las listas con MCP"*. A la pregunta del alcance, diseño eligió *"Solo Campañas"*.

## Consecuencias

- *Verificado:* los frames del panel se copiaron del archivo de origen con sus componentes (de las
  librerías) y sus interacciones de componente. Figma avisó que traen **variables no publicadas** del
  archivo de origen; no se copiaron al archivo.
- Las conexiones entre frames del archivo de origen apuntan a frames de Flujos que no se copiaron:
  en `01.6 · 05` las flechas de navegación entre plantillas quedaron sin destino.
- En la page `Campañas`, las 29 tablas de Listas ocultan la columna Origen y los 5 paneles de filtro
  ocultan la categoría; `02.2 · 09` pasó a `Handoff v2` y los frames de Creador y fechas se corrieron
  a su lugar.
- `01.6` y `01.8 · 15–17` pasaron a `Handoff v2` con sus IDs. Las decisiones del panel con el nuevo
  DS ([0021](../../01-fundamentos/iconografia/0021-iconos-de-side-panels.md), [0025](../../04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md),
  [0041](../../04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md), [0044](../../04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md))
  aplican a `Handoff v2`.
- [0018](../../03-moleculas/atom-filter/0018-listas-filtro-origen.md), [0032](../../04-organismos/atom-data-table/columnas-listas/0032-listas-origen-en-todas-las-tablas.md) y
  [0049](../../03-moleculas/atom-filter/0049-listas-orden-de-filtros.md) quedan para `Handoff v2`.
- De paso, *verificado:* en `02.1 · 02` y `02.3 · 01` la columna fija Acciones estaba en el medio de
  la tabla, tapando Creador; se llevó al borde derecho en las dos pages.
