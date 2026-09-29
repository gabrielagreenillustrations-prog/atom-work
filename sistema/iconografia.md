# Iconografía

Última revisión: **2026-09-28** (sesión 12) · Decisiones: [0015](../decisiones/01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md) (reemplaza a [0007](../decisiones/01-fundamentos/iconografia/0007-iconografia-activar-desactivar.md)) · [0021](../decisiones/01-fundamentos/iconografia/0021-iconos-de-side-panels.md) · [0037](../decisiones/04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md) · [0048](../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) · [0051](../decisiones/01-fundamentos/iconografia/0051-detener-con-stop-circle.md)

---

## Menús de acciones

| Acción | Ícono |
|---|---|
| Métricas de … (campaña, flujo, plantilla, tipificación) | `chart-fft` |
| Descargar errores | `triangle-exclamation` |
| Descargar resultados · Descargar clientes · Descargar flujo | `download` |
| Activar · Activar flujo | `circle-bolt` |
| Desactivar | `circle-minus` |
| Ver detalles · Ver información | `memo-circle-info` |
| Reanudar (campaña en pausa) | `play-circle` |
| Ver flujo | `eye` en Gestión de flujos (`03.3`); `diagram-nested` en los menús de campañas (`01.4`) |
| Ver plantilla | `eye` |
| Editar · Editar flujo | `pen` |
| Editar y publicar · Publicar | `rocket` |
| Duplicar | `copy` |
| Simular | `mobile` |
| Detener campaña | `stop-circle` ([0051](../decisiones/01-fundamentos/iconografia/0051-detener-con-stop-circle.md)) |

**Activar (propuesta, sin decidir).** `circle-bolt` fue cuestionado. La HU de íconos no está en el
repo; la [0007](../decisiones/01-fundamentos/iconografia/0007-iconografia-activar-desactivar.md) registró `circle-play` «contra la HU», pero choca con
Reanudar (`play-circle`). Propuesta: `circle-check`, de la misma familia de círculo que Desactivar
(`circle-minus`) y que se lee como «habilitado». Alternativa: `toggle-on`, que pide `toggle-off` para
Desactivar.

El panel de métricas ya no tiene «Reporte de errores» ([0069](../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md)).

*Las siete últimas, verificadas en Figma el 2026-09-25* (menús de `03.3` y `01.4`). Ver flujo no
usa el mismo ícono en todos los menús (pregunta en `RETOMAR.md`).

## Otros usos

| Uso | Ícono |
|---|---|
| Advertencia en modal | `triangle-exclamation` |
| Side panel de métricas · botón «Descargar errores» | `download` (el mismo de *Descargar…* en los menús) |
| Columna Canal · caso edge (el flujo se desconectó del canal) | `triangle-exclamation` en el `❖ atom-tag` Warning «No conectado» |
| Encabezado de fecha que ordena la tabla | `arrow-down` ([0035](../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md)) |
| Panel de métricas · cards (v1) | Enviados `check` (una palomita) · Entregados dos palomitas · Leídos dos palomitas azules ([0069](../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md)) |
| Métrica "Errores" | `triangle-exclamation` |
| Métrica "No entregados" | `ban` |
| Abrir en otra vista (redirección) | `arrow-up-right-from-square` |
| Encabezado con ayuda (Enviados, Errores, Entregados, Leídos, Respondidos) | `info-circle` ([0063](../decisiones/05-paginas/metricas/0063-metricas-de-resultados.md)) |

## Filtros: ícono de cada categoría

*Verificado en Figma el 2026-09-25.*

| Módulo | Categorías |
|---|---|
| Resultados (estáticas y dinámicas) | Tipo de campaña `send` · Estado `circle-dot` · Creador `user` · F. Envío / F. Creación `calendar` |
| Listas | Tipo `list` · Estado `circle-dot` · Origen `database` · Creador `user` · F. Creación `calendar` · F. Actualización `clock-rotate-left` |
| Gestión de flujos | Disparador `flag` · Canal `tower-broadcast` · Canal conectado `plug` · Estado `circle-dot` ([0048](../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md)) · F. Última edición `clock-rotate-left` |
| Historial de conversaciones | F. Actualización `clock-rotate-left` · Canal `tower-broadcast` · Número de canal `hashtag` |

## Celdas de tabla

| Columna | Íconos |
|---|---|
| Disparador (Gestión de flujos) | Mensaje entrante `inbox-in` · Campaña `message-arrow-up-right` · Tipificación: glifo «T» · Webhook: glifo «WEBHOOK» (así están escritos en la capa del ícono) · Lista dinámica `list-ul` (sesión 10) |
| Origen (Listas) | `users` · `plug` · `table` ([0030](../decisiones/04-organismos/atom-data-table/columnas-listas/0030-listas-tabla-completa.md)) |

## Comparación con la HU de iconografía

Pendiente. La HU *FRD Iconografía en acciones de Dropdown Menu / Filtros* no se pudo abrir desde el
equipo de la sesión 10, así que no se sabe cuáles de estos íconos faltan en ella. El único ícono que
entró al handoff en la sesión 10 es `list-ul`, para el disparador Lista dinámica.

## Cómo se cambia un ícono en Figma


Depende de qué componente envuelve el ícono:

| Dónde | Propiedad |
|---|---|
| Instancia `v7-icon (pro)` | **`icon-name#1:13`**. La propiedad `Glyph` suele venir vacía y no sirve. |
| Íconos de marca (`whatsapp`, `facebook-messenger`, `instagram`, `telegram`) | Además del nombre, la fuente del texto del ícono (`icon` en `v7-icon (pro)`, `↳ font-icon` en `❖ atom-icon`) pasa a **Font Awesome 7 Brands** (override de instancia). Sin eso se ve el nombre en texto o un glifo roto. |
| Botones (`❖ atom-button`) | **`Icon Name#2590:0`** del `↳ Left ❖ atom-icon` / `↳ Right ❖ atom-icon` interno |
| Celdas de tabla (`↳ ImageProps` en `_table-data-cell`) y slots | **`Icon Name#2590:0`** del `❖ atom-icon` vigente (`Weight` Regular o Solid). Si la celda trae el `❖ atom-icon (DEPRECATED)`, primero `swapComponent` al vigente — decisión [0077](../decisiones/01-fundamentos/iconografia/0077-atom-icon-vigente-en-las-tablas.md). Dentro de otros componentes (menús, sidebar, tags, snackbars, empty states) queda el que trae el componente (respuesta de diseño) |
| Ítems de menú (`❖ atom-list-item`) | **`Glyph#1374:1`** del `❖ atom-icon (DEPRECATED)` interno |
| `❖ atom-alert` | **`Glyph#1374:1`** del `❖ atom-icon` interno |
| Tags (`❖ atom-tag`) | **`Glyph#1374:1`** del `❖ atom-icon` interno, con `hasIcon` = Yes |

Detalle en `formas-de-trabajo/trabajar-con-claude.md`.
