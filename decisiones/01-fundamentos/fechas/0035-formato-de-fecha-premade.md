# 0035 — Formato de fecha: «DD Mmm AA HH:mm», con las columnas premade

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** todas las fechas de los dos archivos: tablas, side panels y modales de Campañas y
Automatizaciones. Reemplaza a [0003](0003-formato-de-fecha.md).

## Contexto

La [0003](0003-formato-de-fecha.md) dejó las fechas en `DD mmm HH:mm` (`14 sep 15:02`), sin año.
Historial de conversaciones seguía con año y AM/PM (`12 ago 2026, 9:30 AM`). La Web Library suma
dos variantes premade de `_table-column` para fechas: *F. Creación (premade)* (137 px) y
*F. Actualización (premade)* (163 px), con el valor de ejemplo `99 Mmm 99 99:99`.

## Decisión

- Formato: día con dos dígitos, mes de tres letras con mayúscula inicial, año de dos dígitos y hora
  de 24 h: **`23 Oct 24 14:30`**. Meses: Ene · Feb · Mar · Abr · May · Jun · Jul · Ago · Sep · Oct ·
  Nov · Dic.
- Las columnas de fecha usan las variantes premade y conservan su nombre actual: *Fecha de envío* y
  *F. Creación* en Resultados sobre *F. Creación (premade)*; *F. Creación* y *F. Actualización* en
  Listas sobre sus premade.
- Orden descendente por defecto: flecha `arrow-down` en el encabezado y la fila más reciente arriba.
  Al cambiar de tabla o aplicar filtros el orden se mantiene.
- Si la fecha no entra, se trunca con tooltip.

## Por qué

Pedido de diseño: *"Actualizar fechas en cualquier instancia al formato 'Shows the date and time the element
was created in the system. Format: Day Month Year Hour:Minute (e.g., "23 Oct 24 14:30" in 24-hour
format). Max width: 137px. Behavior: truncated with tooltip if it exceeds width. Sorting: descending
by default (most recent element first) is the primary instance. When switching between tables or
applying filters, this column automatically maintains its descending sort order.' Puedes utilizar
las columns con variantes F. Creación (premade) y/o F. Actualización (premade) segun el caso"*.
Sobre los nombres de columna eligió conservar los actuales.

*Interpretación:* los meses van en español con mayúscula inicial, como el valor de ejemplo de la
premade (`99 Mmm 99 99:99`).

*Interpretación:* los valores de ejemplo cambiaron para que el orden descendente sea cierto: antes
las filas no estaban ordenadas por fecha.

## Consecuencias

- Campañas · Resultados: las 77 tablas usan *F. Creación (premade)* a 137 px, con la flecha
  `arrow-down` y los valores de ejemplo ordenados de la fecha más reciente a la más antigua. En
  estáticas, las filas sin envío (agendada, en pausa) siguen con «-».
- Campañas · Listas: *F. Creación (premade)* a 137 px y *F. Actualización (premade)* a 163 px en las
  34 tablas. La flecha va en F. Creación, que ordena la tabla.
- Automatizaciones: la Web Library no tiene las columnas premade en ese archivo. Las fechas de
  Gestión de flujos e Historial usan el formato nuevo en una columna fija de 163 px, con la flecha
  `arrow-down` y el texto truncado.
- Modales «Ver detalles» de Gestión (`03.4`): «F. Última Edición» pasa de «Hoy, 1:15 PM» a
  `24 Sep 26 13:15`. La tabla «Campañas asociadas» de `03.4 · 05` usa *F. Creación* a 137 px, con la
  flecha, y sus filas van de la más reciente a la más antigua.
- *Interpretación:* «Hoy» y «Ayer» se pasaron tomando el 24 Sep 26 como día actual, la fecha más
  reciente de las tablas del archivo; «15 abr», sin año, se tomó como 2026.
- *Interpretación:* en Listas, F. Actualización nunca es anterior a F. Creación; las listas dinámicas
  tienen actualizaciones posteriores y las que se están cargando repiten la fecha de creación.
