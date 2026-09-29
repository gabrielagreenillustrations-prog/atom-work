# 0068 — El panel de métricas vive en su archivo; los handoffs llevan solo la apertura

**Estado:** vigente
**Fecha:** 2026-09-28
**Componente:** ❖ atom-sidepanel · Panel de métricas
**Alcance:** Campañas y Automatizaciones, pages Handoff v1 y Handoff v2, y el archivo *Métricas por
plantilla inicial en flujos y campañas* (`tHgzwwQ5gbEzHjxPBvLODo`). Cambia dónde está el panel de
[0056](0056-handoff-v2.md),
[0058](../../04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) y
[0062](../../04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md); lo demás de esas
decisiones sigue vigente.

## Contexto

Los casos del panel estaban repartidos en los dos handoffs: v1 en `01.6` y `03.9`, y la versión con
el nuevo DS, el benchmark y la ideación en las pages Handoff v2.

## Decisión

- Los casos del panel, sus cambios e interacciones van en el archivo de métricas, page *Actual UI*,
  sección **«Handoff Design System · Panel de métricas de plantilla»**, con seis subsecciones:
  Campañas v1 (`01.6`), Automatizaciones v1 (`03.9`), Campañas con el nuevo DS (`01.6` y `01.8 ·
  15–17`), Automatizaciones con el nuevo DS (`03.9`), el benchmark y la ideación de Resultados
  simplificados.
- En los handoffs queda la apertura: Campañas `01.6 · 01` (y `01.6 · 03`, la vista previa de
  plantilla, que no es del panel de métricas) y Automatizaciones `03.9 · 01`, con su card.
- Las pages Handoff v2 conservan una card que dice dónde está el panel.

## Por qué

Pedido de diseño: *"Mover los casos completos del panel de métricas al Figma de múltiples plantillas y
todos los cambios e interacciones de métricas de plantillas al archivo de "Métricas por plantilla
inicial en flujos y campañas"* y *"En el handoff de Design System, dejar solo la referencia de
apertura del panel"*. Sobre v2: *"v1 y v2; queda solo la apertura"*.

*Interpretación:* el destino es la page *Actual UI* (el link apunta a ella); el archivo tiene además
una page *Nueva UI*.

## Consecuencias

- Se copiaron con el portapapeles de Figma y se contaron las capas de cada grupo antes de borrar:
  iguales en origen y destino (57 286, 48 768, 46 156, 160, 5 014 y 32 527).
- Campañas: se borraron `01.6 · 02`, `04–18`, sus dos cards, la sección del panel con el nuevo DS,
  el benchmark, la ideación y cinco textos sueltos («Delivery Ratio»). Resultados pasó de 19 800 a
  18 259 px de ancho, las filas de `01.7` en adelante subieron 1 182 px y Listas se corrió 1 541 px.
- Automatizaciones: se borraron `03.9 · 02`, `05–13`, sus cards de navegación y la sección del panel
  con el nuevo DS. Gestión de flujos quedó en 16 177 px de alto.
- `03.9 · 03` y `04` (`199:591273`, `199:591436`) ya no estaban en el archivo cuando se movió el
  panel; existían antes en la sesión. El contenido completo equivalente está en Campañas `01.6 · 04–05`.
- Las cards de apertura (`296:761727`, `394:623141` en Campañas; `10:39913` en Automatizaciones)
  dicen dónde está el panel.
