# 0054 — Campañas dinámicas: estado «Con error» y reglas de Detener y Duplicar

**Estado:** vigente
**Fecha:** 2026-09-26
**Alcance:** Campañas · Resultados — tab Dinámicas (`01.8`, menús de dinámicas y filtro Estado).
Reemplaza lo que la [0033](../../04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md) decía de los estados
(«*Con error* no es un estado de las dinámicas»).

## Contexto

En la reunión se revisó que *Con error* faltaba en los filtros y las pantallas de dinámicas, y que
las acciones dependen del estado y del tipo (Flujo o Plantilla).

## Decisión

- Estados de dinámicas: **Activa · En pausa · Detenida · Con error**, en orden de ciclo de vida.
- **Detener campaña** aparece solo en Activa y En pausa. En *Con error* no aparece: la campaña ya no
  envía.
- **Duplicar** aparece solo en Detenida y Con error; nunca mientras está Activa o En pausa.

| Estado | Flujo | Plantilla |
|---|---|---|
| Detenida | Ver plantilla · Métricas · Ver configuración · Ver flujo · Descargar resultados · Descargar errores · Duplicar | Igual, sin Ver flujo |
| Con error | Igual que Detenida | Igual que Detenida |

## Por qué

Pedido de diseño: *"Ajustar los casos de acciones para campañas dinámicas: Sin duplicar mientras
están activas. Mostrar duplicar solo cuando estén detenidas. Mostrar detener solo cuando aplique"* y
*"Si está «Con error», no se muestra «Detener campaña», porque ya no enviará"*. A la pregunta sobre
Duplicar en *Con error*, diseño eligió *"Sí, como en estáticas"*; a la de los estados, *"Sí, 4
estados"*.

## Consecuencias

- Figma: el menú de Detenida · Flujo (`591:135706`) y el de Detenida · Plantilla (`591:137821`)
  quedaron como la tabla; el de Con error · Flujo (`604:143061`) usa el menú de Detenida · Flujo; el
  de Con error · Plantilla (`604:143205`) ya estaba bien.
- `01.8 · 01` tiene una fila Con error (tag Danger).
- Los menús de dinámicas no tienen un código de frame (`01.8 · 12–13` se reemplazaron por 8 tablas
  sueltas): pregunta en `RETOMAR.md`.
