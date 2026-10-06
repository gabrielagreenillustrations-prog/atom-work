# 0107 — Categorías: Propuesta B, opciones en uso bloqueadas en vez de error

**Estado:** propuesta; el nombre «Propuesta B», reemplazado por [0108](0108-colores-por-tipo-filtros-y-propuesta-unica.md) (se llama «Propuesta»)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-checkbox` · `❖ atom-dropdown-menu` · `❖ atom-tooltip`
**Alcance:** Categorías, `01.3 · 08` y `01.4 · 04`, en filas «Propuesta B» separadas con más espacio.

## Contexto

*Dato verificado en QA:* al desmarcar en Editar una opción con registros asociados aparece el error «Categoría asociada a respuesta rápidas». Al inactivar una categoría en uso, el error llega después de la acción.

## Decisión

Se arma como alternativa (Propuesta B) a lo de producción (Propuesta A):
- **Editar:** la opción en uso aparece marcada y deshabilitada, con la descripción «En uso en 5 respuestas rápidas.» y el link «Ver respuestas rápidas», que abre ese módulo filtrado por la categoría. La opción sin uso sigue editable.
- **Inactivar:** si la categoría está en uso, «Inactivar» aparece deshabilitado en el menú, con el tooltip «En uso en 5 respuestas rápidas.».

## Por qué

Pedido de diseño: *"Proponme una mejora en la experiencia"* … *"arma la propuesta del 3"*.

*Interpretación:* prevenir el error es mejor que mostrarlo después; el texto entrega el dato y el link lleva a resolverlo.

## Consecuencias

- Requiere que backend entregue, por categoría, cuántas respuestas rápidas y cuántas plantillas la usan. Hoy solo avisa al guardar.
- La variante de checkbox con descripción está TBD en Global Patterns.
- Los conteos del Figma son de ejemplo.
