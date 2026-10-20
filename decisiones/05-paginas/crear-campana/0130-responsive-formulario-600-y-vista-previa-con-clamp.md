# 0130 — Crear campaña: formulario de hasta 600 px y vista previa con clamp según el área

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** `19.00 · 01–06` y todas las pantallas de Crear campaña · FRD de Crear campaña (HU-19).
**Componente:** Páginas · Crear campaña (layout)

## Contexto

Crear campaña usa *Narrow Page Layout* de Global Patterns. Patterns pone un margen lateral del 15 % del área (24–146 px): en 1280 con el sidebar expandido, el formulario quedaba en 442 px.

## Decisión

- **Formulario:** una columna centrada, en Fill container, con el header dentro del mismo contenedor. Margen lateral mínimo de 24 px; el formulario crece hasta 600 px y desde ahí se centra. Implementación: `padding-inline: max(24px, (100cqi − 600px) / 2)`, medido sobre el área de scroll del formulario.
- **Vista previa** (contenedor de la [0129](0129-vista-previa-contenedor-inline.md)):
  - área de contenido de 992 px o más: 70 / 30, `clamp(360px, 30%, 480px)`;
  - menor a 992 px: 60 / 40, `clamp(280px, 40%, 360px)`.
  - CSS: `grid-template-columns: 1fr clamp(360px, 30%, 480px)`; con `@container (width < 992px)`: `1fr clamp(280px, 40%, 360px)`.
- El `❖ atom-scrollbar` del formulario va pegado al borde derecho del área de scroll y ocupa todo su alto (constraints Right y Top & Bottom).

| Frame | Área | Vista previa | Scroll | Margen | Formulario |
|---|---|---|---|---|---|
| `19.00 · 01` · 1920 expandido | 1632 | 480 | 1152 | 276 | 600 |
| `19.00 · 02` · 1440 expandido | 1152 | 360 | 792 | 96 | 600 |
| `19.00 · 03` · 1280 expandido | 992 | 360 | 632 | 24 | 584 |
| `19.00 · 04` · 1280 colapsado | 1216 | 365 | 851 | 125,5 | 600 |
| `19.00 · 05` · 1024 expandido | 736 | 294 | 442 | 24 | 394 |
| `19.00 · 06` · 768 colapsado | 704 | 282 | 422 | 24 | 374 |

Sidebar: 288 px expandido, 64 px colapsado.

## Por qué

Excepción de diseño a *Narrow Page Layout*. El ancho de la vista previa es una regla de diseño acordada con el tech lead (así figura en la card de 19.00 y en el FRD).

## Consecuencias

- *Propuesta, sin decidir:* con el formulario por debajo de ~400 px (`19.00 · 05–06`), las dos cards de tipo de campaña se apilan y los valores largos de los selectores se truncan con «…» y tooltip.
</content>
</invoke>
