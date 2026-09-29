# 0039 — Filtro «Canal conectado»: con descripción

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — panel del filtro Canal conectado (`03.2 · 06`).

## Contexto

El filtro Canal conectado (Conectado · No conectado) solo tiene sentido para los flujos de mensaje
entrante: campañas, tipificaciones y webhooks usan un solo número de WhatsApp y no muestran estado de
conexión ([0037](../../04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md)). El panel no lo decía.

## Decisión

El segundo nivel del panel lleva, debajo de «Filtrar por Canal conectado», la descripción
**«Aplica solo a flujos de Mensaje entrante»**.

## Por qué

Diseño pidió una descripción para el filtro Canal conectado en el lote del 2026-09-24.

## Consecuencias

- `03.2 · 06 - Filtro · Canal conectado abierto` muestra la descripción. Los demás paneles abren
  otras categorías y no cambian.
- La card de Filtros (`10:27361`) la menciona.
