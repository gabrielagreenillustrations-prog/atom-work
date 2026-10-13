# 0106 — Categorías: snackbars de crear, editar e inactivar

**Estado:** vigente · el error por asociación, reemplazado por [0115](0115-inactivar-en-uso-deshabilitado-con-tooltip.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-snackbars-stack`
**Alcance:** Categorías, `01.2 · 07–08`, `01.3 · 06–07` y `01.4 · 01–03`.

## Contexto

*Dato verificado en QA:* la app tiene textos de éxito y error para crear y editar, y errores al desactivar una categoría asociada a respuestas rápidas, a plantillas o a ambas.

## Decisión

| Acción | Success | Error |
|---|---|---|
| Crear | Se ha creado la categoría exitosamente. | No se pudo crear la categoría. Inténtalo más tarde. |
| Editar | Se ha editado la categoría exitosamente. | No se pudo editar la categoría. Inténtalo más tarde. |
| Inactivar | Se ha inactivado la categoría exitosamente. | No se pudo inactivar la categoría. Inténtalo más tarde. |

- Error por asociación al inactivar: «No se pudo inactivar la categoría porque tiene respuestas rápidas asociadas.» (variantes: «…plantillas asociadas.» y «…respuestas rápidas y plantillas asociadas.»), sin la acción Reintentar.
- Con error, el diálogo se cierra igual que en Etiquetas (0102).

## Por qué

Misma regla de snackbars que Etiquetas (0101): formato «Se ha [participio] [objeto] exitosamente.» / «No se pudo [verbo] [objeto]. Inténtalo más tarde.».

*Interpretación:* reintentar no resuelve el error por asociación, por eso no lleva la acción.
