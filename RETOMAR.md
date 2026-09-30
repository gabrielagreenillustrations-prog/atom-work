# Retomar el trabajo

Este archivo existe para abrir una conversación nueva con Claude sin volver a explicar
nada. **Copiá el bloque de abajo y pegalo tal cual.**

Última actualización: **2026-09-29**

---

## Prompt de arranque

> Trabajo en diseño de producto/UX en Atom (plataforma SaaS B2B de CX omnicanal).
>
> Mi fuente de la verdad está en https://github.com/gabrielagreenillustrations-prog/atom-work
>
> Antes de proponer nada, leé en este orden:
> 1. `formas-de-trabajo/principios.md` — cómo trabajo y qué no tolero
> 2. `RETOMAR.md` — dónde quedamos
> 3. `decisiones/README.md` — qué ya está decidido y no se rediscute, por componente
>
> Después contame qué necesito para avanzar.

---

## Dónde quedamos

Estoy haciendo el **handoff de adopción del Design System 1.0** en dos módulos:
Campañas (Resultados y Listas) y Automatizaciones (Gestión de flujos e Historial).

El 2026-09-23 hubo tres sesiones. La 01 cerró la alineación contra la Épica 3 y unificó
formatos (`historial/2026-09-23.md`). La 02 cerró sus pendientes, armó el ejemplo de calidad
baja y actualizó los dos artefactos (`historial/2026-09-23-sesion-02.md`). La 03 aplicó el lote
nuevo: tablas en *Sticky New*, íconos de menús y side panels, filtros y estados de dinámicas,
filtro Origen en Listas, columna Canal en variante botón, side panels sin overlay y nombres
realistas con caso de truncado (`historial/2026-09-23-sesion-03.md`, decisiones 0015–0021). Al
cierre se revisaron los frames nuevos, se actualizaron las cards de filtros y de menú de fila y
los dos artefactos.

El 2026-09-24, la sesión 04 sumó los tags de conexión a la columna Canal, armó la versión tag de
la publicación fallida (`03.8 · 04`) al lado de la de botón, sacó *Con error* de los estados de
las dinámicas y fijó el patrón de botones en loading (`historial/2026-09-24-sesion-04.md`,
decisiones 0022–0024). La sesión 05 cerró el resto del lote: placeholder y copy en Historial,
títulos de side panels sin contador, dinámicas con la tabla de estáticas, «Fecha de envío» en
Resultados y el mapa de menús de Gestión de flujos (`historial/2026-09-24-sesion-05.md`,
decisiones 0025–0028). La sesión 06 armó la tabla completa de Listas con Origen (`02.1 · 07`),
pasó la columna a «F. Actualización» con los íconos de fecha corregidos y dejó centrados y con blur
los modales de los dos archivos (`historial/2026-09-24-sesion-06.md`, decisiones 0029–0030).

La sesión 07 sumó Origen a todas las tablas de Listas, pasó las tablas de Historial a
`❖ atom-data-table` y armó `03.8 · Specs · Columna Canal` con tres propuestas para el equipo
(`historial/2026-09-24-sesion-07.md`, decisiones 0031–0032). Un `figma.triggerUndo()` revirtió
trabajo en Automatizaciones y se restauró la versión de las 8:44 (ver el historial). Antes de la
reunión de Campañas se revisó el archivo contra las observaciones: lo que hay que decidir está abajo
y los hallazgos, en `modulos/campanas/resultados-de-campanas.md`. Después, la fecha de dinámicas
(columna y filtro) pasó a «F. Creación», como el FRD 4 de la Épica 2 (decisión 0033). Cards y
artefactos al día.

La sesión 08 aplicó la tabla de referencia de diseño a la columna Canal de las 68 tablas de Gestión
de flujos: botones para uno o varios canales y para las salidas, tag Neutral «No conectado» y tag
Warning con tooltip para el caso edge (`historial/2026-09-24-sesion-08.md`, decisión 0034). Se
validó la lista de cambios de Gestión de flujos: lo que falta está abajo. Artefactos al día.

La sesión 09 (24 y 25 sep) aplicó dos lotes. En los dos archivos: fechas `23 Oct 24 14:30` con las
columnas premade donde existen, y overlay y tooltip del código de error en los side panels de
métricas. En Campañas: No entregados al lado de Fallidos, acciones no disponibles en Disabled,
«Descargar errores» solo con fallidos, el copy de Detener y los frames de diseño nombrados y
ordenados en la grilla. En Automatizaciones: el caso edge de la columna Canal abre un detalle, la
vista por defecto no muestra inactivos, el filtro Canal conectado tiene descripción y se borraron
las alertas de `03.6` (`historial/2026-09-24-sesion-09.md`, decisiones 0035–0045). Artefactos al día.

La sesión 10 (25 sep) verificó en QA qué acciones oculta cada menú de Gestión de flujos y las pasó a
Disabled en `03.3`, con la fila nueva de Lista dinámica (`03.3 · 19–21`). También aplicó las
respuestas a las preguntas: Detener en singular, fechas sin «hoy», «Felicitación de cumpleaños» con
datos, buscador de Dinámicas, filtro «Estado» y «F. Última edición». El orden de filtros de Listas ya
estaba aplicado en Figma; se renombraron los frames de Estado y Origen. Al final, Detener pasó a
`stop-circle` en todos los menús (`historial/2026-09-25-sesion-10.md`, decisiones 0046–0051). La
revisión contra Granola y la comparación con Global Patterns quedaron pausadas. Artefactos al día,
salvo los links de `01.8 · 12` y `01.8 · 13` (pregunta abajo).

La sesión 11 (26 sep) aplicó el lote de la reunión: snackbars con copy y cierre estándar en los dos
archivos, con la tabla de los 114 mensajes del código en `sistema/snackbars.md`; acciones no
disponibles ocultas en los menús (`sistema/acciones-no-disponibles.md`); dinámicas con *Con error* y
las reglas de Detener y Duplicar; búsqueda que deshabilita filtros en Resultados. En Campañas hay una
page nueva, **Handoff v2**, con el panel de métricas del nuevo DS y sus cinco cambios, Listas con
Origen y MCP, y la ideación de la tabla simplificada; la page Campañas quedó como producción: panel
de «Métricas por plantilla inicial» y Listas sin Origen (`historial/2026-09-26-sesion-11.md`,
decisiones 0052–0057). Con las respuestas de diseño, Automatizaciones quedó igual: panel de
producción en `03.9 · 01–09` y page Handoff v2 con el del nuevo DS ([0058](decisiones/04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md)).
Después: los snackbars duran 3 s o 5 s ([0059](decisiones/03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md)) y en
las cards v2 el ícono de información va arriba a la derecha ([0060](decisiones/04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md)).

La sesión 12 (28 sep) armó el benchmark del panel de métricas en la page Handoff v2 de Campañas
(12 productos, con capturas y una propuesta de drill-down), dejó en los frames v1 del panel solo el
panel del archivo de origen, con la pantalla, el menú, el backdrop y el snackbar del handoff
([0062](decisiones/04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md)), sacó el nombre de los snackbars
([0061](decisiones/03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md)) y completó las cards de descripción con los
componentes del DS (`historial/2026-09-28-sesion-12.md`). Después, todas las tablas de Resultados
pasaron a Clientes · Enviados · Errores · Entregados · Leídos · Respondidos, con un tooltip por
métrica en `01.3 · 02–06` ([0063](decisiones/05-paginas/metricas/0063-metricas-de-resultados.md)), con valores que cumplen la relación entre
métricas ([0064](decisiones/05-paginas/metricas/0064-valores-de-resultados-coherentes.md)), y el panel de métricas v1 de Campañas y
Automatizaciones pasó a cuatro cards y una sección de errores de Meta, con tooltips
([0065](decisiones/05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md)). Las decisiones de métricas viven en
`decisiones/05-paginas/metricas/`. La lista en Actualizando quedó en pausa.

Al final de la sesión 12: Gestión de flujos pasó a «Descargar flujo» y al modal «Detalles del flujo»,
sin el snackbar de simular ([0066](decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md)); todas las acciones y títulos de métricas dicen
«Métricas de plantilla», con «(N)» solo en el menú ([0067](decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)); los casos del panel (v1,
nuevo DS, benchmark e ideación) se movieron al archivo *Métricas por plantilla inicial en flujos y
campañas* y en los handoffs queda solo la apertura ([0068](decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md)); el panel perdió «Reporte de
errores» y Enviados usa `check` ([0069](decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md)); Historial pasó a «Nombre del cliente» y a buscar
por nombre o teléfono ([0070](decisiones/05-paginas/historial-de-conversaciones/0070-historial-nombre-del-cliente-y-busqueda.md)). El nombre de «Detalles del flujo» se edita como los
campos del preview channel, con Enter o un clic fuera del campo (`03.4 · 14–19`, [0071](decisiones/05-paginas/gestion-de-flujos/0071-editar-el-nombre-en-detalles-del-flujo.md)),
y los demás modales de detalle muestran el nombre como texto. En las tablas, un número o una cuenta que se
copia va como texto con `copy` en hover y tooltip «Copiar»: Canal de Gestión de flujos (un canal),
Teléfono de Historial y Canal de Resultados de campañas ([0072](decisiones/04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md)); el Canal de Historial
volvió al ícono con menú ([0073](decisiones/05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md)).
Los handoffs de los dos archivos siguen la estructura de *Conversaciones - Adopción DS 1.0*: secciones
«Handoff …», un título por caso de uso, una card por HU y una descripción por fila ([0074](decisiones/06-proceso-y-fuentes/handoff/0074-estructura-del-handoff-como-conversaciones.md)).
El panel de métricas que se entrega es la grilla A: reemplazó al anterior en la entrega del archivo de
métricas, y los handoffs llevan la apertura y el panel abierto con el copy de cada módulo (`01.6 · 01–02`,
`03.9 · 01–02`, [0075](decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md)).
Con las respuestas de diseño: cerrar «Detalles del flujo» con el nombre en edición descarta el cambio, como Esc o `close`
([0076](decisiones/05-paginas/gestion-de-flujos/0076-cerrar-detalles-con-el-nombre-en-edicion.md)); las celdas de las tablas de Automatizaciones usan el `❖ atom-icon` vigente
([0077](decisiones/01-fundamentos/iconografia/0077-atom-icon-vigente-en-las-tablas.md)); `03.3 · 01` muestra `ellipsis-vertical`; los filtros abiertos de Historial usan la tabla
de las demás pantallas; «Número asociado» en los modales queda como está, y `03.4 · 04` lo eliminó diseño.

La sesión 13 (29 sep) dejó visible el sidebar nuevo en los dos archivos, con el contenido desde x = 288 y lo suelto
realineado ([0080](decisiones/04-organismos/atom-sidebar/0080-sidebar-nuevo-visible.md)); las tablas con empty state
llevan la paginación en `no-data` y el empty state centrado ([0081](decisiones/04-organismos/atom-data-table/0081-empty-state-paginacion-no-data-y-centrado.md));
en Resultados Entregados pasó a `fg/secondary` y Leídos a azul ([0082](decisiones/05-paginas/metricas/0082-colores-de-metricas-en-resultados.md));
los tags de la columna Estado pasaron a m, en Campañas ([0083](decisiones/04-organismos/atom-data-table/0083-tags-de-las-columnas-en-m.md)) y en Gestión de flujos ([0089](decisiones/04-organismos/atom-data-table/0089-tags-de-estado-de-gestion-de-flujos-en-m.md)); y las cards del panel de
métricas van en 2 × 2, con un caso de números largos ([0084](decisiones/05-paginas/metricas/0084-cards-del-panel-en-2x2.md)). Al final, la entrega de métricas por plantilla
sigue las HU del FRD del 28-sep (`entregas/frd/`), con las pantallas, la tabla y los menús de los handoffs
([0085](decisiones/05-paginas/metricas/0085-entrega-de-metricas-alineada-al-frd.md)), y el panel lleva Enviados con `check`, «plantillas» en Errores Meta y el tooltip «Anterior»
([0086](decisiones/05-paginas/metricas/0086-panel-check-plantillas-y-anterior.md)); los tooltips de las cards están en HU-02 ([0087](decisiones/05-paginas/metricas/0087-tooltips-de-las-cards-en-la-entrega.md)) (`historial/2026-09-29-sesion-13.md`). La documentación va en un documento por submódulo, como la de Bandeja
([0079](decisiones/06-proceso-y-fuentes/documentacion/0079-un-documento-por-submodulo.md)).

### Esperando una respuesta mía

| Qué | Pregunta |
|---|---|
| «Categoría de errores unificada con las cards» | ¿A qué se refiere? No está en la lista de cambios aplicados. |
| Dinámicas | Las tablas de ejemplo muestran Activa (83 filas) y Detenida (8). ¿Se agrega una fila de ejemplo En pausa? |
| Card «Menú de fila» (`10:27362`) | Ahora describe el mapa de 03.3 y se acortó para que entre (636 de 812 px). ¿Te sirve así o preferís agrandar la card? |
| `01.6 · 02/05` | Muestran 10 plantillas (1/10) para «Encuesta satisfacción Q2», que en la tabla es de tipo Plantilla. ¿Se cambia la fila seleccionada a una Plantilla en lote o un Flujo? |
| Panel de dinámicas | La primera tarjeta dice «Iniciados»; la tabla dice Clientes y Enviados. ¿Se alinea? |
| `01.2 · 02` | La tab Dinámicas muestra CREAR CAMPAÑA y la card de Dinámicas dice que no hay. ¿Cuál vale? |
| Menú suelto «Opciones completas (03.3 · 04)» (`23:413916`) | Ya no está en el archivo, y tampoco en la versión de las 8:44 del 24 sep. ¿Lo borraste vos? La fila de Lista dinámica se rearmó como `03.3 · 19–21`. |
| Menú del canal en Historial (`04.3 · 03–06`) | La card `10:44938` dice que se abre al pasar el cursor sobre el ícono; en el lote dijiste «al cliquear». ¿Hover o click? |
| Buscadores en Hovered | Historial: 16 de 24 buscadores están en *Hovered*. Resultados: 64 frames (entre ellos las pantallas base `01.1 · 02` y `01.8 · 02`) usan *Hovered* con el botón en Enabled; `01.8 · 03` y `01.8 · 04` ya pasaron a la variante base. ¿Pasan todos a la base? Además, el buscador abierto sin texto está en *Hovered* en estáticas (`01.2 · 05`) y en *Focused* en dinámicas (`01.8 · 06`). |
| Tabla del modal `03.4 · 05` | Sigue con la `❖ atom-table` anterior (las fechas ya están al día): meter la tabla nueva en el slot del diálogo deja capas rotas. ¿Queda así o se arma el modal de otra forma? |
| Columna Canal · un canal | «Atención al cliente» muestra la cuenta de Messenger «Tienda Online GT». Tu lista pide «ícono + número visible» y la referencia usa un WhatsApp con número. ¿Va un número? |
| Ícono `globe` en la columna Canal | «Soporte técnico» lleva `globe` con «3 canales», como «Soporte web» en la referencia. ¿Es el ícono de Plugin web o el de varios tipos de canal? |
| Lista dinámica en la columna Canal | Tu regla nombra campañas, tipificaciones y webhooks; la 0023 sumaba Lista dinámica. En la fila nueva de `03.3 · 19–21` («Recompra clientes frecuentes») quedó un solo WhatsApp (`+54 11 2345 6789`), como las demás salidas: fue una suposición mía. ¿Va así? |
| Activar un flujo inactivo | Falta en Figma que, al activarlo, recupere su estado anterior. ¿Lo armo? |
| Flecha de orden en reposo | La [0035](decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md) dejó `arrow-down` visible en reposo en los encabezados de fecha. Global Patterns dice que el ícono de orden aparece solo al pasar el cursor por el encabezado y que en reposo el encabezado queda limpio. Fue una interpretación mía. ¿La saco en reposo, en los dos archivos? |
| Orden de la tabla de estáticas | La flecha está en «Fecha de envío», pero Global Patterns ordena por fecha de creación. La fila Agendada «Programa de referidos» no tiene fecha y queda entre `01 Ago 26` y «Felicitación de cumpleaños» (`24 Jul 26`). ¿Por qué fecha se ordena? Si es por Fecha de envío, ¿la Agendada va al final o arriba con su fecha agendada? |
| Opciones de Origen en Listas | El panel `02.2 · 09` muestra «Archivo CSV · Clientes existentes · Apps conectadas»; la [0018](decisiones/03-moleculas/atom-filter/0018-listas-filtro-origen.md) y la card dicen «Cargar un archivo · Clientes existentes · Desde apps conectadas». ¿Cuál vale? |
| HU de iconografía | No está en el repo, en Drive ni en lo que tengo de la conversación; solo quedan la [0007](decisiones/01-fundamentos/iconografia/0007-iconografia-activar-desactivar.md) y la [0015](decisiones/01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md). ¿Me la pasás en PDF o capturas? |
| «Ver flujo» con dos íconos | Usa `eye` en Gestión de flujos y `diagram-nested` en los menús de campañas (`01.4`). ¿Cuál va en cada caso? |
| Menús de fila de Dinámicas | `01.8 · 12` y `01.8 · 13` se reemplazaron por 8 tablas sueltas (una por estado y tipo) junto a los filtros de dinámicas. ¿Las enmarco como `01.8 · 12–19` para que tengan código y link en los artefactos? |
| Snackbars | Cinco temas abiertos en `sistema/snackbars.md`: cuáles duran 3 s y cuáles 5 s (el Web Library y la HU no lo definen), formato del límite diario de WhatsApp (no entra en un snackbar con «Entendido»), dinámicas legacy, claves sin traducción y tipos del código. |
| `01.4 · 04` En pausa | El menú de Flujo oculta «Detener campaña» y el de Plantilla lo muestra. Queda así hasta que valides si una campaña de Flujo en pausa se puede detener. |
| Chip aplicado en Disabled | `❖ atom-filter-chip` no tiene Disabled con `hasFilters` Yes: mientras hay texto en el buscador, el chip aplicado pierde el contador. Falta en el DS. |
| Panel de producción (page Campañas Handoff v1) | El panel usa variables no publicadas de «Métricas por plantilla inicial» (no las copié al archivo) y las flechas de navegación de `01.6 · 05` apuntaban a frames de Flujos y quedaron sin destino. ¿Se deja así, como el original? |
| Ideación | Entregados (120) y el reparto de errores por categoría son valores de ejemplo; los porcentajes usan una base provisoria (cards sobre Clientes, estatus sobre Enviados, categorías sobre el total de errores). |
| Benchmark del panel de métricas | La propuesta de drill-down es interpretación: ¿qué categorías lleva cada card y sobre qué base se calcula cada %? Ahora está en el archivo de métricas. |
| Panel v1 y la fila de la tabla | El panel muestra 100 enviados de una plantilla (1/10) y la fila «Encuesta satisfacción Q2» tiene 5 enviados en total. ¿Se alinean los números? |
| Ancho de `01.3 · 01` | La referencia mide 1579 px y la Fecha de envío queda debajo de Acciones; las demás tablas sueltas miden 1726 px. Quedó como está. |
| «Simular» | Pediste sacar el snackbar porque la acción ya no existe, pero «Simular» sigue en 7 menús de `03.3`, en el modal `03.5 · 05` y en dos cards. ¿Sale todo? |
| «Snackbars y errores» | Esa sección de tu lista vino vacía. ¿Faltaba algo? |
| `03.9 · 03` y `04` | Ya no estaban en Automatizaciones cuando moví el panel (`199:591273`, `199:591436`); existían antes en la sesión. ¿Los borraste vos? El contenido completo equivalente está en Campañas `01.6 · 04–05`. |
| Página de destino del panel | Lo moví a la page *Actual UI* (la del link). El archivo tiene también *Nueva UI*: ¿la versión con el nuevo DS va ahí? |
| Número en el menú | Los menús de campañas de Flujo y el flujo de `03.3 · 04` dicen «(10)», como el ejemplo del panel (1/10). `03.3 · 06` (Webhook) y `08` (Tipificación) quedaron sin número. ¿Va otro número en alguno? |
| Enviados | Leí «Enviados: 1se queda igual» como una palomita (`check`). ¿Es así o quedaba el ícono anterior (`user`)? |
| Frame vacío en Campañas | En la page *Campañas Handoff v1*, fuera de la sección, hay un frame «02.1 · 06 - Tabla · Tooltip Nombre truncado» sin contenido (`637:617816`). ¿Se borra? |
| Ícono de Activar | Propuesta: `circle-check`; alternativa: `toggle-on` con `toggle-off` para Desactivar. ¿Cuál va? |
| `03.3 · 19–21` (Lista dinámica) | Ya no están en el archivo de Automatizaciones (`179:572526`, `179:572820`, `179:573114`) y los artefactos conservan sus filas. ¿Se borraron a propósito? |
| Sección «Handoff Design System» del archivo de métricas | El panel que se entrega ya está en la entrega del archivo ([0075](decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md)). La sección aparte sigue con las versiones anteriores (v1 y nuevo DS), el benchmark, la ideación y la exploración de la grilla. ¿Se borra, se deja como referencia o se mueve alguna parte? |
| Navegación en `01.6 · 02` y `03.9 · 02` | Campañas muestra el panel de una plantilla, sin navegación (la fila es de tipo Plantilla); Automatizaciones, el de varias, en 1/10 (el menú dice «(10)»). Fue interpretación mía. ¿Va así? |
| `01.6 · 03` | `681:190591` también se llamaba `01.6 · 01` y muestra el hover en «Ver plantilla»: lo nombré `01.6 · 03 - Menú de fila · Hover en Ver plantilla` y la vista previa pasó a `01.6 · 03.1`, porque `01.6 · 04–18` ya son los casos anteriores del panel en el archivo de métricas. ¿Queda? |
| Error con el nombre vacío | Con el campo vacío, Enter muestra error ([0078](decisiones/05-paginas/gestion-de-flujos/0078-nombre-vacio-en-detalles-del-flujo.md)). ¿Qué texto lleva el tooltip? ¿Armo un frame del caso? |
| Documentación de Bandeja | La [0079](decisiones/06-proceso-y-fuentes/documentacion/0079-un-documento-por-submodulo.md) toma como modelo la documentación de Bandeja y no la tengo: en Chrome, Confluence está sin sesión. ¿Me pasás el link o un PDF? |
| Submódulos de la documentación | Leí cuatro documentos: Resultados de campañas, Listas, Gestión de flujos e Historial de conversaciones. ¿Son esos? ¿*Listas con MCP* va dentro de Listas o aparte? |
| Errores en `01.3 · 05` y `06` | En los frames de tooltip de Leídos y Respondidos hay un valor de Errores (10) en `forms-and-inputs/fg/enabled`, no en rojo. ¿Pasa a `fg/status/error`? |
| Conectores de la entrega de métricas | Se perdieron los cinco (navegación, más de 10 plantillas y copiar el error) al reemplazar el overlay; no los puedo recrear por script. ¿Los volvés a trazar o se deja así? |
| Imágenes del FRD del 28-sep | No llegaron las tres imágenes de referencia de los CSV. Los CSV están en cards, en HU-01 y HU-03. ¿Me las pasás para sumarlas? |
| Gestión de flujos sin número | En HU-02 usé `03.3 · 06` (Webhook, «Métricas de plantilla» sin «(N)») como caso de una plantilla en flujos. ¿Sirve o hay otro frame? |
| «Activa en el flujo» en Campañas | Los paneles abiertos desde Resultados de campañas muestran el tag «Activa en el flujo». ¿Es el copy correcto para campañas? |
| Copy del flujo sin plantillas | Propuesta: «Este flujo no tiene plantillas» · «Las métricas aparecen cuando el flujo envía una plantilla.» ([0088](decisiones/05-paginas/metricas/0088-mismo-panel-campana-webhook-tipificacion-y-flujo-sin-plantillas.md)). ¿Va así? |
| Lista dinámica y el panel | Su menú también tiene «Métricas de plantilla» (`03.3 · 19`). ¿Abre el mismo panel que Campaña, Webhook y Tipificación? |
| Errores Meta en 0 | El FRD dice que «la card puede mostrar 0». Hoy, sin errores de Meta, el panel no muestra la sección. ¿Se agrega «0 Errores Meta»? |
| Auditoría de estados | Reporte del 29 sep en `historial/2026-09-29-sesion-13.md`: cinco correcciones esperan el OK y tres preguntas (sidebar de Automatizaciones en Hovered, chip de filtro abierto en Pressed, textos de paginadores). |
| Frame vacío en el archivo de métricas | En la page *Actual UI*, fuera de las secciones, hay un frame vacío «Flujo sin plantillas» de 1280 × 833 (`15369:524621`). No tengo registro de haberlo creado. ¿Se borra? |
| Lista en Actualizando | En pausa por el benchmark. Para verla: esperar la actualización agendada de la lista dinámica de prueba, agregar clientes por CSV en QA o armar el frame desde el código. Las dos listas de prueba siguen en QA (`K8eBSkS3bsBt7G5d7nL9`, `1nqAMaHaQtAJWEqVWzGu`); se borran solo con tu OK. |

### Para decidir

1. **Columna Canal:** las tablas usan la tabla de referencia de diseño, con el caso edge que abre un detalle — decisión [0037](decisiones/04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md). Las propuestas B y C de `03.8 · Specs · Columna Canal` siguen para el equipo; la A describe la columna anterior ([0023](decisiones/04-organismos/atom-data-table/columna-canal/0023-columna-canal-boton-y-tags.md)).
2. *Ver flujo* en el menú de campañas de Plantilla (fila de abajo de `01.4`): producción no lo mostró en la revisión del 22 sept. Falta confirmarlo en código. Hoy ningún menú de Plantilla de `01.4` lo muestra.
3. El plan por módulo del artefacto *Nuevo DS* sigue con Resultados y Listas en «Se cierra hoy» (22 y 23 sept) y Gestión de flujos en «Programado · jue 24 sept».
4. `historial/2026-09-23.md` remite a archivos que no existen (`DECISIONES.md`, `HALLAZGOS.md`, `PENDIENTES.md`).
5. **Revisión pausada** (sesión 10): la verificación contra Granola de las dos últimas reuniones de Campañas y la comparación del handoff con Global Patterns quedaron a medias, por pedido.
6. **Reunión de Campañas** (check del 2026-09-24): la columna de error ya se llama «Errores» en la tabla ([0063](decisiones/05-paginas/metricas/0063-metricas-de-resultados.md)) y el panel v1, el de producción, sigue con «Fallidos». Quedan: scroll corrido en las pantallas de estáticas, estados de dinámicas, títulos de los modales informativos y reglas de los menús de `01.4`. Detalle en `modulos/campanas/resultados-de-campanas.md`.
7. **Estado Inactivo** (lista de cambios de Gestión de flujos): Inactivo como estado del flujo, solo la acción Activar y, al activarlo, el estado anterior. La vista por defecto no muestra inactivos y las filas no van en gris ([0038](decisiones/05-paginas/gestion-de-flujos/0038-gestion-vista-por-defecto-sin-inactivos.md)). Validarlo con el equipo de diseño antes de llevarlo como patrón general.

### Fuera de Figma

| Qué | Estado |
|---|---|
| FRD en Confluence | Estructura: un documento por submódulo, similar al de Bandeja ([0079](decisiones/06-proceso-y-fuentes/documentacion/0079-un-documento-por-submodulo.md)). La skill «FRD de migración a DS» se compartió como link de claude.ai; con la cuenta de esta sesión, claude.ai responde «Este elemento no está disponible. Puede que no exista o que no tengas acceso a él». Interpretación, sin verificar: el link es de la organización de Claude de quien la compartió. Para generar el FRD hace falta la skill como archivo (`.zip` o `.skill`) o acceso a ese link. |

### Sin revisar

Épica 4 · Logs de conversaciones · Soportar ejecución de WhatsApp Flows sin importar el WABA.
*Métricas por plantilla inicial* se usó como fuente del panel de producción en Campañas y en
Automatizaciones (sesión 11), sin revisarlo contra el handoff.

---

## Cómo trabajar mis archivos de Figma

El MCP oficial de Figma está autenticado con **otra cuenta que no tiene acceso** a mis
archivos. Toda lectura y escritura se hace por la **consola de DevTools de la app de
escritorio** (`cmd+alt+i`, contexto `top`, el global `figma` está disponible).

Los gotchas conocidos están en `formas-de-trabajo/trabajar-con-claude.md`. Vale la pena
leerlos: me ahorraron horas y dos accidentes.

---

## Al cerrar la sesión

Pedile a Claude:

> Actualizá el repo: escribí la entrada de `historial/`, movéme las decisiones nuevas a
> `decisiones/` con su razón, actualizá `RETOMAR.md` con dónde quedamos, y tocá los
> archivos de `sistema/` o `modulos/` que hayan cambiado.
