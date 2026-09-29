# 0019 — Gestión de flujos: Canal, «No conectado» y Estado de flujo

**Estado:** reemplazada por [0048](0048-gestion-filtro-estado.md)
**Fecha:** 2026-09-23
**Alcance:** Automatizaciones · Gestión de flujos — encabezados, celdas y paneles de filtro.

## Contexto

La tabla usaba «Canales» en plural, «Sin conectar» para los flujos sin canal y dos filtros de
estado: *Estado* y *Estado de flujo*.

## Decisión

- «Canales» → **«Canal»**, en singular.
- «Sin conectar» → **«No conectado»**.
- Un solo filtro de estado, **Estado de flujo**: Borrador · Publicando · Publicado · Migrando ·
  Con error · Inactivo. Se elimina el filtro *Estado*.

## Por qué

Pedido de diseño en el lote del 2026-09-23.

*Interpretación:* el orden de Estado de flujo sigue el ciclo de vida (decisión
[0010](../../03-moleculas/atom-filter/0010-orden-de-opciones.md)); Migrando va antes de Con error.

## Consecuencias

- 64 textos «Canales» → «Canal» (encabezados y filtros) y 135 «Sin conectar» → «No conectado».
- `03.2 · 08 - Filtro · Estado abierto` se eliminó y la categoría «Estado» quedó oculta en los
  67 paneles. `03.2 · 09` pasó a ser `03.2 · 08` (F. Última edición).
