# 0086 — Panel de métricas: Enviados con `check`, «plantillas» en Errores Meta y tooltip «Anterior»

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** ❖ atom-sidepanel · Panel de métricas · ❖ atom-tooltip
**Alcance:** todo el archivo de métricas (`tHgzwwQ5gbEzHjxPBvLODo`); Campañas `01.6 · 02`; Automatizaciones
`03.9 · 02`.

## Contexto

*Dato verificado:*

- En los paneles de la grilla A, la card Enviados llevaba el ícono `users`. La
  [0069](0069-panel-sin-reporte-de-errores-e-iconos.md) ya decía `check`.
- Las filas de Errores Meta decían «5 mensajes», «3 mensajes»…
- La flecha para volver tenía el tooltip «Atrás»; la otra, «Siguiente».
- El tooltip de Errores Meta decía «Se contabilizan solo los errores que Meta nos regresa de esta plantilla.»

## Decisión

- Enviados usa `check`.
- Cada fila de Errores Meta cuenta plantillas: «5 plantillas», con el % sobre el total de Errores Meta.
- Los tooltips de las flechas dicen «Anterior» y «Siguiente».
- El tooltip de Errores Meta dice «Se contabilizan solo los errores que Meta nos devuelve de esta plantilla.»,
  como el FRD (HU-03).

## Por qué

Comentarios del PO: *"El ícono de enviados era un check"*, *"Acordamos «plantillas» para el side panel de
métricas en lugar de «mensajes» en las cards de los errores de Meta"*, *"Para el tooltip de «atrás» ya se
está usando «siguiente», entonces debe decir «anterior»"*. El copy del tooltip viene del
[FRD](../../../entregas/frd/2026-09-28-metricas-por-plantilla-ajustes.md).

## Consecuencias

- Archivo de métricas: 27 íconos, 184 textos «mensajes», 2 tooltips «Atrás» y 4 textos con «nos regresa»
  (dos tooltips y dos citas en cards). Incluye la sección «Handoff Design System» de la page Nueva UI.
- Campañas `01.6 · 02` y Automatizaciones `03.9 · 02`: un ícono y tres textos cada uno.
- Los «mensajes» de los side panels de Historial (`04.4`) no son de métricas: no se tocaron.
