# 0046 — Menús de Gestión de flujos: las acciones no disponibles se muestran en Disabled

**Estado:** reemplazada por [0053](0053-acciones-no-disponibles-se-ocultan.md)
**Fecha:** 2026-09-25
**Alcance:** Automatizaciones · Gestión de flujos — menús de fila de la sección `03.3`.

## Contexto

En Campañas las acciones que no aplican al estado se muestran en Disabled
([0042](0042-acciones-no-disponibles-y-descargar-errores.md)). En Gestión de flujos Atom las oculta:
cada estrategia devuelve solo las acciones disponibles.

*Verificado en QA el 2026-09-25* (`app-unified-flow-actions-menu` → `strategyRegistry` →
`getActions(row)`): ninguna acción trae `disabled`; las que no aplican no se devuelven.

| Disparador | Publicado oculta | Borrador y Con error ocultan |
|---|---|---|
| Mensaje entrante | — | Ver flujo |
| Campaña | Publicar | Ver flujo · Métricas de plantilla |
| Webhook | Publicar | Ver flujo · Métricas de plantilla |
| Tipificación | Publicar | Ver flujo · Métricas de tipificación |
| Lista dinámica | Editar flujo · Publicar | Ver flujo · Métricas de flujo |

## Decisión

Cada menú muestra todas las acciones de su disparador. Las que no aplican al estado van en
Disabled, en el lugar que ocupan en el otro estado. «Editar y publicar» aparece solo en un flujo
publicado con canal conectado ([0012](0012-mensaje-entrante-editar-y-publicar.md)); si no,
«Editar flujo»:

| Disparador | Orden del menú |
|---|---|
| Mensaje entrante | Ver flujo · Editar y publicar / Editar flujo · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Campaña · Webhook | Ver flujo · Editar y publicar / Editar flujo · Métricas de plantilla · Simular · Publicar · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Tipificación | Ver flujo · Editar y publicar / Editar flujo · Métricas de tipificación · Publicar · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Lista dinámica | Ver flujo · Editar flujo · Métricas de flujo · Publicar · Duplicar · Ver detalles · Descargar JSON · Desactivar |

Quedan como están: el flujo **Inactivo** (sin menú, solo el icon button «Activar flujo») y los estados
**Publicando** y **Migrando** (el botón de acciones completo en Disabled).

## Por qué

Pedido de diseño: *"dejar igual el pattern que establecimos de mostrar las acciones que no están
disponibles en disabled en lugar de ocultarlas"*.

*Interpretación:* Atom oculta «Publicar» en un flujo publicado porque en ese estado se publica con
«Editar y publicar».

*Interpretación:* en una Lista dinámica publicada la acción de editar en Disabled se llama «Editar
flujo»: Atom no la muestra en ese estado, así que no hay una etiqueta de referencia.

## Consecuencias

- Figma: 14 menús de `03.3` tienen acciones en Disabled: los 11 de Borrador, Con error y Publicado que
  ocultaban algo (`03`–`09` y `15`–`18`) y los 3 nuevos de Lista dinámica (`19`–`21`). Los de Mensaje
  entrante publicado (`01`, `02`) no cambian: no ocultan nada. *Verificado el 2026-09-25.*
- Los menús que crecieron y abren hacia arriba subieron lo que crecieron, para no tapar el botón de
  la fila.
- «Descargar JSON» sigue siendo la mejora de producto ([0011](0011-descargar-json-se-mantiene.md)): no
  existe en QA.
