# 0003 — Formato de fecha: 24 h sin sufijo

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** todas las tablas y side panels de Campañas y Automatizaciones

## Contexto

Los dos archivos tenían fechas en formatos mezclados: `14 sep 00:45`, `02 sep 01:44 pm`,
`06 jul 7:54 am`, `12 jul 17:10 pm`.

Se buscó la regla en Global Patterns y **no existe**: cero resultados en *Content
Guidelines / UX Writing*, *Table Cells*, *Data Table* y *Data Table Footer*. Solo hay
ejemplos, y se contradicen entre sí:

| Página | Formato | Ejemplo |
|---|---|---|
| Table Rows (mayoritario) | `DD mmm HH:mm am/pm` | `24 mar 15:02 pm` |
| Table Rows (outlier, ×14) | `DD Mmm HH:mm` | `05 Abr 14:20` |
| Table Cells | `DD Mmm AA HH:mm` | `18 Ago 26 15:38` |

El formato mayoritario de Patterns mezcla **reloj de 24 h con sufijo am/pm**
(`15:02 pm`, `23:54 pm`), lo cual es internamente contradictorio.

## Decisión

**`DD mmm HH:mm`** — 24 horas, sin sufijo, mes en minúsculas de tres letras, día con
cero a la izquierda. Ejemplo: `14 sep 15:02`.

## Por qué

Seguir el formato mayoritario de Patterns habría propagado su propia contradicción. Entre
migrar todo a 12 h con sufijo o a 24 h limpio, 24 h es menos texto, no tiene ambigüedad y
es el que ya usaba la mayoría de nuestras tablas.

*Interpretación:* esta decisión llena un vacío de Patterns, no lo contradice. Si Patterns
publica una regla explícita después, gana Patterns.

## Consecuencias

- 1.594 textos normalizados el 2026-09-23 en los dos archivos.
- 442 fechas tenían horas inválidas (`50:54`) o meses inexistentes (`30 min`); ver
  `historial/2026-09-23.md`.
