# 0125 — Stickers: cómo se ajusta la imagen en la card

**Estado:** vigente · cómo va la imagen en la card, reemplazado por la [0128](0128-stickers-imagenes-de-internet-como-relleno-de-la-card.md)
**Fecha:** 2026-10-12
**Componente:** `❖ atom-card` (área de imagen)
**Alcance:** Stickers, `01.1 · 16` (specs) y todas las cards.

## Contexto

*Dato verificado en el código de QA:* `convertToStickerWebp` dibuja la imagen en un lienzo de 512 × 512 con escala `min(512/ancho, 512/alto)`, centrada y con fondo transparente; las imágenes más chicas se amplían. El WebP animado que no mide 512 × 512 se rechaza. En la card, la imagen va con `object-fit: contain`. *Dato verificado en QA:* los 23 stickers cargados miden 512 × 512.

## Decisión

- Frame de specs `01.1 · 16` con cuatro casos: cuadrada, horizontal, vertical y pequeña (archivo original → lienzo 512 × 512 → card).
- En la card: área de imagen con fondo `bg/secondary` y 8 px de padding; la imagen en contain, centrada, a 124 × 124 px, sin recortar ni deformar.

## Por qué

Pedido de diseño: *"Haz una parte de aclaración de cómo la card ajustará el tamaño de las imágenes [...] si la imagen es horizontal o muy pequeña"*.

*Interpretación:* los 124 px salen de la card de 140 a 168 px de la [0118](0118-stickers-handoff-desde-qa-grilla-de-atom-card.md); en QA la imagen mide 140 px dentro de una card de 166.
