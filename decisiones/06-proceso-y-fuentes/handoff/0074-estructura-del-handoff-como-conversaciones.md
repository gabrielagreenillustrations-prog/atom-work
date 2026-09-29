# 0074 — Handoff: la estructura del archivo de Conversaciones · Adopción DS 1.0

**Estado:** vigente
**Fecha:** 2026-09-28
**Componente:** handoff (proceso)
**Alcance:** Automatizaciones, page *Automatizaciones Handoff v1* (Gestión de flujos e Historial), y
Campañas, pages *Campañas Handoff v1* (Resultados y Listas) y *Campañas Handoff v2* (Listas con MCP).

## Contexto

Cada sección tenía una card `internals-sections_name-cases` del módulo (número, nombre y ruta), una
card `_divison-flow` al empezar cada grupo y una `_description` por fila, con los frames a la
derecha. Diseño pidió alinear los archivos con *Conversaciones - Adopción DS 1.0*
(`hTOSHviZ3n0LezzdOoZwV3`, sección `86:11928`): *"Nombre de section, las internal-title-sections que
titulan el caso de uso, los internal-sections representarán cada HU. Y en nuestro caso como tenemos
muchos escenarios está bien usar los internal-sections-description"*.

*Dato verificado* (la referencia): la sección se llama «Handoff Bandeja Primer Scope» y está marcada
Ready for dev. Cada caso de uso tiene un `internal-title-section` en x = 200, de 305 px de alto, con
el nombre del caso en la capa `Name Section` y el ancho hasta el borde derecho del último frame. 505 px
más abajo va una card `name-cases` de 375 × 832 («02_», la descripción de la HU y el tag «Atom») y los
frames de 1280 × 832 desde x = 675, cada 1380 px. Las filas siguientes del mismo caso van 1032 px más
abajo (832 + 200) y el título siguiente, 200 px debajo de la última fila.

## Decisión

- **Sección:** «Handoff» + el módulo, con la ruta que tenía la card del módulo: «Handoff Gestión de
  flujos · /automations/flows», «Handoff Historial de conversaciones», «Handoff Resultados de campañas ·
  /campaigns/results», «Handoff Listas · /campaigns/lists» y «Handoff Listas con MCP · /campaigns/lists».
  La card del módulo sale.
- **Caso de uso:** cada grupo (`03.1`, `03.2`…) lleva un `internal-title-section` con su nombre.
- **HU:** la card `_divison-flow` del grupo pasa a `_name-cases` (la misma instancia, otra variante),
  con el número del grupo, el nombre del caso y el tag que tenía (Atom, Propuesta o En desarrollo).
- **Escenarios:** las cards `_description` quedan, una por fila.
- **Grilla:** `name-cases` en x = 200, `description` en x = 675 y los frames desde x = 1150. La primera
  fila, 505 px debajo del título; las demás, cada 832 + 200. Las cards miden 832 de alto, como los
  frames (las de `01.6` de Resultados, de 956, quedan).

## Por qué

Pedido de diseño, con el archivo de Conversaciones como referencia.

*Interpretación:*

- El nombre de la sección sigue a «Handoff Bandeja Primer Scope»; la ruta pasa al nombre para no
  perderla al sacar la card del módulo.
- La descripción de la HU es el nombre del caso: el repo no tiene las HU numeradas de estos módulos.
- Los frames empiezan en x = 1150 y no en 675 porque ahí va la columna de descripción.
- En Gestión de flujos, Historial, Listas y Listas con MCP los frames se reacomodaron cada 1380 px,
  como la referencia. En Resultados se conservó el espacio entre frames de cada fila, para no romper
  las columnas de `01.4` (cada estado con flujo arriba y plantilla abajo).
- Los frames conservan sus nombres con número; los de la referencia van en snake_case, pero cambiarlos
  rompe los links de las cards, los artefactos y el repo.

## Consecuencias

- Gestión de flujos: «Editar el nombre» (`03.4 · 14–19`) quedó justo después de `03.4` (Diálogos ·
  Detalle y edición); antes estaba al final. La sección mide 17 810 × 22 289.
- Historial: 10 910 × 10 981, a 307 px de Gestión de flujos, como antes.
- Resultados: `01.8` (Tab Dinámicas), que estaba a la derecha de `01.1–01.7`, pasó abajo, después de
  `01.7`, y se movió entero, con sus filas, la sección «Filtros» y las tablas sueltas. La card
  «Findings de ❖ atom-data-table» quedó en x = 200, en la fila de Vacío. La sección mide
  17 604 × 32 782 y Listas quedó a 606 px, como antes.
- Listas y Listas con MCP: 10 910 × 14 077. El título de `02.1` llega hasta `02.1 · 07`, que es más
  angosto que los demás frames y va después de `02.1 · 06`.
- Las secciones con elementos sueltos (la tabla `66:69458` y el sidebar `10:39917` en `03.1`, y dos
  textos sueltos en `03.3`) los conservan junto al frame que tenían al lado.
- La page *Automatizaciones Handoff v2* y la card de arriba de *Campañas Handoff v2* no tienen frames:
  quedaron igual.
- Los IDs de los frames no cambian: los links siguen funcionando.

## Ver también

- [0045](0045-handoff-orden-de-la-grilla.md): la numeración sigue el orden de la grilla.
