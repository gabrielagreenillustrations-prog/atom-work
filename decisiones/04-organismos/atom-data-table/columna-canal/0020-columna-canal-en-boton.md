# 0020 — Columna Canal en variante botón

**Estado:** reemplazada por [0023](0023-columna-canal-boton-y-tags.md)
**Fecha:** 2026-09-23
**Alcance:** Automatizaciones · Gestión de flujos — columna Canal de todas las tablas y la fila
`03.8`.

## Contexto

La celda de Canal mostraba el ícono del canal, el primer número o cuenta, un «+N» cuando había
varios, un `❖ atom-icon-button` con chevron y el tag «Conectado» / «No conectado». Había
campañas con varios números, aunque solo el mensaje entrante puede tener más de un canal.

## Decisión

La celda es un `❖ atom-button` Tertiary `s` (`_table-data-cell` · *Actions button (premade)*)
con el ícono del canal a la izquierda. Cuatro casos, sin tag de conexión:

| Caso | Qué muestra | Interacción |
|---|---|---|
| Mensaje entrante · varios canales | «N canales» + `chevron-down` | Abre `❖ atom-dropdown-menu` «Números conectados» debajo del botón, con `copy` en cada número |
| Mensaje entrante · un canal | El número o la cuenta | Tooltip «Copiar» y snackbar «¡Copiado con éxito!» (`03.7 · 06`) |
| Campaña · Webhook · Tipificación · Lista dinámica | Un solo número | Igual que un canal |
| Mensaje entrante · sin canal | «No conectado», sin número | — |

Caso de borde — **publicación fallida**: el flujo vuelve a Borrador y pierde el canal.
`triangle-exclamation` en `fg/status/warning` + «No conectado»; al pasar el cursor, un
`❖ atom-tooltip` rich con el texto de la alerta `03.6 · 01` y la acción «Ir a Canales».

## Por qué

Pedido de diseño en el lote del 2026-09-23, con referencias en el archivo: la columna de
ejemplo `67:70407`, el dropdown `69:70599` y la tabla suelta `66:69458`. Para el caso de
publicación fallida: *"armarlo sin la referencia"* (el nodo de la Épica 1 no existe).

*Interpretación:* Lista dinámica se trata como salida (un solo número).

## Consecuencias

- 63 tablas. Las filas de ejemplo se alinearon: *Reserva de citas* y *Encuesta de
  satisfacción* pasan a un número (+57 310 456 7890, como en `66:69458`) y *Recordatorio de pago*
  a +502 4455 6677.
- `03.8 · 01` (varios canales abierto), `03.8 · 02` (un canal · Copiar) y `03.8 · 03`
  (publicación fallida).
- Los íconos de marca necesitan la fuente *Font Awesome 7 Brands* en el `v7-icon (pro)`.
