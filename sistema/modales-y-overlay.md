# Modales y overlay

Última revisión: **2026-09-29** (sesión 13) · Decisiones: [0008](../decisiones/04-organismos/atom-dialog/0008-centrado-de-modales.md) · [0080](../decisiones/04-organismos/atom-sidebar/0080-sidebar-nuevo-visible.md) · [0041](../decisiones/04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md) · [0062](../decisiones/04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md)

---

## Posición

> Desde la [0095](../decisiones/04-organismos/atom-dialog/0095-dialogos-centrados-en-el-frame.md) (Etiquetas), el diálogo se centra respecto al **frame completo**: `left = (1280 − anchoDiálogo) / 2` → 440 con 400 de ancho. Campañas y Automatizaciones siguen con la regla de abajo hasta que se confirme el cambio.

El diálogo se centra sobre el **área de contenido, sin el sidebar**:

```
left = anchoSidebar + (anchoFrame − anchoSidebar − anchoDiálogo) / 2
```

Con frame 1280 y el sidebar nuevo, de 288 ([0080](../decisiones/04-organismos/atom-sidebar/0080-sidebar-nuevo-visible.md)):

| Ancho del diálogo | `left` |
|---|---|
| 400 | **584** |
| 488 | **540** |
| 598 | **485** |

Verticalmente se centra sobre el frame completo.

Lo que se abre sobre el diálogo —un dropdown, un tooltip— es hermano del diálogo en el frame y se
mueve con él.

## Overlay (backdrop)

| Propiedad | Valor |
|---|---|
| Fill | `bg/overlay-primary`, opacidad **0.70** |
| Effect | `blur/surface/subtle` → `BACKGROUND_BLUR: 16` |
| Tamaño | El del frame: (0, 0), 1280 × 832 |

En Figma la capa se llama **`backdrop`**, no `overlay`. Es un RECTANGLE hijo directo
del frame, hermano del `❖ atom-dialog`.

Los side panels de métricas llevan el mismo backdrop — decisión
[0041](../decisiones/04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md): Campañas `01.6 · 01`, `02`, `06`,
`08–10`, `01.8 · 15` y `17`; Automatizaciones `03.9 · 01`, `02` y `05–07`.

Desde la [0062](../decisiones/04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md), los frames v1 del panel también lo llevan (Campañas
Handoff v1 `01.6 · 02` y `06–15`; Automatizaciones `03.9 · 02` y `05–09`); antes tenían un gris
sin token.

## Estructura de un frame de modal

```
Frame
├── Layout        ← la pantalla de fondo
├── backdrop      ← RECTANGLE
├── ❖ atom-dialog ← INSTANCE
└── dropdown o tooltip abierto sobre el diálogo, si hay
```

En Automatizaciones, los frames de modal tienen además un frame `Con datos` en x = 1280, fuera del
área visible. Se quedan: diseño decidió no borrarlos (2026-09-24).

## Botones

`Cancelar` (secundario) · acción principal a la derecha. En los modales de advertencia
de edición: `Cancelar` / `Editar de todas formas`.

## Estado

Verificado el 2026-09-24: los 15 modales de Campañas y los 19 de Automatizaciones cumplen la
posición, el tamaño del backdrop, el fill y el blur.
