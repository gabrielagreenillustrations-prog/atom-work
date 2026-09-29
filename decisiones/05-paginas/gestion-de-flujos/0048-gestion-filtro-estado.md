# 0048 — Gestión de flujos: Canal, «No conectado» y filtro «Estado» con `circle-dot`

**Estado:** vigente
**Fecha:** 2026-09-25
**Alcance:** Automatizaciones · Gestión de flujos — encabezados, celdas y paneles de filtro.
Reemplaza a [0019](0019-gestion-canal-y-estado-de-flujo.md).

## Contexto

La [0019](0019-gestion-canal-y-estado-de-flujo.md) llamó al filtro de estado «Estado de flujo». En los
paneles de filtro de Figma la categoría ya decía «Estado» y el título, «Filtrar por Estado».

## Decisión

- «Canales» → **«Canal»**, en singular. *(Sin cambios respecto de la 0019.)*
- «Sin conectar» → **«No conectado»**. *(Sin cambios.)*
- Un solo filtro de estado, llamado **«Estado»**, con el ícono **`circle-dot`**: Borrador · Publicando ·
  Publicado · Migrando · Con error · Inactivo. La vista por defecto no muestra inactivos
  ([0038](0038-gestion-vista-por-defecto-sin-inactivos.md)).

## Por qué

Diseño: *"Va solo estado con icon circle-dot"*.

## Consecuencias

- Figma: los textos que decían «Estado de flujo» pasan a «Estado», y los frames `03.2 · 08` y
  `03.2 · 09` se renombraron. *Verificado el 2026-09-25:* no queda «Estado de flujo» en
  Automatizaciones fuera de `03.8 · Specs · Columna Canal` y «NO TOCAR», que no se tocan; los seis
  paneles de filtro de Gestión muestran Estado con `circle-dot`.
- La documentación pasa de «Estado de flujo» a «Estado».
