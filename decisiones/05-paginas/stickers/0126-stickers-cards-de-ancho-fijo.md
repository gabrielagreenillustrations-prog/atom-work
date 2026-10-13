# 0126 — Stickers: cards de ancho fijo; la última fila puede quedar incompleta

**Estado:** vigente · reemplaza en la [0118](0118-stickers-handoff-desde-qa-grilla-de-atom-card.md) el ancho fluido de 140 a 168 px
**Fecha:** 2026-10-12
**Componente:** `❖ atom-card` (layout de la grilla)
**Alcance:** Stickers, todas las grillas y `01.1 · 13–15`.

## Contexto

Con la grilla fluida de la 0118, las cards de una fila incompleta crecían hasta 168 px y no quedaban del mismo tamaño que las de arriba.

## Decisión

- Cada `❖ atom-card` mide **168 px** fijos. Auto layout con wrap, alineado a la izquierda, 16 px entre columnas y filas.
- Al cambiar el ancho de la pantalla cambia la cantidad de columnas, no el tamaño de las cards: 1024 px → 3, 1280 px → 5, 1440 px → 6, 1920 px → 8.
- Si la última fila no se completa, queda incompleta.

## Por qué

Pedido de diseño: *"el mejor camino es que tengan un tamaño definido, entonces la row necesita una cantidad específica de cards y si no la completa entonces queda incompleta la row [...] se ve desordenado si no tienen el mismo tamaño"*.

*Interpretación:* equivale a CSS Grid con `repeat(auto-fill, 168px)` y `gap: 16px`.
