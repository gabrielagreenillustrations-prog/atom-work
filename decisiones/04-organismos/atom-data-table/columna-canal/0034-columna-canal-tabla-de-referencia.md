# 0034 — Columna Canal: la tabla de referencia de diseño

**Estado:** reemplazada por [0037](0037-columna-canal-caso-edge-con-detalle.md)
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — columna Canal de las 68 tablas de la sección,
todas salvo las de `03.8 · Specs · Columna Canal`. Reemplaza a
[0023](0023-columna-canal-boton-y-tags.md).

## Contexto

La [0023](0023-columna-canal-boton-y-tags.md) dejó el mensaje entrante de un canal con un botón `xs`
y el tag «Conectado» debajo, el caso sin canal con ícono y tag `xs`, y la publicación fallida en dos
versiones para decidir con el equipo: botón (`03.8 · 03`) y tag (`03.8 · 04`). La referencia de
diseño es una tabla de `03.8 · Specs · Columna Canal` (`134:77346`), con el tooltip «Se perdió la
conexión con el canal» al lado (`134:6103`).

## Decisión

Todas las tablas usan las celdas de las seis primeras filas de la referencia:

| Caso | Celda | Interacción |
|---|---|---|
| Mensaje entrante · varios canales | `_table-data-cell` · *Actions button (premade)*: `❖ atom-button` Tertiary `s` con el ícono, «N canales» y `chevron-down` | Abre «Números conectados», con el ícono de copiar en cada número o cuenta (`03.8 · 01`) |
| Mensaje entrante · un canal | El mismo botón, con el ícono del canal y el número o la cuenta, sin chevron | Tooltip «Copiar» y snackbar «¡Copiado con éxito!» (`03.8 · 02`, `03.7 · 06`) |
| Campaña · Tipificación · Webhook | El mismo botón, con un solo número de WhatsApp | Igual que un canal |
| Mensaje entrante · no conectado | `_table-data-cell` · *Tag (premade)*: `❖ atom-tag` Ghost `m` Neutral con el ícono del canal y «No conectado» | Ninguna |
| Caso edge: se perdió la conexión | *Tag (premade)*: `❖ atom-tag` Ghost `m` Warning con `triangle-exclamation` y «Revisar» | Solo el tooltip: `❖ atom-tooltip` rich «Se perdió la conexión con el canal», con el texto de la alerta `03.6 · 01` y «Ir a Canales» (`03.8 · 03`, `03.8 · 04`) |

Un mensaje entrante puede tener canales de WhatsApp, Plugin web, Facebook Messenger y Telegram.

## Por qué

Pedido de diseño: *"Por ahora dejaré la tabla de automatizaciones con este tipo de columna tomando como
referencia los primero 6s celdas […] mensajes entrantes con 1 o más canales de whatsapp, plugin
web, facebook messenger o telegram, y los de campañas tipificaciones, y webhooks con 1 canal de
whatsapp a la vez. Las excepciones que no serán botones serán el caso edge y el caso de canal no
conectado para mensaje entrante ambos y son celdas tags, con la tag neutral y de warning, solo la
del caso edge saca una tooltip"*.

Y sobre las interacciones: *"el button con numero individual tiene el tooltip de copiar y copia con
el snack de copiado con exito, el de varios numeros o cuentas abre el detalle de los numeros con el
icono de copiar cada uno, el no conectado no tiene interacciones y el del caso edge el tooltip
unicamente"*.

Con esto se descartan el tag «Conectado» y las dos versiones de la publicación fallida.

*Interpretación:* «Atención al cliente» (un canal) pasa a Facebook Messenger con la cuenta «Tienda
Online GT», que ya tenía, para que las tablas muestren un canal que no es WhatsApp.

*Interpretación:* en el caso edge el cursor es de flecha, porque la única interacción es el tooltip.
La referencia muestra el de mano.

*Interpretación:* en `03.6 · 01` la fila «Consulta de precios» pasa al caso edge, porque la alerta
de esa pantalla avisa que un flujo se desconectó del canal.

## Consecuencias

- *Verificado:* las 872 celdas visibles de las 68 tablas (67 frames `03.x` y la tabla suelta
  `66:69458`) siguen la regla: 67 de un canal, 67 «3 canales», 67 «5 canales», 64 «No conectado»,
  3 en el caso edge (`03.6 · 01`, `03.8 · 03`, `03.8 · 04`) y 604 salidas.
- Las celdas *Tag (premade)* van alineadas a la izquierda, como en la referencia; la variante las
  centra.
- `03.8 · 02`: el botón queda en *Hovered*, con el tooltip «Copiar» y el cursor encima.
- `03.8 · 03` y `03.8 · 04` muestran lo mismo: la fila «Consulta de precios» en el caso edge, con el
  tooltip encima del tag y el cursor de flecha.
- Las cards `10:27359` y `10:38431` describen la columna nueva.
- `03.8 · Specs · Columna Canal` no se tocó: la propuesta A describe todavía la columna de la 0023.
- Lo que queda por confirmar está en `RETOMAR.md`.
