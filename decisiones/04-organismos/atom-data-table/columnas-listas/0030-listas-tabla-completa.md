# 0030 — Listas: la tabla completa, con la columna Origen, es `02.1 · 07`

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Campañas · Listas — frame `02.1 · 07 - Tabla · Columnas completas`.

## Contexto

El archivo *Crear listas AI, MCPs y CSV* es la última entrega de Listas y agrega el origen de la
lista. La [0018](../../../03-moleculas/atom-filter/0018-listas-filtro-origen.md) llevó el origen a los filtros, pero ninguna tabla del
handoff lo mostraba.

## Decisión

Un frame con solo la tabla de Listas y todas sus columnas: **Nombre · Tipo · Estado · Origen ·
Clientes · Creador · F. Creación · F. Actualización · Acciones**. La tabla es la que diseño armó con
las columnas de ese archivo (`432:137740`).

## Por qué

Pedido de diseño: *"agrega un frame de la tabla únicamente completa para que se puedan ver todas las columnas
incluso las que nos trajimos del file de entrega de listas MCP que tiene los últimos cambios"*. Sobre
las columnas: *"Debería ser solo las que trae el archivo MCP"*. Y sobre qué tabla usar, con el link a
`432:137740`: *"usa esta"*.

*Interpretación:* el frame va al lado de `02.1 · 06`, se ajusta al tamaño de la tabla y tiene el
fondo `sf/secondary`, el del contenedor de la tabla en las pantallas.

## Consecuencias

- Frame `513:511023` en la sección Listas, en (4982, 273). La tabla `432:137740` quedó adentro, con
  su tamaño (1171 × 785) y su contenido.
- Origen muestra un ícono por tipo de origen (`users`, `plug` o `table`) o «-».
- Las tablas de las pantallas de Listas siguen sin Origen, como dice la 0018. Sumarlo es otra
  decisión.
