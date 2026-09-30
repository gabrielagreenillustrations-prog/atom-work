# 0091 — Scroll de las tablas según los resultados

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-data-table` · `hasScrollVertical` y `hasScrollHorizontal`
**Alcance:** los tres archivos.

## Decisión

- **Vertical:** encendido en las tablas llenas de resultados (página de 10 o más filas, o contenido más alto que el
  área visible). Apagado en las que tienen pocas filas.
- **Horizontal:** encendido en las tablas con columnas fijas (sticky) o con columnas más anchas que el área visible.

## Por qué

Pedido de diseño: *"activa el scroll horizontal y vertical de las tablas que tienen llenos de resultados, los que
por ejemplo tengan 1 resultado no tienen scroll vertical, lo más probable es que si es sticky tenga scroll
horizontal, pero nada más"*.

*Interpretación:* «llena» es una página completa (10 filas o más) o un contenido que desborda. Las tablas con 1 a 7
filas quedan sin scroll vertical.

## Consecuencias

- Campañas: 73 tablas con scroll horizontal encendido y 2 con el vertical apagado (2 filas).
- Automatizaciones: 84 tablas con scroll horizontal encendido y 4 con el vertical apagado (1 a 3 filas: `03.3 · 12`,
  `03.2 · 03`, `03.2 · 07`, `03.2 · 10`).
- Entrega de métricas: 33 tablas con scroll horizontal encendido; todas tienen 13 filas y ya tenían el vertical.
- Versión de Figma «Antes de scroll de tablas» en los tres archivos.
