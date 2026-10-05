# 0080 — Chat: un template por superficie sobre un kit compartido

**Estado:** vigente
**Fecha:** 2026-10-05
**Componente:** atom-chat
**Alcance:** section «atom-chat v2 — componente unificado» (`12639:5926`) de la Web Library.

## Contexto

La tarea original era un solo componente de chat con variantes por caso de uso. Con los tipos de chat
que hay que cubrir (agente ↔ cliente, usuario ↔ IA o MCP, Wizard en los builders), un único componente
acumulaba props que solo aplicaban a una superficie.

## Decisión

- Tres templates: `atom-chat-inbox`, `atom-chat-assistant` y `atom-chat-wizard`.
- Todos usan el mismo kit de organismos, moléculas y átomos (`_atom-chat-*`).
- Un tipo de contenido nuevo es una molécula nueva en el slot de contenido; una superficie nueva es un
  template nuevo que reutiliza el kit.
- La tabla de piezas y props está en [`sistema/atom-chat.md`](../../../sistema/atom-chat.md).

## Por qué

Pedido de diseño: *"El chat no será 1 solo componente sino que se utilizarán los mismos organismos,
moléculas y átomos, pero los componentes de los chats serán para cada instancia."*

## Consecuencias

- Las props de Figma tienen el mismo nombre que las de código (camelCase); ver el frame de arquitectura `12664:7745`.
- La cantidad de instancias puede crecer sin tocar las existentes.
