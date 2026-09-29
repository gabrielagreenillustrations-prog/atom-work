# 0058 — Automatizaciones: el panel de métricas en las mismas dos versiones que Campañas

**Estado:** vigente · la [0062](0062-panel-v1-solo-el-panel-de-origen.md) acota «tal como está» al panel
**Fecha:** 2026-09-26
**Alcance:** Automatizaciones – Gestión flujos — fila `03.9` de la page `Automatizaciones` y page
nueva `Handoff v2` (`199:589952`).

## Contexto

La [0056](../../06-proceso-y-fuentes/handoff/0056-handoff-v2.md) dejó el panel de métricas en dos versiones solo en Campañas: diseño
había elegido *"Solo Campañas"*. Automatizaciones (`03.9`) seguía con el panel del nuevo DS, sin los
cambios de la [0057](0057-panel-de-metricas-v2.md).

## Decisión

- **Page `Automatizaciones`**, fila `03.9`: el panel del archivo *Métricas por plantilla inicial en
  flujos y campañas* (página Actual UI, contexto Flujos), tal como está, con sus interacciones y
  tooltips.
  - `03.9 · 01–04`: acceso desde el menú de fila y panel.
  - `03.9 · 05–09`: navegación entre plantillas.
- **Page `Handoff v2`**: los siete paneles del nuevo DS que estaban en `03.9 · 01–07`, con los cinco
  cambios de la 0057.

## Por qué

Respuesta de diseño a la pregunta de `RETOMAR.md`: *"si por favor, tiene que alinearse las dos
versiones tienes razón"*.

## Consecuencias

- *Verificado:* nueve frames copiados del archivo de origen, con componentes de las librerías. No
  vinieron conectores.
- *Verificado:* al pegar, el hover de los `❖ atom-button` quedó sin destino. Se rehicieron, con el
  mismo disparador y la misma transición que en el origen:
  - las 13 conexiones de navegación entre `03.9 · 03–09`, hacia los frames nuevos;
  - los 18 hover de `❖ atom-button`, hacia su variante *Hovered*.

  Siguen en el archivo después de recargar la pestaña.
- *Verificado:* en el archivo de origen ya no tienen destino:
  - el hover sobre el menú de `03.9 · 01`, y el clic en «Métricas de plantilla (10)» no lleva a `02`;
  - el «after delay» de los paneles;
  - el cambio de variante (press y hover) de las capas «Button» dentro de los paneles.

  Se dejaron igual.
- *Verificado:* en `03.9 · 05–09` el encabezado dice «Campañas» sobre la página Gestión de flujos,
  igual que en el origen. No se cambió.
- Los paneles del nuevo DS pasaron a `Handoff v2` con sus IDs, en la sección
  `Gestión de flujos · Panel de métricas (nuevo DS)` (`199:589954`). Sus 7 paneles tienen:
  - 35 cards con el marco `Cantidad`;
  - 49 conteos con «errores» en 12 px.
- Las decisiones del panel con el nuevo DS ([0021](../../01-fundamentos/iconografia/0021-iconos-de-side-panels.md),
  [0025](0025-titulos-de-side-panels-de-metricas.md),
  [0041](0041-side-panels-de-metricas-con-overlay.md),
  [0044](0044-tooltip-codigo-de-error.md)) aplican a `Handoff v2` también en Automatizaciones.
- La numeración `03.9 · NN` se repite en las dos pages, como `01.6 · NN` en Campañas.
