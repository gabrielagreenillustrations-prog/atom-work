# 0067 — «Métricas de plantilla» en todas las superficies

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** métricas · Campañas (Resultados) y Automatizaciones (Gestión de flujos)
**Alcance:** acciones de los menús de fila, título y descripción del panel, y nombres de frames y
capas, en los dos archivos y en el archivo *Métricas por plantilla inicial en flujos y campañas*.
Reemplaza a [0025](../../04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md).

## Contexto

Las acciones decían «Métricas de campaña», «Métricas de flujo» o «Métricas de tipificación», y la
[0025](../../04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md) titulaba el panel con el
tipo y el nombre completo de la campaña o del flujo.

## Decisión

Según la documentación del panel que compartió diseño («Naming por superficie»):

| Superficie | Acción del menú | Título | Descripción |
|---|---|---|---|
| Campañas | «Métricas de plantilla» · «Métricas de plantilla (N)» | «Métricas de plantilla» | «Analiza el rendimiento de cada plantilla utilizada en esta campaña.» |
| Gestión de flujos | «Métricas de plantilla» · «Métricas de plantilla (N)» | «Métricas de plantilla» | «Analiza el rendimiento de cada plantilla utilizada en este flujo.» |

- El número va solo en la acción del menú, cuando hay más de una plantilla, y no pasa de 10.
- Los frames y las capas que decían «Métricas de campaña» o «Métricas de flujo» pasan a «Métricas de
  plantilla».

## Por qué

Pedido de diseño: *"Cambiar "Métricas de campaña" por "Métricas de plantilla" en acciones, títulos y
frames de todos los módulos, campañas y automatizaciones donde decia métricas de campañas, flujos,
tipificaciones, etc siempre dirá métricas de plantilla. y si tiene más de una plantilla entonces
"Métricas de plantilla (x)" con una cantidad en la X y no puede ser mayor a 10"*. Antes de ver la
documentación, diseño había respondido que el número iba en el menú y en el título del panel; se
siguió la documentación, que lo deja solo en el menú.

*Interpretación:*

- Una campaña de tipo Flujo tiene más de una plantilla; una de tipo Plantilla, una. Los menús con
  «Ver flujo» llevan «(10)», como el flujo de ejemplo del panel (1/10); los demás, sin número.
- `01.6 · 01` es el menú de «Encuesta satisfacción Q2», de tipo Plantilla en esa tabla: va sin
  número. El panel que abre muestra 10 plantillas (1/10); esa diferencia ya estaba (pregunta en
  `RETOMAR.md`).
- En los paneles con el nuevo DS, el encabezado de sección conserva el nombre: «Métricas de
  plantilla: Encuesta satisfacción Q2», «Métricas de plantilla: Recuperación de carritos» (decía
  «Métricas de campaña: …»).

## Consecuencias

- Campañas: 27 acciones — `01.4 · 01–08` y `04.1`, las 8 tablas de dinámicas, los dos `01.6 · 01` y
  dos ítems ocultos de Listas (`02.3 · 01`). 10 con «(10)», todos de campañas de tipo Flujo.
- Campañas, nombres: los dos `01.6 · 01` («Side panel · Métricas de plantilla · Acceso desde el
  menú»), 9 frames y 9 capas `❖atom-sidepanel` de la versión con el nuevo DS, y `01.8 · 15`.
- Automatizaciones: «Métricas de plantilla (10)» en `03.3 · 04` y `03.9 · 01`; «Métricas de
  plantilla» en `03.3 · 06` y `08` y en los borradores (`05`, `07`, `09`, `16–18`), donde la acción
  está oculta. Los 7 frames del nuevo DS decían «Métricas de plantillas del flujo».
