# 0028 — Menús de fila de Gestión de flujos: mapa por disparador y estado

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — sección 03.3.

## Contexto

La sección tenía 14 frames (`03.3 · 01–14`) por disparador y estado. *Con error* no tenía frames:
el handoff lo documentaba en una fila sin frame. Diseño mapeó los menús de Campañas (`01.4`) y
pidió lo mismo para Gestión: *"por cada estado y cada tipo o variación dejar claro cómo se ven
las acciones"*.

## Decisión

La sección 03.3 es una grilla: **una fila por disparador** (Mensaje entrante · Campaña · Webhook ·
Tipificación · Lista dinámica) y **una columna por estado** (Publicado · variación · Borrador ·
Con error · Inactivo · Publicando · Migrando), con una card por fila.

- *Con error* tiene un frame por disparador (`03.3 · 15–19`): el mismo menú que el Borrador de
  ese disparador, con el badge Danger «Con error» en la fila.
- *Inactivo*, *Publicando* y *Migrando* no dependen del disparador: sus frames (`03.3 · 12–14`)
  van en la fila de Mensaje entrante y en las demás filas una nota dice «Igual que 03.3 · 12/13/14:
  no depende del disparador».

## Por qué

El código define el menú por disparador + si está publicado
([comportamiento verificado](../../../comportamiento-verificado/menus-de-acciones.md)), y un flujo
*Con error* muestra el menú del borrador de su disparador (captura de producción de un flujo de
Tipificación). La grilla muestra cada combinación sin repetir frames que no dependen del
disparador.

## Consecuencias

- Frames nuevos: `03.3 · 15` (`119:489165`), `16` (`119:494900`), `17` (`119:500715`),
  `18` (`119:506532`) y `19` (`119:512347`).
- Las filas `03.4` a `03.9` bajaron para hacerle lugar. La columna de ejemplo de diseño
  (`67:70407`) bajó con su fila de `03.8`, sin cambios.
- En el handoff, la fila «Con Error (sin frame propio)» se reemplazó por las cinco filas nuevas;
  la captura de producción quedó en `03.3 · 18`.
