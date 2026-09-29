# 0033 — Resultados: «Fecha de envío» en estáticas, «F. Creación» en dinámicas

**Estado:** reemplazada por [0036](0036-no-entregados-visible.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Resultados — tablas y filtros de estáticas y dinámicas (`01.8`, tabla de
`01.2 · 02` y sección Filtros `464:255665`). Reemplaza a [0026](0026-fecha-de-envio-en-resultados.md)
y [0027](../../../05-paginas/resultados-de-campanas/0027-dinamicas-misma-tabla-que-estaticas.md).

## Contexto

La [0026](0026-fecha-de-envio-en-resultados.md) llamó «Fecha de envío» a la fecha de las dos tabs, y
la [0027](../../../05-paginas/resultados-de-campanas/0027-dinamicas-misma-tabla-que-estaticas.md) le dio a dinámicas la tabla de estáticas con
el filtro «F. Envío». *Verificado el 2026-09-24:* el FRD 4 de la Épica 2 («Operación de campañas con
Listas Dinámicas», Actual UI y Nueva UI) usa «F. Creación» en las tablas de campañas y dice «sort por
fecha de creación». Ningún FRD que se pudo leer dice «Fecha de envío».

## Decisión

- Las tablas de Resultados usan las **12 columnas de la Épica 2** (*Tipo de campaña* después de
  *Fallidos*, sin *No entregados*).
- **Estáticas:** la fecha es **`Fecha de envío`**. Filtro: chip `F. Envío`, panel
  `Filtrar por Fecha de envío`.
- **Dinámicas:** la misma tabla que estáticas, con la fecha **`F. Creación`**. Filtros: Tipo de
  campaña (Flujo · Plantilla) · Estado · Creador · **`F. Creación`** (panel
  `Filtrar por Fecha de creación`).
- Estados de dinámicas: **Activa · En pausa · Detenida**, en orden de ciclo de vida. *En pausa*
  ocurre solo de forma automática, por el límite de Meta. *Con error* no es un estado de las
  dinámicas.

## Por qué

Pedido de diseño: *"arregla el filtro de fecha de envioi en campañas dinámicas como fecha de creación"*. A la
pregunta de si también cambiaba la columna, eligió *Filtro y columna*. Lo de estáticas y el resto de
dinámicas sigue la [0026](0026-fecha-de-envio-en-resultados.md) y la
[0027](../../../05-paginas/resultados-de-campanas/0027-dinamicas-misma-tabla-que-estaticas.md).

La opción elegida decía que chip, panel y encabezado pasan a «F. Creación», que es también lo que usa
el FRD 4.

## Consecuencias

- *Verificado:* 15 encabezados «F. Creación» en dinámicas: las 13 tablas de la 0027 y las de las dos
  copias nuevas de `01.8 · 05`. La columna pasó de 142 a 120 px.
- Categoría «F. Creación» y panel «Filtrar por Fecha de creación» en `01.8 · 05` (y sus dos copias),
  `01.8 · 06` y los cuatro paneles de dinámicas de la sección Filtros.
- Cards `394:623125` y `394:623129` (dinámicas) y `275:183109` (filtros de estáticas, cuerpo oculto).
- Estáticas sin cambios: 56 encabezados «Fecha de envío».
- La tabla nueva de dinámicas `524:133901` dice «Fecha de creación», con el nombre completo: queda
  como pregunta en `RETOMAR.md`.
- En QA y en producción el filtro de dinámicas dice F. Creación: `01.8 · 05` pasa a *Coincide* en el
  handoff.
