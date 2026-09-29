# 0007 — Iconografía de activar, desactivar y ver detalles

**Estado:** reemplazada por [0015](0015-iconos-de-menus-de-acciones.md)
**Fecha:** 2026-09-23
**Alcance:** los dos archivos, cualquier submódulo

## Decisión

| Acción | Ícono |
|---|---|
| Activar / reactivar | **`circle-play`** |
| Desactivar | **`power-off`** |
| Ver detalles · Ver información | **`info-circle`** |

## Por qué

Los definió diseño contra la HU de iconos. Reemplazan a lo que había, que era
inconsistente: `circle-minus` para desactivar, `play` para activar, `memo-circle-info`
para ver detalles.

## Consecuencias

- 17 glifos corregidos el 2026-09-23 en Gestión de flujos.
- **Hallazgo:** dos ítems de *Desactivar* tenían el ícono de **WhatsApp**. Era un error
  preexistente.
- *Pendiente:* hay además un ícono unificado para métricas, acciones y filtros; el nodo
  `434:58601` que lo contenía ya no existe en el archivo.
