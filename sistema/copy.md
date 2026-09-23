# Copy y microcopy

Última revisión: **2026-09-23** · Decisiones: [0009](../decisiones/0009-copy-del-buscador.md) · [0010](../decisiones/0010-orden-de-opciones.md)

---

## Buscadores

**`Buscar <entidad en plural> por nombre`**

| Módulo | Copy |
|---|---|
| Resultados de campañas | `Buscar campañas por nombre` |
| Listas | `Buscar listas por nombre` |

El **tooltip y el placeholder dicen exactamente lo mismo**. No hay versión corta del tooltip.

## Estados vacíos

Título: **`Sin resultados`**
Cuerpo: **`Intenta ajustar los filtros o el término de búsqueda.`**
Acción: `Limpiar filtros`

Idéntico en los tres módulos.

## Nombres completos vs. abreviaturas

**Nombre completo cuando hay espacio.**

| Contexto | Forma |
|---|---|
| Título de panel de filtro | `Filtrar por Fecha de creación` |
| Chip de filtro | `F. Creación` |
| Encabezado de columna | `F. Creación` |

## Placeholders de input

Formato **`Ej. <ejemplo real>`**. Ejemplo: `Ej. Clientes recurrentes` en el modal de
duplicar lista.
