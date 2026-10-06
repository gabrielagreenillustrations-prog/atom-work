# 0094 — Etiquetas: el handoff lleva dos propuestas y solo los estados que existen hoy

**Estado:** vigente
**Fecha:** 2026-10-06
**Componente:** página Etiquetas (`/settings/tags`)
**Alcance:** archivo *Configuraciones - Adopción DS 1.0* (`musx1ZGk7hbdUdroEqiWLh`), page *Etiquetas 🟠*, sección «Handoff Etiquetas · /settings/tags».

## Contexto

*Dato verificado:* la page estaba vacía. El FRD (*Migración de módulos al DS — Etiquetas, Salesforce y Partners*, HU-01) dice «Figma: N/A — migración técnica manteniendo estructura actual» y la spec técnica migra la grilla de `MatCard` a `atom-card`. Global Patterns y el módulo de Campos de información usan `❖ atom-data-table`.

*Dato verificado en QA* (con una etiqueta de prueba creada, editada y eliminada): crear, editar y eliminar no muestran snackbar; el input corta en 15 caracteres; el error de mínimo y el de duplicado aparecen al enviar; los íconos de la card tienen tooltip «Editar» y «Eliminar». No hay estado vacío ni error de carga con copy en i18n.

## Decisión

- La vista de etiquetas va en dos propuestas, en filas separadas del grupo `01.1`: **Propuesta A · Grilla** (`❖ atom-card`) y **Propuesta B · Tabla** (`❖ atom-data-table`).
- Las dos llevan buscador en `❖ atom-toolbar`, con tooltip, búsqueda con resultados y búsqueda sin resultados.
- Solo se diseñan los estados que existen hoy: no hay snackbars, loading de página, vacío ni error de carga.
- Grupos: `01.1` Ver etiquetas, `01.2` Crear, `01.3` Editar, `01.4` Eliminar.

## Por qué

Pedido de diseño: grilla y tabla «Las dos (Propuesta A / B)», estados sin definir «Solo lo que existe hoy», numeración «01.x», y después: *"en la propuesta de cards [...] podemos usar una toolbar con el search [...] y que los resultados se muestren en las cards, así que podemos mostrar los resultados de [...] search en ambas propuestas"*.

## Consecuencias

- Los diálogos (`01.2`–`01.4`) usan la Propuesta A de fondo.
- El copy «Sin resultados» + «Intenta ajustar los filtros o el término de búsqueda.» se tomó del estándar (`sistema/copy.md`), aunque Etiquetas no tiene filtros. Pendiente de diseño: si se suman filtros y cuáles.
- El FRD pide «no se crean nuevas claves de i18n»; el buscador, el contador y el copy normalizado (0098) las necesitan. Propuesta de actualización del FRD pendiente de aprobación.
