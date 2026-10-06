# 0101 — Etiquetas: snackbars de éxito y error en crear, editar y eliminar

**Estado:** vigente · reemplaza el punto «sin snackbars» de la [0094](0094-etiquetas-dos-propuestas-y-solo-lo-que-existe.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-snackbars-stack`
**Alcance:** Etiquetas (`01.2 · 06–07`, `01.3 · 05–06`, `01.4 · 02–03`).

## Contexto

*Dato verificado en QA:* crear, editar y eliminar no muestran snackbar.

## Decisión

| Acción | Success | Error |
|---|---|---|
| Crear | Se ha creado la etiqueta exitosamente. | No se pudo crear la etiqueta. Inténtalo más tarde. |
| Editar | Se ha editado la etiqueta exitosamente. | No se pudo editar la etiqueta. Inténtalo más tarde. |
| Eliminar | Se ha eliminado la etiqueta exitosamente. | No se pudo eliminar la etiqueta. Inténtalo más tarde. |

`❖ atom-snackbars-stack` abajo a la derecha (0092); Success con icon button de cerrar y Error con «Entendido».

## Por qué

Pedido de diseño: *"para tener experiencias alineadas y consistentes agregaremos los snackbars donde usualmente siempre salen snackbars en otros módulos"*.

*Interpretación:* en el éxito el diálogo se cierra y el snackbar sale sobre la lista; en el error el diálogo sigue abierto con la acción habilitada. «Se ha editado» usa el mismo verbo que el botón (0100).

## Consecuencias

- Son claves de i18n nuevas: hay que sumarlas a la propuesta de actualización del FRD.
