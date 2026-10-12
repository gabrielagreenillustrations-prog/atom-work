# 0123 — `❖ atom-card`: las acciones van en un ⋮ siempre visible

**Estado:** vigente
**Fecha:** 2026-10-12
**Componente:** `❖ atom-card`
**Alcance:** todas las cards con acciones; primera aplicación en Stickers (`01.1`).

## Decisión

- Las acciones de una card van en un `❖ atom-icon-button` Tertiary con `ellipsis-vertical`, siempre visible, que abre `❖ atom-dropdown-menu`.
- Ninguna card revela acciones con hover. Con el menú abierto, el ⋮ queda en Focused.

## Por qué

Pedido de diseño: *"la card deberia de tener las acciones de los 3 puntos [...] y de ahi sacar un menu dropdown"*; *"Como estandar, porque ninguna card funciona que revela acciones con hover"*.
