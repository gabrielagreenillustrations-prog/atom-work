# Menús de acciones — reglas verificadas en código

Verificado el **2026-09-23** en QA.

---

## Listas

`app-list-actions-menu.fillActionActivation()` usa **únicamente `list.type`**.
El estado de la lista **no influye** en qué acciones aparecen.

```
actionActivationConfigs = {
  viewConfig:            [dynamic],
  view:                  [static],
  duplicate:             [static],
  changeName:            [static],
  download:              [static, dynamic],
  delete:                [static, dynamic],
  editDynamicConditions: [dynamic]
}
```

Enum de estado (solo afecta al tag, no al menú):

| Valor | Estado |
|---|---|
| 0 | Cargando (*processing*) |
| 1 | Completo (*completed*) |
| 2 | Actualizando (*updating*) |

**Consecuencia:** el menú de una lista en Cargando, Completo o Actualizando es el mismo.
No hacen falta frames distintos por estado.

## Flujos

`app-unified-flow-actions-menu` + `strategyRegistry.getStrategy(type)`:

| Tipo | Estrategia |
|---|---|
| `bot` | inbound |
| `template` | campaign |
| `webhook` | webhook |
| `trigger` / `typification` | typification |
| `dynamic-list` | dynamicList |

`getActions(flow)` depende **solo del tipo + si está publicado**.

`editLabelKey(state, connected)` devuelve `'actions.edit_and_publish'`
**solo si** `state === 'published'` **y** `connected === true`. En cualquier otro caso,
la etiqueta de editar simple. **No discrimina por disparador** — ver
[0012](../decisiones/0012-mensaje-entrante-editar-y-publicar.md).

### Casos sin menú

| Condición | Qué se muestra |
|---|---|
| `hidden === true` | Sin menú. Un único icon button, tooltip `Activar flujo`. |
| Estado *Publicando* | `actionsDisabled = true` → botón deshabilitado |
| Estado *Migrando* | `actionsDisabled = true` → botón deshabilitado |

---

## Lo que no se pudo verificar en vivo

El estado **Actualizando** de una lista no se pudo provocar en QA: editar una lista
dinámica no es retroactivo, y agregar clientes la deja en *Cargando*.

La conclusión de que su menú es idéntico viene **del código**, no de observación.
