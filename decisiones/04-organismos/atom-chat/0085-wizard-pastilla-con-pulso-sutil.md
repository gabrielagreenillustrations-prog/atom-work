# 0085 — Wizard: la pastilla con un pulso de sombra sutil

**Estado:** vigente en el prototipo · sin aplicar en Figma
**Fecha:** 2026-10-05
**Componente:** atom-chat · `_atom-chat-composer-pill`

## Contexto

El frame de referencia del Wizard (`11553:11069`) tiene detrás de la pastilla dos manchas
desenfocadas (capa «Gradients»: naranja `#ff6600` 483 × 72 y violeta `#990ffa` 498 × 62, blur 30).
En el prototipo se veían demasiado.

## Decisión

- Sin manchas. La pastilla lleva una sombra corta violeta (`0 6px 24px -6px`, violeta al 35 %) que
  pulsa suave cada 2,6 s y pasa a naranja a mitad del ciclo; al generar, el pulso va más rápido (1,4 s).

## Por qué

Pedido de diseño: *"solo bajarle el alcance y la intensidad, lo dejaría como la primera animación
que hiciste inicialmente"*.

## Consecuencias

- En Figma solo se puede guardar el estado quieto; la animación es para desarrollo.
- Pendiente: decidir si se aplica en `_atom-chat-composer-pill` (el frame de referencia queda intacto).
