# Trabajar con Claude en mis archivos

Conocimiento operativo. Evita reaprender lo mismo cada sesión.

---

## Acceso a Figma

El **MCP oficial de Figma está autenticado con otra cuenta** (`gabrielagreenillustrations@gmail.com`)
que **no tiene acceso** a mis archivos de trabajo. `use_figma` devuelve
*"you don't have edit access to this file"*.

Toda lectura y escritura se hace por la **consola de DevTools de la app de escritorio de
Figma**, donde el global `figma` (Plugin API) está disponible.

### Cómo abrirla

`cmd+alt+i`, o menú **Plugins → Development → Show/Hide console**. El selector de
contexto tiene que decir **`top`** — si dice un UUID o un nombre de worker, hay que
cambiarlo.

### El patrón que funciona

1. `computer_app_click` en el prompt de la consola — el resultado debe decir
   *"AXPress on AXTextArea 'Console prompt'"*. Si dice otra cosa, **el foco no está
   en la consola y lo que escribas va al canvas**.
2. `computer_app_type` con el script en **una sola línea**.
3. `computer_app_key` con `Return`.
4. Esperar. Un script sobre un archivo completo tarda **45–90 segundos**.
5. `computer_app_type` con `copy('X'+__r);` + `Return`, `app_release`, y leer el clipboard.

El prefijo (`'X'`, `'Y'`…) sirve para distinguir una lectura nueva de una stale.

Para scripts largos: el script empieza con `window.__x = 'RUNNING'` y deja el resultado en
`window.__x`; se lee aparte con `RR('X')`, definido una vez por pestaña como
`window.RR = p => { copy(p + window.__x); console.clear(); return 'go' }`. Si vuelve `RUNNING`,
esperar y repetir con otro prefijo. `computer_read_clipboard` falla mientras la sesión tiene
locks de apps: llamar antes a `computer_release_lock`.

---

## Gotchas que costaron caro

**El foco se pierde sin aviso.** Dos veces las pulsaciones fueron al canvas en vez de a
la consola y crearon capas de texto y un `Frame 1` dentro de un archivo de entrega ajeno.
Se recuperó con `cmd+z`. **Verificá siempre el resultado del click antes de escribir.**

**Nunca `figma.triggerUndo()`.** No deshace el último cambio: deshace de una vez todo lo que se hizo
por consola desde que se abrió la pestaña. El 2026-09-24 revirtió en Automatizaciones el trabajo de
varias sesiones y *Edit → Redo* no lo recuperó. Se recuperó con *File → Show Version History* → clic
derecho en la última versión buena → *Restore this version* (necesita control de pantalla completa y
recarga el archivo). Lo que otra sesión haya hecho después de esa versión se pierde. Para deshacer un
cambio propio, revertirlo por API: borrar lo creado y volver cada propiedad a su valor.

**Al cambiar de pestaña, el prompt se mueve.** Figma reconecta el multiplayer y agrega tres o
cuatro líneas a la consola; el primer click después del cambio llega como click crudo a la web.
Esperar a ver `afterJoinEnd PageSyncing`, sacar screenshot, hacer click en el prompt a la derecha
de los links (x ≈ 1150) y escribir solo cuando el resultado diga *"Console prompt"*. Si el
texto va al canvas, las letras cambian de herramienta y un Return con la herramienta Frame
crea un «Frame N» de 100 × 100 en el centro de la vista (el 2026-09-23 y dos veces el
2026-09-24 cayó dentro del slot Columns de una tabla; la última, en `02.2 · 03`). *Edit → Undo* por menú no deshace nada mientras DevTools
tiene el foco: borrar el nodo por API y comparar el archivo (opacidades, flips, estructura) para
confirmar que no cambió nada más.

**Los IDs anidados caducan.** Los IDs de frames de primer nivel son estables. Los que
llevan `;` cambian cuando se oculta o reordena algo dentro de una instancia. No los
guardes entre sesiones. Lo que va en el slot de una instancia también lleva id compuesto,
`I<instancia>;<ruta del slot>;<id>` (el tooltip de `03.8 · 03` es
`I99:1440556;11916:102528;11916:141670;99:1440581`): buscarlo desde la instancia.

**`findAll` de instancias se invalida al ocultar.** Ocultar un `atom-list-item` re-crea
los IDs de sus hermanos, y el bucle revienta con *"node does not exist"*. Hay que
re-consultar en cada iteración.

**Acotá la búsqueda al contenedor correcto.** Buscar `atom-list-item` en todo el frame
encontró 12 filas de la tabla de fondo en vez de la fila del diálogo. Buscá dentro del
`atom-dialog`, no del frame.

**La consola se bloquea si un script cuelga.** Un `getNodeByIdAsync` sobre una página no
cargada nunca resuelve y deja la consola muerta: toda evaluación posterior se ignora en
silencio. Se arregla cerrando y reabriendo DevTools.

**Editar texto necesita cargar la fuente primero.**

```js
const setTxt = async (t, v) => {
  for (const s of t.getStyledTextSegments(['fontName'])) await figma.loadFontAsync(s.fontName);
  t.characters = v;
};
```

**El autocompletado de la consola se traga el Enter.** Terminar la línea con `;` lo evita.

**`app_type` a veces escribe el script dos veces** (lo pone por accesibilidad y además lo
teclea). Con un script de lectura no pasa nada; los de escritura tienen que ser idempotentes
—chequear el estado antes de cambiarlo— y conviene mirar el prompt con zoom antes del Return.

**Con la pantalla bloqueada no llega nada.** Los clicks y el teclado fallan; los screenshots
sí funcionan. No reintentar: programar un chequeo (`send_later`) y seguir cuando se
desbloquee.

**Después de un bloqueo de pantalla la consola puede rechazar el Return** («text is selected»).
Ocultar y mostrar DevTools no alcanza: cerrar la pestaña (*File → Close Tab*), reabrirla
(*File → Reopen Closed Tab*) y abrir la consola con *Plugins → Development → Show/Hide console*.
La pestaña reabre en la página *cover*: pasar a la página de trabajo con
`await figma.setCurrentPageAsync(página)` antes de buscar nodos.

**Nada de `figma.currentPage.findAll` en Campañas.** Recorrer la página entera traba la consola
varios minutos. Buscar dentro de la sección (`266:150994` o `296:789000`). En cambio,
`findAllWithCriteria({types: ['INSTANCE']})` (o `['TEXT']`) recorre la página en unos segundos:
sirve para inventarios, como buscar todos los botones en *Loading*.

**El archivo puede cambiar mientras trabajás.** El 2026-09-23 alguien reconstruyó
`01.4 · 04/06/07/08` con IDs nuevos en plena sesión y un `getNodeByIdAsync` al ID viejo volvió
`null`. Antes de escribir, releer el nodo por nombre dentro de la sección.

**`clone()` deja el clon en la página**, no en la sección del original: moverlo con
`seccion.appendChild(clon)` y fijar `x` / `y` relativos a la sección.

**Después de cambiar el `State` o la variante de las celdas de una fila, revisar el ancho.** Una
celda en *Hug* más angosta que su columna deja el hueco sin fondo en Hover o Selected y corta el
divisor. Se arregla con `layoutSizingHorizontal = 'FILL'`. Pasar de *Cell New - Fill* a
*Actions button (premade)* dejó 67 celdas de Canal en *Hug*.

**Truncar un texto dentro de una celda:** `textAutoResize = 'HEIGHT'`,
`layoutSizingHorizontal = 'FILL'`, `textTruncation = 'ENDING'`, `maxLines = 1`.

**Después de cambiar de pestaña, `copy()` puede no escribir el clipboard.** La lectura devuelve
lo que había antes, que puede ser de la otra pestaña. Usar un prefijo distinto en cada lectura
(`'V'`, `'W'`…) y repetir si vuelve el anterior. Para resultados cortos, alcanza con evaluar la
variable (`__r`) y leerla en la consola.

**Un script que empieza con `console.clear()` no muestra su resultado.** Guardarlo en una
variable (`window.__r`) y leerla con otra evaluación.

**Para abrir un link de Figma en la app de escritorio:** escribir la URL en el clipboard y usar
*File → Open File URL From Clipboard*.

**Un script sin `await` bloquea la consola hasta terminar.** Lo que se escriba mientras tanto
queda en cola, y el screenshot de la consola a veces no muestra el resultado hasta el próximo
click; pasa también con scripts async (el 2026-09-25 no apareció ni `Promise {<pending>}`): después
de cada Return, clic en el panel antes de leer. Un `findAll` con predicado sobre toda la página tarda decenas de segundos;
`findAllWithCriteria` es mucho más rápido.

**Fuente de los íconos.** Los glifos genéricos van en *Font Awesome 7 Pro* (Regular). *Brands*
es solo para marcas (whatsapp, facebook-messenger, instagram, telegram): un glifo genérico con esa
fuente se ve como texto («MESSAGE-ARROW-UP-RIGHT»), y uno de marca con Pro, también («WH@SAPP»).
Cambiar el glifo por propiedad no cambia la fuente: hay que fijarla en el TEXT del ícono. Después de
cambiar íconos, contar los TEXT con fuente Brands agrupados por carácter.

**Al mover filas de frames, revisar cruces.** Un nodo suelto (un menú, una nota) puede quedar
tapado por un frame que se movió encima. Chequear, por sección, los hijos visibles cuyas cajas se
cruzan.

**Meter una instancia en un frame con auto layout puede estirarla.** Si la instancia tiene
`layoutSizingHorizontal = 'FILL'` (`layoutAlign = 'STRETCH'`), con `appendChild` toma el ancho del
frame: una tabla de 1171 px quedó en 100, el ancho de un `createFrame()` recién creado. Fijar
`'FIXED'` y el tamaño antes de moverla, o crear el frame sin auto layout, y comparar anchos después.

**Puede haber otra sesión con la misma cuenta.** `figma.activeUsers` lista las sesiones abiertas
(`sessionId`, `selection`, `viewport`). El 2026-09-24 otra sesión borró un frame recién armado. Antes de
tocar algo que otro puede estar editando, mirar su selección; si un `getNodeByIdAsync` vuelve `null`,
el nodo se borró.

**Un frame nuevo trae fill blanco.** Dejar `fills = []` o ligar el color a un token con
`figma.variables.setBoundVariableForPaint(paint, 'color', variable)`.

**Effect styles de la librería:** `figma.importStyleByKeyAsync(key)` y
`node.setEffectStyleIdAsync(style.id)`. La key de `blur/surface/subtle` es
`4ff1a2f536a203b9820596670d44bddedd070b6a`.

**No meter una instancia compleja en el slot de otra.** Una `❖ atom-data-table` nueva dentro del slot
de contenido de un `❖ atom-dialog` dejó capas que no se resuelven («cannot truncate override path»).
Por eso la tabla de `03.4 · 05` sigue con la versión anterior.

**`copy()` en un comando aparte.** En un script async largo, `copy` puede fallar con «copy is not
defined». Guardar el resultado en `window.OUT` y correr `copy(OUT)` como comando propio.

**`findAll` sobre secciones grandes bloquea la consola** de uno a tres minutos: esperar a que aparezca
la promesa resuelta antes de `copy(OUT)`.

**Imágenes de la web.** `figma.createImageAsync(url)` desde la app de escritorio baja imágenes que el
proxy de la nube bloquea (Brevo, HubSpot, Twilio, Infobip, Respond.io, Wati, Bird, Treble,
Mailchimp). El CDN de Klaviyo (`cdn.sanity.io`) responde 403. Las URL firmadas (Intercom) vencen en
minutos: crear la imagen apenas se obtiene la URL.

**Migrar una tabla vieja sin capas fantasma.** Instancia nueva de `❖ atom-data-table`, vaciar el slot
Columns, clonar ahí los `_table-column` del slot del `↳ Table Body Props` viejo y **recién después**
cambiar la variante de `❖ atom-table` (si quedan fantasmas, pasar a Basic y volver a Sticky New).
Cambiarla antes deja subcapas que hacen fallar cualquier `findAll`. El cuerpo viejo tiene un primer
`_table-column` fuera del slot, que no se copia.

**Hay tablas desacopladas.** En Historial, tres tablas (`04.2 · 04–06`) son un FRAME llamado
`❖ atom-table` con el `↳ Table Body Props` adentro, y una búsqueda de instancias no las encuentra. Para
inventariar tablas viejas, buscar `↳ Table Body Props` en toda la página.

**Lo visible no es solo `visible`.** Un TEXT con `visible = true` puede estar oculto por un ancestro, y
un `❖ atom-list-item` visible puede quedar recortado por el alto del menú. Para contar lo que se ve,
recorrer los padres y comparar con la caja del menú.

**`copy()` puede fallar dentro de una continuación async.** Dejar el resultado en `window.__x` y leerlo
con `RR()` en un comando aparte.

**Los scripts muy largos fallan al escribirse.** Con más de unos 2.000 caracteres, `app_type` puede no
escribir o dejar el texto seleccionado, y entonces el Return se rechaza. Definir helpers en un comando
(`window.vis`, `window.tv`…) y correr el resto en partes. Si el prompt quedó con texto seleccionado,
reemplazarlo con `app_type` y `overwrite_existing`.

**Escribir solo en el prompt de la consola, verificado.** El 2026-09-25, después de cambiar de
pestaña, un `app_type` con `target: focused` y tipeos en coordenadas sin verificar llegaron al canvas
de Campañas como atajos de teclado: crearon tres frames vacíos de 100 × 100 (`554:550090–92`), que se
borraron, y otra vez activaron la herramienta Frame. Antes de escribir: `app_click` en el prompt y
seguir solo si responde `AXTextArea 'Console prompt'`; después `app_type` y el Return en esa misma
coordenada. Nunca `target: focused`.

**Una pestaña en segundo plano pierde la conexión.** El servidor la cierra por inactividad
(`server_idle`) y al volver reconecta (`journaled reconnect`). Los cambios se conservan, pero
conviene leerlos otra vez antes de seguir.

**Una sección nueva trae borde.** `figma.createSection()` viene con un stroke por defecto: dejar
`strokes = []`.

**Los nodos nuevos llevan el id de la sesión que los creó.** Un nodo `524:…` lo creó la sesión 524;
`figma.currentUser.sessionId` da la propia y `figma.activeUsers`, las demás con su selección. Sirve
para saber si otra sesión con la misma cuenta está armando algo antes de tocarlo.

**No recorrer todas las páginas de un archivo grande.** `loadAsync` + `findAllWithCriteria` página
por página colgó la pestaña de la Épica 1 varios minutos. Buscar primero en las páginas que importan.

**En segundo plano, la consola de una pestaña no siempre se abre.** `cmd+alt+i` no hace nada si la
app no está al frente. En la sesión 11, *Plugins → Development → Show/Hide console* por
`computer_app_menu` sí la abrió en segundo plano. No cerrar DevTools en una pestaña donde se va a
seguir trabajando.

**Tags con `❖ atom-icon (DEPRECATED)`.** En Gestión de flujos, 39 tags de la columna Canal lo
traían; en `03.6 · 01` se veía `circle-check`. Se cambia con `swapComponent` al `❖ atom-icon` de la
Web Library y, después, `Glyph#1374:1` y la fuente.

**Del `❖ atom-icon (DEPRECATED)` al vigente.** `swapComponent` al `❖ atom-icon` del set
`4cd26eac74667a30dddfe8249656cd0d1411a516` (`Weight=Regular` o `Solid`) y después `Icon Name#2590:0` con
el glifo. Antes del swap hay que guardar el tamaño, el alto de línea y los fills del texto `↳ font-icon`, y
volver a ponerlos: el componente vigente mide 10 × 10 con texto de 8 px. En los de marca, la fuente pasa a
Font Awesome 7 Brands. Dentro de una tabla, cada swap y cada `setProperties` tardan cerca de un segundo:
1604 íconos llevaron más de una hora. `findAll` sobre frames con capas rotas falla («node does not
exist»): conviene un recorrido propio con `try/catch` por hijo.

**Cambiar variantes en bloque es lento.** Las 68 tablas de Gestión de flujos (872 celdas de Canal)
tardaron cerca de media hora, unas dos tablas por minuto. Dejar el progreso en `window.__x` y
leerlo aparte con `RR()`, sin esperar el final.

**No hacer clic de pantalla completa sobre la barra de pestañas.** En la sesión 11 un clic para
cambiar de pestaña cerró dos (Campañas y la Épica 2). Se reabrieron con *File → Recently Closed
Tabs*, sin pérdida. Para cambiar de pestaña: `computer_app_click` con el `element_index` del tab.

**Mover nodos dentro de un slot anidado deja sus IDs inaccesibles hasta recargar.** Después de
`appendChild`/`insertChild` en el contenido de un slot de una instancia anidada (las cards dentro del
side panel), leer o modificar esos nodos da «does not exist». Se ven bien. Se arregla cerrando la
pestaña (*File → Close Tab*) y reabriéndola (*Recently Closed Tabs*). Hacer cada reestructura en un
solo script y verificar después de recargar.

**`copy()` no existe dentro de un `async` que tarda.** Guardar el resultado en `window.OUT` y leerlo
con `RR()` en otra línea.

**Escribir en la consola.** Cuando `app_type` responde *ineffective*: `computer_write_clipboard` con
el script, clic de pantalla completa en el prompt, `cmd+v` y Return (a veces el primer Return agrega
una línea: repetir). Limpiar la consola antes de cada script para que el prompt quede arriba.

**Consola en segundo plano.** Con `app_click` + `app_type` + `app_key return` se puede escribir en
la consola sin tomar la pantalla, pero:

- los comandos se ejecutan con demora;
- el portapapeles no se lee: la salida va con `console.log` y se lee en la captura;
- antes de escribir, el resultado del clic tiene que decir «Console prompt». Si cae en el canvas, cada
  letra es un atajo de Figma.

**Copiar frames entre archivos.** En el origen, `figma.currentPage.selection = [...]`, clic en una
etiqueta del panel derecho (no en el canvas) y `cmd+c`. En el destino, sin nada seleccionado, clic en
un lugar vacío del canvas y `cmd+v`. Los nodos pegados quedan como selección; Figma los mete en la
sección donde caen y no respeta las posiciones relativas entre secciones. Los *Connector line* no se
vuelven a trazar: quedan cruzando el canvas. Si el origen usa variables propias, Figma ofrece
copiarlas: no aceptar.

- `computer_write_clipboard` pisa lo copiado en Figma: escribir los scripts antes de `cmd+c` o
  después de `cmd+v`, nunca en el medio.
- Para que los nodos no caigan dentro de un frame, antes de pegar llevar el viewport a una zona vacía
  (`figma.viewport.center`). Quedan en la raíz de la página y se ubican después con `appendChild`.
- Las conexiones del prototipo entre los frames pegados llegan sin destino. Leer las `reactions` en
  el origen por ruta de índices (`children[i]…`) y rehacerlas en el destino con `setReactionsAsync`,
  mapeando los IDs de frame.
- Un `CHANGE_TO` necesita una variante del mismo set que el componente de la instancia en el archivo
  destino (`(await n.getMainComponentAsync()).parent.children`). `importComponentByKeyAsync` trae otra
  copia, y con ella `setReactionsAsync` falla.

---

## Estructura de los componentes

| Componente | Qué hay que saber |
|---|---|
| `❖ atom-list-item` | Propiedades booleanas: `Trailing tag#4962:30`, `Show category#4964:81`, `Show description#4962:55`, `Trailing icon#4962:25`. El texto principal se llama `Text` dentro de `Text and supporting text`. |
| `❖ atom-tag` | `↳ label#2975:0` para el texto, `Intent` para el color (`Neutral`, `Info`, `Success`…). El ícono es un `❖ atom-icon` interno (`Glyph#1374:1`, TEXT `↳ font-icon`) y se muestra con `hasIcon` = Yes. |
| `v7-icon (pro)` | El glifo se cambia con la propiedad **`icon-name#1:13`**, no con `Glyph` (que suele venir vacía). |
| `❖ atom-text-field` | El placeholder es el TEXT que no se llama `Label text` ni `Supportive text`. Puede estar nombrado `Small`. |
| Modales | Hijos directos del frame: `Layout`, `backdrop` (RECTANGLE), `❖ atom-dialog` (INSTANCE) y, si hay, el dropdown o tooltip abierto sobre el diálogo, que se mueve con él. En Automatizaciones hay además un frame `Con datos` en x = 1280. El backdrop se llama **`backdrop`**, no `overlay`. |
| Ítems de menú (`❖ atom-list-item` en `❖ atom-dropdown-menu`) | El ícono líder es un `❖ atom-icon (DEPRECATED)`: el glifo se cambia con **`Glyph#1374:1`**, no con `icon-name`. Para encontrar un ítem, buscar por el texto de la etiqueta, no por el nombre de capa. |
| `❖ atom-alert` | Variantes `Type` (Warning, Info, Success, Error, AI) × `Banner` (Inline, Wide). Texto en `↪️ Text#1031:50` y `↪️ Description#1031:55`; ícono en el `❖ atom-icon` interno (`Glyph#1374:1`). |
| `❖atom-sidepanel` | Dos slots: `HeaderSlot` (section heading) y `BodySlot`, que acepta hijos: ahí se inserta una alerta con `insertChild`. |
| `_table-data-cell` | Estados `Idle` · `Hover` · `Selected`. La variante *Actions button (premade)* trae un `↳ ButtonProps` (`Label#9058:0`, `left-icon#1114:0`, `right-icon#1114:121`, `State` Enabled / Hovered / Focused / Loading, `Size` xs · s · m…). La variante se escribe con guion ASCII: **`Cell New - Fill`**. *Cell New - Fill* tiene un slot horizontal vacío; al volver a esa variante reaparece lo que el slot tenía antes, así que hay que vaciarlo antes de insertar. Para llevar un botón al slot: `clone()` del `↳ ButtonProps` **antes** de cambiar la variante. *Tag (premade)* centra el tag: en la columna Canal va alineado a la izquierda (`primaryAxisAlignItems = 'MIN'`). En *Actions button (premade)* el ícono del botón va en `Base Icon` › `v7-icon (pro)`, y el INSTANCE_SWAP `↳ ButtonVariant (1)#3446:0` de la celda guarda la variante exacta del botón (`10:3750` = `s` · Tertiary · Enabled; en Hovered, `10:4010`). Si apunta a otro set (`13:63560`), el hijo es un `❖ atom-button` sin `↳ ButtonProps`, con `hasLeftIcon` e `Icon Name#2590:0`. |
| Columna de ejemplo de Canal (`67:70407`, de diseño) | Celdas contando desde 1: la 3 es «sin canal» (tag Neutral), la 4 «un canal» (tag Success) y la 5 «publicación fallida» (tag Warning + chevron). Solo se copia desde ahí: no se toca. |
| Tabla de referencia de Canal (`134:77346`, de diseño) | En `03.8 · Specs · Columna Canal`. Es la referencia de la columna, con el detalle del caso edge ([0037](../decisiones/04-organismos/atom-data-table/columna-canal/0037-columna-canal-caso-edge-con-detalle.md), que reemplaza a la [0034](../decisiones/04-organismos/atom-data-table/columna-canal/0034-columna-canal-tabla-de-referencia.md)). No se toca. |
| `❖ atom-cursors` | Variante `type`: `hand-pointer` · `hand-pointer--filled` · `arrow-pointer` · `arrow-pointer--filled` · `i-cursor` · `hand-grab`. El glifo es un TEXT, no un VECTOR; la punta de `arrow-pointer` queda a unos (7, 5) px del origen de la instancia de 24 × 24. |
| `❖ atom-tooltip` | Variante `variant` `plain` o `rich` (con `↳ subhead`, `↳ supporting text` y acción). En las tablas va con posición absoluta dentro del slot Columns: si la celda cambia de alto, hay que recolocarlo. |
| Cards de descripción (`internal-sections`) | Variantes `internals-sections_name-cases`, `_divison-flow` y `_description`. En la de descripción, capas `title` y `text`. La altura es fija (832 desde la [0074](../decisiones/06-proceso-y-fuentes/handoff/0074-estructura-del-handoff-como-conversaciones.md); antes, 812): si el texto crece, se recorta sin aviso. En `_name-cases` las capas son `01_` (número), `Descripción del caso` y `Atom` (tag); en `_divison-flow`, `02_`, `Casuística específica / División del flujo` y `Atom`. Pasar de una variante a otra con la propiedad de variante conserva la instancia, pero los textos hay que volver a escribirlos. Cada card nombra los `❖` componentes de su sección (pedido de diseño, 28 sep). La capa `text` puede venir oculta y con el texto de ejemplo del componente («Este flujo aplica para productos que se vendan basado en su peso.»): al revisar, mirar `visible`. |
| Título de caso de uso (`internal-title-section`) | Key `63cc62e926268e6809f60383e724d291dec2fe9a` (se importa con `importComponentByKeyAsync`). Sin propiedades: el nombre va en la capa TEXT `Name Section`. 305 px de alto; el ancho se ajusta con `resize` hasta el borde derecho del último frame del caso. |

---

## Conexión

La conexión con el Mac se cae seguido y el permiso de computer-use **expira a los 30
minutos sin actividad**. Cuando pase, hay que volver a pedir acceso con
`computer_resolve_access` + `computer_request_access`.

El shell del escritorio (`device_bash`) corre en una **VM Linux aislada**, no es mi shell
de macOS: no tiene mis credenciales de git ni mi keychain. Y Terminal solo se puede
otorgar en modo *click*, sin escritura. **Conclusión: los `git push` los hago yo.**

Ese shell tampoco puede borrar sin permiso, así que un `git status` común deja
`.git/index.lock` colgado y traba el git de la Mac. **Siempre `git --no-optional-locks`.**
