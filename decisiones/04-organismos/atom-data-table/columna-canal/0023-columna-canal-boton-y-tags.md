# 0023 — Columna Canal: botón y tags de conexión

**Estado:** reemplazada por [0034](0034-columna-canal-tabla-de-referencia.md)
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — columna Canal de todas las tablas y la fila
`03.8`. Reemplaza a [0020](0020-columna-canal-en-boton.md).

## Contexto

La [0020](0020-columna-canal-en-boton.md) dejó la celda como `❖ atom-button` Tertiary `s` en
todos los casos, sin tag de conexión. Faltaba el tag «Conectado» del mensaje entrante con un
solo canal, y al equipo de diseño le recomendaron que la publicación fallida no fuera un botón: el ícono y
«No conectado» tienen que ir en warning, y el color del botón no se puede cambiar.

## Decisión

| Caso | Qué muestra | Interacción |
|---|---|---|
| Mensaje entrante · varios canales | `❖ atom-button` Tertiary `s`: «N canales» + `chevron-down` | Abre `❖ atom-dropdown-menu` «Números conectados», con copy en cada número (`03.8 · 01`) |
| Mensaje entrante · un canal | `❖ atom-button` Tertiary `xs` con el número o la cuenta y, debajo, `❖ atom-tag` Ghost `xs` Success «Conectado» | Tooltip «Copiar» y snackbar «¡Copiado con éxito!» (`03.8 · 02`, `03.7 · 06`) |
| Mensaje entrante · sin canal | Ícono del canal + `❖ atom-tag` Ghost `xs` Neutral «No conectado», sin botón | — |
| Campaña · Webhook · Tipificación · Lista dinámica | Botón `s` con un solo número, sin tag | Igual que un canal |
| Publicación fallida | **Dos versiones, a decidir con el equipo:** botón (`03.8 · 03`) y tag (`03.8 · 04`) | `❖ atom-tooltip` rich con «Error al publicar», el texto de la alerta `03.6 · 01` y «Ir a Canales» |

- Versión botón: `triangle-exclamation` en `fg/status/warning`; «No conectado» y el chevron
  quedan en el color del botón.
- Versión tag: `triangle-exclamation` y `chevron-down` en `fg/status/warning` +
  `❖ atom-tag` Ghost `xs` Warning «No conectado». El chevron es el significante del tooltip.

Los tags y la versión tag salen de la columna de ejemplo de diseño (`67:70407`).

## Por qué

Pedido de diseño: *"Solo estás olvidando la tag de Conectado en variant success para el mensaje entrante
en singular (solo 1 canal) y conectado"*. Eligió **botón + tag**, con el tag debajo y el botón
en `xs`, y pidió el tag «No conectado» en neutral para el mensaje entrante sin canal.

Para la publicación fallida le recomendaron que no sea un botón: el `triangle-exclamation` y
«No conectado» tienen que verse en FG warning y el tooltip tiene que descubrirse. Diseño duda
porque el botón comunica la acción de abrir el tooltip; pidió **las dos versiones lado a lado**
para rebotarlo con el equipo.

*Interpretación:* el tag «Conectado» va alineado al borde de la celda (16 px) y no al ícono del
botón (26 px), porque el botón tiene su propio padding.

*Interpretación:* en la versión tag el cursor es de flecha y apunta al chevron: no es un botón.

## Consecuencias

- 65 celdas de un canal (64 + la de `03.8 · 02` en *Hovered*) y 63 sin canal, en 65 tablas.
  Las celdas pasan a `_table-data-cell` · *Cell New - Fill* con el contenido en el slot.
- `03.8 · 02`: tooltip «Copiar» y cursor recolocados sobre el botón `xs`.
- `03.8 · 04` nuevo, al lado de `03.8 · 03`.
- *Verificado:* en la columna, los íconos quedan a 16 px del borde de la celda (sin canal),
  22 px (botón `s`) y 26 px (botón `xs`).
