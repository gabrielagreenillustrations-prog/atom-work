# 0065 — Panel de métricas v1: cuatro métricas y solo errores de Meta

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** métricas · Campañas (Resultados) y Automatizaciones (Gestión de flujos)
**Alcance:** page Handoff v1 de los dos archivos: Campañas `01.6 · 02` y `04–18`, Automatizaciones
`03.9 · 02–13`. Handoff v2 no cambia. Cambia el contenido del panel que
[0056](../../06-proceso-y-fuentes/handoff/0056-handoff-v2.md),
[0058](../../04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) y
[0062](../../04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) dejaban
«tal como está» en el archivo de origen; el resto de esas decisiones sigue vigente.

## Contexto

Diseño rehízo `01.6 · 05` como la versión v1 del panel y dejó los textos de los tooltips en
comentarios de Figma.

## Decisión

- Título **«Métricas de plantilla»**. Descripción: «Analiza el rendimiento de cada plantilla
  utilizada en esta campaña.»; en Automatizaciones, «… en este flujo.».
- **Cuatro cards**: Enviados (la base: sin porcentaje ni ícono de información), Entregados
  (porcentaje sobre enviados), Leídos y Respondidos (porcentaje sobre entregados). Clientes, Fallidos
  y No entregados dejan de ser cards.
- **Una sola sección de errores**, «N Errores Meta», con ícono de información. Solo lleva los
  errores que Meta devuelve para la plantilla: Atom no ve sus errores internos. Cada error muestra
  sus mensajes y el porcentaje del total de errores. No entregados deja de ser una sección aparte.
- **Tooltips** (`❖ atom-tooltip` plain del Web Library, con `❖ atom-cursors`):

| Dónde | Tooltip | Frames |
|---|---|---|
| Entregados | «85 de 100 enviados.» | `01.6 · 15`, `03.9 · 10` |
| Leídos | «50 de 85 entregados.» | `01.6 · 16`, `03.9 · 11` |
| Respondidos | «35 de 85 entregados.» | `01.6 · 17`, `03.9 · 12` |
| Errores Meta | «Se contabilizan solo los errores que Meta nos regresa de esta plantilla.» | `01.6 · 18`, `03.9 · 13` |

- Los botones («Descargar errores», «Reporte de errores») y las recomendaciones no cambian.
- Valores de ejemplo, iguales en todos los paneles: 100 enviados; 85 entregados (85 %); 50 leídos
  (59 %); 35 respondidos (41 %); 10 errores de Meta: 5 mensajes (50 %), 3 (30 %) y 2 (20 %).

## Por qué

Pedido de diseño: *"el título cambió a Métricas de plantilla y la descripción, luego las cards
pasan a 4 cards y la de errores pasó a ser una sección únicamente de errores, haz que cualquier
panel tenga sentido con respecto a las métricas y los errores que mostramos solo pueden ser errores
de meta, porque no se ven errores de atom (internos). A lo demás de botones y recomendaciones queda
igual."* Los textos de los tooltips son los de los comentarios de diseño en `01.6 · 05`.

*Interpretación:*

- Enviados pasa de 90 a 100: sale del comentario «85 de 100 enviados» y del 85 % de Entregados.
  Respondidos pasa de 17 % a 41 % (35 de 85).
- La card decía «Enviadas»; pasa a «Enviados», como la tabla y los tooltips. Mantiene el ícono
  `user` de la referencia (pregunta abierta).
- «5 plantillas · 50%» pasa a «5 mensajes · 50% del total», como las otras filas.
- El error de emisor igual a destinatario llevaba el código #131049. Según la lista de códigos de
  la Cloud API es el #131021; el #131049 es «Meta decidió no entregar…». Se corrigió también en el
  tooltip de `01.6 · 08–09`.
- La descripción de Automatizaciones («… en este flujo.») es mía.
- `01.6 · 15` («Con errores y sin no entregados») quedaba igual a `02` sin No entregados, así que
  pasó a ser el tooltip de Entregados. `01.6 · 16–18` y `03.9 · 10–13` son nuevos.

## Consecuencias

- Campañas: `01.6 · 02`, `04–18` con el panel nuevo; `01.6 · 02` se llama «Side panel · Métricas de
  plantilla». `01.6 · 11–13` mantienen los errores colapsados y `01.6 · 14` no tiene sección de
  errores. La sección Resultados se ensanchó 1700 px y Listas se corrió a la derecha.
- Automatizaciones: `03.9 · 02–13` con el panel nuevo; `03.9 · 02` se llama «Side panel · Métricas
  de plantilla · Plantilla 1/10». El panel de atrás de `03.9 · 09`, que no se ve, también se
  actualizó.
- Cards de descripción de `01.6` y `03.9` actualizadas.
- El menú de acceso sigue diciendo «Métricas de campaña» (`01.6 · 01`).
