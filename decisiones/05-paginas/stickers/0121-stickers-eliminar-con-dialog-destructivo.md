# 0121 — Stickers: Eliminar con dialog destructivo (propuesta)

**Estado:** propuesta
**Fecha:** 2026-10-12
**Componente:** `❖ atom-dialog`
**Alcance:** Stickers, `01.4 · 01–04`.

## Contexto

*Dato verificado en el código de QA:* Eliminar llama al servicio sin confirmar y marca el sticker como inactivo (borrado lógico); el aviso es «Guardado con éxito».

## Decisión

- Dialog «Eliminar sticker», cuerpo **«El sticker se eliminará y tus agentes ya no podrán enviarlo por WhatsApp.»** (captionRegular 16/24), «Cancelar» y Destructive Primary «Eliminar»; loading «Eliminando...».
- Snackbars de la [0119](0119-stickers-snackbars-y-errores-de-subida.md).

## Por qué

Respuesta de diseño: *"Sí, fila Propuesta"*. El cuerpo sigue el «Do» de Dialog Patterns (Destructive Actions): una oración con la consecuencia, elegido por diseño.
