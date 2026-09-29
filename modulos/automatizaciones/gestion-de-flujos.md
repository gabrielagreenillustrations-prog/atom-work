# Gestión de flujos

Archivo: **Automatizaciones – Gestión flujos** · sección `10:22917`
Última revisión: **2026-09-26** (sesión 11)

---

## De qué depende el menú de fila

**Del disparador + si está publicado.** El estado no agrega variantes por sí mismo.
Verificado en código — ver `comportamiento-verificado/menus-de-acciones.md`.

### Disparadores

Mensaje entrante · Campaña · Webhook · Tipificación · Lista dinámica.

### Mapa de menús (sección 03.3)

Una fila por disparador y una columna por estado, con una card por fila — decisión
[0028](../../decisiones/03-moleculas/atom-dropdown-menu/0028-mapa-de-menus-de-gestion.md).

Las acciones que no aplican al estado se muestran en **Disabled**, en su lugar; no se ocultan —
decisión [0046](../../decisiones/03-moleculas/atom-dropdown-menu/0046-gestion-acciones-no-disponibles-en-disabled.md). En QA se
ocultan (verificado el 2026-09-25, ver `comportamiento-verificado/menus-de-acciones.md`).

| Disparador | Publicado | Borrador y Con error |
|---|---|---|
| Mensaje entrante | Canal conectado: Ver flujo · **Editar y publicar** · Duplicar · Ver detalles · Descargar flujo · Desactivar (`01`). Sin canal: igual, con *Editar flujo* (`02`) | Ver flujo *(Disabled)* · Editar flujo · Duplicar · Ver detalles · Descargar flujo · Desactivar (`03` · `15`) |
| Campaña | Ver flujo · Editar y publicar · Métricas de plantilla · Simular · Publicar *(Disabled)* · Duplicar · Ver detalles · Descargar flujo · Desactivar (`04`) | Ver flujo *(Disabled)* · Editar flujo · Métricas de plantilla *(Disabled)* · Simular · Publicar · Duplicar · Ver detalles · Descargar flujo · Desactivar (`05` · `16`) |
| Webhook | igual que Campaña (`06`) | igual que Campaña (`07` · `17`) |
| Tipificación | Ver flujo · Editar y publicar · Métricas de plantilla · Publicar *(Disabled)* · Duplicar · Ver detalles · Descargar flujo · Desactivar (`08`) | Ver flujo *(Disabled)* · Editar flujo · Métricas de plantilla *(Disabled)* · Publicar · Duplicar · Ver detalles · Descargar flujo · Desactivar (`09` · `18`) |
| Lista dinámica | Ver flujo · Editar flujo *(Disabled)* · Métricas de plantilla · Publicar *(Disabled)* · Duplicar · Ver detalles · Descargar flujo · Desactivar (`19`) | Ver flujo *(Disabled)* · Editar flujo · Métricas de plantilla *(Disabled)* · Publicar · Duplicar · Ver detalles · Descargar flujo · Desactivar (`20` · `21`) |

- La etiqueta **`Editar y publicar`** aparece solo si `published` **y** `canal conectado`.
- La fila de Lista dinámica (`03.3 · 19–21`, «Recompra clientes frecuentes», disparador con
  `list-ul`) se armó en la sesión 10: no había frames para ese disparador.
- Los menús que abren hacia arriba (`03.3 · 05`, `06`, `07` y `17`) se corrieron lo que crecieron,
  para no tapar el botón de la fila.
- *Con error* muestra el menú del Borrador de su disparador; solo cambia el badge, Danger «Con error».
- La acción de métricas dice «Métricas de plantilla» y, con varias plantillas, lleva el número:
  `Métricas de plantilla (10)` en `03.3 · 04` y `03.9 · 01` — decisión [0067](../../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md).
- *Descargar flujo* (antes «Descargar JSON») es la mejora pedida por producto; está solo en el menú,
  no en el modal de detalles — [0011](../../decisiones/03-moleculas/atom-dropdown-menu/0011-descargar-json-se-mantiene.md) → [0066](../../decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md).
- «Simular» sigue en los menús de Campaña y Webhook (`03.3 · 04–07`, `16`, `17`) y en el modal
  `03.5 · 05`, aunque la acción ya no existe según diseño: pregunta en `RETOMAR.md`.
  En producción el borrador de Mensaje entrante muestra *Ver detalles* antes que *Duplicar*;
  Figma unifica el orden.

### Casos sin menú

| Caso | Qué se muestra |
|---|---|
| **Flujo inactivo** | Estado `Inactivo`. **Sin menú de 3 puntos**: un único icon button con `circle-bolt` y tooltip `Activar flujo` ([0015](../../decisiones/01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md)). |
| Flujo publicando | Botón de acciones deshabilitado |
| Flujo migrando | Botón de acciones deshabilitado |

No dependen del disparador: en el mapa, sus frames (`03.3 · 12–14`) van en la fila de Mensaje
entrante y las demás filas remiten a ellos con una nota. `03.3 · 12` muestra la tabla filtrada por
Inactivo ([0038](../../decisiones/05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md)).

---

## Fecha

F. Última edición en formato `24 Sep 26 09:41`, en una columna fija de 163 px con la flecha
`arrow-down`: la fila más reciente va arriba — decisión
[0035](../../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md). Los modales «Ver detalles» (`03.4`) usan
el mismo formato y la misma etiqueta, «F. Última edición» (sesión 10); la tabla «Campañas
asociadas» de `03.4 · 05` ordena por F. Creación (137 px).

---

## Modal «Detalles del flujo» (`03.4 · 01–07`)

Se abre con «Ver detalles». Título «Detalles del flujo», sin el ícono del tipo de flujo (`hasBack`
apagado en el `_headline`) y sin botón de descarga: «Descargar flujo» está solo en el menú — decisión
[0066](../../decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md).
El nombre se muestra como texto en `❖ atom-list-item`, como en `03.4 · 14`, en `01–04`, `06` y
`07` ([0071](../../decisiones/05-paginas/gestion-de-flujos/0071-editar-el-nombre-en-detalles-del-flujo.md)); `05` abre en la pestaña de campañas asociadas.

### Editar el nombre (`03.4 · 14–19`)

Como los campos de información del preview channel: componente «Item status» del side panel de
Clientes (archivo *Design Audit | Migración Módulos*, página Clientes, sección «Feedback War Room»,
`5271:67997`) — decisión
[0071](../../decisiones/05-paginas/gestion-de-flujos/0071-editar-el-nombre-en-detalles-del-flujo.md).

| Frame | Estado |
|---|---|
| `03.4 · 14` | El nombre como texto en `❖ atom-list-item`. |
| `03.4 · 15` | Cursor sobre el nombre: aparece `❖ atom-icon-button` xs Tertiary con `pen`. La fila no cambia de fondo. |
| `03.4 · 16` | Cursor sobre el ícono: el botón en *Hovered* y `❖ atom-tooltip` «Editar campo». |
| `03.4 · 17` | Clic: `❖ atom-text-field` Extra Small en *Focused* y, al lado, `❖ atom-icon-button` con `close`. |
| `03.4 · 18` | Guardado: vuelve a texto con el nombre nuevo y el snackbar Success de `03.7 · 03`, sin cerrar el modal. |
| `03.4 · 19` | Nombre en uso: el campo en *Error focused*, ícono `circle-info` y `❖ atom-tooltip` «El nombre ya está en uso.». |

El cambio se guarda con Enter o con un clic fuera del campo. Cerrar el modal con el nombre en edición
descarta el cambio sin avisar; con un nombre inválido o el campo vacío, al cerrar queda el nombre
anterior. Es lo mismo que pasa con Esc o con `close` — decisión
[0076](../../decisiones/05-paginas/gestion-de-flujos/0076-cerrar-detalles-con-el-nombre-en-edicion.md).
Interpretación, no está en la referencia: el snackbar de 18. El ícono de error va en
`fg/status/error`; la referencia usa `fg/status/on-error`. Con el campo vacío, Enter muestra el error y
un clic fuera no guarda — decisión
[0078](../../decisiones/05-paginas/gestion-de-flujos/0078-nombre-vacio-en-detalles-del-flujo.md); falta el texto de ese error. Los nombres son
valores de ejemplo.

---

## Modales de advertencia al editar un flujo publicado

Título: **`Editar y publicar flujo`** · Botones: `Cancelar` / `Editar de todas formas`

| Caso | Contenido |
|---|---|
| Campaña activa (una) | Lista con la campaña y su **tipo de lista** (`Lista dinámica` / `Lista estática`), tag Neutral |
| Campañas activas (varias) | Idem, 1..N campañas, cada una con ícono de redirección a Resultados |
| **Cargando** | Cabecera, texto de apoyo y botones. Sin la lista de campañas. |
| Webhook | *"Este flujo podría estar siendo invocado desde tu CRM o sistema externo…"* |
| Tipificación | Nombre de la tipificación + su **tipo** (ej. `Venta de Vehículo Nuevo` + tag `Fin positivo`) |

Texto de apoyo común: *"Eliminar componentes que esperan respuesta del cliente puede
interrumpir la ejecución correcta del flujo. Por favor, edita con precaución."*

---

## Reglas de la Épica 3 sin representación visual

La épica tiene tres reglas sin pantalla: la URL del webhook no cambia al editar (`01.1_`), un
flujo publicado no vuelve a Borrador (`01.2_`) y, si la publicación falla, se conserva la versión
publicada anterior (`01.3_`). **No se llevan al handoff** — decisión
[0013](../../decisiones/06-proceso-y-fuentes/handoff/0013-reglas-sin-ui-no-se-llevan.md).

La tercera sí tiene pantalla: snackbar `03.7 · 13` — *"No se pudo publicar el flujo. Se conserva
la versión publicada anterior."*

---

## Side panel de métricas de plantillas

En este archivo está el caso de uso que abre el panel — decisión
[0075](../../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md):

| Frame | Qué muestra |
|---|---|
| `03.9 · 01` | «Métricas de plantilla (10)» en el menú de más acciones de la fila de `03.3 · 04` |
| `03.9 · 02` | El panel abierto, con el copy de flujos: «Analiza el rendimiento de cada plantilla utilizada en este flujo.» Varias plantillas, en 1/10; cards en 2 × 2 ([0084](../../decisiones/05-paginas/metricas/0084-cards-del-panel-en-2x2.md)). Es el mismo panel para Campaña, Webhook y Tipificación; sin plantillas, solo el empty ([0088](../../decisiones/05-paginas/metricas/0088-mismo-panel-campana-webhook-tipificacion-y-flujo-sin-plantillas.md)) |

El panel que se entrega y sus interacciones están en el archivo *Métricas por plantilla inicial en flujos y campañas*,
page Actual UI, sección «Métricas por plantilla inicial en flujos y campañas». Las versiones anteriores siguen en la
sección «Handoff Design System · Panel de métricas de plantilla» ([0068](../../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md)).
La page Handoff v2 conserva solo una card que dice dónde está el panel.

Nombre: «Métricas de plantilla»; el número de plantillas va solo en el menú, hasta 10 —
[0067](../../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md). Sin «Reporte de errores» —
[0069](../../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md). Detalle en `sistema/metricas.md`.

`03.9 · 03` y `04` (panel completo en 2/10 y 10/10) ya no estaban en el archivo cuando se movió el
panel.

---

## Columna Canal

Un canal va como texto, con copiar en hover, como la tabla de Clientes del preview channel; varios
canales, «No conectado» y el caso edge siguen la tabla de referencia de diseño — decisión
[0072](../../decisiones/04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md) (reemplaza a la
[0037](../../decisiones/04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md)).

| Caso | Qué muestra | Interacción |
|---|---|---|
| Mensaje entrante · varios canales | `❖ atom-button` Tertiary `s`: ícono, «N canales» y `chevron-down` | Abre «Números conectados», con copiar en cada número o cuenta (`03.8 · 03–05`) |
| Un canal: mensaje entrante, campaña, tipificación o webhook | `_table-data-cell` *Main (premade)*: ícono del canal (`❖ atom-icon`, Font Awesome 7 Brands) y número o cuenta como texto, sin botón | Fila en *Hover*, `❖ atom-icon-button` xs Tertiary con `copy` al lado del texto y `❖ atom-tooltip` «Copiar» (`03.8 · 01`); al copiar, snackbar «Se ha copiado exitosamente.» (`03.8 · 02`, `03.7 · 05`) |
| Mensaje entrante · no conectado | `❖ atom-tag` Ghost `m` Neutral: ícono del canal y «No conectado» | Ninguna |
| Caso edge · el flujo se desconectó del canal al publicar | `❖ atom-tag` Ghost `m` Warning: `triangle-exclamation` y «No conectado» | Al hacer clic abre el detalle: «Sin números asociados» y la alerta Warning «Hubo un error al publicar el flujo y se desconectó del canal configurado. Revísalo, publícalo nuevamente y vuelve a conectarlo para evitar perder tráfico.» (`03.8 · 06–07`) |

Canales de un mensaje entrante: WhatsApp · Plugin web · Facebook Messenger · Telegram.

Las celdas son `_table-data-cell` · *Actions button (premade)* o *Tag (premade)*, con el tag
alineado a la izquierda. Las filas de los mensajes entrantes:

| Fila | Canal |
|---|---|
| Atención al cliente | Facebook Messenger · «Tienda Online GT» |
| Soporte técnico | `globe` · «3 canales» |
| Consulta de precios | «No conectado» (Neutral) |
| Seguimiento de pedido | WhatsApp · «5 canales» |
| Reserva de citas | WhatsApp · `+57 310 456 7890` |
| Encuesta de satisfacción | Telegram · `@tiendaonlinegt_bot` |
| Bienvenida nuevos contactos | Caso edge, en todas las tablas salvo las que un filtro deja sin esa fila |

Las demás filas son campañas, tipificaciones y webhooks, con un número de WhatsApp.

### Specs para discutir

La sección `03.8 · Specs · Columna Canal` (`132:556601`) explica cada caso y suma dos alternativas,
para llevar al equipo de diseño. Ninguna está decidida. Ahí están también la tabla de referencia de
diseño (`134:77346`), que no se toca, y una sección «NO TOCAR» (`134:77211`).

| Propuesta | Qué cambia |
|---|---|
| A · Propuesta actual | La columna de la [0023](../../decisiones/04-organismos/atom-data-table/columna-canal/0023-columna-canal-boton-y-tags.md), caso por caso. |
| B · Canal + Conexión | Canal muestra solo el canal, en una línea. El estado pasa a una columna nueva, Conexión, con `❖ atom-tag` Ghost `s`: los mismos valores del filtro «Canal conectado» (Conectado · No conectado) y «-» en las salidas. |
| C · Una línea con ícono de estado | Ícono del canal, número o cuenta y, al final, `circle-check` en `fg/status/success` con tooltip «Conectado»; «No conectado» sin ícono; en la publicación fallida, `triangle-exclamation` en `fg/status/warning` con el tooltip rich. |

Los pros y contras de B y C están en las cards y son interpretación. Para discutir en B: ¿la columna
se llama «Conexión» o «Canal conectado», como el filtro?

---

## Filtros

Disparador · Canal · Canal conectado · Estado · F. Última edición — decisión
[0048](../../decisiones/05-paginas/gestion-de-flujos/0048-gestion-filtro-estado.md) (reemplaza a la
[0019](../../decisiones/05-paginas/gestion-de-flujos/0019-gestion-canal-y-estado-de-flujo.md)).

Disparador: Mensaje entrante · Campaña · Webhook · Tipificación · Lista dinámica («0 de 5»,
`03.2 · 04`).

Estado, con el ícono `circle-dot`: Borrador · Publicando · Publicado · Migrando · Con error ·
Inactivo. Los frames son `03.2 · 08 - Filtro · Estado abierto` y `03.2 · 09 - Filtro · Estado ·
Inactivo seleccionado`.

- Canal conectado lleva la descripción «Aplica solo a flujos de Mensaje entrante» (`03.2 · 06`) —
  decisión [0039](../../decisiones/03-moleculas/atom-filter/0039-filtro-canal-conectado-con-descripcion.md).
- La vista por defecto no muestra flujos inactivos: se ven al filtrar por Inactivo y, al limpiar
  los filtros, la tabla vuelve a la vista por defecto (`03.2 · 09–11`) — decisión
  [0038](../../decisiones/05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md). Las filas inactivas no
  van en gris.

---

## Alertas de pantalla

Las dos alertas de `03.6` se eliminaron — decisión
[0040](../../decisiones/05-paginas/gestion-de-flujos/0040-alertas-03-6-eliminadas.md).

---

## Hallazgos abiertos

- La card «Menú de fila» (`10:27362`) describe el mapa de 03.3. Su texto se acortó para que entre
  en la card (636 de 812 px); falta que diseño confirme si prefiere agrandar la card (ver
  `RETOMAR.md`).
- El menú suelto «Opciones completas (03.3 · 04)» (`23:413916`) y el frame `03.3 · 19` anterior
  (`119:512347`) ya no están en el archivo (verificado el 2026-09-24). Tampoco estaban en la versión
  de las 8:44 de ese día; no se sabe quién los borró ni cuándo. Tampoco están `03.3 · 10` y
  `03.3 · 11` (`50:519534`, `50:525499`), los otros dos menús de Lista dinámica (verificado el
  2026-09-25). La fila se rearmó en la sesión 10 como `03.3 · 19–21`.
- La tabla del modal `03.4 · 05` (Campañas asociadas) sigue con la `❖ atom-table` anterior: insertar
  la tabla nueva en el slot del diálogo deja capas que no se pueden resolver. Sus fechas y su
  encabezado sí están al día.
- Los flujos de los modales `03.4` (Asistente de Ventas IA, Confirmación de Pedido, Encuesta
  Post-Soporte, Nurturing de Clientes) no están en ninguna tabla, así que su fecha no se puede cruzar
  con una fila.
- Las tablas de `03.8 · Specs · Columna Canal` conservan las fechas con el formato anterior: la
  sección no se toca.
- Las tablas muestran 13 filas con «Registros por página: 10» y «1 - 10 de 1,165 registros».
- La card `10:27358` (`02.1_ Tabla de listas y filtros`) se superpone con el
  `❖ atom-sidebar-complete` `10:39917`. Ya estaba así.
