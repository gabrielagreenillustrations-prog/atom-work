# 0005 — Contador `(N)` cuando hay más de un elemento

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** acciones y títulos de métricas en cualquier submódulo

## Decisión

Cuando la métrica cubre **más de un elemento**, el label lleva el contador entre
paréntesis: **`Métricas de campaña (10)`**, `Métricas de plantillas del flujo (10)`.

Con un solo elemento va sin contador.

## Por qué

Es la convención que ya usa la Épica 3 en sus desgloses (`Errores (15)`). Extenderla a
las acciones evita que el usuario abra un panel sin saber cuántas plantillas va a encontrar.

## Consecuencias

- Frame `01.4 · 08 - Menú de fila · Campaña enviada (Plantilla en lote)` creado para
  documentar el caso.
- `03.9 · 01/03` → `Métricas de plantillas del flujo (2)`; `03.9 · 02/04` → `(10)`.
  Los números salen del propio nombre de cada frame (2/10 y 10/10).
