# Decisiones

Una decisión por archivo. **No se editan.** Si cambio de opinión se escribe una nueva y
la vieja pasa a `Estado: reemplazada por NNNN`.

Los archivos están en carpetas por nivel de atomic design y por componente
(`01-fundamentos/` … `06-proceso-y-fuentes/`). El número es global: no se repite entre carpetas y
sigue el orden en que se tomaron. Cuando una decisión toca más de un componente, el archivo vive en
el principal y en los otros aparece en «Ver también».

Hay dos índices:

- **[Por componente](#por-componente)**: el mismo orden que las carpetas, con
  el archivo de `sistema/` o `modulos/` que tiene la regla vigente. En cada componente, la tabla
  lleva las vigentes; «Antes», las que fueron reemplazadas; y «Ver también», las que viven en otro
  componente pero lo tocan.
- **[Por número](#por-número)**: todas, en el orden en que se tomaron, con estado y fecha.

*Interpretación:* el nivel de cada componente (fundamento, átomo, molécula, organismo, página) es una
clasificación mía; no lo comparé con la Web Library.

Las decisiones sobre qué métricas muestra un módulo y cómo se calculan (tabla de Resultados y panel
de métricas) van en `05-paginas/metricas/`, aunque toquen un componente: son del módulo, no del
componente (pedido de diseño).

Al agregar una decisión: el archivo va en la carpeta de su componente (si no existe, se crea), con
el campo **Componente**; se suma su fila en «Por número» y su lugar en «Por componente».

---

## Por componente

### Fundamentos

#### Fechas · regla vigente: [sistema/fechas-y-formatos.md](../sistema/fechas-y-formatos.md)

| # | Decisión |
|---|---|
| [0035](01-fundamentos/fechas/0035-formato-de-fecha-premade.md) | Formato «DD Mmm AA HH:mm», con las columnas premade |
| [0050](01-fundamentos/fechas/0050-fechas-sin-relativas.md) | El mismo formato en todas las fechas, también en textos corridos |

**Antes:** [0003](01-fundamentos/fechas/0003-formato-de-fecha.md) → [0035](01-fundamentos/fechas/0035-formato-de-fecha-premade.md)  
**Ver también:** [0029](04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md) (Listas: íconos de las fechas)  

#### Iconografía · regla vigente: [sistema/iconografia.md](../sistema/iconografia.md)

| # | Decisión |
|---|---|
| [0015](01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md) | Íconos de los menús de acciones |
| [0051](01-fundamentos/iconografia/0051-detener-con-stop-circle.md) | Detener: `stop-circle` en todas las acciones |
| [0021](01-fundamentos/iconografia/0021-iconos-de-side-panels.md) | Íconos de los botones de los side panels de métricas |

**Antes:** [0007](01-fundamentos/iconografia/0007-iconografia-activar-desactivar.md) → [0015](01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md)  

#### Copy · regla vigente: [sistema/copy.md](../sistema/copy.md)

**Ver también:** [0009](03-moleculas/atom-search-input/0009-copy-del-buscador.md) (buscador), [0024](02-atomos/atom-button/0024-botones-en-loading.md) (botones en loading), [0004](04-organismos/atom-sidepanel-metricas/0004-errores-reemplaza-fallidos.md) («Errores»), [0047](04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md) (Detener campaña), [0061](03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md) (snackbars sin nombre)  

### Átomos

#### ❖ atom-button

| # | Decisión |
|---|---|
| [0024](02-atomos/atom-button/0024-botones-en-loading.md) | Botones en loading: gerundio y spinner |

**Ver también:** [0021](01-fundamentos/iconografia/0021-iconos-de-side-panels.md) (íconos de «Descargar errores» y «Reporte de errores»)  

#### ❖ atom-tooltip

**Ver también:** [0044](04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md) (código de error en el side panel de métricas)  

### Moléculas

#### ❖ atom-search-input · Buscador · regla vigente: [sistema/copy.md](../sistema/copy.md)

| # | Decisión |
|---|---|
| [0009](03-moleculas/atom-search-input/0009-copy-del-buscador.md) | Copy: «Buscar ‹entidad› por nombre» |
| [0055](03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md) | Resultados: al buscar se deshabilitan los filtros |

#### ❖ atom-filter · ❖ atom-filters-panel · Filtros · regla vigente: [sistema/filtros.md](../sistema/filtros.md)

| # | Decisión |
|---|---|
| [0010](03-moleculas/atom-filter/0010-orden-de-opciones.md) | Orden de opciones en filtros |
| [0039](03-moleculas/atom-filter/0039-filtro-canal-conectado-con-descripcion.md) | Filtro «Canal conectado»: con descripción |
| [0018](03-moleculas/atom-filter/0018-listas-filtro-origen.md) | Listas: filtro «Origen» · vigente solo en Handoff v2 |
| [0049](03-moleculas/atom-filter/0049-listas-orden-de-filtros.md) | Listas: orden de las categorías de filtro · vigente solo en Handoff v2 |

**Ver también:** [0055](03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md) (buscador), [0038](05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md) (Estado: sin inactivos por defecto), [0048](05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) (filtro «Estado» con `circle-dot`)  

#### ❖ atom-dropdown-menu · Menús de acciones · regla vigente: [sistema/acciones-no-disponibles.md](../sistema/acciones-no-disponibles.md)

| # | Decisión |
|---|---|
| [0053](03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) | Las acciones no disponibles se ocultan |
| [0028](03-moleculas/atom-dropdown-menu/0028-mapa-de-menus-de-gestion.md) | Gestión de flujos: mapa de menús por disparador y estado |
| [0012](03-moleculas/atom-dropdown-menu/0012-mensaje-entrante-editar-y-publicar.md) | Mensaje entrante conserva «Editar y publicar» |

**Antes:** [0042](03-moleculas/atom-dropdown-menu/0042-acciones-no-disponibles-y-descargar-errores.md) y [0046](03-moleculas/atom-dropdown-menu/0046-gestion-acciones-no-disponibles-en-disabled.md) → [0053](03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) · «Descargar JSON»: [0011](03-moleculas/atom-dropdown-menu/0011-descargar-json-se-mantiene.md) → [0066](05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md)  
**Ver también:** [0015](01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md) y [0051](01-fundamentos/iconografia/0051-detener-con-stop-circle.md) (íconos), [0054](05-paginas/resultados-de-campanas/0054-dinamicas-con-error-detener-y-duplicar.md) (Detener y Duplicar en dinámicas), [0067](05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) (acción de métricas con contador), [0066](05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md) («Descargar flujo»)  

#### ❖ atom-snackbar · regla vigente: [sistema/snackbars.md](../sistema/snackbars.md)

| # | Decisión |
|---|---|
| [0052](03-moleculas/atom-snackbar/0052-snackbars-copy-y-cierre.md) | Copy estándar y cierre según el tipo · el punto de nombres, reemplazado por [0061](03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md) |
| [0059](03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md) | Duración de 3 s o 5 s |
| [0061](03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md) | Sin el nombre de la campaña, el flujo o la lista |

#### ❖ atom-alert

**Ver también:** [0040](05-paginas/gestion-de-flujos/0040-alertas-03-6-eliminadas.md) (Gestión de flujos: se eliminan las alertas de `03.6`), [0014](04-organismos/atom-sidepanel-metricas/0014-ejemplo-calidad-baja.md) (alerta de calidad baja), [0050](01-fundamentos/fechas/0050-fechas-sin-relativas.md) (fechas en alertas)  

### Organismos

#### ❖ atom-data-table · Tablas

*General*

| # | Decisión |
|---|---|
| [0017](04-organismos/atom-data-table/0017-tablas-sticky-new.md) | Tablas con `❖ atom-table` · *Sticky New* |
| [0031](04-organismos/atom-data-table/0031-historial-tablas-sticky-new.md) | Historial: tablas con `❖ atom-data-table` · *Sticky New* |

*Columna Canal (Gestión de flujos)*

| # | Decisión |
|---|---|
| [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) | Un número o una cuenta que se copia va como texto, con `copy` en hover (también Teléfono de Historial y Resultados; Historial · Canal, ver [0073](05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md)) |

**Antes:** [0020](04-organismos/atom-data-table/columna-canal/0020-columna-canal-en-boton.md) → [0023](04-organismos/atom-data-table/columna-canal/0023-columna-canal-boton-y-tags.md) → [0034](04-organismos/atom-data-table/columna-canal/0034-columna-canal-tabla-de-referencia.md) → [0037](04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md) → [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md)

*Columnas de Resultados*

Vigentes en [Métricas](#métricas--regla-vigente-sistemametricasmd): [0063](05-paginas/metricas/0063-metricas-de-resultados.md) y [0064](05-paginas/metricas/0064-valores-de-resultados-coherentes.md).

**Antes:** [0006](04-organismos/atom-data-table/columnas-resultados/0006-columnas-campanas-estaticas.md) → [0026](04-organismos/atom-data-table/columnas-resultados/0026-fecha-de-envio-en-resultados.md) → [0033](04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) → [0036](04-organismos/atom-data-table/columnas-resultados/0036-no-entregados-visible.md) → [0063](05-paginas/metricas/0063-metricas-de-resultados.md)

*Columnas de Listas*

| # | Decisión |
|---|---|
| [0030](04-organismos/atom-data-table/columnas-listas/0030-listas-tabla-completa.md) | La tabla completa, con Origen, es `02.1 · 07` |
| [0032](04-organismos/atom-data-table/columnas-listas/0032-listas-origen-en-todas-las-tablas.md) | Origen en todas las tablas · vigente solo en Handoff v2 |
| [0029](04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md) | «F. Actualización» y los íconos de las fechas |

**Ver también:** [0038](05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md) (vista por defecto sin inactivos), [0048](05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) (Canal y «No conectado» en Gestión de flujos)

#### ❖ atom-sidepanel · Panel de métricas · regla vigente: [sistema/metricas.md](../sistema/metricas.md)

| # | Decisión |
|---|---|
| [0004](04-organismos/atom-sidepanel-metricas/0004-errores-reemplaza-fallidos.md) | «Errores» reemplaza a «Fallidos» |
| [0014](04-organismos/atom-sidepanel-metricas/0014-ejemplo-calidad-baja.md) | La calidad se documenta con un ejemplo de «Calidad baja» |
| [0041](04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md) | Con overlay |
| [0044](04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md) | Tooltip con el código de error |
| [0057](04-organismos/atom-sidepanel-metricas/0057-panel-de-metricas-v2.md) | Handoff v2: cinco cambios · salvo el punto 5, reemplazado por [0060](04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md) |
| [0060](04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md) | Handoff v2: ícono de información arriba a la derecha |
| [0058](04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) | Automatizaciones: las mismas dos versiones que Campañas |
| [0062](04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) | v1: del archivo de origen solo queda el panel |

**Antes:** [0005](04-organismos/atom-sidepanel-metricas/0005-contador-en-metricas.md) → [0025](04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md) → [0067](05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)  
**Ver también:** [0021](01-fundamentos/iconografia/0021-iconos-de-side-panels.md) (íconos de los botones), [0056](06-proceso-y-fuentes/handoff/0056-handoff-v2.md) (page Handoff v2), [0065](05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) (métricas y errores del panel v1), [0067](05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) (nombre), [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) (el panel vive en su archivo), [0069](05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md) (sin «Reporte de errores», íconos)  

#### ❖ atom-dialog · Modales · regla vigente: [sistema/modales-y-overlay.md](../sistema/modales-y-overlay.md)

| # | Decisión |
|---|---|
| [0008](04-organismos/atom-dialog/0008-centrado-de-modales.md) | Se centran sobre el área de contenido |
| [0047](04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md) | Detener campaña: las conversaciones vuelven al «flujo de Mensaje entrante» |

**Antes:** [0043](04-organismos/atom-dialog/0043-copy-de-detener-campana.md) → [0047](04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md)  
**Ver también:** [0041](04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md) (el mismo backdrop en los side panels de métricas)  

### Páginas (módulos)

#### Métricas · regla vigente: [sistema/metricas.md](../sistema/metricas.md)

| # | Decisión |
|---|---|
| [0063](05-paginas/metricas/0063-metricas-de-resultados.md) | Resultados: Clientes · Enviados · Errores · Entregados · Leídos · Respondidos, con tooltips |
| [0064](05-paginas/metricas/0064-valores-de-resultados-coherentes.md) | Resultados: los valores cumplen la relación entre métricas |
| [0065](05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) | Panel de métricas v1: cuatro métricas y solo errores de Meta · salvo botones e ícono de Enviados ([0069](05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md)) |
| [0067](05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) | «Métricas de plantilla» en todas las superficies; «(N)» solo en el menú |
| [0069](05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md) | Panel: sin «Reporte de errores»; Enviados con `check` |

**Antes:** columnas de Resultados: [0036](04-organismos/atom-data-table/columnas-resultados/0036-no-entregados-visible.md) → [0063](05-paginas/metricas/0063-metricas-de-resultados.md)  
**Ver también:** el panel de métricas en [Organismos](#-atom-sidepanel--panel-de-métricas--regla-vigente-sistemametricasmd) ([0004](04-organismos/atom-sidepanel-metricas/0004-errores-reemplaza-fallidos.md), [0044](04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md), [0062](04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md)); dónde está el panel: [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md)  

#### Resultados de campañas · regla vigente: [modulos/campanas/resultados-de-campanas.md](../modulos/campanas/resultados-de-campanas.md)

| # | Decisión |
|---|---|
| [0054](05-paginas/resultados-de-campanas/0054-dinamicas-con-error-detener-y-duplicar.md) | Dinámicas: estado «Con error» y reglas de Detener y Duplicar |

**Antes:** tab Dinámicas: [0016](05-paginas/resultados-de-campanas/0016-campanas-dinamicas-filtros-y-estados.md) → [0022](05-paginas/resultados-de-campanas/0022-campanas-dinamicas-tres-estados.md) → [0027](05-paginas/resultados-de-campanas/0027-dinamicas-misma-tabla-que-estaticas.md) → [0033](04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) (hoy, [0063](05-paginas/metricas/0063-metricas-de-resultados.md) y [0054](05-paginas/resultados-de-campanas/0054-dinamicas-con-error-detener-y-duplicar.md))  
**Ver también:** [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) (copiar en Canal), [0063](05-paginas/metricas/0063-metricas-de-resultados.md) y [0064](05-paginas/metricas/0064-valores-de-resultados-coherentes.md) (métricas), [0053](03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) (menús), [0055](03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md) (buscador), [0047](04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md) (Detener campaña)  

#### Listas · regla vigente: [modulos/campanas/listas.md](../modulos/campanas/listas.md)

**Ver también:** [0018](03-moleculas/atom-filter/0018-listas-filtro-origen.md), [0029](04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md), [0030](04-organismos/atom-data-table/columnas-listas/0030-listas-tabla-completa.md), [0032](04-organismos/atom-data-table/columnas-listas/0032-listas-origen-en-todas-las-tablas.md), [0049](03-moleculas/atom-filter/0049-listas-orden-de-filtros.md) (Origen, fechas y filtros; Origen, solo en Handoff v2)  

#### Gestión de flujos · regla vigente: [modulos/automatizaciones/gestion-de-flujos.md](../modulos/automatizaciones/gestion-de-flujos.md)

| # | Decisión |
|---|---|
| [0038](05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md) | La vista por defecto no muestra flujos inactivos |
| [0040](05-paginas/gestion-de-flujos/0040-alertas-03-6-eliminadas.md) | Se eliminan las alertas de `03.6` |
| [0048](05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) | Canal, «No conectado» y filtro «Estado» con `circle-dot` |
| [0066](05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md) | «Descargar flujo», modal «Detalles del flujo» y sin snackbar de simular |
| [0071](05-paginas/gestion-de-flujos/0071-editar-el-nombre-en-detalles-del-flujo.md) | El nombre de «Detalles del flujo» se edita como los campos del preview channel |

**Antes:** [0019](05-paginas/gestion-de-flujos/0019-gestion-canal-y-estado-de-flujo.md) → [0048](05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md)  
**Ver también:** [0012](03-moleculas/atom-dropdown-menu/0012-mensaje-entrante-editar-y-publicar.md), [0028](03-moleculas/atom-dropdown-menu/0028-mapa-de-menus-de-gestion.md) (menús), [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) (columna Canal), [0039](03-moleculas/atom-filter/0039-filtro-canal-conectado-con-descripcion.md) (filtro Canal conectado)  

#### Historial de conversaciones · regla vigente: [modulos/automatizaciones/historial-de-conversaciones.md](../modulos/automatizaciones/historial-de-conversaciones.md)

| # | Decisión |
|---|---|
| [0070](05-paginas/historial-de-conversaciones/0070-historial-nombre-del-cliente-y-busqueda.md) | «Nombre del cliente», búsqueda por nombre o teléfono y Telegram |
| [0073](05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md) | Canal vuelve al ícono con menú; Teléfono con `copy` en hover y tooltip «Copiar» |

**Ver también:** [0031](04-organismos/atom-data-table/0031-historial-tablas-sticky-new.md) (tablas), [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) (copiar en Canal y Teléfono)  

### Proceso y fuentes

#### Fuentes · regla vigente: [entregas/README.md](../entregas/README.md)

| # | Decisión |
|---|---|
| [0001](06-proceso-y-fuentes/fuentes/0001-epica-2-reemplaza-epica-1.md) | La Épica 2 reemplaza a la Épica 1 |
| [0002](06-proceso-y-fuentes/fuentes/0002-fuente-valida-epica-3.md) | De la Épica 3 manda la página *Actual UI* |

#### Handoff

| # | Decisión |
|---|---|
| [0013](06-proceso-y-fuentes/handoff/0013-reglas-sin-ui-no-se-llevan.md) | Las reglas sin representación visual no se llevan al handoff |
| [0045](06-proceso-y-fuentes/handoff/0045-handoff-orden-de-la-grilla.md) | La numeración sigue el orden de la grilla |
| [0056](06-proceso-y-fuentes/handoff/0056-handoff-v2.md) | Campañas: page «Handoff v2» con lo nuevo; la page «Campañas» queda como producción |
| [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) | El panel de métricas vive en su archivo; los handoffs llevan solo la apertura |
| [0074](06-proceso-y-fuentes/handoff/0074-estructura-del-handoff-como-conversaciones.md) | La estructura del archivo de Conversaciones · Adopción DS 1.0: título por caso de uso, card por HU y descripción por fila |

---

## Por número

| # | Decisión | Estado | Fecha |
|---|---|---|---|
| [0001](06-proceso-y-fuentes/fuentes/0001-epica-2-reemplaza-epica-1.md) | La Épica 2 reemplaza a la Épica 1 | vigente | 2026-09-23 |
| [0002](06-proceso-y-fuentes/fuentes/0002-fuente-valida-epica-3.md) | De la Épica 3 manda la página *Actual UI* | vigente | 2026-09-23 |
| [0003](01-fundamentos/fechas/0003-formato-de-fecha.md) | Formato de fecha: 24 h sin sufijo | reemplazada por [0035](01-fundamentos/fechas/0035-formato-de-fecha-premade.md) | 2026-09-23 |
| [0004](04-organismos/atom-sidepanel-metricas/0004-errores-reemplaza-fallidos.md) | "Errores" reemplaza a "Fallidos" en métricas | vigente | 2026-09-23 |
| [0005](04-organismos/atom-sidepanel-metricas/0005-contador-en-metricas.md) | Contador `(N)` cuando hay más de un elemento | reemplazada por [0025](04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md) | 2026-09-23 |
| [0006](04-organismos/atom-data-table/columnas-resultados/0006-columnas-campanas-estaticas.md) | Columnas de campañas estáticas: las 12 de la Épica 2 | reemplazada por [0026](04-organismos/atom-data-table/columnas-resultados/0026-fecha-de-envio-en-resultados.md) | 2026-09-23 |
| [0007](01-fundamentos/iconografia/0007-iconografia-activar-desactivar.md) | Iconografía de activar, desactivar y ver detalles | reemplazada por [0015](01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md) | 2026-09-23 |
| [0008](04-organismos/atom-dialog/0008-centrado-de-modales.md) | Los modales se centran sobre el área de contenido | vigente | 2026-09-23 |
| [0009](03-moleculas/atom-search-input/0009-copy-del-buscador.md) | Copy del buscador: "Buscar \<entidad\> por nombre" | vigente | 2026-09-23 |
| [0010](03-moleculas/atom-filter/0010-orden-de-opciones.md) | Orden de opciones en filtros | vigente | 2026-09-23 |
| [0011](03-moleculas/atom-dropdown-menu/0011-descargar-json-se-mantiene.md) | "Descargar JSON" se mantiene aunque la épica no lo tenga | reemplazada por [0066](05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md) | 2026-09-23 |
| [0012](03-moleculas/atom-dropdown-menu/0012-mensaje-entrante-editar-y-publicar.md) | Mensaje entrante conserva "Editar y publicar" | vigente | 2026-09-23 |
| [0013](06-proceso-y-fuentes/handoff/0013-reglas-sin-ui-no-se-llevan.md) | Las reglas sin representación visual no se llevan al handoff | vigente | 2026-09-23 |
| [0014](04-organismos/atom-sidepanel-metricas/0014-ejemplo-calidad-baja.md) | La calidad del panel de métricas se documenta con un ejemplo de «Calidad baja» | vigente | 2026-09-23 |
| [0015](01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md) | Íconos de los menús de acciones | vigente | 2026-09-23 |
| [0016](05-paginas/resultados-de-campanas/0016-campanas-dinamicas-filtros-y-estados.md) | Campañas dinámicas: mismos filtros que estáticas y cuatro estados | reemplazada por [0022](05-paginas/resultados-de-campanas/0022-campanas-dinamicas-tres-estados.md) | 2026-09-23 |
| [0017](04-organismos/atom-data-table/0017-tablas-sticky-new.md) | Tablas con `❖ atom-table` · *Sticky New* | vigente | 2026-09-23 |
| [0018](03-moleculas/atom-filter/0018-listas-filtro-origen.md) | Listas: filtro nuevo «Origen» | vigente solo en «Handoff v2» ([0056](06-proceso-y-fuentes/handoff/0056-handoff-v2.md)) | 2026-09-23 |
| [0019](05-paginas/gestion-de-flujos/0019-gestion-canal-y-estado-de-flujo.md) | Gestión de flujos: Canal, «No conectado» y Estado de flujo | reemplazada por [0048](05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) | 2026-09-23 |
| [0020](04-organismos/atom-data-table/columna-canal/0020-columna-canal-en-boton.md) | Columna Canal en variante botón | reemplazada por [0023](04-organismos/atom-data-table/columna-canal/0023-columna-canal-boton-y-tags.md) | 2026-09-23 |
| [0021](01-fundamentos/iconografia/0021-iconos-de-side-panels.md) | Íconos de los botones de los side panels de métricas | vigente | 2026-09-23 |
| [0022](05-paginas/resultados-de-campanas/0022-campanas-dinamicas-tres-estados.md) | Campañas dinámicas: mismos filtros que estáticas y tres estados | reemplazada por [0027](05-paginas/resultados-de-campanas/0027-dinamicas-misma-tabla-que-estaticas.md) | 2026-09-24 |
| [0023](04-organismos/atom-data-table/columna-canal/0023-columna-canal-boton-y-tags.md) | Columna Canal: botón y tags de conexión | reemplazada por [0034](04-organismos/atom-data-table/columna-canal/0034-columna-canal-tabla-de-referencia.md) | 2026-09-24 |
| [0024](02-atomos/atom-button/0024-botones-en-loading.md) | Botones en loading: gerundio y spinner | vigente | 2026-09-24 |
| [0025](04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md) | Títulos de side panels de métricas: tipo + nombre completo, sin contador | reemplazada por [0067](05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) | 2026-09-24 |
| [0026](04-organismos/atom-data-table/columnas-resultados/0026-fecha-de-envio-en-resultados.md) | Columnas de Resultados: las 12 de la Épica 2, con «Fecha de envío» | reemplazada por [0033](04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) | 2026-09-24 |
| [0027](05-paginas/resultados-de-campanas/0027-dinamicas-misma-tabla-que-estaticas.md) | Campañas dinámicas: misma tabla que estáticas, con sus filtros y tres estados | reemplazada por [0033](04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) | 2026-09-24 |
| [0028](03-moleculas/atom-dropdown-menu/0028-mapa-de-menus-de-gestion.md) | Menús de fila de Gestión: mapa por disparador y estado | vigente | 2026-09-24 |
| [0029](04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md) | Listas: «F. Actualización» y los íconos de las fechas | vigente | 2026-09-24 |
| [0030](04-organismos/atom-data-table/columnas-listas/0030-listas-tabla-completa.md) | Listas: la tabla completa, con Origen, es `02.1 · 07` | vigente | 2026-09-24 |
| [0031](04-organismos/atom-data-table/0031-historial-tablas-sticky-new.md) | Historial: tablas con `❖ atom-data-table` · *Sticky New* | vigente | 2026-09-24 |
| [0032](04-organismos/atom-data-table/columnas-listas/0032-listas-origen-en-todas-las-tablas.md) | Listas: Origen en todas las tablas, igual que `02.1 · 07` | vigente solo en «Handoff v2» ([0056](06-proceso-y-fuentes/handoff/0056-handoff-v2.md)) | 2026-09-24 |
| [0033](04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) | Resultados: «Fecha de envío» en estáticas, «F. Creación» en dinámicas | reemplazada por [0036](04-organismos/atom-data-table/columnas-resultados/0036-no-entregados-visible.md) | 2026-09-24 |
| [0034](04-organismos/atom-data-table/columna-canal/0034-columna-canal-tabla-de-referencia.md) | Columna Canal: la tabla de referencia de diseño | reemplazada por [0037](04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md) | 2026-09-24 |
| [0035](01-fundamentos/fechas/0035-formato-de-fecha-premade.md) | Formato de fecha «DD Mmm AA HH:mm», con las columnas premade | vigente | 2026-09-24 |
| [0036](04-organismos/atom-data-table/columnas-resultados/0036-no-entregados-visible.md) | Resultados: No entregados visible, al lado de Fallidos | reemplazada por [0063](05-paginas/metricas/0063-metricas-de-resultados.md) | 2026-09-24 |
| [0037](04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md) | Columna Canal: el caso edge «No conectado» abre un detalle | reemplazada por [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) | 2026-09-24 |
| [0038](05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md) | Gestión de flujos: la vista por defecto no muestra flujos inactivos | vigente | 2026-09-24 |
| [0039](03-moleculas/atom-filter/0039-filtro-canal-conectado-con-descripcion.md) | Filtro «Canal conectado»: con descripción | vigente | 2026-09-24 |
| [0040](05-paginas/gestion-de-flujos/0040-alertas-03-6-eliminadas.md) | Gestión de flujos: se eliminan las alertas de 03.6 | vigente | 2026-09-24 |
| [0041](04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md) | Side panels de métricas: con overlay | vigente | 2026-09-24 |
| [0042](03-moleculas/atom-dropdown-menu/0042-acciones-no-disponibles-y-descargar-errores.md) | Menús de Resultados: acciones no disponibles en Disabled y «Descargar errores» según Fallidos | reemplazada por [0053](03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) | 2026-09-24 |
| [0043](04-organismos/atom-dialog/0043-copy-de-detener-campana.md) | Detener campaña: las conversaciones vuelven al «flujo de Mensajes entrantes» | reemplazada por [0047](04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md) | 2026-09-24 |
| [0044](04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md) | Side panel de métricas: tooltip con el código de error | vigente | 2026-09-24 |
| [0045](06-proceso-y-fuentes/handoff/0045-handoff-orden-de-la-grilla.md) | Handoff: la numeración sigue el orden de la grilla | vigente | 2026-09-24 |
| [0046](03-moleculas/atom-dropdown-menu/0046-gestion-acciones-no-disponibles-en-disabled.md) | Menús de Gestión de flujos: las acciones no disponibles se muestran en Disabled | reemplazada por [0053](03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) | 2026-09-25 |
| [0047](04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md) | Detener campaña: las conversaciones vuelven al «flujo de Mensaje entrante» | vigente | 2026-09-25 |
| [0048](05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) | Gestión de flujos: Canal, «No conectado» y filtro «Estado» con `circle-dot` | vigente | 2026-09-25 |
| [0049](03-moleculas/atom-filter/0049-listas-orden-de-filtros.md) | Listas: orden de las categorías de filtro | vigente solo en «Handoff v2» ([0056](06-proceso-y-fuentes/handoff/0056-handoff-v2.md)) | 2026-09-25 |
| [0050](01-fundamentos/fechas/0050-fechas-sin-relativas.md) | Todas las fechas siguen el formato «DD Mmm AA HH:mm», también en textos corridos | vigente | 2026-09-25 |
| [0051](01-fundamentos/iconografia/0051-detener-con-stop-circle.md) | Detener: ícono `stop-circle` en todas las acciones | vigente | 2026-09-25 |
| [0052](03-moleculas/atom-snackbar/0052-snackbars-copy-y-cierre.md) | Snackbars: copy estándar y cierre según el tipo | vigente; el punto de nombres, reemplazado por la [0061](03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md) | 2026-09-26 |
| [0053](03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md) | Menús de acciones: las acciones no disponibles se ocultan | vigente | 2026-09-26 |
| [0054](05-paginas/resultados-de-campanas/0054-dinamicas-con-error-detener-y-duplicar.md) | Campañas dinámicas: estado «Con error» y reglas de Detener y Duplicar | vigente | 2026-09-26 |
| [0055](03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md) | Resultados: al buscar se deshabilitan los filtros | vigente | 2026-09-26 |
| [0056](06-proceso-y-fuentes/handoff/0056-handoff-v2.md) | Campañas: page «Handoff v2» con lo nuevo; la page «Campañas» queda como producción | vigente; la [0058](04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) lleva el panel a Automatizaciones; la [0062](04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) acota «tal como está» al panel; la [0065](05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) cambia el contenido del panel v1; la [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) lleva el panel a su archivo | 2026-09-26 |
| [0057](04-organismos/atom-sidepanel-metricas/0057-panel-de-metricas-v2.md) | Panel de métricas (Handoff v2): cinco cambios | vigente, salvo el punto 5 ([0060](04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md)) | 2026-09-26 |
| [0058](04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) | Automatizaciones: el panel de métricas en las mismas dos versiones que Campañas | vigente; la [0062](04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) acota «tal como está» al panel; la [0065](05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) cambia el contenido del panel v1; la [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) lleva el panel a su archivo | 2026-09-26 |
| [0059](03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md) | Snackbars: duración de 3 s o 5 s, sin excepciones de 8 s | vigente | 2026-09-26 |
| [0060](04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md) | Panel de métricas (Handoff v2): ícono de información arriba a la derecha | vigente | 2026-09-26 |
| [0061](03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md) | Snackbars sin el nombre de la campaña, el flujo o la lista | vigente | 2026-09-28 |
| [0062](04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) | Panel de métricas v1: del archivo de origen solo queda el panel | vigente; la [0065](05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) cambia el contenido del panel; la [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) lleva el panel a su archivo | 2026-09-28 |
| [0063](05-paginas/metricas/0063-metricas-de-resultados.md) | Resultados: métricas Clientes · Enviados · Errores · Entregados · Leídos · Respondidos, con tooltips | vigente | 2026-09-28 |
| [0064](05-paginas/metricas/0064-valores-de-resultados-coherentes.md) | Resultados: los valores de las métricas cumplen su relación | vigente | 2026-09-28 |
| [0065](05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) | Panel de métricas v1: cuatro métricas y solo errores de Meta | vigente; la [0069](05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md) cambia los botones y el ícono de Enviados | 2026-09-28 |
| [0066](05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md) | Gestión de flujos: «Descargar flujo» y modal «Detalles del flujo» | vigente | 2026-09-28 |
| [0067](05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) | «Métricas de plantilla» en todas las superficies | vigente | 2026-09-28 |
| [0068](06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) | El panel de métricas vive en su archivo; los handoffs llevan solo la apertura | vigente | 2026-09-28 |
| [0069](05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md) | Panel de métricas: sin «Reporte de errores» e íconos de las cards | vigente | 2026-09-28 |
| [0070](05-paginas/historial-de-conversaciones/0070-historial-nombre-del-cliente-y-busqueda.md) | Historial: «Nombre del cliente», búsqueda por nombre o teléfono y Telegram | vigente | 2026-09-28 |
| [0071](05-paginas/gestion-de-flujos/0071-editar-el-nombre-en-detalles-del-flujo.md) | «Detalles del flujo»: el nombre se edita como los campos del preview channel | vigente | 2026-09-28 |
| [0072](04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) | Tablas: un número o una cuenta que se copia va como texto, con copiar en hover | vigente; Historial · Canal, reemplazado por [0073](05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md) | 2026-09-28 |
| [0073](05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md) | Historial: Canal vuelve al ícono con menú; solo Teléfono usa el pattern de copiar | vigente | 2026-09-28 |
| [0074](06-proceso-y-fuentes/handoff/0074-estructura-del-handoff-como-conversaciones.md) | Handoff: la estructura del archivo de Conversaciones · Adopción DS 1.0 | vigente | 2026-09-28 |

## Formato

```
# NNNN — Título

**Estado:** vigente | reemplazada por NNNN
**Fecha:** AAAA-MM-DD
**Alcance:** a qué archivos / módulos afecta
**Componente:** nivel y componente, como en «Por componente»

## Contexto        ← qué problema había
## Decisión        ← qué se decidió, en una frase
## Por qué         ← el razonamiento, incluidas las alternativas descartadas
## Consecuencias   ← qué hay que hacer o mantener por esta decisión
```
