# 0117 — Etiquetas: tres propuestas de vista para decidir, sin tocar el handoff

**Estado:** propuesta
**Fecha:** 2026-10-08
**Componente:** `❖ atom-data-table` · `❖ atom-list-item` · `❖ atom-dropdown-menu`
**Alcance:** Etiquetas, sección «Propuestas · Etiquetas · Ver etiquetas», debajo del handoff.

## Contexto

El handoff va con `❖ atom-list-item` en grilla ([0111](0111-solo-atom-list-item.md)). Diseño quiere llevar
opciones al CTO, con una referencia nueva de tabla que se ve como lista (frame `860:71824`).

## Decisión

Tres propuestas, una por fila, cada una con su card de sección y su card de descripción:

| Propuesta | Frames | Qué es |
|---|---|---|
| **A · Tabla** | `01` | La tabla que se había propuesto antes ([0096](0096-tabla-de-etiquetas-main-con-icono-y-acciones-visibles.md)): Nombre en Main (premade) con el ícono `tag`, y Editar (`edit`, Tertiary) y Eliminar (`trash`, Destructive Tertiary) siempre visibles en Actions icon-buttons (premade). |
| **B · List items** | `01`, `02` menú | Copia del handoff: `❖ atom-list-item` en grilla fluida, con las acciones en el menú del ítem. |
| **C · Tabla con look de list items** | `01`, `02` menú | `❖ atom-data-table` sin desvincular, con dos columnas: Main (premade) con el ícono `tag` y Action icon centered (premade) con `ellipsis-vertical`. Los encabezados de columna están ocultos. El menú tiene Editar y Eliminar. |

- A y C: toolbar dentro de la tabla, con el buscador y «Crear etiqueta», 15 por página
  («1 - 15 de 39 registros»), en orden de creación.
- El handoff no cambia.

## Por qué

Pedido de diseño: *"Para Etiquetas, vamos a dejar 2 propuestas como opciones para nuestro CTO, la tabla
que teniamos antes, esta se item lists y vamos hacer una con esta de referencia"*; *"es una tabla
basicamente si romper el componente pero solo title y action con los 3 dots de donde saldrán las
acciones, es una combinacion visual de tabla pero looks de list items"*; *"no modifiquemos nada en el
handoff"*; *"por ahora dejaremos solo las 3 propuestas"*.

## Consecuencias

- La tabla anterior se rearmó: su sección se había borrado. Se armó a partir de la tabla de Categorías,
  con la misma estructura que describe la [0096](0096-tabla-de-etiquetas-main-con-icono-y-acciones-visibles.md).
- *Interpretación:*
  - En C, «solo title y action» y «looks de list items» los leí como dos columnas sin encabezados.
    Si los encabezados van, se vuelven a mostrar sin tocar el componente.
  - A y C llevan paginación de 15 por página, como Categorías. Producción no tiene paginación.
  - El ícono de etiqueta de las celdas usa la fuente Font Awesome 7 Pro Regular, la misma que el ícono
    de información de los list items: la variable de fuente de la celda apuntaba a la familia Brands y
    mostraba el texto «TAG».
- Los frames de trabajo de diseño que están arriba del handoff (`858:69105`, `860:70539`, `860:71824`)
  quedaron como estaban.
