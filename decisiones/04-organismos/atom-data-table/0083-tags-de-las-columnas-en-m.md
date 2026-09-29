# 0083 — Tags de las columnas de tags en tamaño m

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-data-table` · tags de las celdas (`↳ TagProps`)
**Alcance:** Campañas — columna Estado de las tablas de «Campañas Handoff v1» y «Campañas Handoff v2».
No aplica a Gestión de flujos ni a la columna Canal.

## Contexto

*Dato verificado:* en Campañas, los tags de las tablas son `↳ TagProps`, con la propiedad Size (xs, s
y m), y están en la columna Estado. En Automatizaciones, las tablas con tags son las de Gestión de
flujos.

## Decisión

Los tags de las columnas de tags van en Size **m**. Gestión de flujos y la columna Canal quedan como
están.

## Por qué

Pedido de diseño: *"Pasemos todas las tags de las columnas de tags a M excepto en gestiones de flujo,
no cambies la columna de canales que ya la tenemos lista"*.

## Consecuencias

- Campañas: 1803 tags de la columna Estado en Size m (1429 en Handoff v1 y 374 en Handoff v2).
  Versión de Figma «Antes de tags M».
- Automatizaciones: sin cambios.
