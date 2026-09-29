# 0013 — Las reglas sin representación visual no se llevan al handoff

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** Gestión de flujos — reglas de la Épica 3 (página *Actual UI*)

## Contexto

La sección `🅷 Handoff — Edición de flujos salientes publicados (Épica 3)` tiene tres reglas
sin pantalla asociada:

1. La URL del webhook no cambia al editar (`01.1_`).
2. Un flujo publicado no puede volver a Borrador: «Guardar flujo» queda deshabilitado (`01.2_`).
3. Si la publicación falla se conserva la versión publicada anterior (`01.3_`).

El pendiente era anotarlas en la descripción interna de la sección de Gestión de flujos.

## Decisión

**No se llevan al handoff.** Las reglas sin visual se leen en la épica.

## Por qué

Pedido de diseño: *"Si no tienen visual entonces no debemos llevarnoslas"*.

*Interpretación:* el handoff documenta pantallas; una regla sin pantalla ya tiene su fuente
en la épica, y copiarla sería mantener el mismo texto en dos lugares.

## Consecuencias

- No se agregan notas en las cards de la sección.
- La tercera regla sí tiene pantalla y se queda: `03.7 · 14 - Snackbar Error · Error al publicar`
  — *"No se pudo publicar el flujo. Se conserva la versión publicada anterior."*
