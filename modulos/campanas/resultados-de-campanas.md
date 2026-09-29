# Resultados de campañas

Archivo: **Campañas – Adopción DS 1.0** · sección `266:150994`
Última revisión: **2026-09-28** (sesión 12)

Cubre dos tabs: **campañas estáticas** y **campañas dinámicas**, con la misma tabla.

La page **Campañas** muestra lo que va a producción; la page **Handoff v2** tiene Listas con MCP —
decisión [0056](../../decisiones/06-proceso-y-fuentes/handoff/0056-handoff-v2.md). El panel de métricas (v1 y nuevo DS), su benchmark y la
ideación de la tabla simplificada están en el archivo *Métricas por plantilla inicial en flujos y campañas* —
[0068](../../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md).

---

## Tabla · Estáticas

13 columnas — decisión [0063](../../decisiones/05-paginas/metricas/0063-metricas-de-resultados.md):

Nombre · Canal · Estado · Clientes · Enviados · Errores · Entregados · Leídos · Respondidos ·
Tipo de campaña · Creador · Fecha de envío · Acciones.

- *Canal*: el número como texto; al pasar el cursor, la fila en *Hover* y `❖ atom-icon-button` xs
  Tertiary con `copy` al lado y `❖ atom-tooltip` «Copiar» (`01.3 · 09`); al copiar, «Se ha copiado exitosamente.» (`01.3 · 10`) —
  decisión [0072](../../decisiones/04-organismos/atom-data-table/0072-numero-copiable-en-tablas.md). Los dos
  frames usan la tabla de `01.3 · 01`, donde se ve la columna; el snackbar reusa el de Gestión de flujos.
- *Errores* reemplaza a *Fallidos*. *No entregados* queda oculta en la tabla; el side panel la
  sigue mostrando aparte.
- Las cinco métricas después de Clientes llevan `info-circle` y tooltip (`01.3 · 02–06`); los textos
  están en `sistema/metricas.md`.
- Los valores cumplen la relación entre métricas: Clientes = Enviados + Errores en las campañas
  terminadas, Entregados ≤ Enviados, Leídos y Respondidos ≤ Entregados — decisión
  [0064](../../decisiones/05-paginas/metricas/0064-valores-de-resultados-coherentes.md), con la tabla de valores.
- La fecha es **`Fecha de envío`**, decidido con producto (la Épica 2 dice `F. Creación`), sobre la
  columna *F. Creación (premade)* de 137 px, en formato `23 Oct 24 14:30` y en orden descendente —
  decisión [0035](../../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md).

Las tablas sueltas de `01.8 · 01` y `01.4` miden 1726 px: se ven todas las columnas y Acciones
queda pegada a la fecha. La referencia `01.3 · 01` mide 1579 px y la fecha queda debajo de Acciones.

«Felicitación de cumpleaños» (Enviada, fila 12) lleva datos en las 60 tablas donde aparece:
5 clientes, 5 enviados, 0 errores, 4 entregados, 4 leídos, 2 respondidos, «Superadmin» y `24 Jul 26 15:54`, con los colores
de las demás filas (sesión 10). La fila anterior, «Programa de referidos» (Agendada), sigue sin
fecha (pregunta en `RETOMAR.md`).

Estados posibles: Agendada · En proceso · En pausa · Enviada · Detenida · Con error.

### Filtros

| Chip | Opciones |
|---|---|
| Tipo de campaña | Flujo · Flujo en lote · Plantilla · Plantilla en lote |
| Estado | Agendada · En proceso · En pausa · Enviada · Detenida · Con error *(orden de ejecución)* |
| Creador | buscador + lista de usuarios |
| F. Envío | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado (panel `Filtrar por Fecha de envío`) |

### Menús de fila

Varían por estado de la campaña. `01.4` tiene una columna por estado, con el menú de flujo arriba
y el de plantilla abajo: `01` Enviada · `02` Enviada con errores · `03` Agendada · `04` En pausa
(`04.1`, submenú Modo de reanudación) · `05` Con error · `06` En proceso (solo plantilla) · `07`
Detenida · `08` Campaña de Voz — decisión [0045](../../decisiones/06-proceso-y-fuentes/handoff/0045-handoff-orden-de-la-grilla.md).

Las acciones que no aplican al estado no se muestran, y «Descargar errores» aparece solo si la fila
tiene Errores — decisión [0053](../../decisiones/03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md). Ver
`sistema/acciones-no-disponibles.md`.

Detener (`01.5 · 01` agendada y `01.5 · 02` en proceso): los dos modales terminan en «…se
reasignarán las conversaciones al flujo de Mensaje entrante.» — decisión
[0047](../../decisiones/04-organismos/atom-dialog/0047-detener-campana-flujo-de-mensaje-entrante.md).

La acción de métricas dice «Métricas de plantilla» y, en las campañas de tipo Flujo, «Métricas de
plantilla (10)» — decisión [0067](../../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md). *Interpretación:* una campaña de Flujo tiene
varias plantillas; se reconocen por «Ver flujo» en el menú.

---

## Tabla · Dinámicas

**La misma tabla que estáticas**, con la fecha **`F. Creación`** y los filtros y estados de
dinámicas — decisión [0033](../../decisiones/04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md). En producción la tab tiene
una tabla propia (Nombre · Lista · Estado · Iniciados · Fallidos · Respondidos · F. Creación ·
Acciones) y abre con el filtro Estado = Activo.

En las pantallas de dinámicas el scroll horizontal queda al inicio, para que se vea Estado.

Buscador: al escribir, Filtros pasa a Disabled; si había filtros aplicados, también los chips
aplicados y «Limpiar filtros» (`01.2 · 06`, `01.2 · 11`, `01.8 · 07`) — decisión
[0055](../../decisiones/03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md).
*Dato de diseño (26 sep):* mientras hay texto, la búsqueda (Typesense) no aplica los filtros: la
tabla muestra todos los resultados de la búsqueda, en cualquier estado, aunque haya chips aplicados.
`01.2 · 11` lo muestra: el chip «Enviada» está aplicado y la tabla trae Enviada, En proceso, En
pausa, Con error, Detenida y Agendada.

Buscador de dinámicas: `01.8 · 05` (hover con tooltip) usa la misma variante que `01.2 · 04` (*Hovered*, sin
relleno) y `01.8 · 03` y `01.8 · 04`, la variante base (*Enabled*) — sesión 10.

### Filtros

Las mismas cuatro categorías que estáticas:

| Chip | Opciones |
|---|---|
| Tipo de campaña | Flujo · Plantilla |
| Estado | Activa · En pausa · Detenida · Con error |
| Creador | buscador + lista de usuarios |
| F. Creación | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado (panel `Filtrar por Fecha de creación`) |

*En pausa* ocurre solo de forma automática, por el límite de Meta.

### Menús de dinámicas

**Detener campaña** solo en Activa y En pausa; **Duplicar** solo en Detenida y Con error. Con error
no muestra Detener, porque ya no envía — decisión
[0054](../../decisiones/05-paginas/resultados-de-campanas/0054-dinamicas-con-error-detener-y-duplicar.md). Los menús están en 8 tablas
sueltas junto a los filtros de dinámicas, sin código de frame.

### Diferencias con estáticas

| | Estáticas | Dinámicas |
|---|---|---|
| Columnas | 13 | las mismas 13 |
| Tipos | 4 | 2 |
| Estados | 6 | 4 |
| Fecha | Fecha de envío | F. Creación |

La tabla de dinámicas va a la derecha de la de estáticas, cada grupo a la altura de su par.

---

## Side panel de métricas

En este archivo queda la apertura — decisión [0068](../../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md):

| Frame | Qué muestra |
|---|---|
| `01.6 · 01` (dos frames) | «Métricas de plantilla» en el `❖ atom-dropdown-menu` de la fila de «Encuesta satisfacción Q2», de tipo Plantilla |
| `01.6 · 03` | Vista previa de plantilla (no es del panel de métricas) |

Los casos del panel —v1 (`01.6 · 02`, `04–18`), nuevo DS (`01.6 · 01–10` y dinámicas `01.8 · 15–17`),
el benchmark y la ideación de Resultados simplificados— están en el archivo *Métricas por plantilla inicial en flujos y campañas*,
page Actual UI, sección «Handoff Design System · Panel de métricas de plantilla». Nombre: [0067](../../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md); sin «Reporte de errores»:
[0069](../../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md). Detalle en `sistema/metricas.md`.

### Ideación: Resultados simplificados (en el archivo de métricas)

Propuesta para discutir, no es handoff:

- **Tabla** (`Ideación · 01`): Clientes · Enviados · Errores · Leídos · Respondidos. No entregados deja
  de ser columna y pasa a ser una categoría de Errores. Clientes = Enviados + Errores (185 = 155 +
  30, los valores de la referencia).
- **Panel** (`Ideación · 02`): «Enviados (155)» con sus estatus (Entregados, Leídos, Respondidos) y
  «Errores (30)» con una categoría por acordeón, cantidad y porcentaje; la categoría abierta muestra
  sus errores y «Descargar registros» · «Reenviar con otra plantilla». «No entregados por Meta» va al
  final.
- Definiciones de la referencia: Clientes, total del listado (un cliente puede estar dos veces);
  Enviados, todo lo que tiene check; Errores, incluye Atom y Meta (también cuando Meta decide no
  enviar).
- Pendiente de feedback de clientes y de la lógica de varias plantillas: qué cuenta como error, cómo
  se calculan los porcentajes y qué categorías se muestran. Entregados (120) y el reparto por
  categoría son valores de ejemplo.

---

## Hallazgos abiertos

- En la revisión del 22 sept producción no mostró *Ver flujo* en el menú de una campaña de
  Plantilla. Falta confirmarlo en código. *Verificado el 2026-09-25:* ningún menú de Plantilla de
  `01.4` muestra *Ver flujo*; los de Flujo sí.
- Los frames `460:*` de `01.4` (hoy `05` Con error, `06` En proceso y `08` Campaña de Voz) contienen
  una instancia que se llama «01.4 · 03 - Menú de fila · Campaña en pausa».
- *Resuelto el 2026-09-28:* la acción y el panel dicen «Métricas de plantilla»
  ([0067](../../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)).
- `01.6 · 02/05` muestran 10 plantillas (1/10) para «Encuesta satisfacción Q2», que en la tabla es
  de tipo Plantilla.
- El panel de dinámicas abre con la tarjeta *Iniciados*; la tabla dice *Clientes* y *Enviados*.
- `01.2 · 02` (tab Dinámicas) muestra CREAR CAMPAÑA; la card de Dinámicas dice que no hay.

### Check del 2026-09-24 (sesión 07), antes de la reunión de Campañas

*Con la numeración y el estado de ese día. Después cambiaron la columna de error
([0036](../../decisiones/04-organismos/atom-data-table/columnas-resultados/0036-no-entregados-visible.md)) y la numeración
([0045](../../decisiones/06-proceso-y-fuentes/handoff/0045-handoff-orden-de-la-grilla.md)).*

*Verificado en el archivo, sin cambios:*

- Columna de error: la tabla dice «Fallidos», con el tooltip «Incluye mensajes que Meta decidió no
  entregar» (No entregados está oculta); el side panel separa «Errores» y «No entregados», y el menú
  dice «Descargar errores».
- Dinámicas: estados Activa · En pausa · Detenida (sin Con error). La fecha era F. Envío; después del
  check pasó a F. Creación ([0033](../../decisiones/04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md)).
- La card `278:218521` dice «Ícono de info en el header de Leídos, Respondidos y No entregados»; el
  ícono está en Fallidos (`01.3 · 04`).
- `01.2 · 03` (selector de canal abierto) muestra cinco veces «+502 5636 6699». El canal seleccionado
  en las pantallas es «+50255552222».
- Las pantallas de estáticas (40 tablas) muestran el scroll corrido: Canal, Estado y parte de Clientes
  quedan debajo de Nombre. Dinámicas arranca después de Nombre.
- Menús de `01.4`: *Detener campaña* está deshabilitado en *en proceso* (`01.4 · 06`), aunque existe
  el modal `01.5 · 02`; *Descargar errores* está habilitado solo en *agendada · Plantilla* y *en pausa
  · Flujo*; *en pausa · Flujo* no tiene *Reanudar*.
- Dinámicas no tiene frame del filtro Tipo de campaña (Flujo · Plantilla): está solo en la card.
- Ningún frame del buscador (`01.2 · 04–06`, `01.8 · 04`) tiene filtros aplicados.
- Los modales informativos no siguen verbo + sustantivo: «Campaña no editable», «Canal no
  compatible», «Campaña interrumpida» (`01.7 · 09`).
- Snackbars de éxito con copy mezclado: «se ha detenido exitosamente», «se ha reanudado de forma
  exitosa», «Campaña agendada. Te notificaremos…».
