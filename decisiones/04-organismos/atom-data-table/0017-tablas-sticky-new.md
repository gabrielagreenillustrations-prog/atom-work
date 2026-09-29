# 0017 — Tablas con `❖ atom-table` · *Sticky New*

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** todas las `❖ atom-data-table` de los dos archivos (Resultados, Listas, Gestión de flujos).

## Contexto

La biblioteca publicó una versión nueva de `❖ atom-data-table`. Las tablas del handoff mezclaban
las variantes *Sticky* y *Basic* de `❖ atom-table`, con la primera columna y Acciones fuera del
slot Columns.

## Decisión

Variante **Sticky New**. La columna Nombre va dentro del slot Columns con posición absoluta
(constraints izquierda/arriba) y Acciones también absoluta (derecha/arriba). El resto de las
columnas sigue en el flujo del slot, sin perder ninguna.

El slot lleva **padding-left 300 y la tabla se ensancha hasta que Acciones no tape la última
columna solo en las tablas sueltas**, no en las que están dentro de una pantalla.

## Por qué

Pedido de diseño en el lote del 2026-09-23. Sobre el padding: *"No, solo en tablas sueltas"*.

## Consecuencias

- Campañas: 103 instancias a la versión nueva; 94 tablas con datos en *Sticky New*; las 9 de
  estado (Cargando, Vacío, Sin resultados, Error) conservan su variante.
- Gestión de flujos: 63 tablas con datos y la tabla suelta; las 4 de estado conservan su variante.
- Historial de conversaciones usa la `❖ atom-table` anterior (con `↳ Table Body Props`) y no se
  migró: queda como pregunta abierta.
- Las superposiciones (tooltips, menús, cursores) se recolocaron junto a su celda o botón.
