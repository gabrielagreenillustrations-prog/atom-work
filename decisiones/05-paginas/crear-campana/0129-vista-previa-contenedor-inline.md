# 0129 — Crear campaña: la vista previa es un contenedor de contenido inline, no un side panel

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** todas las pantallas del handoff de Crear campaña (`01.00`–`20.00`) · FRD de Crear campaña (HU-1, HU-19, HU-20).
**Componente:** Páginas · Crear campaña (vista previa)

## Contexto

La vista previa de la plantilla era un `❖ atom-sidepanel`. En desarrollo es un componente flotante, y Global Patterns tiene el patrón *Form + Preview Panel* para un formulario con vista previa.

## Decisión

- La vista previa es un **contenedor de contenido** según *Form + Preview Panel*: sin sombra, fondo `bg/primary`, separador vertical de 1 px (`border/tertiary`) y `❖ atom-horizontal-divider` debajo del título. Va siempre inline, sin botón de cerrar, y no se oculta en ningún ancho.
- Título: «Vista previa de plantilla» con 1 plantilla y «Vista previa de plantillas» con más de 1.
- Con una plantilla elegida, en **todas** las pantallas: debajo del título, «Plantilla: [nombre]» (hasta 3 líneas) y después «Ver métricas de plantilla», como en `20.00 · 01`.
- El ancho, en la [0130](0130-responsive-formulario-600-y-vista-previa-con-clamp.md).

## Por qué

Pedido de diseño en el lote del 19 oct: la vista previa sigue el contenedor de Global Patterns (nodo `30:6666` de Patterns). Sobre el nombre: *"el panel de preview de la plantilla no tiene el nombre de la plantilla cuando ya tiene 1 seleccionada, la experiencia debe quedar uniforme en todo el handoff como la 20.00 - 01 y 02"*.

## Consecuencias

- En Figma, la vista previa es un frame `Vista previa de plantilla(s)` en el `Layout` de cada pantalla, en lugar de la instancia de `❖ atom-sidepanel`.
- *Dato verificado en Figma:* un frame sin fill dejaba invisible el skeleton de `01.00 · 01`; el contenedor lleva fill ligado a `bg/primary` y `strokesIncludedInLayout = false`, para que el borde de 1 px no le cambie el ancho.
</content>
</invoke>
