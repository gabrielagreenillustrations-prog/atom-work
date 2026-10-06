# 0109 — Categorías: filters panel completo, según Filters panel patterns

**Estado:** vigente · corrige cómo quedaron los paneles de la [0108](0108-colores-por-tipo-filtros-y-propuesta-unica.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-filters-panel`
**Alcance:** Categorías, `01.1 · 05–07`.

## Contexto

En una primera versión se ocultaron partes del panel (buscador, «Limpiar todos», contador) y el panel se achicaba según la cantidad de filtros y opciones.

## Decisión

- **Tamaño:** el panel mantiene el tamaño del componente (560 × 296). No se achica por la cantidad de categorías ni de opciones.
- **Nada oculto:** el segundo nivel lleva buscador, «Limpiar todos» y contador «X de N» en los filtros de selección múltiple. El primer nivel lleva «Limpiar todos». Es igual a los ejemplos de Global Patterns; en fecha el ejemplo no lleva contador.
- **Nombres:** el título del segundo nivel usa el nombre completo: «Filtrar por Asociada a», «Filtrar por Fecha de creación», «Filtrar por Estado». La categoría usa la abreviatura «F. Creación».
- **Opciones de fecha:** Hoy, Ayer, Esta semana, Últimos 15 días y Personalizado, al final.
- **Íconos de categoría:** F. Creación `calendar`, como el FRD de iconografía. Asociada a `link`, que no está en el mapeo.

## Por qué

Pedido de diseño: *"revisa bien contra los global patterns porque hay botones que faltan … el tamaño no se debe disminuir del panel solo por la cantidad de filtros"*.

## Consecuencias

- *Interpretación:* el placeholder del buscador quedó «Buscar...». Los ejemplos de Global Patterns dicen «Search...» y no hay texto definido en español.
- El ícono de Asociada a hay que sumarlo al mapeo de íconos por categoría (está *In review*).
