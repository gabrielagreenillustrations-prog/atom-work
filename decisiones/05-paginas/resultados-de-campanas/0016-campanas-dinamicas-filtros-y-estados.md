# 0016 — Campañas dinámicas: mismos filtros que estáticas y cuatro estados

**Estado:** reemplazada por [0022](0022-campanas-dinamicas-tres-estados.md)
**Fecha:** 2026-09-23
**Alcance:** Campañas · Resultados — tabla, chips y paneles de filtro de dinámicas (`01.8`) y la
sección Filtros (`464:255665`).

## Contexto

Dinámicas tenía solo dos filtros (Estado y F. Creación) y dos estados (Activo · Inactivo).

## Decisión

- Las dinámicas usan **las mismas cuatro categorías que las estáticas**: Tipo de campaña
  (Flujo · Plantilla), Estado, Creador y F. Creación.
- Estados: **Activa · En pausa · Detenida · Con error**. *En pausa* ocurre solo de forma
  automática, por el límite de Meta.

## Por qué

En el lote del 2026-09-23, diseño pidió los mismos filtros en estáticas y dinámicas. Primero
definió los estados como «activa e inactiva» y después los corrigió: *"Activa | Detenida |
En pausa (solo automático por límite Meta) | Con error"*.

*Interpretación:* en el panel de filtro van en orden de ciclo de vida, igual que en estáticas
(En pausa antes que Detenida) — decisión [0010](../../03-moleculas/atom-filter/0010-orden-de-opciones.md).

*Interpretación:* las filas que decían «Inactiva» pasan a «Detenida».

## Consecuencias

- Tags de la tabla: `Activa` Success · `En pausa` Warning · `Detenida` Neutral · `Con error`
  Danger, con el mismo `❖ atom-tag` Ghost `s` de estáticas.
- `01.8 · 02` pasa a «Flujos detenidos (filtro Detenida)» y `01.8 · 08` a «Flujo detenido».
- Las tablas de ejemplo muestran filas Activa y Detenida; no hay filas de ejemplo En pausa ni
  Con error.
