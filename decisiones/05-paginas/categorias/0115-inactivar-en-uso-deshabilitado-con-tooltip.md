# 0115 — Categorías: Inactivar en uso va en Disabled con tooltip (excepción a la 0053)

**Estado:** vigente · reemplaza a la [0110](0110-inactivar-en-uso-con-dialogo-y-todos-los-casos.md) en Inactivar y, en la [0106](0106-snackbars-y-errores-de-categorias.md), el error por asociación · excepción a la [0053](../../03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md), solo en Categorías
**Fecha:** 2026-10-08
**Componente:** `❖ atom-dropdown-menu` · `❖ atom-list-item` · `❖ atom-tooltip` · `❖ atom-snackbars-stack`
**Alcance:** Categorías, `01.4 · 01–04`.

## Contexto

- *Dato verificado en QA* ([0106](0106-snackbars-y-errores-de-categorias.md)): Inactivar se ejecuta sin
  confirmación y, si la categoría está en uso, falla con un snackbar de error por asociación.
- La [0053](../../03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) dice que en un menú de
  acciones lo que no aplica se oculta y no hay ítems en Disabled. Por eso la
  [0110](0110-inactivar-en-uso-con-dialogo-y-todos-los-casos.md) dejaba Inactivar habilitado y abría un aviso.

## Decisión

- Si la categoría está en uso, el menú muestra Editar e Inactivar, con **Inactivar en Disabled**
  (`❖ atom-list-item`, State Disabled).
- Al pasar el cursor sobre Inactivar aparece `❖ atom-tooltip`: **«No puedes inactivarla porque está en
  uso»**. No dice si es en respuestas rápidas o en plantillas, ni cuántos registros.
- No hay diálogo ni snackbar de error por asociación. Quedan Success y Error.
- Si la categoría no está en uso, el menú es el de `01.1 · 08`.

| Frame | Caso |
|---|---|
| `01` | Snackbar Success: «Se ha inactivado la categoría exitosamente.» |
| `02` | Snackbar Error: «No se pudo inactivar la categoría. Inténtalo más tarde.», con «Entendido» |
| `03` | En uso: menú de acciones con Inactivar en Disabled |
| `04` | En uso: tooltip sobre Inactivar |

## Por qué

Pedido de diseño: *"Vamos a mostrar el menú de acciones, la acción inactivar va a estar disponible, pero
con el look de inhabilitada o disabled. Y al hacer hover sobre esa opción se va a visualizar un
tooltip…"*. Respuestas de diseño: tooltip *"No puedes inactivarla porque está en uso"*; snackbars
*"Dejar éxito y error"*.

**Por qué es una excepción:** en Campañas y Gestión de flujos las acciones no disponibles se ocultan
porque los motivos cambian según el estado. En Categorías hay un solo motivo (la categoría está en
uso), así que la acción se muestra y el tooltip lo explica (pedido de diseño).

## Consecuencias

- La excepción está en [`sistema/acciones-no-disponibles.md`](../../../sistema/acciones-no-disponibles.md).
- Backend tiene que decir, al abrir el menú, si la categoría está en uso. No hace falta el conteo.
- *Interpretación, para desarrollo:* el `disabled` nativo no recibe el cursor ni el foco, y entonces
  no hay tooltip. El ítem va con el aspecto de Disabled y `aria-disabled="true"`, y el clic no hace nada.
- *Interpretación:* en `04`, el tooltip va debajo del menú, con el mismo ancho. `❖ atom-tooltip` no
  tiene variante con flecha.
- Los frames anteriores (snackbar por asociación y aviso) quedaron en la sección «No van al handoff ·
  Categorías · Propuestas de Editar e Inactivar».
