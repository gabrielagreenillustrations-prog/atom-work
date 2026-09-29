# 0079 — Documentación: un documento por submódulo, como la de Bandeja

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** documentación (proceso)
**Alcance:** Campañas y Automatizaciones.

## Contexto

Además del handoff en Figma y los artefactos, la adopción del DS 1.0 se documenta aparte. El repo no
tenía definida la forma de esa documentación para estos dos módulos.

## Decisión

- **Campañas:** la documentación es similar a la de Bandeja, con un documento por submódulo.
- **Automatizaciones:** igual, un documento por submódulo.

## Por qué

Pedido de diseño: *"La documentación de campañas será similar a la de bandeja pero será un documento
por cada submodulo. Igual lo haremos en automatizaciones"*.

*Interpretación, sin verificar:*

- Los submódulos son los del repo (`modulos/`) y de las secciones del handoff ([0074](../handoff/0074-estructura-del-handoff-como-conversaciones.md)):
  Campañas → Resultados de campañas (estáticas y dinámicas, `/campaigns/results`) y Listas
  (`/campaigns/lists`); Automatizaciones → Gestión de flujos (`/automations/flows`) e Historial de
  conversaciones. Serían cuatro documentos.
- «La de Bandeja» es la documentación de Bandeja en Confluence. No la vi: en Chrome, Confluence está
  sin sesión y el espacio de la página abierta dice «This space is locked». Qué se toma de ella
  (secciones, formato, nivel de detalle) queda por ver.

## Consecuencias

- Antes de escribir los documentos hace falta ver la documentación de Bandeja.
- Falta confirmar la lista de submódulos, y si *Listas con MCP* (page Handoff v2, [0056](../handoff/0056-handoff-v2.md))
  va dentro del documento de Listas o aparte.
