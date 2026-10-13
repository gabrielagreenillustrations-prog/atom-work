# 0110 — Categorías: Inactivar en uso abre un aviso, y la propuesta cubre todos los casos de uso

**Estado:** reemplazada por [0114](0114-editar-opcion-en-uso-bloqueada-sin-conteo.md) (Editar) y [0115](0115-inactivar-en-uso-deshabilitado-con-tooltip.md) (Inactivar) · reemplazaba en la [0107](0107-propuesta-b-categoria-en-uso-bloqueada.md) el punto «Inactivar deshabilitado»
**Fecha:** 2026-10-06
**Componente:** `❖ atom-dropdown-menu` · `❖ atom-dialog` · `❖ atom-checkbox`
**Alcance:** Categorías, `01.3 · 08–10` y `01.4 · 04–07` (fila «Propuesta»).

## Contexto

La 0107 mostraba «Inactivar» deshabilitado en el menú. Dropdown menu patterns no lo permite: en un menú de acciones no hay ítems en Disabled.

## Decisión

- **Inactivar:**
  - «Inactivar» sigue habilitado en el menú.
  - Si la categoría está en uso, al presionarlo se abre un diálogo informativo, «Categoría en uso». Dice en qué tipo y cuántos registros se usa, sin listarlos.
  - El diálogo solo tiene el botón «Entendido»: no hay Cancelar ni botón de cerrar.
  - Texto: «No puedes inactivar esta categoría porque está en uso en 5 respuestas rápidas. Cámbiala en esas respuestas rápidas y vuelve a intentarlo.» Tiene variantes para plantillas y para ambas (`01.4 · 05–07`).
- **Editar, todos los casos de uso:**
  - `08`: respuestas rápidas en uso.
  - `09`: plantillas en uso.
  - `10`: ambas en uso, con las dos opciones bloqueadas y cada una con su uso y su link.

## Por qué

Pedido de diseño: *"la habilitamos pero cuando presione salta un dialog con el warning que no se puede inhabilitar porque está en uso en tales plantillas o respuestas rápidas, sin mostrarlo solo lo indicamos. Y no puede hacer nada solo «Entendido»"*; *"es necesario mostrar todos los casos de uso, si ambas están en uso"*.

## Consecuencias

- *Interpretación:* el diálogo sigue el tipo Informational de Dialog Patterns. El título «Categoría en uso» no sigue la sintaxis de Confirmation (verbo + sujeto) porque no confirma una acción.
- Sigue dependiendo de que backend entregue el conteo por categoría.
