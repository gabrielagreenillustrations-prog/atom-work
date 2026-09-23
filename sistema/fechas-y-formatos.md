# Fechas y formatos

Última revisión: **2026-09-23** · Decisión: [0003](../decisiones/0003-formato-de-fecha.md)

---

## Fecha con hora

**`DD mmm HH:mm`**

- Día con cero a la izquierda: `04`, no `4`
- Mes en minúsculas, tres letras: `sep`, `ene`, `abr`
- Hora en **24 horas**, sin `am` / `pm`
- Ejemplo: `14 sep 15:02`

## Qué NO usar

| Mal | Por qué |
|---|---|
| `14 sep 03:02 pm` | Mezclamos relojes. Se eligió 24 h. |
| `24 mar 15:02 pm` | 24 h **con** sufijo. Es lo que hace Global Patterns y es incorrecto. |
| `05 Abr 14:20` | Mes capitalizado |
| `18 Ago 26 15:38` | Con año, y capitalizado |

## Nota sobre Global Patterns

Patterns **no tiene regla escrita** de formato de fecha. Solo ejemplos, y se contradicen
entre sí. El nuestro llena ese vacío. Si Patterns publica una regla explícita, gana Patterns.

## Números

- Miles con coma: `1,876`
- Porcentajes sin decimal cuando son enteros: `93%`, no `93.0%`
