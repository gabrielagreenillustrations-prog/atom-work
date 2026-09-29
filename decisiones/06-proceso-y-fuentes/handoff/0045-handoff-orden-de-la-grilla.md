# 0045 — Handoff: la numeración sigue el orden de la grilla

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** los grupos del handoff de Campañas (Resultados) y de Automatizaciones · Gestión de flujos.

## Contexto

Los frames nuevos de diseño repetían el número del frame que copiaban (tres `01.6 · 06`, dos
`01.4 · 01`, tres `01.8 · 05`, un segundo `01.3 · 04`). En `01.4` los números no seguían el orden en
que están los frames.

## Decisión

Cada grupo se numera en el orden de la grilla, de izquierda a derecha y de arriba abajo. Los frames de
diseño quedan con nombre propio y se renumeran los que siguen; las cards y los artefactos usan la
numeración nueva.

## Por qué

Pedido de diseño: *"los frames que yo he creado solo nombralos bien y ordenalos en el handoff correctamente"*.
Entre renumerar los grupos o sumar sufijos, eligió renumerar.

## Consecuencias

| Grupo | Frames renumerados |
|---|---|
| `01.3` | Tooltip No entregados → `05`; Paginador → `06`; Tooltip Nombre truncado → `07` |
| `01.4` | Enviada `01` · Enviada con fallidos `02` · Agendada `03` · En pausa `04` y submenú `04.1` · Con error `05` · En proceso `06` · Detenida `07` · Campaña de Voz `08`. Cada estado tiene su columna, con flujo arriba y plantilla abajo. |
| `01.6` | Tooltip de error con código → `08`; Copiar código → `09`; Código de error copiado → `10` |
| `01.8` | La tabla suelta pasa a `01`; los demás corren un lugar, y los filtros quedan `08` Tipo de campaña, `09` Estado, `10` Creador y `11` F. Creación. El side panel queda en `15–17`. |

- Dos frames de diseño tenían el nombre del frame que copiaban: `487:354567` decía «Campaña enviada
  - Plantilla», pero la fila anclada está Detenida; y `01.8 · 05` (hoy `08`) decía «F. Envío
  abierto», pero muestra el filtro de Tipo de campaña.
- Las cards de `01.3`, `01.4`, `01.6` y `01.8` usan la numeración nueva.
