# 0127 — Stickers: el nombre se edita solo desde el menú, en un dialog

**Estado:** vigente · reemplaza en la [0120](0120-stickers-editar-en-dialog.md) la fila de la edición actual
**Fecha:** 2026-10-12
**Componente:** `❖ atom-dialog`
**Alcance:** Stickers, `01.3 · 01–07`.

## Decisión

- La edición dentro de la card (input con Guardar y Cancelar) no se mantiene y sale del handoff.
- Editar se abre desde el menú ⋮ de la card y abre el dialog «Editar sticker». El grupo 01.3 queda como una sola fila (01–07), sin «Actual» ni «Propuesta».

## Por qué

Pedido de diseño: *"Para la edición del nombre, recuerda que esto no será posible [la edición en la card], sino que abre el modal a través de las acciones y al cliquear en editar, entra el dialog"*.
