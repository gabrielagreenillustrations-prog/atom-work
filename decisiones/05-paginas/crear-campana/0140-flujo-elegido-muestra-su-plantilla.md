# 0140 — Crear campaña: con un flujo elegido, la vista previa muestra su plantilla

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** Crear campaña de tipo Flujo (`03.00 · 03`, `20.00`) · FRD de Crear campaña (HU-1 y HU-3).
**Componente:** Páginas · Crear campaña

## Contexto

En QA, con un flujo elegido, la vista previa queda vacía («Selecciona un flujo»). El FRD y la card de 03.00 lo describían así, pero el frame `03.00 · 03` muestra la plantilla.

## Decisión

Al elegir un flujo, la vista previa muestra su plantilla con el nombre («Plantilla: [nombre]») y «Ver métricas de plantilla». Es el estado inicial de la vista previa del flujo; con varias plantillas se recorren con la navegación de la [0131](0131-navegacion-de-plantillas-arriba-de-la-vista-previa.md).

## Por qué

Confirmación de diseño sobre `03.00 · 03`: *"si exacto es el estado inicial"*. Coincide con la HU-1 del FRD, escrita por diseño: *"Al seleccionar una plantilla o flujo con plantilla/s aparecen los elementos de navegación, titulo de la plantilla y el botón «Ver métricas de plantilla»."*
</content>
</invoke>
