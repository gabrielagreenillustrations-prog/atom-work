# 0089 — Tags de la columna Estado de Gestión de flujos en tamaño m

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-data-table` · tags de las celdas (`↳ TagProps`)
**Alcance:** Gestión de flujos — columna Estado de las tablas de la page «Automatizaciones Handoff» y de las
pantallas de Gestión de flujos en la entrega de métricas por plantilla. Reemplaza la excepción de Gestión de
flujos de la [0083](0083-tags-de-las-columnas-en-m.md). No aplica a la columna Canal ni a las specs de la page
Ideacion.

## Contexto

*Dato verificado:* la 0083 dejó en s los tags de Gestión de flujos. Las tablas de Gestión de flujos son las que
tienen la columna Disparador; su columna Estado usa `↳ TagProps` (Borrador, Publicado…), con la propiedad Size.

## Decisión

Los tags de la columna Estado de Gestión de flujos van en Size **m**, como los de Campañas.

## Por qué

Pedido de diseño: *"la columna de estado de gestion de flujos tambien debe ser en M los tags"*.

## Consecuencias

- Automatizaciones: 902 tags en m, todos en la page «Automatizaciones Handoff» (`10:22916`).
- Archivo de métricas: 180 tags en m en la entrega (`13076:21003`): `03.9 · 01`, las dos `03.9 · 02`,
  `03.3 · 06`, `03.3 · 08`, «Flujo sin plantillas», los cinco frames «Flujos» de Casos de uso y «Límite de 10
  plantillas» de Casos edge. Versión de Figma «Antes de tags Estado en M · Gestión de flujos (entrega de
  métricas)».
- Siguen en s los 104 tags de «03.8 · Specs · Columna Canal» (page Ideacion), 39 de ellos en «NO TOCAR».
- La columna Canal queda como está.
