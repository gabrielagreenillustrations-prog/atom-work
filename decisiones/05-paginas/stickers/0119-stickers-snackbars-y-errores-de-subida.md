# 0119 — Stickers: snackbars y errores de subida

**Estado:** vigente
**Fecha:** 2026-10-12
**Componente:** `❖ atom-snackbars-stack`
**Alcance:** Stickers, `01.2 · 01–06`, `01.3 · 07–08` y `01.4 · 03–04`.

## Contexto

*Dato verificado en QA* (pruebas de subida pedidas por diseño; el sticker de prueba se eliminó): el feedback sale como alerta inline arriba de la grilla durante 5 s. Textos de hoy: «Formato no válido. Sube una imagen (PNG, JPG o WebP).», «La imagen convertida supera los 500 KB. Usa una imagen más simple o pequeña.», «Los stickers animados deben ser exactamente 512×512 píxeles. Redimensiona el archivo antes de subirlo.», «Error al subir el sticker. Intenta de nuevo.» y «Guardado con éxito» para subir, renombrar y eliminar. Mientras sube, el botón queda deshabilitado con spinner y sigue diciendo «Subir sticker».

*Dato verificado en el código de QA:* solo imágenes; el WebP animado debe medir 512×512; el archivo convertido no puede pasar de 500 KB; el nombre se toma del archivo.

## Decisión

Todo pasa a `❖ atom-snackbars-stack`, según `sistema/snackbars.md`:

| Caso | Texto | Tipo |
|---|---|---|
| Subir · éxito | Se ha subido el sticker exitosamente. | Success |
| Formato no válido | Solo se permiten imágenes PNG, JPG o WebP. | Warning |
| Supera 500 KB | La imagen supera el máximo de 500 KB. | Warning |
| Animado sin 512×512 | Los stickers animados deben medir 512×512 px. | Warning |
| Subir · error del servicio | No se pudo subir el sticker. Inténtalo más tarde. | Error |
| Editar · éxito / error | Se ha editado el sticker exitosamente. / No se pudo editar el sticker. Inténtalo más tarde. | Success / Error |
| Eliminar · éxito / error | Se ha eliminado el sticker exitosamente. / No se pudo eliminar el sticker. Inténtalo más tarde. | Success / Error |

- Botón en Loading: «Subiendo...» ([0024](../../02-atomos/atom-button/0024-botones-en-loading.md)).
- Warning y Error con «Entendido»; con error, el diálogo se cierra ([0102](../etiquetas/0102-error-cierra-el-dialogo.md)).

## Por qué

Pedido de diseño: *"deben ser snackbars para seguir los global patterns y estandarizar"*; *"Tenemos que reescribirlos alineados al global patterns"*. Los errores por condición siguen la forma de «Importar lista CSV» en `sistema/snackbars.md` («Solo se permiten archivos .csv.», «El archivo supera el máximo de 5 MB.»).

## Consecuencias

- *Verificado en Figma:* «Los stickers animados deben medir 512×512 px.» ocupa dos líneas con «Entendido».
