# 0080 — El sidebar nuevo (`❖ atom-sidebar-complete`) queda visible en los dos archivos

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-sidebar-complete (Design Internal)`
**Alcance:** Automatizaciones, page *Automatizaciones Handoff v1* (103 pantallas), y Campañas, pages
*Campañas Handoff v1* (91) y *Campañas Handoff v2* (33).

## Contexto

Cada pantalla tiene un frame «SideBar» (auto layout, Hug) con dos opciones: «SideBar Actual», de 264 px
(rail de 64 + navegación de 200), visible, y `❖ atom-sidebar-complete (Design Internal)`, el sidebar
nuevo, oculto hasta que desarrollo tuviera el componente. El contenido, `Container (Page Main Content)`,
es hermano de «SideBar» dentro del auto layout «Layout» y ocupa el resto del ancho.

*Dato verificado* (la referencia): en *Conversaciones - Adopción DS 1.0* («Handoff Bandeja Primer
Scope»), 37 pantallas usan el `❖ atom-sidebar-complete` de 288 px y el contenido empieza en x = 288,
con 992 de ancho.

## Decisión

- «SideBar Actual» oculto y `❖ atom-sidebar-complete` visible, de 288 × 832: rail de 64 y navegación
  de 224. En 23 pantallas de Historial la instancia medía 64 (la navegación desbordaba) y pasó a 288.
- El contenido pasa de x = 264 a x = 288 y de 1016 a 992 de ancho. En 7 pantallas de Historial el
  `Container` tenía ancho fijo y pasó a Fill.
- Lo suelto sobre la pantalla se realinea:
  - Los diálogos se centran sobre el contenido con la fórmula de la
    [0008](../atom-dialog/0008-centrado-de-modales.md), ahora con sidebar 288: 400 → x = 584,
    488 → 540, 598 → 485.
  - Lo que se abre sobre un diálogo se mueve con él.
  - Menús, tooltips, cursores, paneles de filtro y botones sueltos se mueven con el elemento de la
    pantalla que tienen debajo.
  - No se mueven los backdrops (pantalla completa), los side panels y snackbars pegados a la derecha
    ni lo que está fuera del frame.

## Por qué

Pedido de diseño: *"ahora lo dejaremos con el nuevo porque ya lograron desarrollar el componente"*.
Realinear lo suelto y recentrar los diálogos: respuesta de diseño.

*Interpretación:*

- Los diálogos de Automatizaciones no seguían la 0008 (598 en x = 407, 488 en 462, 400 en 440); ahora
  sí, con el sidebar nuevo.
- Las 23 instancias de 64 de Historial se llevaron a 288, como las demás y como la referencia.

## Consecuencias

- Automatizaciones: 103 pantallas y 140 elementos movidos (25 diálogos, 5 elementos sobre diálogos,
  110 con el elemento de abajo).
- Campañas: 124 pantallas y 28 elementos movidos (20 diálogos y 8 con el elemento de abajo).
- En los dos archivos hay una versión de Figma «Antes del sidebar nuevo» para volver atrás.
- La tabla de posiciones de `sistema/modales-y-overlay.md` pasa a sidebar 288.
- Las pantallas guardan, fuera del frame, copias de `❖ atom-sidebar` (solo el rail) que no se ven; no
  se tocaron.
