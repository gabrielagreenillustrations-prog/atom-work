# 0083 — Prototipo del chat: storybook con la nueva UI

**Estado:** vigente
**Fecha:** 2026-10-05
**Componente:** atom-chat
**Alcance:** prototipo interactivo para desarrollo, producto y diseño
(https://claude.ai/artifact/TFGv6xvU8RridHQBY9GShK; copia en `sistema/atom-chat/prototipo/`).

## Contexto

La primera versión del prototipo se parecía a la UI actual y simulaba una sola conversación por
instancia, así que no dejaba ver todas las variantes.

## Decisión

- El prototipo es un storybook: historias por instancia, controles con los nombres de las props de
  Figma, filtro de contenido visible, Reproducir mensaje por mensaje y un playground para armar
  conversaciones con cualquier bloque.
- Solo muestra el chat. En el Wizard, además, el panel «Nuevo agente» con el diff.
- Se reproduce lo que existe como componente en Figma; lo que no existe no se agrega.
- Cuando un componente v2 y el frame de la nueva UI no coinciden, manda la nueva UI. Las
  diferencias que se resolvieron así están en [`sistema/atom-chat.md`](../../../sistema/atom-chat.md#prototipo--0083).

## Por qué

Pedidos de diseño: *"debe de ser pixel perfect porque ahorita se ve parecido a la UI vieja"*;
*"Quisiera que esto fuera como un story book donde pueda prender todas las funciones o apagar
algunas para ver todas las variantes"*; *"RECUPERA solo lo que SÍ es posible con lo que tenemos en el
figma"*; *"Quita cualquier otra cosa que no sea el chat"*, con la excepción del panel de cambios del Wizard.

## Consecuencias

- El maquetado sale del código que exporta Figma para cada frame (medidas, colores, radios, sombras).
- Quedan fuera: copiar, regenerar y 👍👎 en la respuesta de la IA; la lista de conversaciones; modo oscuro.
- *Interpretación:* «Resumen IA» se muestra como burbuja de nota porque no tiene diseño de salida.
