# 0116 — Categorías: «Asociada a» en Info, Success y Neutral, con íconos y datos de ejemplo parejos

**Estado:** vigente · reemplaza en la [0108](0108-colores-por-tipo-filtros-y-propuesta-unica.md) los colores de Plantillas (AI) y Ambas (Brand)
**Fecha:** 2026-10-08
**Componente:** `❖ atom-tag` · `❖ atom-data-table`
**Alcance:** Categorías, todas las tablas del handoff (`01.1`–`01.4`, 31 frames).

## Contexto

La [0108](0108-colores-por-tipo-filtros-y-propuesta-unica.md) dejó Respuestas rápidas en Info, Plantillas en AI
y Ambas en Brand. Se armaron cinco opciones en la sección «Ideación · Categorías · Colores de «Asociada a»».
La tabla de ejemplo tenía 11 categorías de respuestas rápidas, 1 de plantillas y 2 de ambas.

## Decisión

- **Opción B, con los ajustes de diseño** (frame «Colores · B», `857:228590`): tags Ghost m.

| Tipo | Intent | Ícono |
|---|---|---|
| Respuestas rápidas | Info | `bolt` |
| Plantillas | Success | `message` |
| Ambas | Neutral | sin ícono |

- **Datos de ejemplo:** 6 de respuestas rápidas, 6 de plantillas y 2 de ambas, intercaladas en el orden
  alfabético. El reparto es el mismo en todos los frames (tabla, búsqueda, tooltips y fondos de diálogos).

| Tipo | Categorías |
|---|---|
| Respuestas rápidas | Categoría con adjuntos, Fuera de horario, Otra más, Prueba Design, Pruebas datos cliente, Sin categoría |
| Plantillas | Claude Design System, Imagen nueva, Imágenes a mostrar, Pruebas con nombres, Selectores, Ventas |
| Ambas | Prueba de plantillas, Saludos |

## Por qué

Pedido de diseño: *"nos iremos por esta opción"* (la B), *"el info es respuestas rapidas, plantillas es success, y los iconos que habia puesto. ambas es neutral"* y *"trata de hacer mas equilibrada la cantidad de
respuestasrapidas vs plantillas porque asi se verá mas dinámica la pantalla"*.

## Consecuencias

- Los casos de uso no cambian: `01.3 · 03` usa Fuera de horario (respuestas rápidas), `04` Selectores
  (plantillas) y `05` Prueba de plantillas (ambas); el menú de `01.4` se abre en Categoría con adjuntos
  (respuestas rápidas); los tooltips de `01.1 · 09–11` siguen sobre una fila del tipo que nombran.
- *Interpretación:* qué categorías cambian de tipo lo elegí yo. Los nombres vienen de QA
  ([0103](0103-categorias-handoff-desde-qa-y-solo-lo-que-existe.md)), pero sus tipos ya no coinciden con QA: son datos de ejemplo.
- Con Neutral Ghost y sin ícono, «Ambas» se ve como texto sin color.
- *Dato verificado en Figma:* Plantillas en Success usa el mismo color que «Activa» en la columna Estado.
- Los íconos de los tags son `❖ atom-icon (DEPRECATED)`, el ícono que trae `❖ atom-tag`, con la fuente Font Awesome 7 Pro Regular.
- En la sección de ideación, la B quedó marcada como elegida.
