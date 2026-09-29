# Historial de conversaciones

Archivo: **Automatizaciones – Gestión flujos** · sección `10:40532`
Última revisión: **2026-09-25** (sesión 09)

---

## Estado

38 frames: pantallas, buscador y filtros, columnas, side panel de detalle y snackbars.

**La Épica 3 no toca este submódulo.** *(Verificado: su única sección de handoff es
"Edición de flujos outbound publicados"; no hay ninguna página ni frame sobre Historial.)*

Lo único que menciona "historial" en esa épica es *"el historial de versiones sigue
registrando snapshots"*, que es el versionado del flujo, no este submódulo.

## Buscador

Placeholder igual al tooltip: `Buscar conversación por nombre o teléfono del cliente`, lo que hoy
busca el producto — decisión [0070](../../decisiones/05-paginas/historial-de-conversaciones/0070-historial-nombre-del-cliente-y-busqueda.md). Con el buscador abierto se trunca en
una línea (`04.2 · 02`). Los frames que no son del buscador (`04.3 · 01–07`) lo muestran en
*Enabled*.

## Tabla

`❖ atom-data-table` (Web Library) con `❖ atom-table` en **Sticky New** — decisión
[0031](../../decisiones/04-organismos/atom-data-table/0031-historial-tablas-sticky-new.md). F. Actualización queda fija a la
izquierda y Acciones a la derecha. Paginador «1 - 10 de 47 registros» · «Página 1 de 5».

F. Actualización en formato `12 Ago 26 09:30`, en una columna de 163 px con la flecha `arrow-down`:
la fila más reciente va arriba y la fecha se trunca si no entra — decisión
[0035](../../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md). Los side panels usan el mismo formato.

Cargando usa la variante *Loading* y el vacío, *Empty*; el vacío del side panel (`04.4 · 07`) también
es *Empty*. Los filtros abiertos (`04.2 · 04–06`) siguen con la tabla anterior, desacoplada (pregunta
en `RETOMAR.md`); su encabezado de fecha ya tiene los 163 px y la flecha.

## Columnas

F. Actualización · Canal (con número o cuenta asociada según red: WhatsApp, Messenger, Instagram,
Plugin web) · Nombre del cliente · Teléfono del cliente (con acción de copiar) · Acciones.

Al hacer click en el ícono del canal se abre un menú con el número o la cuenta y el ícono `copy`
al lado, en `fg/tertiary` (`04.3 · 03–06`): «Número asociado» (WhatsApp), «Cuenta asociada»
(Messenger, Instagram), «Canal asociado» (Plugin web) — decisión
[0073](../../decisiones/05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md).

Teléfono del cliente sigue el pattern de copiar del preview channel
([0072](../../decisiones/04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md)): texto y, al pasar
el cursor, `❖ atom-icon-button` xs Tertiary con `copy` al lado y `❖ atom-tooltip` «Copiar»
(`04.3 · 02`); al copiar, «Se ha copiado el teléfono exitosamente.» (`04.5 · 01`). El botón está
dibujado sobre la celda: esta tabla usa una versión anterior de `_table-data-cell`, sin slot.

## Filtros

Número de canal · Canal · F. Actualización. El filtro de canal incluye Telegram (`04.2 · 05`).

## Side panel

Detalle de conversaciones, con estados de conversación y tooltips de ayuda en:
Ver en el flujo · Disparador del flujo · Estado de la conversación · Número total de mensajes.

Tiene además estado vacío (`04.4 · 07`): «No se encontraron conversaciones de este cliente asociadas a
un flujo durante el último mes», el copy que dejó diseño.

En los side panels de `04.4`, «Teléfono del cliente» y «Acciones» ya no se pisan (visto en `04.4 · 01`
el 28 sep).

---

## Sin revisar

**Épica 4 · Logs de conversaciones** es la entrega que cubre este submódulo y todavía
no se revisó.
