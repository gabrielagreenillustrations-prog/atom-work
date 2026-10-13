# 0112 — Etiquetas: grilla fluida de list items, de 240 a 320 px

**Estado:** vigente
**Fecha:** 2026-10-08
**Componente:** `❖ atom-list-item` (layout de la grilla)
**Alcance:** Etiquetas, `01.1 · 01–10`.

## Contexto

La grilla de [0111](0111-solo-atom-list-item.md) tenía que funcionar en pantallas chicas y grandes. Una
primera versión resolvía el responsive solo con frames por breakpoint.

## Decisión

- Auto layout horizontal con wrap. Cada ítem en Fill, con ancho mínimo de **240 px** y máximo de **320 px**.
  Separación: 16 px entre columnas y 12 px entre filas.
- Al angostar el frame, el ítem que no entra con 240 px baja a la fila siguiente. Al ensancharlo, los
  ítems crecen hasta 320 px y, cuando entra uno más, se suma una columna.
- Frames de referencia (`01.1 · 08–10`, con el mismo contenido que `01`):

| Ancho del frame | Columnas | Ancho del ítem |
|---|---|---|
| 1024 px | 2 | 320 px |
| 1280 px (`01–07`) | 3 | 309 px |
| 1440 px | 4 | 268 px |
| 1920 px | 6 | 253 px |

## Por qué

Pedido de diseño: *"dejando la grid de los item lists lo mas responsive posible para pantallas
pequeñas, y las mas grandes"*; *"pense que definirias un max width y al llegar a ese maximo se hace
otra fila [...] Yo quiero un frame que pueda hacer crecer y disminuir y que se reposicionen los list
items dentro del grid"*.

*Interpretación:* los valores de 240 y 320 px los elegí yo; no vienen de Global Patterns ni del Web Library.

## Consecuencias

- *Verificado en Figma:* si la última fila queda incompleta, sus ítems crecen hasta 320 px y no quedan
  alineados con las columnas de arriba. Es como funciona el wrap del auto layout.
- *Interpretación, sin validar con desarrollo:* lo de Figma equivale a flex con wrap e ítems
  `flex: 1 1 240px; max-width: 320px`. Si se quieren columnas parejas también en la última fila,
  CSS Grid con `repeat(auto-fill, minmax(240px, 1fr))` lo resuelve, pero sin el tope de 320 px.
  Hay que definirlo con desarrollo.
