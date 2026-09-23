# 0008 — Los modales se centran sobre el área de contenido

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** todos los modales de los dos archivos

## Contexto

Global Patterns lo dice explícitamente:

> *el punto de origen del diálogo es el centro vertical y horizontal del área de contenido
> (no del viewport completo). En vistas con sidebar lateral, el centro se calcula sobre el
> área restante sin el sidebar.*

Los modales estaban en tres posiciones distintas: 440 (centrado sobre el frame completo),
504 y 568.

## Decisión

El centro se calcula **sobre el área de contenido, sin el sidebar**:

```
left = anchoSidebar + (anchoFrame − anchoSidebar − anchoDiálogo) / 2
```

Con frame 1280 / sidebar 264 / diálogo 400 → **`left = 572`**.

## Por qué

Es lo que dice Patterns. Ninguno de los 15 modales de Campañas lo cumplía.

## Consecuencias

- 15 modales recentrados en Campañas, 17 en Automatizaciones.
- El overlay va con fill `bg/overlay-primary` al 70 % + effect style con
  `BACKGROUND_BLUR: 16` (`blur/surface/subtle`). Dos modales no lo tenían.
