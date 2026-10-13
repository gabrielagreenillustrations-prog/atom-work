# 0095 — Los diálogos se centran respecto al frame completo

**Estado:** vigente · reemplaza la posición de la [0008](0008-centrado-de-modales.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-dialog`
**Alcance:** Etiquetas (`01.2`–`01.4`). Los archivos de Campañas y Automatizaciones siguen con la 0008 hasta que se actualicen.

## Contexto

La 0008 centraba el diálogo sobre el área de contenido, sin el sidebar (con sidebar de 288 y diálogo de 400, `left = 584`), como dice Global Patterns.

## Decisión

El diálogo se centra en los dos ejes respecto al frame completo: `left = (1280 − anchoDiálogo) / 2`. Con 400 → **440**.

## Por qué

Pedido de diseño: *"Para los dialogs, siempre déjalos centrados con respecto al frame."*

*Interpretación:* «siempre» vale para todos los handoffs. No se movieron los modales de Campañas ni de Automatizaciones: queda pendiente confirmarlo.

## Consecuencias

- Los 10 diálogos de Etiquetas están en x = 440 y centrados en vertical.
- Contradice el texto de Global Patterns citado en la 0008: hay que actualizar Patterns o confirmar la excepción.
- `sistema/modales-y-overlay.md` actualizado.
