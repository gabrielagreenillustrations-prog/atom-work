# Filtros

Última revisión: **2026-09-26** (sesión 11) · Decisiones: [0010](../decisiones/03-moleculas/atom-filter/0010-orden-de-opciones.md) · [0033](../decisiones/04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) · [0018](../decisiones/03-moleculas/atom-filter/0018-listas-filtro-origen.md) · [0048](../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) (reemplaza a [0019](../decisiones/05-paginas/gestion-de-flujos/0019-gestion-canal-y-estado-de-flujo.md)) · [0029](../decisiones/04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md) · [0038](../decisiones/05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md) · [0039](../decisiones/03-moleculas/atom-filter/0039-filtro-canal-conectado-con-descripcion.md) · [0049](../decisiones/03-moleculas/atom-filter/0049-listas-orden-de-filtros.md)

---

## Orden de opciones

| Tipo | Orden |
|---|---|
| Nombres de elementos | Alfabético |
| Estados | **Orden de ejecución** (ciclo de vida) |
| Rangos de fecha | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado |

`Personalizado` siempre va último.

## Descripción

Si un filtro aplica solo a una parte de los elementos, el segundo nivel del panel lo dice debajo del
título: `Filtrar por Canal conectado` · «Aplica solo a flujos de Mensaje entrante».

## Naming

- Título del panel: nombre completo → `Filtrar por Fecha de creación`
- Chip: abreviatura → `F. Creación`

## Qué filtros tiene cada módulo

| Módulo | Chips |
|---|---|
| Campañas estáticas | Tipo de campaña · Estado · Creador · F. Envío — decisión [0033](../decisiones/04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md). Panel de fecha: `Filtrar por Fecha de envío` |
| Campañas dinámicas | Tipo de campaña · Estado · Creador · F. Creación — decisión [0033](../decisiones/04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md). Panel de fecha: `Filtrar por Fecha de creación`. Estado: Activa · En pausa · Detenida («0 de 3») |
| Listas | Page Campañas: Tipo · Estado · Creador · F. Creación · F. Actualización ([0056](../decisiones/06-proceso-y-fuentes/handoff/0056-handoff-v2.md)). Page Handoff v2: Tipo · Estado · Origen · Creador · F. Creación · F. Actualización — decisión [0049](../decisiones/03-moleculas/atom-filter/0049-listas-orden-de-filtros.md) (la categoría Origen, [0018](../decisiones/03-moleculas/atom-filter/0018-listas-filtro-origen.md)). Íconos de fecha: F. Creación `calendar`, F. Actualización `clock-rotate-left` — [0029](../decisiones/04-organismos/atom-data-table/columnas-listas/0029-listas-iconos-y-nombre-de-fechas.md) |
| Gestión de flujos | Disparador · Canal · Canal conectado · Estado · F. Última edición — decisión [0048](../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md). Disparador: Mensaje entrante · Campaña · Webhook · Tipificación · Lista dinámica. Estado lleva `circle-dot`. Canal conectado lleva la descripción «Aplica solo a flujos de Mensaje entrante» ([0039](../decisiones/03-moleculas/atom-filter/0039-filtro-canal-conectado-con-descripcion.md)). La vista por defecto no muestra inactivos; se ven al filtrar por Inactivo ([0038](../decisiones/05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md)) |

Detalle de las opciones de cada uno en los archivos de `modulos/`.

## Nota

La Épica 2 **no define los chips**: su toolbar es solo buscador + un botón "Filtros".
Los chips son nuestros. *(Verificado.)*

## Búsqueda y filtros

En Resultados de campañas, al escribir en el buscador el chip Filtros pasa a Disabled; si había
filtros aplicados, también los chips aplicados y «Limpiar filtros» — decisión
[0055](../decisiones/03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md). No aplica a Listas ni a Automatizaciones.

*Dato de diseño (26 sep):* mientras hay texto no se filtra; la búsqueda (Typesense) trae todos los
resultados, aunque haya chips aplicados.
