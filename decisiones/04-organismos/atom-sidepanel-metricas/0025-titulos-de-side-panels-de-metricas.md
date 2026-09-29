# 0025 — Títulos de los side panels de métricas: tipo + nombre completo, sin contador

**Estado:** reemplazada por [0067](../../05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)
**Fecha:** 2026-09-24
**Alcance:** títulos de los side panels de métricas y acciones de métricas de los menús de fila,
en los dos archivos. Reemplaza a [0005](0005-contador-en-metricas.md).

## Contexto

La [0005](0005-contador-en-metricas.md) ponía el contador `(N)` también en el título del panel:
`Métricas de plantillas del flujo (10)`.

## Decisión

- **Título del panel:** `Métricas de plantilla` o `Métricas de flujo`, dos puntos y el **nombre
  completo** de la campaña o del flujo. Sin contador y sin truncado: si no entra, va en dos líneas.
- **Acción del menú:** lleva el contador cuando cubre más de un elemento —
  `Métricas de plantilla (10)`, `Métricas de campaña (10)`—. Con uno solo, sin contador.

## Por qué

Pedido de diseño: *"el número (10) cuando tiene más de una plantilla solo quedaba para el menú dropdown pero
según la entrega que se hizo de último para side panel de métricas se dejó métricas de plantilla o
de flujo (dependiendo cuando era) + el nombre de campaña o flujo completo"*.

*Interpretación:* cuál de los dos va en cada caso. Esa entrega no se pudo abrir en la sesión.
Se usó:

| Dónde | Título | Criterio |
|---|---|---|
| Campañas estáticas (`01.6`) | `Métricas de plantilla: Encuesta satisfacción Q2` | La campaña de la fila seleccionada es de tipo Plantilla |
| Campañas dinámicas (`01.8 · 10–12`) | `Métricas de flujo: Recuperación de carritos` | El ítem del menú que lo abre dice *Métricas de flujo* |
| Gestión de flujos (`03.9`) | `Métricas de plantilla: Promoción Black Friday` | El ítem del menú que lo abre dice *Métricas de plantilla* |

## Consecuencias

- Título con truncado desactivado en los 13 paneles de los frames (`01.6 · 01/02/04/05/06/07`,
  `01.8 · 10–12`, `03.9 · 01–04`). Los paneles completos sueltos de Campañas (`353:569029`,
  `353:572470`, `394:606969`) llevan el mismo título.
- `03.3 · 04` (Campaña · Publicado, el flujo de 10 plantillas de `03.9`): `Métricas de plantilla (10)`.
- Los menús de Campañas (`01.4`) conservan *Métricas de campaña*, con `(10)` en `01.4 · 08`.
- Producción dice `Métricas de campaña: {nombre}` en estáticas y QA `Métricas de flujo dinámico:
  {nombre}` en dinámicas: el handoff marca esos frames como *Difiere*.
