# 0128 — Stickers: imágenes de internet como relleno del ImageSlot de la card

**Estado:** vigente · reemplaza a la [0124](0124-stickers-imagenes-de-ejemplo.md) y, en la [0125](0125-stickers-imagen-en-la-card.md), cómo va la imagen en la card
**Fecha:** 2026-10-12
**Componente:** `❖ atom-card` (`↳ ImageSlot`)
**Alcance:** todas las cards de Stickers y el frame de specs `01.1 · 14`.

## Contexto

Los stickers de ejemplo de la [0124](0124-stickers-imagenes-de-ejemplo.md) (fondo pastel, ícono y texto) se veían como piezas del sistema. Además vivían como componentes locales `sticker-ejemplo/…`, que parecían componentes sueltos fuera del Design System.

## Decisión

- Imágenes de ejemplo: emojis 3D de Fluent Emoji de Microsoft (licencia MIT), sin marcas ni personas: corazón, mano saludando, camión, paquete, estrella, cotillón, bolsa de dinero y reloj de arena. Para los casos horizontal y vertical, una tira de tres.
- La imagen no es un componente ni una capa aparte: es el relleno (fill) del `↳ ImageSlot` de `❖ atom-card`, sobre el fondo `bg/secondary`, en modo Fit (contain), centrada, sin recortar ni deformar.
- Se eliminan los componentes `sticker-ejemplo/…` y el frame «Assets · Stickers de ejemplo».
- *Dato verificado en Figma:* el alto del slot no se puede sobrescribir en la instancia; sin hijo, el área de imagen queda con su alto por defecto (102 px en una card de 168 px).

## Por qué

Pedido de diseño: *"vamos a cambiar los Assets · Stickers de ejemplo por imagenes de stickers de internet, para que no confundan si son del sistema."* y *"no tiene que ser en un componente, sino la imagen puede ser simplemente el atributo de la card dentro del image slot"*.
