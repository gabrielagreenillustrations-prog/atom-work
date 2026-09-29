# 0066 — Gestión de flujos: «Descargar flujo» y modal «Detalles del flujo»

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** Automatizaciones · Gestión de flujos
**Componente:** ❖ atom-dropdown-menu, ❖ atom-dialog, ❖ atom-snackbar
**Alcance:** page Automatizaciones Handoff v1: menús `03.3` y `03.9 · 01`, modales `03.4 · 01–07` y
snackbars `03.7`. Reemplaza a [0011](../../03-moleculas/atom-dropdown-menu/0011-descargar-json-se-mantiene.md): la acción se
mantiene, con otro nombre.

## Contexto

La acción de descarga se llamaba «Descargar JSON» y aparecía también dentro del modal de detalles.
El modal se titulaba con el tipo de flujo y llevaba su ícono en el encabezado. `03.7 · 05` era el
snackbar de simular.

## Decisión

- La acción se llama **«Descargar flujo»** y está solo en el menú de acciones de la fila.
- El modal se titula **«Detalles del flujo»**, sin el ícono del tipo de flujo (`hasBack` apagado en
  el `_headline` del `❖ atom-dialog`) y sin botón de descarga.
- Sale el snackbar de simular: la acción de simular ya no existe.

## Por qué

Pedido de diseño: *"Cambiar "Descargar JSON" por "Descargar flujo" en todas las instancias de las
acciones"*, *"Quitar button de "Descargar flujo" del modal de detalles; mantenerlo solo en el menú de
acciones"*, *"Cambiar el título de los modales de ver el detalle a "Detalles del flujo" y le quitamos
el icono de tipo de flujo del encabezado del modal dentro de la propiedad de "hasBack" del dialog"* y
*"Eliminar snackbar de "no se pudo simular..." porque ya no existe accion de simular"*.

## Consecuencias

- «Descargar flujo» en 15 menús: `03.3 · 01–09`, `12`, `15–18` y `03.9 · 01`.
- `03.4 · 01–07`: título «Detalles del flujo» y `hasBack` apagado. La fila de descarga del modal se
  ocultó en `03.4 · 02`, `03`, `04` y `07`.
- `03.7 · 05` (simular) se eliminó y los siguientes subieron un número: `05` Copiado, `06` Flujo
  descargado, `07` Nombre en uso, `08` Error genérico, `09` Error al cargar el detalle, `10` Error al
  cargar campañas asociadas, `11` Error al cargar métricas, `12` Error al descargar errores y `13`
  Error al publicar.
- *Pendiente:* «Simular» sigue en 7 menús de `03.3`, en el modal `03.5 · 05` y en dos cards. Se
  pregunta si también sale.
