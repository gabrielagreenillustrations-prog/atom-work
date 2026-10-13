# 0082 — Resultados: colores de las métricas en la tabla

**Estado:** vigente
**Fecha:** 2026-09-29
**Módulo:** Resultados de campañas · métricas
**Alcance:** Campañas · Resultados — las 121 tablas de «Campañas Handoff v1» y «Campañas Handoff v2».
Reemplaza la parte de colores de la [0063](0063-metricas-de-resultados.md).

## Contexto

La [0063](0063-metricas-de-resultados.md) dejó, para valores mayores que 0: Clientes y Enviados en
`fg/secondary`, Errores en `fg/status/error`, Entregados en `fg/status/informative`, y Leídos y
Respondidos en `fg/status/success`.

## Decisión

| Columna | Color si es mayor que 0 |
|---|---|
| Clientes | `fg/secondary` |
| Enviados | `fg/secondary` |
| Errores | `fg/status/error` |
| Entregados | `fg/secondary` |
| Leídos | `fg/status/informative` |
| Respondidos | `fg/status/success` |

El 0 sigue en `fg/secondary`.

## Por qué

Pedido de diseño: *"Clientes el token negro/gris que tiene está bien. Enviados: la misma que clientes.
Errores: en rojo (ya está así). Entregados: el mismo de enviados y clientes. Respondidos: token verde"*
y *"Y leídos en azul"*.

*Interpretación:* el 0 sigue en `fg/secondary`, como en la 0063; el pedido no lo cambia.

## Consecuencias

- 586 valores de Entregados pasaron de `fg/status/informative` a `fg/secondary` y 586 de Leídos, de
  `fg/status/success` a `fg/status/informative`.
- En `01.3 · 05` y `01.3 · 06` (tooltips de Leídos y Respondidos) hay un valor de Errores (10) en
  `forms-and-inputs/fg/enabled`; no se tocó (pregunta en `RETOMAR.md`).
