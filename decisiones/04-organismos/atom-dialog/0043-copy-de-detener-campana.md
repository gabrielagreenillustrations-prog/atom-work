# 0043 — Detener campaña: las conversaciones vuelven al «flujo de Mensajes entrantes»

**Estado:** reemplazada por [0047](0047-detener-campana-flujo-de-mensaje-entrante.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Resultados — modales `01.5 · 01` (Detener campaña agendada) y `01.5 · 02`
(Detener campaña en proceso).

## Contexto

El pedido era cambiar «bot» por «flujo de Mensajes entrantes» en el copy de Detener campaña. Los dos
modales ya no decían «bot»: terminaban en «…se reasignarán las conversaciones al flujo de Mensaje
entrante.»

## Decisión

Los dos modales terminan en «…se reasignarán las conversaciones al flujo de Mensajes entrantes.»

## Por qué

Diseño pidió «flujo de Mensajes entrantes» en vez de «bot». Se usa su texto tal cual, en plural.

## Consecuencias

- `sistema/copy.md` registra el texto completo de los dos modales.
- En Automatizaciones el tipo de flujo se llama «Mensaje entrante», en singular. Si el copy de
  Detener debe decir lo mismo, queda por confirmar con diseño.
