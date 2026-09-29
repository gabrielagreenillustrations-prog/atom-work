# 0050 — Todas las fechas siguen el formato «DD Mmm AA HH:mm», también en textos corridos

**Estado:** vigente
**Fecha:** 2026-09-25
**Alcance:** los dos archivos: alertas, textos de apoyo y cualquier fecha fuera de las tablas.

## Contexto

La alerta de calidad baja de los side panels de métricas (`01.6 · 06–10`) decía «Calidad baja -
Pausada hoy, 09:18.», con fecha relativa.

## Decisión

No se usan fechas relativas («hoy», «ayer») como valor de una fecha: toda fecha va en el formato de
la [0035](0035-formato-de-fecha-premade.md), por ejemplo «Calidad baja - Pausada 24 Sep 26 09:18.».

## Por qué

Diseño: *"Todas las fechas en realidad deberían seguir el mismo pattern de fechas."*

*Interpretación:* «hoy» se tomó como el 24 Sep 26, el mismo día de referencia que usó la
[0035](0035-formato-de-fecha-premade.md).

*Interpretación:* los presets de los filtros de fecha (Hoy · Ayer · Esta semana · Últimos 15 días ·
Personalizado) no cambian: son rangos, no fechas.

## Consecuencias

- Figma: la alerta de calidad baja de `01.6 · 06–10` dice «Calidad baja - Pausada 24 Sep 26 09:18.»
  *Verificado el 2026-09-25:* en los dos archivos no queda ninguna fecha relativa visible. «Hoy» y
  «Ayer» quedan en los presets de los filtros de fecha y en 66 textos («Hoy, 1:15 P», «Hoy, 9:30 AM»,
  «Ayer, 4:20 PM») dentro de columnas y celdas ocultas de las tablas de Historial de conversaciones,
  que son contenido por defecto del componente y no se ven.
- `sistema/fechas-y-formatos.md` suma la regla.
