# Menús de acciones — reglas verificadas en código

Verificado el **2026-09-23** en QA. Acciones ocultas de Gestión de flujos: **2026-09-25**, en QA.

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
[0012](../decisiones/03-moleculas/atom-dropdown-menu/0012-mensaje-entrante-editar-y-publicar.md).

### Acciones que se ocultan

*Verificado el 2026-09-25 en QA* (`https://atomchat-qa.web.app/automations/flows`): con
`ng.getComponent` sobre `app-unified-flow-actions-menu` se llamó `getActions(row)` de cada estrategia
con cada estado. Ninguna acción trae `disabled`: las que no aplican no se devuelven.

| Estrategia | Publicado | Borrador (`saved`) |
|---|---|---|
| inbound (Mensaje entrante) | Ver flujo · Editar (y publicar) · Duplicar · Ver detalles · Desactivar | Editar flujo · Ver detalles · Duplicar · Desactivar |
| campaign / webhook | Ver flujo · Editar y publicar · Métricas de plantilla · Simular · Duplicar · Ver detalles · Desactivar | Editar flujo · Simular · Publicar · Duplicar · Ver detalles · Desactivar |
| typification | Ver flujo · Editar y publicar · Métricas de tipificación · Duplicar · Ver detalles · Desactivar | Editar flujo · Publicar · Duplicar · Ver detalles · Desactivar |
| dynamicList | Ver flujo · Métricas de flujo · Duplicar · Ver detalles · Desactivar | Editar flujo · Publicar · Duplicar · Ver detalles · Desactivar |

*Con error* y *Migrando* devuelven lo mismo que el borrador. «Descargar JSON» no existe en QA
([0011](../decisiones/03-moleculas/atom-dropdown-menu/0011-descargar-json-se-mantiene.md)). En Figma las acciones ocultas se muestran en
Disabled — decisión [0046](../decisiones/03-moleculas/atom-dropdown-menu/0046-gestion-acciones-no-disponibles-en-disabled.md).

Copy de Detener campaña en QA (`dialog-campaigns.stop_scheduled_campaign` y
`stop_in_progress_campaign`): termina en «…se reasignarán las conversaciones al bot.».

### Casos sin menú

| Condición | Qué se muestra |
|---|---|
| `hidden === true` | Sin menú. Un único icon button, tooltip `Activar flujo`. |
| Estado *Publicando* | `actionsDisabled = true` → botón deshabilitado |
| Estado *Migrando* | `actionsDisabled = true` → botón deshabilitado |

### Con error

Un flujo *Con error* no está publicado: muestra el menú del borrador de su disparador y solo
cambia el badge. *Verificado en producción* con un flujo de Tipificación Con error: Editar flujo ·
Publicar · Duplicar · Ver detalles · Desactivar (captura en el handoff, fila `03.3 · 18`).

---

## Lo que no se pudo verificar en vivo

El estado **Actualizando** de una lista no se pudo provocar en QA: editar una lista
dinámica no es retroactivo, y agregar clientes la deja en *Cargando*.

La conclusión de que su menú es idéntico viene **del código**, no de observación.

*Revisado de nuevo el 2026-09-28:*

- Con el filtro Estado = Actualizando no aparece ninguna lista, ni en QA ni en producción (solo
  lectura).
- En QA, la tabla tiene 410 listas: 404 en Completo (`1`), 6 en Cargando (`0`) y ninguna en
  Actualizando (`2`).
- `fillActionActivation()` sigue usando solo `list.type` (`?? ListType.Static`).
- Un servicio que carga las listas (con caché) se queda solo con las de
  `list.status === ListStatus.completed`. *Interpretación:* es el que alimenta el selector de listas
  al crear una campaña, así que una lista en Cargando o Actualizando no se podría elegir. No lo
  verifiqué en pantalla.

*Prueba en QA del 2026-09-28*, con permiso de diseño. Se crearon dos listas de prueba, que siguen
en QA:

- «QA handoff prueba Actualizando» (estática, `K8eBSkS3bsBt7G5d7nL9`);
- «QA handoff prueba Actualizando dinamica» (dinámica, `1nqAMaHaQtAJWEqVWzGu`).

En otra pestaña se registró cada cambio de su fila en la tabla, cada 100 ms y con un observador del
DOM, solo lectura:

| Acción | Estado observado |
|---|---|
| Crear la estática desde clientes existentes | Cargando → Completo en menos de un minuto |
| Añadir clientes a la estática (3 veces: 23 fallidos, 53 agregados, 68 fallidos) | Siempre Completo; cambian Clientes y F. Actualización |
| Crear la dinámica | Completo al instante, 0 clientes |
| Editar las condiciones de la dinámica («La edición no es retroactiva») | Siempre Completo; cambia F. Actualización |

Menús vistos en la prueba:

- Estática: Editar · Duplicar · Cambiar nombre · Descargar clientes · Eliminar.
- Dinámica: Editar · Ver configuración · Descargar clientes · Eliminar.

Ninguna de estas acciones dejó la lista en Actualizando. Un cambio de estado más corto que el intervalo
de muestreo se habría perdido.

*Interpretación:* lo que queda por probar es:

- la actualización de las dinámicas que parece programada: en QA una se actualizó hoy a las 09:16;
  en producción, una hoy a las 09:18 y varias ayer a las 09:16, hora local;
- la carga por CSV;
- HubSpot.
