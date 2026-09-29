# 0021 — Íconos de los botones de los side panels de métricas

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** botones «Descargar errores» y «Reporte de errores» de todos los side panels de
métricas (Campañas `01.6`, `01.8`; Gestión de flujos `03.9`).

## Decisión

| Botón | Ícono |
|---|---|
| Descargar errores | **`download`** — el mismo de *Descargar…* en los menús de acciones |
| Reporte de errores | **`triangle-exclamation`** |

## Por qué

Pedido de diseño: *"al descargar debe ir el mismo descargar que tenemos en los menú de acciones y reporte
de errores un triangle-exclamation"*.

## Consecuencias

- Los botones tenían `add` (el valor por defecto del componente). 18 botones en Campañas
  (9 paneles) y 8 en Gestión de flujos (4 paneles).
- En los menús, *Descargar errores* sigue con `triangle-exclamation` (decisión
  [0015](0015-iconos-de-menus-de-acciones.md)); *Descargar resultados*, *Descargar clientes* y
  *Descargar JSON* usan `download`.
