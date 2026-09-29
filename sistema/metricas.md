# Métricas

Última revisión: **2026-09-28** (sesión 12) · Decisiones: [0004](../decisiones/04-organismos/atom-sidepanel-metricas/0004-errores-reemplaza-fallidos.md) · [0025](../decisiones/04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md) (reemplazada por [0067](../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md)) · [0014](../decisiones/04-organismos/atom-sidepanel-metricas/0014-ejemplo-calidad-baja.md) · [0063](../decisiones/05-paginas/metricas/0063-metricas-de-resultados.md) · [0064](../decisiones/05-paginas/metricas/0064-valores-de-resultados-coherentes.md) · [0041](../decisiones/04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md) · [0044](../decisiones/04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md) · [0050](../decisiones/01-fundamentos/fechas/0050-fechas-sin-relativas.md) · [0056](../decisiones/06-proceso-y-fuentes/handoff/0056-handoff-v2.md) · [0057](../decisiones/04-organismos/atom-sidepanel-metricas/0057-panel-de-metricas-v2.md) · [0058](../decisiones/04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md) · [0060](../decisiones/04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md) · [0062](../decisiones/04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md) · [0065](../decisiones/05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) · [0067](../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md) · [0068](../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md) · [0069](../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md) · [0075](../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md)

---

## Dónde está

El panel que se entrega está en la entrega del archivo *Métricas por plantilla inicial en flujos y campañas*
(page Actual UI, sección «Métricas por plantilla inicial en flujos y campañas», Ready for dev): HU 2, HU3 y
casos edge, con sus interacciones — decisión [0075](../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md).
En los handoffs está el caso de uso que lo abre, con el copy de cada módulo: Campañas `01.6 · 01–02` y
Automatizaciones `03.9 · 01–02`. La sección «Handoff Design System · Panel de métricas de plantilla» del
mismo archivo conserva las versiones anteriores (v1 y nuevo DS), el benchmark, la ideación de Resultados
simplificados y la exploración de la grilla ([0068](../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md)).

## Dos versiones

| Page | Panel |
|---|---|
| v1: Campañas (`01.6`) · Automatizaciones (`03.9`) | El del archivo *Métricas por plantilla inicial en flujos y campañas* (Actual UI), con los cambios de diseño de la [0065](../decisiones/05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) (ver «Panel v1» abajo) — [0056](../decisiones/06-proceso-y-fuentes/handoff/0056-handoff-v2.md), [0058](../decisiones/04-organismos/atom-sidepanel-metricas/0058-automatizaciones-dos-versiones-del-panel.md). La pantalla alrededor (fondo, menú de acceso, backdrop y snackbar) es la del handoff, con el nuevo DS — [0062](../decisiones/04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md). |
| Nuevo DS (antes, pages Handoff v2) | El del nuevo DS, con los cambios de la [0057](../decisiones/04-organismos/atom-sidepanel-metricas/0057-panel-de-metricas-v2.md) y la [0060](../decisiones/04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md). Salvo «Panel v1» y «En la tabla de Resultados», lo que sigue describe esta versión. |

## Panel v1

Es el que se entrega, con la grilla A y el nombre de la plantilla hasta 3 líneas — [0075](../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md).

Decisiones [0065](../decisiones/05-paginas/metricas/0065-panel-v1-cuatro-metricas-y-errores-meta.md) y [0069](../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md).

- Título «Métricas de plantilla». Descripción: «Analiza el rendimiento de cada plantilla utilizada en
  esta campaña.» (Automatizaciones: «… en este flujo.»).
- Cuatro cards: **Enviados** (la base, sin porcentaje ni ícono de información), **Entregados**
  (% sobre enviados), **Leídos** y **Respondidos** (% sobre entregados).
- Una sola sección de errores: «N Errores Meta», con ícono de información. Solo errores que Meta
  devuelve para la plantilla; Atom no ve sus errores internos. Cada error: mensajes y % del total
  de errores.
- Solo «Descargar errores»: ningún panel tiene «Reporte de errores» ([0069](../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md)).
  Recomendaciones, sin cambios.
- Íconos de las cards: Enviados `check` (una palomita), Entregados dos palomitas, Leídos dos
  palomitas azules ([0069](../decisiones/05-paginas/metricas/0069-panel-sin-reporte-de-errores-e-iconos.md)).

| Tooltip | Texto | Frames |
|---|---|---|
| Entregados | «85 de 100 enviados.» | `01.6 · 15`, `03.9 · 10` |
| Leídos | «50 de 85 entregados.» | `01.6 · 16`, `03.9 · 11` |
| Respondidos | «35 de 85 entregados.» | `01.6 · 17`, `03.9 · 12` |
| Errores Meta | «Se contabilizan solo los errores que Meta nos regresa de esta plantilla.» | `01.6 · 18`, `03.9 · 13` |

Valores de ejemplo en todos los paneles: 100 enviados; 85 entregados (85 %); 50 leídos (59 %); 35
respondidos (41 %); 10 errores de Meta: 5 mensajes (50 %), 3 (30 %) y 2 (20 %).

### Grilla de las cards

Va la A, las cuatro en una fila ([0075](../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md)). Con la jerarquía de v2 (sin flecha de tendencia, cantidad y porcentaje en la misma línea, ícono de
información arriba a la derecha) y los nombres, tooltips e íconos de v1, en «Exploración · Grid de
métricas (v1 con la jerarquía de v2)»: A, las cuatro en una fila; B, tres en una fila y una abajo;
C, una arriba y tres en una fila.

## Cards (nuevo DS)

- Sin flecha de tendencia.
- Número y porcentaje en la misma línea: «463 93%».
- Ícono de información arriba a la derecha, en la fila del ícono de la métrica —
  [0060](../decisiones/04-organismos/atom-sidepanel-metricas/0060-panel-v2-icono-de-informacion-arriba-a-la-derecha.md).
- Clientes no lleva porcentaje ni ícono de información.
- Desglose: «4 errores · 27% del total», en `label/labelRegular` (12 px).

## Nombres

| Métrica | Ícono |
|---|---|
| Clientes | `user` |
| Enviados | — |
| Leídos | — |
| Respondidos | — |
| **Errores** | `triangle-exclamation` |
| **No entregados** | `ban` |

En el side panel, `Errores` reemplazó a `Fallidos`. **`No entregados` sigue siendo una métrica
separada**, no se absorbe dentro de Errores.

## En la tabla de Resultados

Seis métricas: **Clientes · Enviados · Errores · Entregados · Leídos · Respondidos** — decisión
[0063](../decisiones/05-paginas/metricas/0063-metricas-de-resultados.md).
*Errores* reemplaza a *Fallidos*; *No entregados* queda oculta en la tabla y sigue en el side panel.

| Columna | Tooltip del encabezado | Color si es mayor que 0 |
|---|---|---|
| Clientes | — (sin `info-circle`) | `fg/secondary` |
| Enviados | «Enviados del total de clientes.» | `fg/secondary` |
| Errores | «Errores del total de clientes. Contempla errores de configuración de la campaña y errores de Meta relacionados a la plantilla.» | `fg/status/error` |
| Entregados | «Entregados del total de enviados.» | `fg/status/informative` |
| Leídos | «Leídos del total de entregados.» | `fg/status/success` |
| Respondidos | «Respondidos del total de entregados.» | `fg/status/success` |

El 0 va siempre en `fg/secondary`. Tooltips en `01.3 · 02–06`.

Los valores de ejemplo cumplen la relación entre métricas — decisión
[0064](../decisiones/05-paginas/metricas/0064-valores-de-resultados-coherentes.md):

- Campaña terminada (Enviada, Con error) y dinámica Activa: Clientes = Enviados + Errores.
- En proceso, En pausa y Detenida: Enviados + Errores ≤ Clientes.
- Agendada: Clientes es el tamaño de la lista y el resto va en 0.
- Entregados ≤ Enviados; Leídos y Respondidos ≤ Entregados.

## Desgloses

Formato **`Nombre (N)`**: `Errores (15)`, `No entregados (22)`.

## Nombre del panel y de la acción

Decisión [0067](../decisiones/05-paginas/metricas/0067-metricas-de-plantilla-en-todas-las-superficies.md):

| Superficie | Acción del menú | Título | Descripción |
|---|---|---|---|
| Campañas | «Métricas de plantilla» · «Métricas de plantilla (N)» | «Métricas de plantilla» | «Analiza el rendimiento de cada plantilla utilizada en esta campaña.» |
| Gestión de flujos | «Métricas de plantilla» · «Métricas de plantilla (N)» | «Métricas de plantilla» | «Analiza el rendimiento de cada plantilla utilizada en este flujo.» |

El número va solo en el menú, cuando hay más de una plantilla, y no pasa de 10. En Campañas llevan
«(10)» los menús de las campañas de tipo Flujo (los que tienen «Ver flujo»); en Gestión de flujos,
`03.3 · 04` y `03.9 · 01`. *Interpretación:* el 10 sale del flujo de ejemplo del panel (1/10).

En los paneles con el nuevo DS el encabezado de sección conserva el nombre: «Métricas de plantilla:
Encuesta satisfacción Q2».

## Subtítulo y calidad

Todos los paneles llevan un subtítulo en el ❖ atom- section-heading y un badge de calidad
(❖ atom-tag). *Verificado el 2026-09-23 en los 10 paneles.*

| Dónde | Subtítulo | Badge |
|---|---|---|
| Campañas (01.6 · 02 y la entrega del archivo de métricas) | *"Analiza el rendimiento de cada plantilla utilizada en esta campaña."* ([0075](../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md)) | `Calidad Alta` |
| Campañas dinámicas (01.8 · 15–16) | *"Analiza las métricas acumuladas de todos los envíos generados y el impacto de esta configuración."* | `Calidad Alta` |
| Gestión de flujos (03.9 · 02 y la entrega del archivo de métricas) | *"Analiza el rendimiento de cada plantilla utilizada en este flujo."* ([0075](../decisiones/05-paginas/metricas/0075-panel-oficial-en-la-entrega.md)) | `Calidad Alta` en `03.9 · 02`; `Calidad pendiente` en algunos casos de la entrega |

## Overlay y código de error

- Los side panels de métricas llevan el backdrop de los modales: `bg/overlay-primary` al 70 % con
  el effect style `blur/surface/subtle` — decisión [0041](../decisiones/04-organismos/atom-sidepanel-metricas/0041-side-panels-de-metricas-con-overlay.md).
- En los desgloses, el cursor sobre un error muestra `❖ atom-tooltip` con el texto completo, el
  código al final (« - #131049») y «Copiar»; al copiar, snackbar «¡Copiado con éxito!» — decisión
  [0044](../decisiones/04-organismos/atom-sidepanel-metricas/0044-tooltip-codigo-de-error.md). Campañas `01.6 · 08–10`, Automatizaciones
  `03.9 · 05–07`.

### Calidad baja

Ejemplo en `01.6 · 06` — decisión [0014](../decisiones/04-organismos/atom-sidepanel-metricas/0014-ejemplo-calidad-baja.md):

- ❖ atom-alert `Warning` · `Inline` arriba de la navegación entre plantillas, con el aviso de Meta
  y la pausa de la campaña.
- Badge `Calidad baja` con `Intent=Neutral`.
- La alerta termina en «Calidad baja - Pausada 24 Sep 26 09:18.»: la fecha va en el formato de
  siempre, sin «hoy» — decisión [0050](../decisiones/01-fundamentos/fechas/0050-fechas-sin-relativas.md).

Referencia: archivo *Pausado y reactivación de envíos de Campañas* (`iILSQHSxySqTdShkVQUkPt`,
nodo `13024:64957`).

## Benchmark

Sección *Campañas · Panel de métricas · Benchmark*, en el archivo *Métricas por plantilla inicial en flujos y campañas* ([0068](../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md)); antes estaba en la page Handoff v2 de Campañas (`663:662523`). Pedido de diseño (28 sep): las cards y el desglose de errores del
panel v2 no son lo esperado; al hacer clic en una card se deberían ver sus categorías internas.

- 12 productos: Meta (WhatsApp Manager), Twilio, Infobip, 360dialog, Respond.io, Wati, Bird y
  Treble.ai (WhatsApp y mensajería); Klaviyo, Mailchimp, Brevo y HubSpot (email y SMS).
- Cada uno tiene una card (Dato, Drill-down, Interpretación y Fuente) y capturas de su documentación
  pública, revisadas una por una. Klaviyo va sin captura: su CDN no dejó descargar las imágenes.
- Solo fuentes públicas oficiales. Lo que no está documentado dice «no encontrado».
- Está solo en Campañas.

### Patrones (interpretación)

1. Resumen arriba y detalle por métrica (Brevo, Klaviyo, HubSpot).
2. El detalle termina en una lista de contactos filtrada, que se exporta o se vuelve segmento
   (Mailchimp, Brevo, HubSpot, Wati, Respond.io).
3. Errores en jerarquía: tipo o grupo → categoría → código, con cantidad y % (Klaviyo, Brevo, Bird,
   Infobip, Twilio).
4. «No enviado o excluido» separado de «fallido» (HubSpot, Brevo, Bird, Treble).
5. Cada motivo con descripción y cómo resolverlo (Bird, Twilio, 360dialog, Treble).
6. Contexto junto al número: benchmark o período anterior (Meta, Mailchimp, 360dialog, HubSpot).

En lo encontrado, el clic lleva a otra pestaña, sección o lista; ninguno documenta el detalle dentro
del mismo panel.

### Propuesta para Atom (interpretación, sin decidir)

Clic en una card → el panel muestra las categorías internas de esa métrica, sin salir del panel:
Enviados con Entregados, Leídos y Respondidos; Errores por categoría con cantidad y %, cada código de
Meta con su descripción y cómo resolverlo, y Descargar registros y Reenviar desde la categoría; No
entregados por Meta al final. Va en la línea de `Ideación · 02`.

**Preguntas:** qué categorías lleva cada card y sobre qué base se calcula cada %.
