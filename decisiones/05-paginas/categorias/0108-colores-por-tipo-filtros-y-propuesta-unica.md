# 0108 — Categorías: color por tipo de asociación, un frame por filtro y una sola propuesta

**Estado:** vigente · reemplaza en parte la [0104](0104-una-columna-asociada-a-con-un-tag.md) (color Neutral) y la [0107](0107-propuesta-b-categoria-en-uso-bloqueada.md) (nombre «Propuesta B»)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-tag` · `❖ atom-tooltip` · `❖ atom-filters-panel` · `❖ atom-sidebar-complete (Design Internal)`
**Alcance:** Categorías, `01.1 · 05–11`, `01.3 · 08` y `01.4 · 04`.

## Decisión

- **Tags de «Asociada a», Ghost con un color por tipo:** Respuestas rápidas en Info, Plantillas en AI y Ambas en Brand.
- **Un frame de tooltip por tipo de tag** (`01.1 · 09–11`): «Categoría asociada a respuestas rápidas», «Categoría asociada a plantillas» y «Categoría asociada a respuestas rápidas y plantillas».
- **Un frame por filtro:**
  - `05` Asociada a: Ambas, Plantillas y Respuestas rápidas, selección múltiple.
  - `06` Fecha de creación: Hoy, Ayer, Esta semana, Últimos 15 días y Personalizado, selección única.
  - `07` Estado.
- **Sidebar:** Mensajería abierta y Categorías seleccionada, con los mismos fills que el sidebar de Etiquetas.
- **Propuesta única:** la alternativa de 01.3 y 01.4 se llama «Propuesta», no «Propuesta B». La fila de arriba es el comportamiento de producción y no lleva nombre de propuesta.

## Por qué

Pedido de diseño: *"el de respuestas rápidas de un color y plantillas otro y ambos otro color. Recuerda agregar el scenario de tooltip por cada tipo de tag"*; *"necesito un frame por cada filtro"*; *"NO le llames propuesta B porque no hay otras propuestas, es la única"*.

*Dato verificado en QA:* las opciones de fecha son Hoy, Ayer, Esta semana, Últimos 15 días y Personalizado.

*Interpretación:* la elección de Info, AI y Brand es mía; se evitaron Success, Warning y Danger porque comunican estado.

## Consecuencias

- Ningún filtro de fecha muestra todavía el rango de Personalizado abierto: queda pendiente si se quiere ese estado.
