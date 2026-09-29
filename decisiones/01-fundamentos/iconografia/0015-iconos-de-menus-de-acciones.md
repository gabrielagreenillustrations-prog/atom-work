# 0015 — Íconos de los menús de acciones

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** todos los `❖ atom-dropdown-menu` de acciones de los dos archivos (Resultados, Listas,
Gestión de flujos, Historial). Reemplaza a [0007](0007-iconografia-activar-desactivar.md).

## Contexto

La 0007 había llevado *Activar* a `circle-play`, *Desactivar* a `power-off` y *Ver detalles* a
`info-circle`. En el lote del 2026-09-23 diseño pidió además unificar el ícono de las métricas y el
de *Descargar errores*, y después corrigió los de activar, desactivar y ver detalles contra la
documentación.

## Decisión

| Acción del menú | Ícono |
|---|---|
| Métricas de … (campaña, flujo, plantilla, tipificación) | **`chart-fft`** |
| Descargar errores | **`triangle-exclamation`** |
| Activar · Activar flujo | **`circle-bolt`** |
| Desactivar | **`circle-minus`** |
| Ver detalles · Ver información | **`memo-circle-info`** |

## Por qué

Pedido de diseño: *"en la documentación se usa el memo-circle-info para ver detalles o ver información.
Además los iconos de activar necesitan circle-bolt y desactivar circle-minus"*.

## Consecuencias

- Campañas: `chart-fft` en 10 ítems de métricas, `triangle-exclamation` en 9 de *Descargar errores*,
  *Activar* en `01.8 · 08`. *Desactivar* ya usaba `circle-minus`.
- Automatizaciones: `chart-fft` en 7 ítems de métricas, *Ver detalles* en 11 ítems, *Desactivar*
  en 15 y *Activar flujo* en 1.
- *Reanudar* (campaña en pausa) sigue con `play-circle`: no es activar.
