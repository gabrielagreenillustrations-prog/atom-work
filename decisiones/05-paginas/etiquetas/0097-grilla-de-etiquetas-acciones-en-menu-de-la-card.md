# 0097 — Grilla de Etiquetas: las acciones van en el menú del header de la card

**Estado:** vigente
**Fecha:** 2026-10-06
**Componente:** `❖ atom-card` · `❖ atom-dropdown-menu`
**Alcance:** Etiquetas, Propuesta A (`01.1 · 01–06`).

## Contexto

*Dato verificado:* `❖ atom-card` tiene una sola acción en el header (`ActionButtonProps`). Producción muestra dos íconos en hover (editar y eliminar).

## Decisión

La card lleva solo el header (ícono + nombre). En hover aparece el icon button `ellipsis-vertical`, que abre `❖ atom-dropdown-menu` con Editar y Eliminar.

## Por qué

Pedido de diseño, entre «Menú en la card» y «Dos icon buttons»: *"Menú en la card"*.

## Consecuencias

- Es la diferencia de interacción con producción en la Propuesta A: un clic más para editar o eliminar.
