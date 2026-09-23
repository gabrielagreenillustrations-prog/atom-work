# Listas

Archivo: **Campañas – Adopción DS 1.0** · sección `296:789000`
Última revisión: **2026-09-23**

---

## Tipos y estados

Dos tipos: **Estática** y **Dinámica**.
Tres estados: **Cargando** · **Completo** · **Actualizando** (enum 0 / 1 / 2).

## Menú de fila

**Depende solo del tipo de lista, no del estado.** Verificado en código —
ver `comportamiento-verificado/menus-de-acciones.md`.

| Tipo | Acciones |
|---|---|
| Dinámica | Editar · Ver configuración · Descargar clientes · Eliminar |
| Estática | Editar · Duplicar · Cambiar nombre · Descargar clientes · Eliminar |

## Filtros

| Chip | Opciones |
|---|---|
| Tipo | Dinámica · Estática |
| Estado | Cargando · Completo · Actualizando *(ciclo de vida)* |
| Creador | buscador + lista de usuarios |
| F. Creación | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado |
| F. Actualización | idem |

Nota: **F. Creación usa `clock-rotate-left` y F. Actualización usa `calendar`.** En
campañas dinámicas, F. Creación usa `calendar`. *Inconsistencia sin resolver.*

## Modales

Duplicar lista (3 estados) · Cambiar nombre (3 estados) · Eliminar lista.

El input de nombre lleva placeholder **`Ej. Clientes recurrentes`**.

## Buscador

Tooltip y placeholder: **`Buscar listas por nombre`**.

---

## Hallazgos abiertos

- La columna **Creador** muestra `1,876` y `3,092` en las dos últimas filas — números en
  vez de usuario.
- El paginador dice `1 - 30 de 21 registros`.

## Housekeeping

Quedaron listas de prueba en QA por borrar o confirmar:
**"QA prueba handoff DS"** (estática, 2303 clientes) y **"QA prueba handoff DS dinamica"**.
