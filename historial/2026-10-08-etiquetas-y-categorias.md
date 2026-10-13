# 2026-10-08 · Etiquetas y Categorías: decisiones finales

Archivo: *Configuraciones - Adopción DS 1.0* (`musx1ZGk7hbdUdroEqiWLh`). Pedido de diseño: dejar todos los
frames con lo que se definió sobre las propuestas, con componentes del Web Library y las reglas de Global
Patterns.

## Etiquetas

Sección «Handoff Etiquetas · /settings/tags».

- **Solo `❖ atom-list-item`** ([0111](../decisiones/05-paginas/etiquetas/0111-solo-atom-list-item.md)): `01.1 · 01–07`
  quedaron con la lista, sin tabs ni selector de vista, y las cards de `01.1` se reescribieron.
- **Grilla fluida** ([0112](../decisiones/05-paginas/etiquetas/0112-grilla-fluida-de-list-items.md)): wrap, ítems de 240 a
  320 px, y `01.1 · 08–10` en 1024, 1440 y 1920 px, con su card.
- **Buscador** ([0113](../decisiones/05-paginas/etiquetas/0113-buscador-buscar-etiquetas-por-nombre.md)): «Buscar etiquetas
  por nombre...»; frame nuevo `01.1 · 05`, buscador abierto con el placeholder.
- El ícono de acciones del hover usa los fills y las variables de fuente del Web Library (se veía en verde).

*Verificado al cierre:* la page tiene solo la sección del handoff.

## Categorías

Sección «Handoff Categorías · /settings/categories».

- **Editar** ([0114](../decisiones/05-paginas/categorias/0114-editar-opcion-en-uso-bloqueada-sin-conteo.md)): una sola fila,
  `01.3 · 01–09`, con la opción en uso bloqueada y «En uso en respuestas rápidas.» / «En uso en plantillas.».
- **Inactivar** ([0115](../decisiones/05-paginas/categorias/0115-inactivar-en-uso-deshabilitado-con-tooltip.md)): `01.4 · 01–04`.
  Inactivar en Disabled con el tooltip «No puedes inactivarla porque está en uso». Es una excepción a la
  [0053](../decisiones/03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md), anotada en
  `sistema/acciones-no-disponibles.md`.
- **Snackbars de error:** `01.2 · 08` (Crear) decía «Reintentar»; pasó a «Entendido», como manda
  `sistema/snackbars.md`. Los de Editar (`01.3 · 09`) e Inactivar (`01.4 · 02`) también quedaron con «Entendido».
- **Cards de `01.3` y `01.4`:** reescritas. Decían «Propuesta A» y apuntaban a `01.1 · 06` como el menú de
  acciones; el menú es `01.1 · 08` desde la [0108](../decisiones/05-paginas/categorias/0108-colores-por-tipo-filtros-y-propuesta-unica.md).
- **Fuera del handoff:** las filas anteriores de Editar e Inactivar (producción y propuesta) están en la
  sección «No van al handoff · Categorías · Propuestas de Editar e Inactivar».
- **Ideación de colores de «Asociada a»:** sección aparte, «Ideación · Categorías · Colores de «Asociada a»»,
  debajo de la anterior. Pedido de diseño: *"Solo una sección aparte"*. El handoff sigue con la
  [0108](../decisiones/05-paginas/categorias/0108-colores-por-tipo-filtros-y-propuesta-unica.md) hasta que se elija.

| Opción | Respuestas rápidas | Plantillas | Ambas | Variant |
|---|---|---|---|---|
| A · Actual | Info | AI | Brand | Ghost |
| B · Ambas en Neutral | Info | AI | Neutral | Ghost |
| C · Sin AI | Info | Brand | Neutral | Ghost |
| D · Todo Neutral | Neutral | Neutral | Neutral | Ghost |
| E · Outlined | Info | AI | Brand | Outlined |

*Interpretación:*
- Las cinco opciones son mías. Ninguna usa Success, Warning ni Danger, porque comunican estado y
  competirían con la columna Estado. Que AI sugiera una función de IA y Brand el color de marca es una
  lectura de los nombres de los intents.
- En `01.4 · 04`, el tooltip va debajo del menú, con el mismo ancho.

## Errores durante la sesión

- Al armar `01.3 · 02`, `06` y `07`, el botón de cerrar del diálogo mostró otro ícono. Se corrigió
  ligando las variables de fuente del ícono, como en `01.3 · 01`.
- En `01.3 · 05` se renombró por error una fila de la tabla de fondo («Saludos»); se volvió a su nombre.

## Después: respuestas de diseño

- **Colores de «Asociada a»:** va la opción B con los ajustes que diseño le hizo en el frame: Respuestas
  rápidas en Info con `bolt`, Plantillas en Success con `message` y Ambas en Neutral sin ícono, en las 31
  tablas del handoff, con 6 categorías de respuestas rápidas, 6 de plantillas y 2 de ambas
  ([0116](../decisiones/05-paginas/categorias/0116-asociada-a-info-success-neutral-y-datos-parejos.md)). En la sección de
  ideación, la B quedó marcada como elegida.
- **Card `01.1` de Categorías:** describe `01–11`, los tags con sus íconos y los íconos de la pantalla
  (`search`, `filters`, `ellipsis-vertical`, `pen` y `ban`).
- **Buscador de Etiquetas:** el tooltip va sin «...» y el placeholder con «...»
  ([0113](../decisiones/05-paginas/etiquetas/0113-buscador-buscar-etiquetas-por-nombre.md)); la card de `01.1` se corrigió.
- **«Arrow 1»:** ya no estaba en la page cuando fui a borrarlo.
- **Sección de Etiquetas con la grilla de cards y la tabla:** la borró diseño.
- **Propuestas de Etiquetas para el CTO**
  ([0117](../decisiones/05-paginas/etiquetas/0117-tres-propuestas-de-vista-para-decidir.md)): sección nueva
  «Propuestas · Etiquetas · Ver etiquetas», debajo del handoff, con A · Tabla, B · List items y C · Tabla
  con look de list items. El handoff no se tocó.

*Error reportado:* la primera vez apliqué la B como la había armado (Info, AI y Neutral, sin íconos), sin
leer el frame que diseño había ajustado. Se corrigió copiando intent e ícono del frame `857:228590`.

*Error reportado:* el primer intento de `C · 02` pasó la primera fila a Hover y la variante reemplazó el
contenido de las celdas (el ícono volvió a mostrar «TAG» y el botón de acciones desapareció). Se borró ese
frame y se rearmó sin el estado Hover.

*Nota de trabajo:* aplicar la opción B en 31 frames bloqueó Figma unos cuatro minutos y la sesión
multiplayer se reconectó; los cambios quedaron guardados (verificado con capturas).

## Pendiente

- ¿Qué propuesta de Etiquetas elige el CTO?
- Placeholders de Campañas, Listas e Historial sin «...»: falta alinearlos en sus archivos.
- Backend: al abrir Editar y el menú de Categorías, saber si la categoría está en uso en respuestas rápidas y
  en plantillas (sin conteo).
