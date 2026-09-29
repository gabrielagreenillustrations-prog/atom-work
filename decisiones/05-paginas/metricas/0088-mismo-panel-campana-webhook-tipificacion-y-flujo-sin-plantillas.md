# 0088 — Gestión de flujos: Campaña, Webhook y Tipificación abren el mismo panel; sin plantillas, solo el empty

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** ❖ atom-sidepanel · Panel de métricas · ❖ atom-dropdown-menu · ❖ atom-empty-state
**Alcance:** archivo de métricas (`tHgzwwQ5gbEzHjxPBvLODo`), entrega (`13076:21003`), sección HU-02.

## Contexto

*Dato verificado* (Automatizaciones, `03.3`): los menús de fila de los flujos Publicados con disparador
Campaña (`03.3 · 04`), Webhook (`03.3 · 06`) y Tipificación (`03.3 · 08`) tienen «Métricas de plantilla»;
Campaña lo muestra con «(10)». En los archivos no había un caso de flujo sin plantillas: el único empty del
panel es «No se pudieron cargar las métricas» (error de carga).

## Decisión

- Campaña, Webhook y Tipificación abren el mismo panel: título «Métricas de plantilla», subtítulo «Analiza el
  rendimiento de cada plantilla utilizada en este flujo.» y las cuatro cards (Enviados, Entregados, Leídos y
  Respondidos). La opción dice «Métricas de plantilla» o, con varias plantillas, «Métricas de plantilla (N)».
- Si el flujo no tiene plantillas, el panel no muestra las cards: solo el `❖ atom-empty-state`.

## Por qué

Pedido de diseño: *"dejar explícito en Figma que campaña, Webhook y tipificación abren el mismo panel, con el
nombre «Métricas de plantilla» y las cuatro cards definidas. Si el flujo no tiene plantillas, esas cards no se
muestran. Solo el empty."*

*Interpretación:*

- Sin plantillas, tampoco se muestran Errores Meta ni Recomendaciones: dependen de una plantilla.
- El copy del empty es una propuesta mía, pendiente de validar: «Este flujo no tiene plantillas» y «Las
  métricas aparecen cuando el flujo envía una plantilla.» Usa el ícono `chart-simple` del empty de error.
- Lista dinámica también tiene «Métricas de plantilla» en su menú (`03.3 · 19`); el pedido no la nombra y no
  se sumó.

## Consecuencias

- HU-02, fila «Gestión de flujos · Campaña, Webhook y Tipificación» (card `13076:24290`): `03.9 · 01`
  (Campaña, «(10)»), `03.3 · 06` (Webhook) y `03.9 · 02` (el panel). `03.3 · 06` salió de la fila «Sin
  número», que ya no existe. **Falta `03.3 · 08` (Tipificación)**, entre Webhook y el panel: copiarlo de
  Automatizaciones necesita clics en pantalla y el Centro de notificaciones de macOS los bloqueaba.
- HU-02, fila «Flujo sin plantillas» (card `15345:483540`): frame «Flujo sin plantillas» (`15359:512789`), copia
  de «No se pudieron cargar las métricas» (`15324:53549`) con la pantalla de Gestión de flujos, el subtítulo de
  flujos y el copy propuesto.
- En la fila «Cards y porcentajes» había una copia de `03.9 · 02` (`15347:127475`) debajo de los frames de
  tooltip: los tres tooltips se corrieron 1380 px a la derecha. La sección mide 6570 de ancho.
- Versión de Figma «Antes de la especificación Campaña, Webhook y Tipificación».
