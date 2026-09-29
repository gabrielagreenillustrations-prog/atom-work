# 0070 — Historial: «Nombre del cliente», búsqueda por nombre o teléfono y Telegram

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** Automatizaciones · Historial de conversaciones
**Componente:** ❖ atom-data-table, ❖ atom-search-input, ❖ atom-filter
**Alcance:** page Automatizaciones Handoff v1, sección Historial de conversaciones (`04.x`).

## Decisión

- La columna se llama **«Nombre del cliente»** en todas las pantallas.
- Buscador, placeholder y tooltip: **«Buscar conversación por nombre o teléfono del cliente»**, lo
  que hoy busca el producto.
- El filtro de canal incluye **Telegram**.
- El vacío del side panel del detalle dice «No se encontraron conversaciones de este cliente
  asociadas a un flujo durante el último mes» (cambio de diseño, `04.4 · 07`).
- Los frames que no son del buscador lo muestran en reposo (*Enabled*).

## Por qué

Pedido de diseño: *"Ajustar la columna de "Nombre de cliente" a "Nombre del cliente" en todas las
pantallas"*, *"Ajustar búsqueda para reflejar lo actualmente implementado: por nombre o teléfono del
cliente"*, *"Agregar Telegram al filtro de canal"*, el empty state del sidebar (*"ya hice el cambio,
solo asegurate que no se quite"*) y *"hay unos frames con el search que no son interacciones del
search que tienen el boton del search activo o pressed o hover, ten cuidado con eso"*.

## Consecuencias

- 21 encabezados de columna, el nombre de `04.3 · 07` y su card.
- Tooltip `04.2 · 03` y placeholder `04.2 · 02` (truncado en una línea); card del buscador.
- Telegram ya estaba en `04.2 · 05` (y en `03.2 · 05`): sin cambios.
- `04.3 · 01–07`: el `❖ atom-search-input` pasó de *Hovered* a *Enabled*.
- `04.4 · 07` se mantuvo como lo dejó diseño.
