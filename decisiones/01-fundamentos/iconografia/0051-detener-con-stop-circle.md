# 0051 — Detener: ícono `stop-circle` en todas las acciones

**Estado:** vigente
**Fecha:** 2026-09-25
**Alcance:** los dos archivos — todos los ítems de menú de acciones que detienen algo («Detener …»).

## Contexto

«Detener campaña» usaba dos íconos distintos en los menús: `pause-circle` y `pause` (verificado el
2026-09-25). La [0015](0015-iconos-de-menus-de-acciones.md) no definía el ícono de Detener.

## Decisión

Toda acción «Detener …» de los menús lleva el ícono **`stop-circle`**.

## Por qué

Pedido de diseño: *"cambia el icono de detener en todas las acciones de ambos archivos a
stop-circle"*.

## Consecuencias

- Figma: los 26 ítems «Detener campaña» de Campañas llevan `stop-circle`, 20 visibles y 6 ocultos:
  16 en los menús de `01.4`, 3 en `02.3` y 7 en las tablas de «Resultados de campañas» que están
  fuera de un frame numerado. En Automatizaciones no hay acciones «Detener». *Verificado el
  2026-09-25:* el glifo se dibuja en *Font Awesome 7 Pro* (14 px, como los demás).
- Mientras se hacía el cambio aparecieron en el archivo ítems nuevos de «Detener campaña» con
  `pause-circle`, y se cambiaron. Al sumar un menú, revisar el ícono de Detener.
- Los botones «Detener» de los modales `01.5 · 01` y `01.5 · 02` no llevan ícono.
- Se suma a la tabla de la [0015](0015-iconos-de-menus-de-acciones.md) en `sistema/iconografia.md`.
