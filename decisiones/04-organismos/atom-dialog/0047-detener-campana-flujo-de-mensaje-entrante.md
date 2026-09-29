# 0047 — Detener campaña: las conversaciones vuelven al «flujo de Mensaje entrante»

**Estado:** vigente
**Fecha:** 2026-09-25
**Alcance:** Campañas · Resultados — modales `01.5 · 01` (Detener campaña agendada) y `01.5 · 02`
(Detener campaña en proceso). Reemplaza a [0043](0043-copy-de-detener-campana.md).

## Contexto

La [0043](0043-copy-de-detener-campana.md) dejó «…al flujo de Mensajes entrantes.», en plural. En
Automatizaciones el disparador se llama «Mensaje entrante».

*Verificado en QA el 2026-09-25* (traducciones `dialog-campaigns.stop_scheduled_campaign` y
`stop_in_progress_campaign`): QA dice «…se reasignarán las conversaciones al bot.». La agendada no
incluye «no proseguirá con el envío de la misma»; la en proceso sí. Figma ya seguía ese reparto.

## Decisión

Los dos modales terminan en **«…se reasignarán las conversaciones al flujo de Mensaje entrante.»**

## Por qué

Diseño: *"Flujo de Mensaje entrante es el nombre pero si te refieres a varios flujos no está mal
decir 'Flujos de Mensaje entrante'"*. Las conversaciones de una campaña vuelven a un solo flujo.

## Consecuencias

- Figma: `01.5 · 01` y `01.5 · 02` actualizados. *Verificado el 2026-09-25:* no queda «Mensajes
  entrantes» en Campañas.
- El nombre del disparador va en singular; el plural («flujos de Mensaje entrante») solo cuando se
  habla de varios flujos.
