# 0009 — Copy del buscador: "Buscar \<entidad\> por nombre"

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** buscadores de Campañas y Listas

## Decisión

- Campañas → **`Buscar campañas por nombre`**
- Listas → **`Buscar listas por nombre`**

El **tooltip y el placeholder dicen exactamente lo mismo**.

## Por qué

Antes decía `Buscar por nombre de campaña`, que empieza por la acción genérica y deja la
entidad al final. La forma nueva pone la entidad adelante.

En Listas además había una inconsistencia real: el tooltip decía solo `Buscar` y el
placeholder `Buscar por nombre de lista`.

## Consecuencias

Los estados vacíos ya estaban alineados en los tres módulos y no se tocaron:
`Sin resultados` + *"Intenta ajustar los filtros o el término de búsqueda."*
