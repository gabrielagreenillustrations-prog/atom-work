# 0071 — «Detalles del flujo»: el nombre se edita como los campos del preview channel

**Estado:** vigente; el pendiente sobre cerrar el modal lo resuelve la [0076](0076-cerrar-detalles-con-el-nombre-en-edicion.md)
**Fecha:** 2026-09-28
**Módulo:** Automatizaciones · Gestión de flujos
**Componente:** ❖ atom-list-item, ❖ atom-icon-button, ❖ atom-tooltip, ❖ atom-text-field, ❖ atom-snackbar
**Alcance:** page Automatizaciones Handoff v1, modal «Detalles del flujo»: `03.4 · 14–19` y su card, y
el nombre en `03.4 · 01–04`, `06` y `07`.

## Contexto

El nombre se editaba en el `❖ atom-text-field` del modal, sin una confirmación explícita. Hubo dos
propuestas (A, check en el campo; B, botón «Guardar») en `03.4 · 14–21`. Diseño señaló como
referencia el comportamiento que ya está en el preview channel: el componente «Item status» de los
campos de información del side panel de Clientes (archivo *Design Audit | Migración Módulos*, página
Clientes, sección «Feedback War Room», `5271:67997`).

## Decisión

| Frame | Estado |
|---|---|
| `03.4 · 14` | El nombre como texto en `❖ atom-list-item`. |
| `03.4 · 15` | Cursor sobre el nombre: aparece `❖ atom-icon-button` xs Tertiary con `pen`; la fila no cambia de fondo. |
| `03.4 · 16` | Cursor sobre el ícono: el botón en *Hovered* y `❖ atom-tooltip` «Editar campo». |
| `03.4 · 17` | Clic: `❖ atom-text-field` Extra Small en *Focused* y, al lado, `❖ atom-icon-button` con `close`. |
| `03.4 · 18` | Guardado: vuelve a texto con el nombre nuevo y el snackbar Success de `03.7 · 03`, sin cerrar el modal. |
| `03.4 · 19` | Nombre en uso: el campo en *Error focused*, ícono `circle-info` y `❖ atom-tooltip` «El nombre ya está en uso.». |

- El cambio se guarda con **Enter** o con **un clic fuera del campo**.
- Salen las propuestas A y B.

## Por qué

Diseño: *"este comportamiento creo que es que debemos imitar que ya está en el preview channel para
la edición del nombre del flujo en automatizaciones"*; sobre el guardado, *"se guarda con enter o al
salir del campo con un clic"*; sobre A y B, *"si borra, las propuestas que ya no tengan relación
al pattern"*; y sobre los demás modales, *"Asi como quedó acá [03.4 · 14] entonces toca actualizar
todos los modales restantes de la section 3.4 dialogos, detalle y edición"*.

## Consecuencias

- *Verificado:* se borraron `03.4 · 14–21` (A y B) y su card; los frames del patrón pasaron de
  `22–27` a `14–19`.
- *Verificado:* `03.4 · 01–04`, `06` y `07` muestran el nombre como texto, como `03.4 · 14`: el
  `❖ atom-text-field` quedó oculto y hay un `❖ atom-list-item` con el nombre. `03.4 · 05` abre en la
  pestaña de campañas asociadas y `03.4 · 08–13` (Editar y publicar) no tienen el campo.
- *Verificado en la referencia:* los estados de 14 a 17 y el de 19 (allí con «Solo se permiten
  números»). La referencia no tiene botón de guardar, estado de carga ni snackbar.
- *Interpretación:* que `close` descarta el cambio y el snackbar de 18. El ícono de error va en
  `fg/status/error`; la referencia usa `fg/status/on-error`.
- *Pendiente:* qué pasa si se cierra el modal (o se hace clic fuera de él) con el campo en edición.
