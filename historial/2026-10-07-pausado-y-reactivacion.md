# 2026-10-07 · Pausado y reactivación de envíos de Campañas

Archivo: *Pausado y reactivación de envíos de Campañas* (`iILSQHSxySqTdShkVQUkPt`), sección `13024:16246`.
Pedido de diseño: alinear la UI del archivo con *Campañas – Adopción DS 1.0*, *Automatizaciones – Gestión de flujos*
y *Métricas por plantilla inicial*, priorizando la tabla. Cambios sobre los frames actuales (sin duplicar).

## Hecho

- **Tablas de Resultados (17 frames):** Clientes · Enviados · Errores · Entregados · Leídos · Respondidos
  ([0063](../decisiones/05-paginas/metricas/0063-metricas-de-resultados.md)), `info-circle` en las cinco métricas
  y no en Clientes, colores de la [0082](../decisiones/05-paginas/metricas/0082-colores-de-metricas-en-resultados.md).
  Anchos 103/108/97/122/93/131: suman lo mismo que las seis columnas anteriores, así que tooltips y cursores no se movieron.
  «Creado» → «Creador». Fechas en formato premade (`23 Oct 26 14:30`); Con error con «-».
- **Menús de fila (10):** «Métricas de campaña» → «Métricas de plantilla», «Reanudar campaña» → «Reanudar»,
  «Ver flujo» oculto en filas que no son Flujo, menús recolocados sobre el botón de su fila.

*Dato de diseño:* la tabla conserva Clientes (se confirmó contra el FRD del 28-sep, Campañas y el archivo de métricas).

*Interpretación:*
- Los valores de ejemplo son míos y cumplen la [0064](../decisiones/05-paginas/metricas/0064-valores-de-resultados-coherentes.md)
  según el estado de la fila; una misma campaña tiene los mismos valores en todos los frames.
- La fila «Colombo Americano — Reactivación» es de tipo Directa; su menú sigue el de Plantilla detenida (`01.4 · 07`).
- Las columnas no se reordenaron (Canal · Tipo campaña · Estado quedan como estaban) para no mover tooltips y cursores.

## Sesión 2 (Chrome + Talk to Figma)

- **Centro de Control:** la tabla Campañas de los dos frames tiene Clientes · Enviados · Errores · Entregados · Leídos · Respondidos, con valores coherentes y colores de la 0082; el tooltip «Ver campaña» se recolocó junto a su botón.
- **Menús de fila (10):** orden y copy de `01.4 · 04` (En pausa) y `01.4 · 07` (Detenida), con íconos `chart-fft`, `download`, `triangle-exclamation`, `copy`, `timer` y `stop-circle`; «Descargar errores» porque las filas tienen errores.
- **Paneles de métricas (10 frames):** se pegó el panel oficial (`15345:286376` del archivo de métricas) con el stepper de navegación (`15345:341464`). Cada caso conserva su alerta (❖ atom-alert del Web Library), navegación 2/3, tags y plantilla. Valores: Enviados y Entregados (% sobre enviados), Leídos y Respondidos (% sobre entregados) y Errores Meta en plantillas, derivados de los números del panel anterior. El panel anterior quedó oculto debajo. En los cuatro frames con diálogo, el overlay y el diálogo volvieron a quedar arriba.
- Fechas de las alertas sin «hoy» ([0050](../decisiones/01-fundamentos/fechas/0050-fechas-sin-relativas.md)) y «Deshabiltada» → «Deshabilitada».

*Error reportado:* al intentar clonar las alertas de los paneles anteriores con Talk to Figma, el plugin las quitó de esos paneles (ya ocultos). Se recrearon como instancias nuevas del Web Library en los paneles nuevos, con el mismo copy.

*Interpretación:* el caso «Meta deshabilitó la plantilla» muestra la plantilla `aviso_corte_v4` (antes `colombo_reactivacion`) para que coincida con la alerta. El frame `13024:51970` tenía en la alerta el texto del diálogo; quedó con el copy de los otros casos «Pausada: Meta pausó una plantilla».

## Pendiente (anterior, ya resuelto salvo lo de abajo)

- Revisar visualmente los 10 paneles y los menús en Figma.

## Números alineados

Respuesta de diseño: se alinean. «Promo Agosto — Clientes VIP» tiene en las 10 tablas de Resultados donde aparece los
mismos valores que en Centro de Control: 7.500 · 6.840 · 141 · 6.512 · 4.870 · 1.905.
«Clientes VIP» en Centro de Control pasó a Detenida con los valores de Resultados (35 · 18 · 0 · 17 · 13 · 6), como
el frame de búsqueda `13135:33159`. *Interpretación:* el estado de Resultados manda porque es el caso del flujo de detener.
También «1 plantillas» → «1 plantilla».
