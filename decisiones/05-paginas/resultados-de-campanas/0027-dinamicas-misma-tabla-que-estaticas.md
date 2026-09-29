# 0027 — Campañas dinámicas: misma tabla que estáticas, con sus filtros y tres estados

**Estado:** reemplazada por [0033](../../04-organismos/atom-data-table/columnas-resultados/0033-fecha-de-creacion-en-dinamicas.md)
**Fecha:** 2026-09-24
**Alcance:** Campañas · Resultados — tab Dinámicas (`01.8`, tabla de `01.2 · 02`) y la sección
Filtros (`464:255665`). Reemplaza a [0022](0022-campanas-dinamicas-tres-estados.md).

## Contexto

Las dinámicas tenían una tabla propia, la verificada en producción: Nombre · Lista · Estado ·
Iniciados · Fallidos · Respondidos · F. Creación · Acciones.

## Decisión

- La tabla de dinámicas es **la misma que la de estáticas**: Nombre · Canal · Estado · Clientes ·
  Enviados · Leídos · Respondidos · Fallidos · Tipo de campaña · Creador · Fecha de envío ·
  Acciones, en `❖ atom-table` *Sticky New*.
- Filtros: Tipo de campaña (Flujo · Plantilla) · Estado · Creador · F. Envío.
- Estados: **Activa · En pausa · Detenida**, en orden de ciclo de vida. *En pausa* ocurre solo de
  forma automática, por el límite de Meta. *Con error* no es un estado de las dinámicas.

## Por qué

Pedido de diseño: *"La tabla de listas dinámicas solo falta que queden igual a las estáticas solo que con
los filtros de las dinámicas y los estados de dinámicas"*. Estados y filtros vienen de la
[0022](0022-campanas-dinamicas-tres-estados.md); el nombre de la fecha, de la
[0026](../../04-organismos/atom-data-table/columnas-resultados/0026-fecha-de-envio-en-resultados.md).

*Interpretación:* en las pantallas de dinámicas el scroll horizontal queda al inicio, para que se
vea la columna Estado; las de estáticas muestran el scroll corrido, como la referencia `01.2 · 07`.

## Consecuencias

- 13 tablas (`01.8 · 01–12` y la de `01.2 · 02`) con los mismos anchos y celdas que estáticas.
- Tipo de campaña *Flujo* en las filas de los menús y de los side panels. Fechas en
  `DD mmm HH:mm` ([0003](../../01-fundamentos/fechas/0003-formato-de-fecha.md)); las horas de los mocks son inventadas.
- En producción la tabla de dinámicas tiene columnas propias y abre con el filtro Estado = Activo:
  el handoff lo marca en `01.8 · 01`.
- *Verificado:* las tablas de ejemplo muestran 83 filas Activa y 8 Detenida; ninguna En pausa.
