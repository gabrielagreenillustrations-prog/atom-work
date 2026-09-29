# 0063 — Resultados: métricas Clientes · Enviados · Errores · Entregados · Leídos · Respondidos

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** Resultados de campañas · métricas
**Alcance:** Campañas · Resultados — todas las tablas de estáticas y dinámicas: page «Campañas
Handoff v1» y los fondos de los paneles de «Campañas Handoff v2». Reemplaza a
[0036](../../04-organismos/atom-data-table/columnas-resultados/0036-no-entregados-visible.md).

## Contexto

Diseño rehízo la tabla de referencia `01.3 · 01` con seis métricas y dejó al lado un
`❖ atom-tooltip` por métrica, con el texto de cada una.

## Decisión

- 13 columnas: Nombre · Canal · Estado · Clientes · **Enviados · Errores · Entregados · Leídos ·
  Respondidos** · Tipo de campaña · Creador · fecha · Acciones.
- *Errores* reemplaza a *Fallidos* y va después de *Enviados*. *No entregados* deja de verse: la
  columna queda oculta en el componente, como en la referencia.
- Valores mayores que 0 en color: Errores en `fg/status/error`, Entregados en
  `fg/status/informative`, Leídos y Respondidos en `fg/status/success`. El 0 va en `fg/secondary`.
- Las cinco métricas llevan `info-circle` en el encabezado; Clientes no. Tooltips:

| Métrica | Tooltip | Frame |
|---|---|---|
| Enviados | «Enviados del total de clientes.» | `01.3 · 02` |
| Errores | «Errores del total de clientes. Contempla errores de configuración de la campaña y errores de Meta relacionados a la plantilla.» | `01.3 · 03` |
| Entregados | «Entregados del total de enviados.» | `01.3 · 04` |
| Leídos | «Leídos del total de entregados.» | `01.3 · 05` |
| Respondidos | «Respondidos del total de entregados.» | `01.3 · 06` |

- La fecha sigue igual: *Fecha de envío* en estáticas y *F. Creación* en dinámicas.

## Por qué

Pedido de diseño: *"en todas las tablas las métricas ahora quedarán con las métricas clientes,
enviados, errores, entregados, leídos y respondidos"*, con los tooltips al lado de `01.3 · 01`.

*Interpretación:*

- Valores de ejemplo: Errores toma los que tenía Fallidos; Entregados toma los que tenía Leídos, y
  Leídos repite ese valor. Así está la referencia en todas las filas salvo la primera (3 entregados,
  2 leídos).
- Enviados lleva `info-circle` también en la referencia, porque tiene tooltip; antes no lo tenía.

## Consecuencias

- Las 95 tablas de Resultados de las dos pages (pantallas, filtros, buscador, menús de `01.4`,
  modales, snackbars, dinámicas, los 8 `❖ atom-data-table` de menús y los fondos de los paneles)
  quedan con esas columnas. Ninguna muestra Fallidos ni No entregados.
- Tooltips: `01.3 · 02` Enviados, `03` Errores, `04` Entregados, `05` Leídos y `06` Respondidos
  (nuevo). El paginador pasa a `01.3 · 07` y el nombre truncado a `01.3 · 08`.
- `01.4 · 02` pasa a llamarse «Campaña enviada con errores»; «Descargar errores» aparece si la fila
  tiene Errores mayor que 0 ([0053](../../03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md)).
- El side panel de métricas no cambia: sigue mostrando Errores y No entregados por separado.
- La tabla de la Ideación (Handoff v2) no se tocó: es una propuesta aparte.
- Pregunta abierta: en la referencia, Clientes = Enviados + Errores solo en la primera fila. Falta
  saber si los valores de ejemplo tienen que cumplirlo en todas.
