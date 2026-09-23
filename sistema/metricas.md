# Métricas

Última revisión: **2026-09-23** · Decisiones: [0004](../decisiones/0004-errores-reemplaza-fallidos.md) · [0005](../decisiones/0005-contador-en-metricas.md)

---

## Nombres

| Métrica | Ícono |
|---|---|
| Clientes | `user` |
| Enviados | — |
| Leídos | — |
| Respondidos | — |
| **Errores** | `triangle-exclamation` |
| **No entregados** | `ban` |

`Errores` reemplazó a `Fallidos`. **`No entregados` sigue siendo una métrica separada**,
no se absorbe dentro de Errores.

## Desgloses

Formato **`Nombre (N)`**: `Errores (15)`, `No entregados (22)`.

## Títulos de panel

Llevan el nombre del elemento: `Métricas de campaña: Encuesta satisfacción Q2`,
`Métricas de flujo dinámico: Recuperación de carritos`.

Cuando cubren **más de un elemento**, llevan contador: `Métricas de plantillas del flujo (10)`.

## Pendiente de decidir

La Épica 3 muestra además, en el panel de métricas de campaña:

- un subtítulo: *"Analiza el rendimiento de los envíos y el impacto de esta campaña."*
- un badge de calidad: `Calidad Alta`

Nuestros paneles no los tienen. Son **nodos nuevos**, no overrides de texto. Falta que
Miguel decida si se agregan.
