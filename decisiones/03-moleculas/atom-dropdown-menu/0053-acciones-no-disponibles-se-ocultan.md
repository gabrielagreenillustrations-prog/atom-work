# 0053 — Menús de acciones: las acciones no disponibles se ocultan

**Estado:** vigente
**Fecha:** 2026-09-26
**Alcance:** Campañas · Resultados (`01.4` y los menús de dinámicas) y Automatizaciones · Gestión
de flujos (`03.3`). Reemplaza a [0042](0042-acciones-no-disponibles-y-descargar-errores.md) y a
[0046](0046-gestion-acciones-no-disponibles-en-disabled.md).

## Contexto

La 0042 y la 0046 mostraban en Disabled las acciones que no aplican al estado. Atom, en Gestión de
flujos, ya las oculta (*verificado en QA el 2026-09-25*, contexto de la 0046).

## Decisión

- En los menús de acciones, una acción que no aplica al estado **no se muestra**. No hay ítems en
  Disabled.
- «Descargar errores» aparece solo si la fila tiene Fallidos (más de 0).
- Disabled queda para controles que están siempre a la vista (botones, filtros, «Limpiar filtros»).

La teoría y la lista de menús están en [`sistema/acciones-no-disponibles.md`](../../../sistema/acciones-no-disponibles.md).

## Por qué

Pedido de diseño: *"Eliminar de los diseños las acciones inhabilitadas; las no disponibles deben
ocultarse segun el pattern"*.

## Consecuencias

- *Verificado el 2026-09-26:* ninguno de los 23 menús de Resultados (`01.4` y los 8 de dinámicas)
  ni de los 19 de `03.3` tiene ítems en Disabled.
- Los menús que abren hacia arriba y se achicaron bajaron lo mismo, para seguir pegados al botón de
  la fila.
- Pregunta: en `01.4 · 04` (En pausa) el menú de Flujo tenía «Detener campaña» en Disabled y el de
  Plantilla habilitado; con la regla, el de Flujo lo oculta.
