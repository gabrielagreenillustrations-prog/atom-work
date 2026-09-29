# 0072 — Tablas: un número o una cuenta que se copia va como texto, con copiar en hover

**Estado:** vigente; Historial · Canal y el «sin tooltip», reemplazados por [0073](../../05-paginas/historial-de-conversaciones/0073-historial-canal-con-menu-y-telefono-con-copiar.md)
**Fecha:** 2026-09-28
**Componente:** ❖ atom-table · `_table-data-cell`, ❖ atom-icon-button, ❖ atom-snackbar
**Alcance:** Automatizaciones (Gestión de flujos, columna Canal; Historial de conversaciones,
columnas Canal y Teléfono del cliente) y Campañas (Resultados de campañas, columna Canal).
Reemplaza a [0037](columna-canal/0037-columna-canal-caso-edge-con-detalle.md), que describía la
columna Canal con el botón para un canal.

## Contexto

Diseño dejó el pattern para los números que se copian en la tabla de Clientes del preview channel
(frame «Clientes - WAR Room», archivo *Design Audit | Migración Módulos*, `6336:68061`).
*Verificado en la referencia:*

- Teléfono: el número como texto. Con el cursor en la fila, la fila pasa a *Hover*, el texto se
  trunca y aparece `❖ atom-icon-button` xs Tertiary con `copy` al lado; con el cursor encima, el
  botón en *Hovered* y el cursor de mano. No hay tooltip.
- Canales, un canal: `_table-data-cell` *Main (premade)* con el ícono del canal (`❖ atom-icon`,
  que en el Web Library figura como *DEPRECATED*) y el número como texto, sin botón.
- Canales, varios: `❖ atom-button` Tertiary con «N Canales» y `chevron-down`.

Antes, en Gestión de flujos un canal era un botón con tooltip «Copiar»; en Historial, el Canal era
solo el ícono y abría un menú con el número y copiar, y el teléfono mostraba un tooltip «Copiar»;
en Resultados de campañas el Canal era texto sin copiar.

## Decisión

Toda tabla con **un** número o una cuenta que se copia usa el pattern: el dato como texto y, al
pasar el cursor, el botón `copy` al lado. La excepción es el menú de varios canales.

| Tabla · columna | Celda | Hover |
|---|---|---|
| Gestión de flujos · Canal, un canal (mensaje entrante, campaña, tipificación, webhook) | Ícono del canal y número o cuenta | Fila en *Hover* y `copy`; al copiar, «Se ha copiado exitosamente.» |
| Gestión de flujos · Canal, varios canales | `❖ atom-button` «N canales» con `chevron-down` | Sin cambios: abre «Números conectados» |
| Gestión de flujos · Canal, «No conectado» y caso edge | `❖ atom-tag` Ghost | Sin cambios (0037) |
| Historial · Canal | Ícono del canal y número (WhatsApp), cuenta (Messenger, Instagram) o sitio (Plugin web); sin menú | `copy` |
| Historial · Teléfono del cliente | Texto | `copy`; al copiar, «Se ha copiado el teléfono exitosamente.» |
| Resultados de campañas · Canal | Texto | `copy`; al copiar, «Se ha copiado exitosamente.» |

## Por qué

Diseño: *"este es el pattern que dejaron para cuando los numeros se pueden copiar, debemos dejarlo
igual donde lo tenemos, lo tenemos en gestion de flujos para cuando solo hay 1 canal en el flujo ya
no será un botón, y para la tabla de historial de conversaciones que también se puede copiar el
numero y cualquier tabla que tenga 1 numero y se pueda copiar dejemoslo igual, excepto para el menu
dropdown que muestra varios"*. Sobre Historial · Canal y Resultados de campañas · Canal, diseño
eligió «Sí, al pattern» y «Sí, agregar copiar».

## Consecuencias

- *Verificado:* Gestión de flujos, 661 celdas de un canal en los 80 frames de la sección, con
  *Main (premade)* y `❖ atom-icon` (Font Awesome 7 Brands). `03.8 · 01` pasa a «Hover con copiar»
  y `03.8 · 02` muestra el mismo hover con el snackbar; sale el tooltip «Copiar».
- *Verificado:* Historial, 127 celdas de Canal en 23 frames. `04.3 · 02` (teléfono) y `04.3 · 03–06`
  (Canal por red) pasan a «Hover con copiar»; salen el tooltip «Copiar» y los menús «Número
  asociado», «Cuenta asociada» y «Canal asociado». La columna Canal mide 200 px; con el side panel
  abierto (`04.4 · 01–07`) las columnas tienen ancho fijo y la tabla queda cortada, como con scroll.
- *Verificado:* Resultados de campañas, frames nuevos `01.3 · 09` (hover) y `01.3 · 10` (copiado),
  sobre la tabla de `01.3 · 01`. Las demás celdas de Canal ya eran texto.
- *Interpretación:* en Historial el botón `copy` está dibujado sobre la celda, porque esa tabla usa
  una versión anterior de `_table-data-cell` que no tiene slot; en las otras dos tablas va dentro
  de la celda, como en la referencia. Los números y cuentas de Historial son valores de ejemplo
  (los de los menús que salieron). El snackbar de Resultados reusa el de Gestión de flujos.
- *Pendiente:* `04.2 · 04–06` (filtros abiertos de Historial) siguen con la tabla desacoplada y el
  Canal como ícono. En «Detalles del flujo», «Número asociado» (`03.4 · 07`) y la lista de números
  (`03.4 · 02`) muestran `copy` siempre visible; no son tablas y quedaron igual.
