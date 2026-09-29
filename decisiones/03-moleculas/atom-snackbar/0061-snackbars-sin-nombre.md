# 0061 — Snackbars sin el nombre de la campaña, el flujo o la lista

**Estado:** vigente · reemplaza el punto «nombres de objetos entre comillas» de la [0052](0052-snackbars-copy-y-cierre.md)
**Fecha:** 2026-09-28
**Alcance:** Campañas y Automatizaciones — el copy de todos los snackbars (`❖ atom-snackbar`) y la
tabla de [`sistema/snackbars.md`](../../../sistema/snackbars.md).

## Contexto

La 0052 decía que los nombres de objetos van entre comillas (`"{{campaignName}}"`). La tabla de
copies los mantenía en «Reanudar · éxito», «Cambiar reanudación a automática / manual», «Descargar
clientes · inicia» y dos mensajes de la biblioteca de flujos predefinidos. Las notas de `01.7 · 02–04`
en los dos artefactos de handoff describían el snackbar con el nombre de la campaña, aunque en Figma
ya estaba sin nombre.

## Decisión

Los snackbars no llevan el nombre de la campaña, el flujo o la lista. El objeto se nombra en
genérico: «la campaña», «el flujo», «la lista».

## Por qué

Pedido de diseño: *"recuerda que dejamos que en el patrón íbamos a quitar el nombre de la campaña,
flujo o lista porque pueden ser muy largos"*.

*Interpretación:* un nombre largo lleva el cuerpo a dos líneas o lo recorta; con «Entendido» el
cuerpo entra en una línea hasta unos 60 caracteres (verificado en Figma, 0052).

## Consecuencias

- *Verificado el 2026-09-28:* ningún snackbar de los dos archivos de Figma lleva nombre.
- `sistema/snackbars.md`: cambia el estándar de «Reanudar · éxito», «Cambiar reanudación a
  automática / manual», «Descargar clientes · inicia» y los dos de la biblioteca de flujos
  predefinidos.
- La card «Snackbars informativos y de advertencia» de Campañas (`292:758490`) decía «si no entra, se
  quita el nombre de la campaña»; ahora dice que va sin nombre.
- En los dos artefactos se corrigieron las notas de `01.7 · 02–04`.
