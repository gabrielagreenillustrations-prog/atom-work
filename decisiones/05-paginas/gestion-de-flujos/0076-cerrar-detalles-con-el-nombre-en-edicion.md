# 0076 — «Detalles del flujo»: cerrar con el nombre en edición descarta el cambio

**Estado:** vigente; el campo vacío se define en la [0078](0078-nombre-vacio-en-detalles-del-flujo.md)
**Fecha:** 2026-09-28
**Módulo:** Automatizaciones · Gestión de flujos
**Componente:** ❖ atom-dialog, ❖ atom-text-field, ❖ atom-icon-button
**Alcance:** page Automatizaciones Handoff v1, modal «Detalles del flujo»: `03.4 · 14–19` y su card.
Resuelve el pendiente de la [0071](0071-editar-el-nombre-en-detalles-del-flujo.md) y confirma su
interpretación sobre `close`.

## Contexto

La [0071](0071-editar-el-nombre-en-detalles-del-flujo.md) dejó pendiente qué pasa si se cierra el
modal con el campo en edición, y como interpretación, que `close` descarta el cambio.

## Decisión

- Cerrar el modal con el nombre en edición **descarta el cambio sin avisar**.
- Con un nombre inválido (por ejemplo, en uso, como en `03.4 · 19`) o con el campo vacío, al cerrar el
  modal queda el nombre anterior, como si no se hubiera cambiado.
- Es lo mismo que pasa con **Esc** o con el `close` del campo.
- El cambio se sigue guardando con Enter o con un clic fuera del campo, como dice la
  [0071](0071-editar-el-nombre-en-detalles-del-flujo.md).

## Por qué

Diseño: *"cerrar el modal - descartar sin avisar - nombre inválido o borrar el campo el modal se
cierran y queda con el anterior nombre como si no lo hubiera cambiado igual que sucede con esc o
close"*.

## Consecuencias

- La card de `03.4 · 14–19` (`239:754775`) dice estas reglas en lugar de la interpretación sobre
  `close`.
- Las reglas no tienen frame propio: se leen en la card. *Interpretación:* la
  [0013](../../06-proceso-y-fuentes/handoff/0013-reglas-sin-ui-no-se-llevan.md) deja fuera del handoff
  las reglas sin visual que ya están en la épica; estas no están en ninguna épica y describen frames
  que sí están (`17` y `19`).
- *Sin definir:* qué pasa con Enter o con un clic fuera del campo cuando el campo está vacío.
