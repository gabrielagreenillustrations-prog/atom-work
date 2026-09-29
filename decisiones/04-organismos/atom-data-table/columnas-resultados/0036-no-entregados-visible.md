# 0036 — Resultados: No entregados visible, al lado de Fallidos

**Estado:** reemplazada por [0063](../../../05-paginas/metricas/0063-metricas-de-resultados.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Resultados — todas las tablas de estáticas y dinámicas. Reemplaza a
[0033](0033-fecha-de-creacion-en-dinamicas.md).

## Contexto

La [0033](0033-fecha-de-creacion-en-dinamicas.md) dejó 12 columnas, con *No entregados* oculta. En
el lote del 2026-09-24 diseño armó `01.3 · 05` (tooltip de No entregados) y pidió mostrar la columna.

## Decisión

- 13 columnas: Nombre · Canal · Estado · Clientes · Enviados · Leídos · Respondidos · Fallidos ·
  **No entregados** · Tipo de campaña · Creador · fecha · Acciones.
- *Fallidos* es el total de errores; *No entregados* es una parte de Fallidos, así que nunca lo supera.
- Tooltips del encabezado:
  - Fallidos: «Contabiliza el total de errores, tanto internos como no entregados por Meta.»
  - No entregados: «Mensajes que Meta decidió no entregar para mejorar la eficiencia de la campaña.»
- La fecha sigue igual: *Fecha de envío* en estáticas y *F. Creación* en dinámicas, ahora sobre la
  columna premade ([0035](../../../01-fundamentos/fechas/0035-formato-de-fecha-premade.md)).

## Por qué

Pedido de diseño: *"los fallidos es el total de errores y los No entregados son un tipo de fallidos"*, con los
dos textos de tooltip.

*Interpretación:* los valores de ejemplo de No entregados salen de Fallidos: 0 cuando Fallidos es 0
o 1, y si no, el 40 % redondeado (mínimo 1). Antes la columna repetía el valor de Fallidos.

## Consecuencias

- Las 77 tablas de Resultados tienen No entregados visible, después de Fallidos, con los valores de
  la regla de arriba.
- Las tablas sueltas pasan de 1590 px a 1726 px para que se vean todas las columnas: `01.3 · 01`,
  `01.8 · 01` y los 15 frames de `01.4`. Acciones queda pegada a la columna de fecha.
- `01.4` se reacomodó en la grilla: una columna por estado, flujo arriba y plantilla abajo. La
  sección Resultados se ensanchó y la sección Listas se corrió a la derecha para no pisarla.
- Tooltips: Fallidos en `01.3 · 04` y No entregados en `01.3 · 05`.
- El side panel de métricas no cambia: sigue mostrando Errores y No entregados por separado.
