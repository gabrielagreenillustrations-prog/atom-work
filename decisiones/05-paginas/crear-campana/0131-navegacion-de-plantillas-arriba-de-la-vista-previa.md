# 0131 — Crear campaña: la navegación entre plantillas va arriba de la vista previa, fuera del chat

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** `20.00 · 01–05` (Flujo con varias plantillas) · FRD de Crear campaña (HU-20).
**Componente:** Páginas · Crear campaña (vista previa)

## Contexto

Un flujo puede enviar más de una plantilla y la vista previa tiene que permitir recorrerlas.

## Decisión

- Arriba de la vista previa y fuera de ella: `❖ atom-icon-button` ‹ (xs, Tertiary) · contador «n/N» ([0132](../../02-atomos/atom-text-field/0132-contador-n-de-n-text-field-de-48-px.md)) · `❖ atom-icon-button` ›. Debajo, «Plantilla: [nombre]», después `❖ atom-button` «Ver métricas de plantilla» y la vista del chat.
- Primera: ‹ deshabilitada. Última: › deshabilitada. Con una sola plantilla no hay flechas ni contador; se muestra el nombre.
- Tooltips de las flechas: «Siguiente» y «Anterior», arriba a 4 px, para no tapar el nombre.
- Nombre largo: hasta 3 líneas, truncado con «…» al final de la tercera; en hover, `❖ atom-tooltip` con el nombre completo (ancho máximo 200 px).
- Título del contenedor en plural con más de una plantilla ([0129](0129-vista-previa-contenedor-inline.md)).

## Por qué

Pedido de diseño, con su frame de referencia (`1437:291280`): la estructura con nombre y flechas va *"ARRIBA de la vista previa"*. Fuera del chat, para que no se confunda con flechas de carrusel del mensaje.

*Interpretación:* «Siguiente», «Anterior» y los nombres de ejemplo son propuesta; si no existen, son claves de i18n nuevas.
</content>
</invoke>
<invoke name="Bash">
<parameter name="command">cd /home/claude/gabrielagreenillustrations-prog/atom-work/decisiones/05-paginas/crear-campana && head -1 0131-navegacion-de-plantillas-arriba-de-la-vista-previa.md