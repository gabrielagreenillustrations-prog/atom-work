# 0069 — Panel de métricas: sin «Reporte de errores» e íconos de las cards

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** métricas · Campañas y Automatizaciones
**Alcance:** todos los paneles de la sección «Handoff Design System · Panel de métricas de plantilla»
del archivo de métricas. Cambia dos puntos de
[0065](0065-panel-v1-cuatro-metricas-y-errores-meta.md): los botones y el ícono de Enviados.

## Decisión

- **Sin «Reporte de errores»** en ningún panel: queda solo «Descargar errores».
- **Íconos de las cards (v1):** Enviados, una palomita (`check`); Entregados, dos palomitas; Leídos,
  dos palomitas azules. Respondidos no cambia.

## Por qué

Pedido de diseño: *"elimina el botón de reporte de errores de todos los paneles de metricas"* y
*"Iconografía: Enviados: 1se queda igual; Entregados: 2 palomitas; Leídos: 2 palomitas azules"*.

*Interpretación:* «Enviados: 1» se leyó como una palomita, la convención de WhatsApp para enviado.
Entregados y Leídos ya tenían sus dos palomitas.

## Consecuencias

- 48 botones ocultos: v1 de Campañas y de Automatizaciones (incluido el panel de atrás de `01.6 · 10`
  y `03.9 · 09`), nuevo DS, dinámicas e `Ideación · 02`. Las dos cards del nuevo DS que nombraban el
  botón se actualizaron.
- 28 cards de Enviados pasaron de `user` a `check`.
- *Pendiente:* la grilla de las cuatro cards con la jerarquía de v2 (sin flecha de tendencia,
  cantidad y porcentaje en la misma línea, ícono de información arriba a la derecha) tiene tres
  opciones en «Exploración · Grid de métricas (v1 con la jerarquía de v2)»: A, las cuatro en una
  fila; B, tres en una fila y una abajo; C, una arriba y tres en una fila. Los nombres, los tooltips
  y los íconos son los de v1. Falta elegir.
