# 0073 — Historial: Canal vuelve al ícono con menú; solo Teléfono usa el pattern de copiar

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** Automatizaciones · Historial de conversaciones
**Componente:** ❖ atom-table · `_table-data-cell`, ❖ atom-dropdown-menu, ❖ atom-icon-button, ❖ atom-tooltip
**Alcance:** page Automatizaciones Handoff v1, sección Historial de conversaciones (`04.x`).
Reemplaza en parte a [0072](../../04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md):
la fila de Historial · Canal y el «sin tooltip» del botón `copy`.

## Contexto

La [0072](../../04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) pasó la columna
Canal de Historial al pattern de copiar (ícono y dato como texto, `copy` en hover, sin menú). Además,
diseño agregó un `❖ atom-tooltip` «Copiar» sobre el botón `copy` en `03.8 · 01–02`, `04.3 · 02`
y `04.3 · 03`.

## Decisión

- **Canal** vuelve a lo anterior: la celda es solo el ícono del canal (`❖ atom-icon-button`) y, al
  pasar sobre él, se abre un `❖ atom-dropdown-menu` con el título y el dato asociado, con el ícono
  `copy` al lado en `fg/tertiary`: «Número asociado» (WhatsApp), «Cuenta asociada» (Messenger,
  Instagram) y «Canal asociado» (Plugin web) — `04.3 · 03–06`.
- **Teléfono del cliente** sigue con el pattern: al pasar el cursor, `copy` al lado del número
  (`04.3 · 02`).
- El botón `copy` del pattern lleva `❖ atom-tooltip` «Copiar», como lo dejó diseño.

## Por qué

Diseño: *"la columna de canal no tenia que cambiar unicamente el cambio aplicaba para la columna de
teléfono del cliente, regresa a lo que teniamos en la versión anterior. El canal era una columna de
icon y abría un menú dropdown."* El tooltip lo agregó diseño en los frames.

## Consecuencias

- *Verificado:* 127 celdas de Canal en 23 frames volvieron a *Actions icon-buttons*, con la columna
  en *Hug* (65 px); los side panels `04.4 · 01–07` volvieron a sus anchos.
- *Verificado:* `04.3 · 03–06` recuperaron su nombre y el menú. Los menús originales se habían
  borrado: se rearmaron con el `❖ atom-dropdown-menu` de `03.8 · 03` (título, un dato y `copy` en
  `fg/tertiary`, sin scroll). *Interpretación:* el ancho (254 px) y la posición son los de ese menú,
  no necesariamente los del original.
- El tooltip «Copiar» que diseño había puesto en `04.3 · 03` quedó oculto: apuntaba al botón que
  salió con la vuelta al menú.
- En Resultados de campañas (`01.3 · 09–10`) se agregó el mismo tooltip «Copiar», para que los dos
  archivos queden iguales.
