# 0118 — Stickers: handoff desde QA, grilla de `❖ atom-card` responsive

**Estado:** vigente
**Fecha:** 2026-10-12
**Componente:** página Stickers (`/settings/stickers`) · `❖ atom-card`
**Alcance:** sección «Handoff Stickers · /settings/stickers» del Figma de Configuraciones (page «Stickers 🟠»), `01.1 · 01–15`.

## Contexto

*Dato verificado:* Stickers no tiene FRD y la page de Figma estaba vacía. *Dato verificado en QA (sin escribir datos, salvo las pruebas pedidas por diseño, que se borraron):* grilla de 5 cards fijas de 166 px dentro de un contenedor de 960 px, buscador por nombre que filtra en el cliente, «Subir sticker» con el selector de archivos del sistema y, en cada card, Renombrar y Eliminar que aparecen con hover.

## Decisión

- La vista se mantiene en grilla (no pasa a tabla). Cada sticker es un `❖ atom-card` (sin header ni body, con imagen y footer), directo en la grilla, sin frames contenedores.
- Grilla fluida: auto layout con wrap, cada card en Fill con mín. **140 px** y máx. **168 px**, 16 px entre columnas y filas. Fila de breakpoints como en Etiquetas: 1024 px (4 columnas), 1280 px (6), 1440 px (7) y 1920 px (10).
- Acciones en el botón ⋮ del footer, siempre visible, con `❖ atom-dropdown-menu`: Editar y Eliminar (ver [0123](../../04-organismos/atom-card/0123-acciones-de-la-card-siempre-visibles.md)).
- Buscador colapsado con tooltip «Buscar stickers por nombre» y placeholder «Buscar stickers por nombre...», como la [0113](../etiquetas/0113-buscador-buscar-etiquetas-por-nombre.md).
- El selector de archivos del sistema no se diseña. Las imágenes de ejemplo son gatos ilustrados (componentes locales `sticker-ejemplo/…`), con nombres neutros.

## Por qué

Pedido de diseño: *"La grilla debe ser responsive asi que dejaremos el tamaño de las cards como maximo"*; *"no es necesario que cada card este dentro de un frame, el componente puede quedar solo dentro de la grid"*; *"Puedes usar imagenes de gatos para los stickers"*.

*Interpretación:* el máximo de 168 px redondea los 166 px de QA; el mínimo de 140 px lo elegí yo. Por validar con desarrollo: flex con wrap (`flex: 1 1 140px; max-width: 168px`) o CSS Grid con `auto-fill`.

## Consecuencias

- *Verificado en Figma:* si la última fila queda incompleta, sus cards crecen hasta 168 px (igual que en la [0112](../etiquetas/0112-grilla-fluida-de-list-items.md)).
- El ícono del ⋮, el de «Subir sticker» (`arrow-up-from-bracket`) y los textos de las cards se escriben con el plugin local `stickers-fix-plugin`: el MCP no tiene Font Awesome 7 Pro ni PP Neue Montreal.
