# 0012 — Mensaje entrante conserva "Editar y publicar"

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** `03.3 · 01` — menú de fila de Mensaje entrante publicado con canal conectado

## Contexto

El bloque `01.1_` de la Épica 3 dice:

> *Gestión de flujos: los Publicados con disparador Campaña, Webhook o Tipificación
> exponen la acción "Editar y publicar".*

Mensaje entrante no está en esa lista, pero nuestro frame sí muestra la acción.

## Decisión

**Se conserva.** No es una exclusión de la épica.

## Por qué

Respuesta de diseño: *"simplemente no ocupé otros disparadores"*. La épica enumera los tres casos que
cubrió, no los únicos válidos.

Esto además es consistente con el código: `editLabelKey(state, connected)` devuelve
`edit_and_publish` para cualquier flujo con `state === 'published'` y `connected === true`,
sin discriminar por disparador. Ver `comportamiento-verificado/menus-de-acciones.md`.
