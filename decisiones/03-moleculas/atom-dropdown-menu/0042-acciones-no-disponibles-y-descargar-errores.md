# 0042 — Menús de Resultados: acciones no disponibles en Disabled y «Descargar errores» según Fallidos

**Estado:** reemplazada por [0053](0053-acciones-no-disponibles-se-ocultan.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Resultados — menús de fila de `01.4` y botones de los side panels de métricas
(`01.6`, `01.8 · 15–16`).

## Contexto

Los menús de fila ya mostraban en Disabled algunas acciones que no aplican al estado de la campaña.
«Descargar errores» estaba habilitado o deshabilitado sin relación con los Fallidos de la fila:
en `01.4 · 04.1` estaba deshabilitado sobre una campaña con 11 Fallidos.

## Decisión

- Las acciones que no aplican al estado se muestran en Disabled. Solo se tocan las acciones que ya
  aparecen en cada menú: no se agregan nuevas.
- «Descargar errores» se habilita solo si la fila tiene Fallidos (más de 0).

## Por qué

Diseño pidió mostrar en Disabled las acciones no disponibles y habilitar «Descargar errores» solo
cuando hay fallidos. Sobre el alcance del Disabled eligió *"Solo lo que ya aparece"*.

## Consecuencias

- *Verificado:* en los 15 menús de `01.4`, «Descargar errores» sigue a los Fallidos de la fila
  anclada. Se corrigió `01.4 · 04.1` (En pausa, 11 Fallidos): pasó a Enabled, con el ícono en
  `buttons/fg/tertiary/enabled` como los demás ítems.
- Los side panels de métricas muestran «Errores (15)», así que «Descargar errores» queda habilitado.
- Los menús de Dinámicas (`01.8 · 12–13`) y el de la Campaña de Voz (`01.4 · 08`) no tienen
  «Descargar errores».
