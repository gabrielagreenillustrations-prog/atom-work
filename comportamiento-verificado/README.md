# Comportamiento verificado

Reglas **leídas del código de producción**, no deducidas de los diseños. Es la fuente de
mayor jerarquía cuando algo se contradice.

| Archivo | Qué cubre |
|---|---|
| [menus-de-acciones.md](menus-de-acciones.md) | De qué depende el menú de fila en Listas y en Flujos |

## Cómo se verifica

Con el debug de Angular en el entorno de **QA**:

```js
ng.getComponent(el)        // el componente de ese elemento
ng.getOwningComponent(el)
ng.getContext(el)
ng.getDirectives(el)
```

Los signals de Angular hay que **llamarlos**: `c.flow()`, `c.strategyActions()`.

El build de **producción no expone `window.ng`**, así que esto solo se puede hacer en QA.
