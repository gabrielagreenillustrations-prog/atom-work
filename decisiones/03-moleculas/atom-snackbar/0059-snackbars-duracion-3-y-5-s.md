# 0059 — Snackbars: duración de 3 s o 5 s, sin excepciones de 8 s

**Estado:** vigente
**Fecha:** 2026-09-26
**Alcance:** snackbars de Campañas y Automatizaciones (`sistema/snackbars.md`).

## Contexto

El código de la tabla de campañas usa 3 s para los snackbars y 8 s para el aviso de límite diario
de WhatsApp (revisión del código del 18 sep). La regla de la [0052](0052-snackbars-copy-y-cierre.md)
dejaba la duración a desarrollo.

## Decisión

Los snackbars duran 3 s o 5 s, como en el pattern del Web Library. El aviso de límite diario no
dura 8 s.

## Por qué

Pedido de diseño: *"si tiene esa regla de 8 segundos no será válido por el pattern establecido en web library
de la duración de 3s y 5s"*.

## Consecuencias

- *Verificado:* la página Snackbar del Web Library dice *"Snackbars dismiss automatically after N
  ms"* y que los que tienen acción pausan el temporizador con el cursor encima. Los valores 3 s y 5 s
  no aparecen en los textos del Web Library (búsqueda en sus 99 páginas) ni Global Patterns tiene una
  página de snackbars.
- Falta saber cuál de las dos duraciones va en cada caso (pregunta en `RETOMAR.md`).
- El formato del aviso de límite diario sigue en pregunta (`sistema/snackbars.md`).
