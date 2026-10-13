# 0114 — Categorías: Editar bloquea la opción en uso, sin conteo ni link

**Estado:** vigente · reemplaza la parte de Editar de la [0107](0107-propuesta-b-categoria-en-uso-bloqueada.md) y de la [0110](0110-inactivar-en-uso-con-dialogo-y-todos-los-casos.md), y en la [0108](0108-colores-por-tipo-filtros-y-propuesta-unica.md) la «propuesta única»
**Fecha:** 2026-10-08
**Componente:** `❖ atom-dialog` · `❖ atom-checkbox` · `❖ atom-snackbars-stack`
**Alcance:** Categorías, `01.3 · 01–09`.

## Contexto

*Dato verificado en QA* ([0107](0107-propuesta-b-categoria-en-uso-bloqueada.md)): al desmarcar en Editar una
opción con registros asociados aparece un error. La [0107](0107-propuesta-b-categoria-en-uso-bloqueada.md) y la
[0110](0110-inactivar-en-uso-con-dialogo-y-todos-los-casos.md) proponían bloquear esa opción, con conteo y link
(«En uso en 5 respuestas rápidas.» y «Ver respuestas rápidas»), en una fila «Propuesta» separada de la de
producción.

## Decisión

- La propuesta pasa a ser el handoff de Editar. Hay una sola fila, `01.3`; la de producción sale.
- Una opción con registros va marcada y en Disabled, con el texto de apoyo **«En uso en respuestas
  rápidas.»** o **«En uso en plantillas.»**, sin conteo ni link. La opción sin uso sigue editable.
- Casos, todos con las validaciones de la [0105](0105-crear-y-editar-segun-forms-patterns.md):

| Frame | Caso |
|---|---|
| `01` | Por defecto: datos precargados y Editar deshabilitado hasta que haya cambios |
| `02` | Nombre vacío: «Se requiere el nombre» |
| `03` | Respuestas rápidas en uso |
| `04` | Plantillas en uso |
| `05` | Ambas en uso: solo se edita el nombre |
| `06` | Nombre duplicado: «El nombre ya está en uso.» |
| `07` | Editando... |
| `08` | Snackbar Success: «Se ha editado la categoría exitosamente.» |
| `09` | Snackbar Error: «No se pudo editar la categoría. Inténtalo más tarde.», con «Entendido» |

## Por qué

Pedido de diseño: la propuesta de Editar queda como definitiva y conserva todas las verificaciones
(por defecto, nombre vacío, opción asociada, nombre duplicado, editando, snackbar de éxito y de error)
en todos los casos de uso. Respuesta de diseño sobre el conteo y el link: *"Sin conteo"*.

## Consecuencias

- Backend tiene que decir, al abrir Editar, si la categoría está en uso en respuestas rápidas y en
  plantillas. No hace falta el conteo. *Dato verificado en QA* ([0107](0107-propuesta-b-categoria-en-uso-bloqueada.md)):
  hoy solo avisa al guardar.
- La variante de checkbox con descripción sigue TBD en Global Patterns.
- El error de producción al desmarcar no aparece en el handoff.
- *Interpretación:* cada frame usa una categoría cuyo tag en la tabla coincide con el caso (`05`,
  «Prueba de plantillas», que en la tabla es Ambas).
- Los frames anteriores quedaron en la sección «No van al handoff · Categorías · Propuestas de Editar
  e Inactivar».
