# 0037 — Columna Canal: el caso edge «No conectado» abre un detalle

**Estado:** reemplazada por [0072](../0072-numero-copiable-en-tablas.md)
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — columna Canal de todas las tablas de la sección,
salvo las de `03.8 · Specs · Columna Canal`. Reemplaza a
[0034](0034-columna-canal-tabla-de-referencia.md).

## Contexto

La [0034](0034-columna-canal-tabla-de-referencia.md) dejó el caso edge como tag Warning «Revisar»
con un solo tooltip rich («Se perdió la conexión con el canal», con el texto de la alerta
`03.6 · 01` y «Ir a Canales»), en la fila «Consulta de precios» de `03.6 · 01`, `03.8 · 03` y
`03.8 · 04`. La tabla de referencia de diseño (`134:77346`) muestra otra opción para el caso edge:
un detalle que se abre sobre el tag. Las alertas de `03.6` se eliminan
([0040](../../../05-paginas/gestion-de-flujos/0040-alertas-03-6-eliminadas.md)).

## Decisión

| Caso | Celda | Interacción |
|---|---|---|
| Mensaje entrante · varios canales | `❖ atom-button` Tertiary `s` con el ícono, «N canales» y `chevron-down` | Abre «Números conectados», con copiar en cada número o cuenta (`03.8 · 03`); tooltip «Copiar» (`03.8 · 04`) y snackbar «¡Copiado con éxito!» (`03.8 · 05`) |
| Mensaje entrante · un canal | El mismo botón, con el ícono del canal y el número o la cuenta, sin chevron | Tooltip «Copiar» (`03.8 · 01`) y snackbar (`03.8 · 02`) |
| Campaña · Tipificación · Webhook | El mismo botón, con un solo número de WhatsApp | Igual que un canal |
| Mensaje entrante · no conectado | `❖ atom-tag` Ghost `m` Neutral con el ícono del canal y «No conectado» | Ninguna |
| Caso edge: el flujo se desconectó del canal al publicar | `❖ atom-tag` Ghost `m` Warning con `triangle-exclamation` y «No conectado» | Al hacer clic abre el detalle (`03.8 · 06` → `03.8 · 07`): `❖ atom-dropdown-menu` con «Sin números asociados» y la alerta Warning «Hubo un error al publicar el flujo y se desconectó del canal configurado. Revísalo, publícalo nuevamente y vuelve a conectarlo para evitar perder tráfico.» |

- Cada tabla tiene un caso edge, solo en un flujo de mensaje entrante: la fila «Bienvenida nuevos
  contactos» (Borrador). Las tablas filtradas que dejan fuera esa fila no lo llevan.
- Las filas usan números y cuentas con formato real (`+57 310 456 7890`, `@tiendaonlinegt_bot`,
  «Tienda Online GT»).
- El cursor sobre el tag del caso edge es de mano, como en la referencia.

## Por qué

En el lote del 2026-09-24 diseño pidió usar la opción de la columna Canal de su tabla de referencia
(`134:77346`), la del detalle en el caso edge; al menos un caso edge por tabla, solo en mensaje
entrante; y filas realistas.

*Interpretación:* con el detalle, el caso edge tiene una interacción de clic. La 0034 usaba el
cursor de flecha porque la única interacción era el tooltip; ahora corresponde el de mano, que es el
que muestra la referencia.

## Consecuencias

- La secuencia queda en `03.8 · 01–07`: un canal (`01–02`), varios canales (`03–05`) y el caso edge
  (`06–07`).
- *Verificado:* 73 tablas tienen un caso edge, en «Bienvenida nuevos contactos». No lo tienen
  `03.2 · 03` (búsqueda «Promoción Black Friday», una campaña) ni `03.2 · 10` y `03.3 · 12`
  (filtradas por Inactivo).
- «Consulta de precios» queda en «No conectado» Neutral en todas las tablas, también en
  `03.8 · 03` y `03.8 · 04`, que antes mostraban ahí el caso edge.
- La card `10:38431` describe la columna nueva.
- `03.8 · Specs · Columna Canal` y la tabla de referencia no se tocan.
