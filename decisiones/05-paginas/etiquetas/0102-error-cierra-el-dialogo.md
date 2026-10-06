# 0102 — Etiquetas: con error, el diálogo se cierra y queda el snackbar

**Estado:** vigente · reemplaza la interpretación de error de la [0101](0101-snackbars-en-etiquetas.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-dialog` · `❖ atom-snackbars-stack`
**Alcance:** Etiquetas (`01.2 · 07`, `01.3 · 06`, `01.4 · 03`).

## Contexto

La 0101 suponía que, si falla la acción, el diálogo sigue abierto con el botón habilitado para reintentar.

## Decisión

Con error, el diálogo se cierra igual que con éxito y el snackbar Error queda sobre la lista. Dura de 3 a 5 s y se pausa con hover sobre el snackbar o su botón.

## Por qué

Dato de diseño: *"esto no existe técnicamente, desaparecen igual de 3 a 5 segundos de duración. A menos que se haga hover sobre el snackbar o button, ahí sí se detiene"*.

## Consecuencias

- Los tres frames de error ya no tienen diálogo ni backdrop, y se renombraron «Etiquetas · Snackbar error · [acción]».
