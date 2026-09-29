# 0026 — Columnas de Resultados: las 12 de la Épica 2, con «Fecha de envío»

**Estado:** reemplazada por [0033](0033-fecha-de-creacion-en-dinamicas.md)
**Fecha:** 2026-09-24
**Alcance:** tablas de Resultados de campañas —estáticas y dinámicas— y sus filtros de fecha.
Reemplaza a [0006](0006-columnas-campanas-estaticas.md).

## Contexto

La [0006](0006-columnas-campanas-estaticas.md) adoptó las 12 columnas de la Épica 2 y, con ellas,
renombró *Fecha de envío* a `F. Creación`; el chip y el panel del filtro arrastraron el cambio.

## Decisión

- Las tablas de Resultados usan las **12 columnas de la Épica 2** (*Tipo de campaña* después de
  *Fallidos*, sin *No entregados*), pero la fecha se llama **`Fecha de envío`**, en estáticas y en
  dinámicas.
- Filtro: chip **`F. Envío`**, panel **`Filtrar por Fecha de envío`**.

## Por qué

Pedido de diseño: *"la columna de fecha en Resultados de campañas Tab estáticas y dinámicas es Fecha de envío
porque eso se decidió con producto"*.

## Consecuencias

- *Verificado:* 70 encabezados `Fecha de envío` en la sección `266:150994`: 57 tablas de
  estáticas y 13 de dinámicas. Ninguno dice `F. Creación`.
- `01.2 · 10` vuelve a `Filtro · F. Envío abierto`, con chip y panel como estaban antes de la
  0006. `01.8 · 05` pasa a `Dinámicas · Filtro · F. Envío abierto`.
- Con el nombre más largo la columna crece 22 px: las tablas sueltas (`01.3 · 01` y los frames
  de `01.4`) pasan a 1590 px para que Acciones no la tape.
- La Épica 2 y la tab Dinámicas de producción dicen `F. Creación`: el handoff lo aclara en
  `01.1 · 02` y marca `01.8 · 05` como *Difiere* con QA.
- Listas no cambia: sigue con `F. Creación` y `F. Actualización`.
