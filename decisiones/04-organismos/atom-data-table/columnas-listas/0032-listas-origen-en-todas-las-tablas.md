# 0032 — Listas: Origen en todas las tablas, igual que `02.1 · 07`

**Estado:** vigente solo en la page «Handoff v2» — ver [0056](../../../06-proceso-y-fuentes/handoff/0056-handoff-v2.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Listas — tablas de las pantallas de la sección `296:789000`.

## Contexto

La [0030](0030-listas-tabla-completa.md) dejó la columna Origen solo en `02.1 · 07` y dijo que
sumarla a las pantallas era otra decisión. En las pantallas, además, las filas 11 y 12 mostraban una
condición en Tipo («Compras > 3», «Últ. mensaje > 7 días») y números en Creador (`1,876`, `3,092`);
`02.1 · 07` dice Estática y SuperAdmin.

## Decisión

Todas las tablas de Listas llevan **Origen** entre Estado y Clientes, **igual que `02.1 · 07`**: el
mismo ícono para cada lista (`users`, `plug` o `table`, o «-»). Las filas 11 y 12 dicen **Estática**
en Tipo y **SuperAdmin** en Creador, como en `02.1 · 07`.

## Por qué

Pedido de diseño: *"Agregalo a todas las tablas de listas. deben quedar igual."* Sobre las filas 11 y 12:
*"Pasa mis valores o valores que sean realistas"*.

## Consecuencias

- *Verificado:* las 33 tablas con columnas tienen Origen y cada lista lleva el mismo ícono que en
  `02.1 · 07`. Las cuatro tablas de estado (`02.1 · 01`, `03`, `04` y `05`) no tienen columnas.
- *Verificado:* las 32 tablas de 12 filas dicen Estática / SuperAdmin en las filas 11 y 12; la
  restante es un filtro con dos filas.
- Es la decisión que la [0030](0030-listas-tabla-completa.md) dejó pendiente; la 0030 sigue vigente.
