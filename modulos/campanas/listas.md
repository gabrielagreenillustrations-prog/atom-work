# Listas

Archivo: **Campañas – Adopción DS 1.0** · sección `296:789000`
Última revisión: **2026-09-26** (sesión 11)

---

## Page Campañas y page Handoff v2

- **Page Campañas** (producción): sin Origen. Columnas Nombre · Tipo · Estado · Clientes · Creador ·
  F. Creación · F. Actualización · Acciones; filtros Tipo · Estado · Creador · F. Creación ·
  F. Actualización — decisión [0056](../../decisiones/06-proceso-y-fuentes/handoff/0056-handoff-v2.md). La columna y la categoría
  Origen están ocultas en las tablas y en los paneles de filtro.
- **Page Handoff v2** (sección `633:259351`): las mismas pantallas con Origen y todo lo de listas con
  MCP, incluido `02.2 · 09 - Filtro · Origen abierto`. Lo que sigue sobre Origen aplica a esta page.

*Verificado:* en las pantallas la tabla hace scroll horizontal y F. Actualización queda debajo de la
columna fija Acciones; `02.1 · 07` muestra todas las columnas.

## Tipos y estados

Dos tipos: **Estática** y **Dinámica**.
Tres estados: **Cargando** · **Completo** · **Actualizando** (enum 0 / 1 / 2).

## Tabla

Todas las tablas muestran **Nombre · Tipo · Estado · Origen · Clientes · Creador · F. Creación ·
F. Actualización · Acciones** — decisión [0032](../../decisiones/04-organismos/atom-data-table/columnas-listas/0032-listas-origen-en-todas-las-tablas.md).

`02.1 · 07 - Tabla · Columnas completas` (`513:511023`) es la referencia, con las columnas del archivo
*Crear listas AI, MCPs y CSV*: **Origen** va entre Estado y Clientes y muestra un ícono por tipo de
origen (`users`, `plug`, `table`) o «-» — decisión [0030](../../decisiones/04-organismos/atom-data-table/columnas-listas/0030-listas-tabla-completa.md).
Las tablas de las pantallas usan el mismo ícono para cada lista, y las filas 11 y 12 dicen Estática y
SuperAdmin.

F. Creación y F. Actualización usan las columnas premade de la Web Library (137 y 163 px), con el
formato `23 Oct 24 14:30`. La tabla se ordena por F. Creación, de la más reciente a la más antigua,
con la flecha `arrow-down` en ese encabezado — decisión [0035](../../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md).
*Interpretación:* en los valores de ejemplo F. Actualización nunca es anterior a F. Creación.

## Menú de fila

**Depende solo del tipo de lista, no del estado.** Verificado en código —
ver `comportamiento-verificado/menus-de-acciones.md`.

| Tipo | Acciones |
|---|---|
| Dinámica | Editar · Ver configuración · Descargar clientes · Eliminar |
| Estática | Editar · Duplicar · Cambiar nombre · Descargar clientes · Eliminar |

## Filtros

Page Campañas: **Tipo · Estado · Creador · F. Creación · F. Actualización**.
Page Handoff v2: **Tipo · Estado · Origen · Creador · F. Creación · F. Actualización** —
decisión [0049](../../decisiones/03-moleculas/atom-filter/0049-listas-orden-de-filtros.md). Es el mismo orden de las columnas.

| Chip | Opciones |
|---|---|
| Tipo | Dinámica · Estática |
| Estado | Cargando · Completo · Actualizando *(ciclo de vida)* |
| **Origen** | Cargar un archivo · Clientes existentes · Desde apps conectadas — decisión [0018](../../decisiones/03-moleculas/atom-filter/0018-listas-filtro-origen.md) |
| Creador | buscador + lista de usuarios |
| F. Creación | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado |
| F. Actualización | idem |

Origen usa `database` (interpretación). Frames: `02.2 · 04` Tipo, `02.2 · 05` Estado, `02.2 · 09`
Origen, `02.2 · 06` Creador, `02.2 · 07` F. Creación y `02.2 · 08` F. Actualización, en ese orden en
la grilla. En Figma el panel de Origen dice «Archivo CSV · Clientes existentes · Apps conectadas»
(pregunta en `RETOMAR.md`).

F. Creación usa `calendar` y F. Actualización usa `clock-rotate-left` — decisión
[0029](../../decisiones/04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md). El chip de fecha de las campañas
dinámicas («F. Creación») también usa `calendar`.

## Modales

Duplicar lista (3 estados) · Cambiar nombre (3 estados) · Eliminar lista.

El input de nombre lleva placeholder **`Ej. Clientes recurrentes`**.

## Buscador

Tooltip y placeholder: **`Buscar listas por nombre`**.

---

## Hallazgos abiertos

- El paginador dice `1 - 30 de 21 registros`, también en `02.1 · 07`.
- `02.1 · 02` (`296:794729`) tiene, además de la tabla que se ve, otras dos `❖ atom-table` dentro del
  Layout (`432:136179`, `432:136975`), sin la columna Nombre. Quedan debajo del borde del frame, que
  recorta, así que no se ven: se dejan (*verificado el 2026-09-25*).

## Housekeeping

Quedaron listas de prueba en QA por borrar o confirmar:
**"QA prueba handoff DS"** (estática, 2303 clientes) y **"QA prueba handoff DS dinamica"**.
