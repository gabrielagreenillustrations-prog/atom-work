# 0022 — Campañas dinámicas: mismos filtros que estáticas y tres estados

**Estado:** reemplazada por [0027](0027-dinamicas-misma-tabla-que-estaticas.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Resultados — tabla, chips y paneles de filtro de dinámicas (`01.8`) y la
sección Filtros (`464:255665`). Reemplaza a [0016](0016-campanas-dinamicas-filtros-y-estados.md).

## Contexto

La [0016](0016-campanas-dinamicas-filtros-y-estados.md) definió cuatro estados para las
dinámicas: Activa · En pausa · Detenida · Con error.

## Decisión

- Las dinámicas usan **las mismas cuatro categorías que las estáticas**: Tipo de campaña
  (Flujo · Plantilla), Estado, Creador y F. Creación. Sin cambios respecto de la 0016.
- Estados: **Activa · En pausa · Detenida**. *En pausa* ocurre solo de forma automática, por
  el límite de Meta. *Con error* no es un estado de las dinámicas.

## Por qué

En el lote del 2026-09-24, diseño corrigió los estados de las dinámicas a *"Activa Detenida y
En Pausa"* y confirmó que *Con error* sale.

*Interpretación:* el orden del filtro sigue siendo por ciclo de vida, Activa · En pausa ·
Detenida — decisión [0010](../../03-moleculas/atom-filter/0010-orden-de-opciones.md).

## Consecuencias

- `01.8 · 06` y el panel de dinámicas de la sección Filtros (`426:126037`): la opción
  *Con error* queda oculta y el contador pasa a «0 de 3».
- Tags de la tabla: `Activa` Success · `En pausa` Warning · `Detenida` Neutral, con el mismo
  `❖ atom-tag` Ghost `s` de estáticas.
- Las tablas de ejemplo muestran filas Activa y Detenida; no había filas Con error.
- Las estáticas conservan *Con error* entre sus seis estados.
