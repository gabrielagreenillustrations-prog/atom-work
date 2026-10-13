# Chat · atom-chat v2

Última revisión: **2026-10-05** (sesión 13) · Decisiones: [0080](../decisiones/04-organismos/atom-chat/0080-un-template-por-superficie.md) · [0081](../decisiones/04-organismos/atom-chat/0081-simulador-es-inbox-observer.md) · [0082](../decisiones/04-organismos/atom-chat/0082-reutilizar-componentes-de-la-web-library.md) · [0083](../decisiones/04-organismos/atom-chat/0083-prototipo-storybook-con-la-nueva-ui.md) · [0084](../decisiones/04-organismos/atom-chat/0084-logs-de-ia-sueltos-o-agrupados.md) · [0085](../decisiones/04-organismos/atom-chat/0085-wizard-pastilla-con-pulso-sutil.md)

---

## Dónde está

- **Componentes:** Web Library (`LuBN4kYfYJDwqNeWUoyFTr`), page «❖ Chat Message 🟠» (`3215:20665`),
  section «atom-chat v2 — componente unificado» (`12639:5926`).
- **Arquitectura en código** (atom-chat.tsx · types.ts · recipes.ts · README): frame `12664:7745`.
- **Frames de referencia de la nueva UI** (los usa el prototipo; no son componentes):

  | Frame | nodeId |
  |---|---|
  | Bandeja · Column (Conversation) | `11138:78034` |
  | Asistente IA · Panel | `11138:77313` |
  | Prueba de conducción · Panel | `11138:76168` |
  | Google Sheets (MCP) · Panel | `11138:78160` |
  | Wizard · Agentbuilder Canvas | `11553:11069` |
  | Definición de logs | `11495:6531` |
  | Exploración de logs | `11650:18656` |

  *Dato verificado:* las imágenes `11138:78147` y `11138:79629` muestran la UI actual de producción,
  no la nueva; no se usan como referencia de estilo.

- **Insumos:** benchmark en FigJam `d77NZyGlmskbPz87s0bDgI` (nodos `2001:93`, `2010:148`) y el mapeo
  del chat Agente/Cliente en la misma page de la Web Library.
- **Prototipo (storybook):** https://claude.ai/artifact/TFGv6xvU8RridHQBY9GShK — copia en
  [`atom-chat/prototipo/atom-chat-v2.html`](atom-chat/prototipo/atom-chat-v2.html).

## Estructura — [0080](../decisiones/04-organismos/atom-chat/0080-un-template-por-superficie.md)

Un template por superficie, todos sobre el mismo kit de organismos, moléculas y átomos.

| Template | nodeId | Props |
|---|---|---|
| `atom-chat-inbox` | `13131:8809` | `perspective` participant · observer × `composer` message · note · blocked · none |
| `atom-chat-assistant` | `13132:8884` | `layout` docked · floating × `view` chat · empty · history · generating |
| `atom-chat-wizard` | `13132:9064` | `state` collapsed · expanded · generating |

### Kit compartido

| Pieza | nodeId | Props principales |
|---|---|---|
| `_atom-chat` | `12639:6041` | showHeader, showComposer, overlay none · question-prompt |
| `_atom-chat-header` | `12639:5927` | type default · integration; title, subtitle, showRestartChat, showClose, actions |
| `_atom-chat-thread` | `12639:6000` | state empty · filled · loading |
| `_atom-chat-message` | `12639:5992` | align start · end; showAuthor, showAvatar, showError |
| `_atom-chat-bubble` | `12639:5972` | variant filled · accent · plain · note · deleted · editing; showMore, showMeta, showActions |
| `_atom-chat-meta` | `12645:7811` | status none · sending · sent · delivered · read · failed; showEdited, showForwarded, showStarred, showPinned |
| `_atom-chat-event` | `12655:7864` | type date · system · unread · assignment · closure · window-closed |
| `_atom-chat-typing` | `12655:7877` | author contact · ai |
| `_atom-chat-reply-quote` | `12655:7889` | context bubble · composer |
| `_atom-chat-reactions` | `12655:7890` | showReaction2 |
| `_atom-chat-media` | `12657:7897` | type image · video · audio · file · location · contact · sticker · link-preview |
| `_atom-chat-media-state` | `13122:8123` | state loading · downloadable · error · expired |
| `_atom-chat-template` | `12657:7898` | showHeaderMedia, showFooter, botones 1–3 |
| `_atom-chat-quick-replies` | `13125:8541` | state enabled · used |
| `_atom-chat-interactive-reply` | `13125:8612` | type flow · list · button; expanded |
| `_atom-chat-carousel` | `13125:8842` | type media · product |
| `_atom-chat-product` | `13125:8957` | type single · list · order |
| `_atom-chat-card-action` | `13143:10416` | type footer · reply; state enabled · disabled |
| `_atom-chat-message-actions` | `13125:8775` | type hover-bar · menu |
| `_atom-chat-log` | `12639:5961` | state done · loading · error |
| `_atom-chat-thinking` | `13117:8023` | state collapsed · expanded |
| `_atom-chat-changes` | `13125:8139` | variant card · summary |
| `_atom-chat-version-actions` | `13117:8088` | state applied · reviewing · reverted |
| `_atom-chat-option-list` / `_atom-chat-option` | `12639:5951` / `12639:5956` | hasta 4 opciones; showTrailingIcon |
| `_atom-question-prompt` | `12639:6016` | state pending · answered; paginación, texto libre, omitir |
| `_atom-chat-suggestions` | `13125:8259` | type chips · list |
| `_atom-chat-history` | `13125:8514` | view menu · list |
| `_atom-chat-composer` | `12639:5941` | state disabled · enabled · focused; banner, accessory, showScrollToBottom |
| `_atom-chat-composer-tabs` | `13127:8193` | Mensaje · Notas · Resumen IA |
| `_atom-chat-composer-ai` | `13127:8192` | state enabled · focused · generating; showContext |
| `_atom-chat-composer-toolbar` | `13127:8128` | state idle · generating; showModel, showSources, showMic |
| `_atom-chat-model-picker` | `13125:8260` | showEffort, showEffortTitle |
| `_atom-chat-composer-pill` | `13127:8214` | state enabled · focused · generating |

El HTML de cada variante, con los valores de Figma, está en
[`atom-chat/specs/componentes.md`](atom-chat/specs/componentes.md).

## Instancias — [0081](../decisiones/04-organismos/atom-chat/0081-simulador-es-inbox-observer.md)

| Instancia | Template |
|---|---|
| Agente ↔ Cliente (bandeja) | `atom-chat-inbox` · `perspective=participant` |
| Simulador de conversaciones (Cliente IA ↔ Agente IA) | `atom-chat-inbox` · `perspective=observer` · `composer=none` |
| Prueba de agente (panel «Prueba de conducción») | `atom-chat-inbox` · `perspective=observer` con composer |
| Usuario ↔ IA / MCP | `atom-chat-assistant` (`header=integration` para un MCP) |
| Wizard en los builders | `atom-chat-wizard` + el diff en el panel del agente |

`align` depende de quién mira, no de quién escribe.

## Reutilización de la Web Library — [0082](../decisiones/04-organismos/atom-chat/0082-reutilizar-componentes-de-la-web-library.md)

- Íconos: `❖ atom-icon`, no slots ni vectores sueltos.
- Filas de listas (modelo, campos, historial, menús): `❖ atom-list-item`.
- «Ver más» y todo texto azul de enlace: `❖ atom-link-button`.
- El CTA de tarjetas y respuestas rápidas es un átomo propio: `_atom-chat-card-action`.

Los íconos de Font Awesome 7 Pro no se pueden insertar desde el MCP de Figma; quedaron como
placeholders (`icon-slot/…`, `button-slot/…`, `link-slot/…`, `icon-button-slot/…`, `instance-slot/…`)
que reemplaza el plugin de [`atom-chat/plugin/`](atom-chat/plugin/) (Plugins → Development → Import
plugin from manifest…).

## Logs de IA — [0084](../decisiones/04-organismos/atom-chat/0084-logs-de-ia-sueltos-o-agrupados.md)

Patrón base (Definición de logs, `11495:6531`): **verbo** en pretérito perfecto simple + **nombre del
objeto** truncado + **extensión** si aplica (persiste al truncar). Es por turno. Todo en gris
`#71717b`, label 12/16; el nombre en Medium.

| Tipo | Verbo | Ícono | Detalle al abrir |
|---|---|---|---|
| Base de conocimiento | Consultó | `book` | Fecha · similitud, «Información recuperada:» (texto de solo lectura), chunks usados y «Mostrar más» |
| Catálogo / tabla | Consultó | `database` | «Consulta:» (SQL o API, copiable) y «Resultado:» (JSON, copiable) |
| Herramienta | Ejecutó · Utilizó | `hammer` | Método, Código, URL, «Petición:» y «Respuesta de servidor:» |
| Campo de información | Capturó | `input-pipe` | «Valor:» con copiar |
| Etapa | Movió a | `square-kanban` | Sin desplegable |
| Tipificación | Tipificó en | `layer-group` | Sin desplegable |
| Etiqueta | Etiquetó con | `tag` | Sin desplegable; puede repetirse |
| Acción general | Generó · Editó | `hammer` | Sin desplegable |
| Componente | Insertó | `puzzle-piece` | Qué se insertó |
| Error | Consultó y falló · Falló · No capturó · No se pudo ejecutar | `circle-x` | El mismo detalle con el código o el motivo |
| Detenido | Se detuvo la tarea | `stop-circle` | — |

*Dato verificado:* en los dos frames de logs los errores también van en gris; solo cambia el ícono.

Presentación: sueltos (uno por línea, gap 8) o agrupados en una línea colapsable
«{autor} realizó N acciones ›», que suma «· N con error» cuando hay fallos.
*Interpretación:* la línea del grupo no está dibujada en Figma; usa el mismo estilo de log con el
ícono `list-check`.

## Prototipo — [0083](../decisiones/04-organismos/atom-chat/0083-prototipo-storybook-con-la-nueva-ui.md)

Storybook con historias por instancia, controles con los nombres de las props de Figma, filtro de
contenido, Reproducir (mensaje por mensaje) y un playground para armar conversaciones. Solo muestra el
chat; en el Wizard, además, el panel «Nuevo agente» con el diff.

Cuando el componente v2 y el frame de la nueva UI no coinciden, **manda la nueva UI**: burbuja
entrante `#f4f4f5`, separador de fecha con borde `#71717b`, reasignación a 12 px, Atomic en
`#ede9ff` con monograma `#8023ff`, agente en `#d1fae5`.

Wizard: la pastilla lleva un pulso de sombra corta, no las dos manchas desenfocadas del frame de
referencia — [0085](../decisiones/04-organismos/atom-chat/0085-wizard-pastilla-con-pulso-sutil.md).

Lo que el prototipo no reproduce como en Figma:

- Íconos: FA 7 Pro no carga fuera de Figma; están dibujados en SVG con el trazo regular.
- Fotos de los autos: ilustraciones del mismo tamaño (228 × 200); los originales no se pudieron exportar por peso.
- «Resumen IA» no tiene diseño de salida; el prototipo lo muestra como burbuja de nota.

## Fuera de alcance (no hay componente en Figma)

Copiar, regenerar y 👍👎 en la respuesta de la IA; la lista de conversaciones de la bandeja; modo oscuro.

## Pendientes

- Correr el plugin de reemplazo de slots en la section.
- `_atom-chat-header` `type=contact` como variante (hoy solo está en la descripción).
- `_atom-chat-interactive-reply` dentro de la burbuja entrante.
- Instancia suelta `13118:9161`: diseño tiene que decir qué se hace con ella.
- Pulso de la pastilla del Wizard: sin aplicar en `_atom-chat-composer-pill`.
- Validar formatos, estados de media, catálogo de eventos y canales que admiten respuestas y
  reacciones con quienes llevan la bandeja y el chat con IA (varias descripciones dicen DRAFT).
