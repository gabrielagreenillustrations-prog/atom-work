# 0082 — Chat: íconos, filas y enlaces con los componentes de la Web Library

**Estado:** vigente
**Fecha:** 2026-10-05
**Componente:** atom-chat
**Ver también:** [0077](../../01-fundamentos/iconografia/0077-atom-icon-vigente-en-las-tablas.md) (`❖ atom-icon` vigente)

## Contexto

Los componentes del chat se armaron con placeholders para los íconos y con frames propios para filas
y enlaces.

## Decisión

- Íconos: `❖ atom-icon`.
- Filas de listas (modelo, campos, historial, menús): `❖ atom-list-item` con sus props.
- «Ver más» y los textos azules de enlace: `❖ atom-link-button`.
- El CTA de tarjetas y respuestas rápidas es un átomo del kit: `_atom-chat-card-action`
  (`13143:10416`, type footer · reply, state enabled · disabled), que adentro usa `❖ atom-link-button`.

## Por qué

Pedidos de diseño: *"el componente que debes poner más bien es atom-icon"*; *"model-2, field, etc
pueden ser mis ❖ atom-list-item"*; *"LOS VER MÁS deberían ser buttons también. Los textos azules como
link igualmente deben ser button links"*; el «button» que tenía `❖ atom-link-button` adentro
*"debería ser un átomo para este componente únicamente"*.

## Consecuencias

- *Dato verificado:* Font Awesome 7 Pro no carga en el MCP de Figma, así que los nodos con texto de
  FA no se pueden mover ni crear desde ahí. Quedaron placeholders con nombre (`icon-slot/…`,
  `button-slot/…`, `link-slot/…`, `icon-button-slot/…`, `instance-slot/…`) que reemplaza el plugin
  de [`sistema/atom-chat/plugin/`](../../../sistema/atom-chat/plugin/). Pendiente correrlo.
