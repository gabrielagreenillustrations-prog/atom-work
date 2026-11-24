# 0129 — Catálogos: columnas según Table Columns Patterns, con las fechas premade

**Estado:** vigente
**Fecha:** 2026-11-23
**Componente:** `❖ atom-data-table` (`_table-column`)
**Alcance:** Configuraciones · Catálogos (Crear catálogo con API y con Google Sheets, lista de
catálogos), y cualquier tabla nueva que se arme en un handoff de adopción del DS.

## Contexto

En la revisión de diseño del handoff de Catálogos, la mayoría de los comentarios fueron sobre
columnas mal aplicadas. Las reglas ya estaban en Global Patterns (página `❖ Table Columns`, nodos
`114:68238` *Creation Date* y `114:68243` *Update Date*) y en [0035](../../01-fundamentos/fechas/0035-formato-de-fecha-premade.md),
pero las tablas se armaron sin revisarlas columna por columna:

- *Dato verificado (comentarios del archivo):* «patrón mal aplicado» en la tabla de la lista de
  catálogos (frame `lista_catalogo_creado_api`) y «ajustar columna de patrones bien de F. Actualización»
  en la tabla de archivos de Google Sheets (`sheets_paso2_archivo_listado`), los dos con link a la
  columna de fecha de Global Patterns.
- *Dato verificado (antes de la corrección):* la tabla de archivos tenía la columna «Actualizado» con
  fechas `17 nov 2026`.

## Decisión

- Toda tabla se revisa **columna por columna** contra Table Columns Patterns antes de entregarla, no
  solo el componente de la tabla.
- Las fechas van en las columnas premade: encabezado **«F. Creación»** (137 px) y
  **«F. Actualización»** (163 px), formato `DD Mmm AA HH:mm` (`18 Ago 26 15:38`), orden descendente
  por defecto con `arrow-down` en la columna que ordena (F. Creación es la principal; F. Actualización
  desempata) y truncado con tooltip.
- No se inventan nombres de columna de fecha («Actualizado», «Fecha», «Última modificación»): se usa
  el del patrón.

## Por qué

Pedido de diseño: corregir las columnas de fecha según el patrón y dejar la regla para que no se
repita. Global Patterns manda en layout y componentes (jerarquía de fuentes en
`formas-de-trabajo/principios.md`).

## Consecuencias

- *Dato verificado (2026-11-23):* lista de catálogos (API) con las columnas Nombre · Origen ·
  Registros · F. Creación (137 px, `arrow-down`) · F. Actualización (163 px) · Usos · Acciones.
- *Dato verificado (2026-11-23):* tabla de archivos de Google Sheets con Nombre · Propietario ·
  F. Actualización, valores `17 Nov 26 00:00`.
- Pendiente de revisión, sin resolver: en la tabla de archivos, F. Actualización mide 330 px (la
  premade mide 163 px); en la lista de catálogos de Google Sheets el orden es Nombre · Origen ·
  Registros · Usos · F. Creación · F. Actualización y la última columna es un encabezado
  «F. Actualización» de 125 px donde la de API tiene Acciones.
- Checklist de tablas en `formas-de-trabajo/trabajar-con-claude.md`.

**Ver también:** [0035](../../01-fundamentos/fechas/0035-formato-de-fecha-premade.md) (formato de fecha y columnas premade)
