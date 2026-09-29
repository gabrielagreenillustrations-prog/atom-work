# Copy y microcopy

Última revisión: **2026-09-28** (sesión 12) · Decisiones: [0009](../decisiones/03-moleculas/atom-search-input/0009-copy-del-buscador.md) · [0010](../decisiones/03-moleculas/atom-filter/0010-orden-de-opciones.md) · [0024](../decisiones/02-atomos/atom-button/0024-botones-en-loading.md) · [0033](../decisiones/04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) · [0063](../decisiones/05-paginas/metricas/0063-metricas-de-resultados.md) · [0047](../decisiones/04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md) (reemplaza a [0043](../decisiones/04-organismos/atom-dialog/0043-copy-de-detener-campana.md)) · [0048](../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) · [0066](../decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md) · [0067](../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) · [0070](../decisiones/05-paginas/historial-de-conversaciones/0070-historial-nombre-del-cliente-y-busqueda.md)

---

## Buscadores

**`Buscar <entidad en plural> por nombre`**

| Módulo | Copy |
|---|---|
| Resultados de campañas | `Buscar campañas por nombre` |
| Listas | `Buscar listas por nombre` |
| Historial de conversaciones | `Buscar conversación por nombre o teléfono del cliente` ([0070](../decisiones/05-paginas/historial-de-conversaciones/0070-historial-nombre-del-cliente-y-busqueda.md)) |

El **tooltip y el placeholder dicen exactamente lo mismo**. No hay versión corta del tooltip:
si el placeholder no entra, se trunca (`04.2 · 02`) y el tooltip muestra el texto completo.

## Acciones y títulos de métricas y flujos

| Dónde | Copy |
|---|---|
| Acción de métricas (Campañas y Gestión de flujos) | «Métricas de plantilla»; con más de una plantilla, «Métricas de plantilla (N)», N ≤ 10 ([0067](../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)) |
| Título del panel de métricas | «Métricas de plantilla», sin número ([0067](../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)) |
| Descripción del panel | Campañas: «Analiza el rendimiento de cada plantilla utilizada en esta campaña.» · Gestión de flujos: «… en este flujo.» |
| Descarga del flujo (Gestión de flujos) | «Descargar flujo», solo en el menú ([0066](../decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md)) |
| Modal de detalles del flujo | «Detalles del flujo» ([0066](../decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md)) |

## Estados vacíos

Título: **`Sin resultados`**
Cuerpo: **`Intenta ajustar los filtros o el término de búsqueda.`**
Acción: `Limpiar filtros`

Idéntico en los tres módulos.

## Nombres completos vs. abreviaturas

**Nombre completo cuando hay espacio.**

| Contexto | Forma |
|---|---|
| Título de panel de filtro | `Filtrar por Fecha de envío` · `Filtrar por Fecha de creación` |
| Chip de filtro | `F. Envío` · `F. Creación` |
| Encabezado de columna | `Fecha de envío` (Resultados · estáticas) · `F. Creación` (Resultados · dinámicas, y Listas) · `F. Actualización` (Listas) · `F. Última edición` (Gestión de flujos, con e minúscula, también en los modales `03.4`) |
| Filtro de estado de Gestión de flujos | `Estado` · panel `Filtrar por Estado` ([0048](../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md)) |

## Tooltips de métricas en la tabla de Resultados

| Columna | Tooltip |
|---|---|
| Enviados | «Enviados del total de clientes.» |
| Errores | «Errores del total de clientes. Contempla errores de configuración de la campaña y errores de Meta relacionados a la plantilla.» |
| Entregados | «Entregados del total de enviados.» |
| Leídos | «Leídos del total de entregados.» |
| Respondidos | «Respondidos del total de entregados.» |

## Detener campaña

Decisión [0047](../decisiones/04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md), que reemplaza a la
[0043](../decisiones/04-organismos/atom-dialog/0043-copy-de-detener-campana.md):

| Modal | Cuerpo |
|---|---|
| Agendada (`01.5 · 01`) | «La campaña será finalizada, ya no se seguirán contabilizando las estadísticas de los clientes y se reasignarán las conversaciones al flujo de Mensaje entrante.» |
| En proceso (`01.5 · 02`) | «La campaña será finalizada, no proseguirá con el envío de la misma, ya no se seguirán contabilizando las estadísticas de los clientes y se reasignarán las conversaciones al flujo de Mensaje entrante.» |

El disparador se nombra en singular, «flujo de Mensaje entrante»; el plural, «flujos de Mensaje
entrante», solo cuando se habla de varios flujos.

## Botones en loading

**Verbo en gerundio + puntos suspensivos**, con el ícono izquierdo encendido y el spinner —
decisión [0024](../decisiones/02-atomos/atom-button/0024-botones-en-loading.md).

| Acción | Botón en loading |
|---|---|
| Duplicar | `Duplicando...` (`03.5 · 03`) |

No se pasa a infinitivo.

## Placeholders de input

Formato **`Ej. <ejemplo real>`**. Ejemplo: `Ej. Clientes recurrentes` en el modal de
duplicar lista.
