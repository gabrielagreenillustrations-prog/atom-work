# 0085 — La entrega de métricas por plantilla, alineada al FRD del 28-sep

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** ❖ atom-sidepanel · Panel de métricas · ❖ atom-data-table · ❖ atom-dropdown-menu
**Alcance:** archivo *Métricas por plantilla inicial en flujos y campañas* (`tHgzwwQ5gbEzHjxPBvLODo`), page
Actual UI, sección «Métricas por plantilla inicial en flujos y campañas» (`13076:21003`). También Campañas
`01.6 · 01` y las tablas de `01.3 · 01`, `01.4` y `01.8 · 01`. Reemplaza en parte a la
[0075](0075-panel-oficial-en-la-entrega.md): las pantallas con la UI anterior y el menú de acciones anterior.

## Contexto

*Dato verificado:*

- La sección seguía el FRD original: HU 1 (menú con «Métricas de plantilla» y con «(10)»), HU 2 (acceso y
  panel abierto), HU3 (una o varias plantillas) y Casos edge.
- Detrás de cada panel había una imagen de la UI anterior (header ATOM, sidebar anterior, tabla con
  Fallidos) y un overlay; los menús eran el dropdown anterior.
- El FRD de ajustes del 28-sep ([copia](../../../entregas/frd/2026-09-28-metricas-por-plantilla-ajustes.md))
  tiene tres HU: HU-01 (columnas de la tabla de Resultados y CSV), HU-02 (naming, cards y bases de
  porcentaje) y HU-03 (Errores Meta). El acceso, la navegación, activa/histórica y el límite de 10 siguen el
  FRD original.

## Decisión

- **Pantallas:** las de los handoffs, con la tabla, el sidebar y los menús vigentes. En los frames del panel,
  la imagen y el overlay se reemplazaron por el `Layout` y el backdrop de Campañas `01.6 · 02` o de
  Automatizaciones `03.9 · 02`; el panel de cada caso no cambió. Los frames de menú se reemplazaron por los
  del handoff.
- **Estructura:** una sección por HU del FRD y dos para lo que no está en él. Cada fila lleva una card
  `_description`; lo que el FRD no trae va como caso de uso o caso edge.

| Sección | Filas |
|---|---|
| HU-01 · Columnas de métricas en la tabla de Resultados de campañas | Columnas (`01.1 · 02` ×2 y `01.8 · 02`) · Tooltips por métrica (`01.3 · 02–06`) · Descargar errores (`01.4 · 02` y `01.4 · 01`, Plantilla) · CSV del clic en el número de Errores · CSV de Descargar resultados |
| HU-02 · Naming, cards y bases de porcentaje del panel | Resultados, una plantilla (`01.6 · 01` → `01.6 · 02`) · Resultados, varias (`01.4 · 01` Flujo → panel 1/10) · Gestión de flujos, varias (`03.9 · 01` → `03.9 · 02`) · Gestión de flujos, sin número (`03.3 · 06`) · Cards y porcentajes |
| HU-03 · Detalle de Errores Meta en el panel | Con errores de Meta · Tooltip de Errores Meta · Sin errores de Meta · Sin recomendaciones · CSV de Descargar errores |
| Casos de uso · FRD original | Navegación con flechas · Una plantilla o varias · Plantilla activa · Plantilla inactiva · Más de 10 plantillas · Errores colapsados · Copiar el contenido del error |
| Casos edge | Nombre de plantilla largo · Números largos · No se pudieron cargar las métricas |

## Por qué

Pedido de diseño: *"reemplazar la UI con la que tenemos en el handoff para alinear la tabla ya que
entregaremos las dos cosas al mismo tiempo"*, *"alinea el figma a las HUs del FRD que represente cada caso de
uso y si no están algunos casos en el FRD que sí tengo en Figma entonces, solo déjalos como use cases o casos
edge"*. Del PO: *"cuando traigas la tabla ahí se actualizarán las columnas nuevas. y los menú de acciones."*
Diseño eligió la card `_description` para esos casos y los frames de la tabla para HU-01.

*Interpretación:*

- Cada pantalla es de Campañas o de Gestión de flujos según el subtítulo de su panel. «Nombre de plantilla
  largo» (`13076:48652`) tenía fondo de Campañas y el subtítulo del panel dice «en este flujo»: quedó con
  Gestión de flujos.
- «Gestión de flujos · sin número» usa `03.3 · 06` (Webhook), cuyo menú dice «Métricas de plantilla» sin
  «(N)».
- HU-03 no tenía frames propios: «Con errores de Meta», «Tooltip de Errores Meta» y «Sin recomendaciones»
  son copias del panel de Campañas con navegación (`13076:21237`). El tooltip es el de `01.6 · 18` de la
  sección «Handoff Design System», con el copy del FRD; en «Sin recomendaciones» la sección está oculta.
- Los CSV van en cards, sin frames: las imágenes de referencia del FRD no llegaron.

## Consecuencias

- Frames copiados de los handoffs: `01.1 · 02` ×2, `01.3 · 02–06`, `01.4 · 01` (Flujo y Plantilla),
  `01.4 · 02` (Plantilla), `01.6 · 01`, `01.6 · 02`, `01.8 · 02`, `03.3 · 06`, `03.9 · 01` y `03.9 · 02`.
- 18 frames con pantalla nueva detrás del panel. Salieron los seis frames de menú de HU 1 y HU 2
  (`13076:34630`, `40463`, `35812`, `40709`, `41588`, `41834`) y «Flujos-drawer» (`13076:21070`), igual a
  `03.9 · 02`.
- Se perdieron los cinco conectores de la sección (tres de la navegación, uno de «Más de 10 plantillas» y
  uno de «Copiar el contenido del error»): estaban unidos al overlay que se reemplazó. La API no puede crear
  conectores en un archivo de diseño.
- Campañas `01.6 · 01`: la fila «Encuesta satisfacción Q2» tiene 5 errores y su menú no traía «Descargar
  errores». Ahora trae el menú de `01.4 · 02` (con «Descargar errores»), con «Métricas de plantilla» en hover.
- Campañas: `01.3 · 01`, `01.4 · 01–08`, `01.4 · 04.1` y `01.8 · 01` (17 frames) tenían Entregados en azul y
  Leídos en verde: no eran `❖ atom-data-table` y la [0082](0082-colores-de-metricas-en-resultados.md) no los
  había alcanzado. 340 valores corregidos; ahora las 6717 celdas de métricas de las pages Handoff cumplen la
  0082.
- Versiones de Figma: «Antes de alinear con el FRD 28-sep» y «Antes de reorganizar por HU del FRD»
  (métricas); «Antes de colores de métricas en 01.3 · 01, 01.4 y 01.8 · 01» y «Antes de Descargar errores en
  01.6 · 01» (Campañas).
