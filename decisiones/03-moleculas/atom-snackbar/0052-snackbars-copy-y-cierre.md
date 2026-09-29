# 0052 — Snackbars: copy estándar y cierre según el tipo

**Estado:** vigente · el punto «nombres de objetos entre comillas», reemplazado por la [0061](0061-snackbars-sin-nombre.md)
**Fecha:** 2026-09-26
**Alcance:** Campañas y Automatizaciones — todos los snackbars (`❖ atom-snackbar`) de los dos
archivos y los 114 mensajes del inventario de snackbars del código.

## Contexto

Los snackbars mezclaban formas de decir lo mismo: «con éxito», «exitosamente», «correctamente»,
«de forma exitosa», «¡Copiado con éxito!»; algunos sin punto final; errores con «Por favor vuelva a
intentar» o «Hubo un problema». El cierre también variaba entre botón de texto e icon button.
Silvio compartió el inventario del código (114 mensajes, 4 claves sin traducción).

## Decisión

- **Cierre según el tipo:** Success e Info llevan solo el icon button de cerrar; Warning y Error
  llevan «Entendido».
- **Copy:** éxito «Se ha … exitosamente.»; error del servicio «No se pudo … Inténtalo más tarde.»;
  condición, el motivo en una frase; punto final siempre; tuteo y sin «Por favor»; sin título.
- La tabla completa (texto actual → estándar, tipo y frame) está en
  [`sistema/snackbars.md`](../../../sistema/snackbars.md).

## Por qué

Pedido de diseño: *"estandaricemos los mensajes y botones si son necesarios o si solo puede ir con
un icon button de cerrar. El objetivo es estandarizar copies de snackbars: «Entendido»,
«exitosamente» y punto final"*.

*Interpretación:* «Entendido» va donde el usuario tiene que enterarse de que algo no pasó (Warning y
Error); en Success e Info alcanza con cerrar.

## Consecuencias

- *Verificado el 2026-09-26:* los 42 snackbars de los dos archivos siguen la regla.
- Dos frames nuevos para casos del inventario que no estaban: `01.7 · 15` (error al abrir la
  configuración) y `02.5 · 04` (lista sin clientes).
- Dos cuerpos se acortaron porque con «Entendido» se recortaban (sacan el nombre de la campaña).
- Quedan preguntas (límite diario de WhatsApp, snackbars solo en Figma, dinámicas legacy, claves sin
  traducción, tipos del código): ver `sistema/snackbars.md`.
