# 0081 — El simulador es la bandeja en vista observador

**Estado:** vigente
**Fecha:** 2026-10-05
**Componente:** atom-chat
**Alcance:** simulador de conversaciones (Cliente IA ↔ Agente IA) y panel «Prueba de agente».

## Contexto

El simulador muestra en tercera persona una conversación entre un cliente simulado y un agente
simulado, generados con IA. Se evaluó hacerlo una cuarta instancia.

## Decisión

- El simulador es `atom-chat-inbox` con `perspective=observer` y `composer=none`.
- En observador el contacto simulado va a la izquierda y el agente simulado a la derecha: `align`
  depende de quién mira, no de quién escribe.
- La prueba de agente (panel «Prueba de conducción», `11138:76168`) es la misma vista con composer.

## Por qué

Respuesta de diseño: *"podría ser una 4ta instancia pero pensé que el mismo Chat con Agente/Cliente
podría ser utilizado"*, y luego *"Sí, como variante"*.

## Consecuencias

- El simulador no suma organismos: reutiliza burbujas, eventos y logs de la bandeja.
