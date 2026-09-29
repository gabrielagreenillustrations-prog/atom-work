# 0040 — Gestión de flujos: se eliminan las alertas de 03.6

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — sección `03.6` (alertas de pantalla).

## Contexto

La sección tenía dos frames de alerta: `03.6 · 01` (flujo desconectado del canal) y `03.6 · 02`
(migración de archivos en proceso). Sus textos existen en el bundle de traducción de producción, pero
no se pueden disparar con clics normales en producción ni en QA.

## Decisión

Se eliminan los dos frames y la fila de cards de la sección. La grilla se cerró para no dejar el hueco.

## Por qué

Pedido de diseño: *"LAS ALERTAS 03.6_ SE ELIMINAN POR CIERTO AMBAS"*.

## Consecuencias

- El caso edge de la columna Canal ya no remite a la alerta `03.6 · 01`: su detalle es el de la
  [0037](../../04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md).
- Los artefactos dejan de listar `03.6 · 01` y `03.6 · 02`.
