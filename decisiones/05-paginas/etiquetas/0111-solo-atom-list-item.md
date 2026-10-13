# 0111 — Etiquetas: la vista es solo `❖ atom-list-item`

**Estado:** vigente · reemplaza a la [0096](0096-tabla-de-etiquetas-main-con-icono-y-acciones-visibles.md), a la [0097](0097-grilla-de-etiquetas-acciones-en-menu-de-la-card.md) y, en la [0094](0094-etiquetas-dos-propuestas-y-solo-lo-que-existe.md), las dos propuestas
**Fecha:** 2026-10-08
**Componente:** `❖ atom-list-item` · `❖ atom-dropdown-menu` · `❖ atom-toolbar`
**Alcance:** Etiquetas, `01.1 · 01–10`, y los fondos de `01.2`–`01.4`.

## Contexto

La [0094](0094-etiquetas-dos-propuestas-y-solo-lo-que-existe.md) dejó dos propuestas para ver las
etiquetas: grilla de `❖ atom-card` ([0097](0097-grilla-de-etiquetas-acciones-en-menu-de-la-card.md)) y
tabla ([0096](0096-tabla-de-etiquetas-main-con-icono-y-acciones-visibles.md)). En el handoff había también
una versión con `❖ atom-list-item`.

## Decisión

- Las etiquetas se muestran solo con `❖ atom-list-item`, en una grilla ([0112](0112-grilla-fluida-de-list-items.md)).
  No hay tabs ni selector de vista.
- En hover, el ítem muestra el ícono de acciones; el menú (`❖ atom-dropdown-menu`) tiene Editar y Eliminar.
- Buscador en `❖ atom-toolbar` ([0113](0113-buscador-buscar-etiquetas-por-nombre.md)).
- Frames de `01.1`: `01` por defecto (39 etiquetas en orden de creación), `02` hover, `03` menú de acciones,
  `04` tooltip del buscador, `05` buscador abierto, `06` búsqueda con resultados, `07` búsqueda sin
  resultados, `08–10` grilla en 1024, 1440 y 1920 px.
- Crear, Editar y Eliminar (`01.2`–`01.4`) no cambian ([0098](0098-dialogos-de-etiquetas-copy-y-validacion.md)–[0102](0102-error-cierra-el-dialogo.md)).

## Por qué

Pedido de diseño: *"nos iremos solo con la version de ❖ atom-list-item sin tabs o vistas, solamente
❖ atom-list-item por ahora"*; *"Todo lo demás queda igual"*.

## Consecuencias

- La grilla de cards y la tabla salen del handoff.
- «Por ahora»: si se retoma otra vista, va en una decisión nueva.
- *Verificado en Figma:* el ícono de acciones del hover usa los fills y las variables de fuente del
  ícono del Web Library (antes se veía en verde).
