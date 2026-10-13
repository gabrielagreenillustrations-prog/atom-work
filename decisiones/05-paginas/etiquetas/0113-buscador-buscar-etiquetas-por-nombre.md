# 0113 — Etiquetas: buscador «Buscar etiquetas por nombre», con «...» solo en el placeholder

**Estado:** vigente
**Fecha:** 2026-10-08
**Componente:** `❖ atom-search-input` · `❖ atom-tooltip`
**Alcance:** Etiquetas, `01.1 · 04–07`.

## Contexto

El buscador es nuevo en Etiquetas: producción no lo tiene ([0094](0094-etiquetas-dos-propuestas-y-solo-lo-que-existe.md)). Faltaba fijar su copy.

## Decisión

- Formato «Buscar [entidad] por [criterio]».
- Tooltip del ícono de búsqueda: **«Buscar etiquetas por nombre»**, sin puntos suspensivos.
- Placeholder del buscador abierto: **«Buscar etiquetas por nombre...»**, con puntos suspensivos.
- El tooltip es `❖ atom-tooltip` y se ubica según el patrón de tooltip de Global Patterns.
- `01.1 · 05` muestra el buscador abierto y vacío, con el placeholder.

## Por qué

Pedido de diseño: *"el tooltip del search debe estar alineado al patron del tooltip"*; *"el tooltip debe
decir «buscar [entidad] por [criterio]» es decir «Buscar etiqueta por nombre...» en este caso y el
placeholder del search igualmente debe decir eso"*. Respuesta de diseño, sobre los puntos: *"Va sin los
puntos en el tooltip, en el placeholder si lleva «...»"*.

*Interpretación:* va en plural («etiquetas»), como la regla de [0009](../../03-moleculas/atom-search-input/0009-copy-del-buscador.md)
(`sistema/copy.md`).

## Consecuencias

- Cambia la regla de `sistema/copy.md`: tooltip y placeholder dicen lo mismo, pero solo el placeholder
  termina en «...».
- Los placeholders de Campañas, Listas e Historial siguen sin «...» en sus archivos de Figma: pendiente
  de alinear. Categorías no tiene frame del buscador abierto.
