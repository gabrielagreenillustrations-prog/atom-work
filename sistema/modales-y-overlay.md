# Modales y overlay

Última revisión: **2026-09-23** · Decisión: [0008](../decisiones/0008-centrado-de-modales.md)

---

## Posición

El diálogo se centra sobre el **área de contenido, sin el sidebar**:

```
left = anchoSidebar + (anchoFrame − anchoSidebar − anchoDiálogo) / 2
```

Con los valores habituales del handoff (frame 1280 · sidebar 264 · diálogo 400) →
**`left = 572`**.

Verticalmente se centra sobre el frame completo.

## Overlay (backdrop)

| Propiedad | Valor |
|---|---|
| Fill | `bg/overlay-primary`, opacidad **0.70** |
| Effect | `blur/surface/subtle` → `BACKGROUND_BLUR: 16` |

En Figma la capa se llama **`backdrop`**, no `overlay`. Es un RECTANGLE hijo directo
del frame, hermano del `❖ atom-dialog`.

## Estructura de un frame de modal

```
Frame
├── Layout        ← la pantalla de fondo
├── backdrop      ← RECTANGLE
└── ❖ atom-dialog ← INSTANCE
```

## Botones

`Cancelar` (secundario) · acción principal a la derecha. En los modales de advertencia
de edición: `Cancelar` / `Editar de todas formas`.
