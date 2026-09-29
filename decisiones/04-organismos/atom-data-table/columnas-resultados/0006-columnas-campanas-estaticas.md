# 0006 — Columnas de campañas estáticas: las 12 de la Épica 2

**Estado:** reemplazada por [0026](0026-fecha-de-envio-en-resultados.md)
**Fecha:** 2026-09-23
**Alcance:** tabla de Resultados de campañas — estáticas

## Decisión

Se adoptan las **12 columnas de la Épica 2**. Cambios contra lo que había:

- *Tipo de campaña* se mueve **después** de *Fallidos*
- *No entregados* se oculta
- *Fecha de envío* pasa a **`F. Creación`**

Para la tabla de **dinámicas** se mantiene la versión propia verificada en producción.

## Por qué

La Épica 2 es la entrega vigente para resultados de campañas (ver `0001`). La tabla de
dinámicas no está cubierta por esa épica, así que manda lo verificado en prod.

## Consecuencias

- Aplicado en 47 tablas.
- Los filtros arrastran el cambio: el chip `F. Envío` pasó a `F. Creación`.
- *Pendiente:* la descripción del frame `01.3 · 01` todavía lista el set viejo.
