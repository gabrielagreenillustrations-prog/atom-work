# 0018 — Listas: filtro nuevo «Origen»

**Estado:** vigente solo en la page «Handoff v2» — ver [0056](../../06-proceso-y-fuentes/handoff/0056-handoff-v2.md)
**Fecha:** 2026-09-23
**Alcance:** Campañas · Listas — paneles de filtro (`02.2 · 04–09`).

## Contexto

El archivo *Crear listas AI, MCPs y CSV* mantiene Tipo = Estática · Dinámica y Estado =
Cargando · Completo, y agrega el **origen** de la lista (Clientes existentes · Desde apps
conectadas · Cargar un archivo), que también es el selector de «Crear nueva lista».

## Decisión

Categoría nueva **Origen** en el panel de filtros de Listas, con tres opciones en orden
alfabético: **Cargar un archivo · Clientes existentes · Desde apps conectadas**. Tipo queda
Dinámica · Estática.

## Por qué

Respuesta de diseño a la pregunta de cómo llevar lo nuevo del archivo de *Crear listas*: *"Filtro nuevo
«Origen»"*.

*Interpretación:* Origen va después de Tipo (Tipo · Origen · Estado · Creador · F. Creación ·
F. Actualización).

*Interpretación:* el ícono de la categoría es `database`.

## Consecuencias

- Los 5 paneles de `02.2 · 04–08` suman la categoría.
- Frame nuevo `02.2 · 09 - Filtro · Origen abierto`, con el contador «0 de 3».
- No se agregó una columna Origen a la tabla de Listas: no se pidió.
