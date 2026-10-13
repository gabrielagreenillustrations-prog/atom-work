# 0087 — Los tooltips de las cards, en la entrega de métricas

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** ❖ atom-sidepanel · Panel de métricas · ❖ atom-tooltip · ❖ atom-cursors
**Alcance:** archivo de métricas (`tHgzwwQ5gbEzHjxPBvLODo`), entrega «Métricas por plantilla inicial en
flujos y campañas» (`13076:21003`), sección HU-02, fila «Cards y porcentajes».

## Contexto

*Dato verificado:* los tooltips de las cards están en `01.6 · 15–17` y `03.9 · 10–12`, con el panel v1, en
la sección «Handoff Design System» de la page Nueva UI. La entrega no tenía frames con esos tooltips; al
alinearla al FRD ([0085](0085-entrega-de-metricas-alineada-al-frd.md)) solo se sumó el de Errores Meta.

## Decisión

La fila «Cards y porcentajes» de HU-02 lleva tres frames con el panel de la entrega y el tooltip de cada
card, con los textos de la [0065](0065-panel-v1-cuatro-metricas-y-errores-meta.md):

| Card | Tooltip | Frame |
|---|---|---|
| Entregados | «85 de 100 enviados.» | «Tooltip de Entregados» (`15349:491559`) |
| Leídos | «50 de 85 entregados.» | «Tooltip de Leídos» (`15349:496208`) |
| Respondidos | «35 de 85 entregados.» | «Tooltip de Respondidos» (`15349:500860`) |

Enviados no lleva tooltip: es la base.

## Por qué

Pedido de diseño: *"los tooltips por cada card de métricas"*, *"esas ponlas en el file de métricas en el
handoff"*.

*Interpretación:* los frames son copias del panel de Campañas con navegación (`13076:21237`), como los de
HU-03. El tooltip y el cursor son copias de los de `01.6 · 15–17`, a la misma distancia del ícono de
información.

## Consecuencias

- La card de la fila cita los tres tooltips. La sección HU-02 mide 5190 de ancho.
- Versión de Figma «Antes de tooltips de las cards en HU-02».
