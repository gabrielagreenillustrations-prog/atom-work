# 0029 — Listas: «F. Actualización» y los íconos de las fechas

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Campañas · Listas — encabezados de las tablas y categorías de los paneles de filtro
(`02.2 · 04–09`).

## Contexto

En las categorías de los paneles de filtro de Listas, F. Creación llevaba `clock-rotate-left` y
F. Actualización, `calendar`. Los encabezados de la columna decían «Últ. Actualización»; producción
dice F. Actualización.

## Decisión

La columna y el filtro se llaman **F. Actualización**. En las categorías de los paneles de filtro,
**F. Creación lleva `calendar`** y **F. Actualización lleva `clock-rotate-left`**.

## Por qué

Pedido de diseño: *"el filtro de última actualización cambia a F. Actualización y ese lleva el icono de reloj
que ahorita tiene el F. Creación, es decir, los dejaste al revés."*

## Consecuencias

- 37 encabezados pasaron de «Últ. Actualización» a «F. Actualización».
- 12 ítems de categoría con el ícono cambiado: F. Creación y F. Actualización en los seis paneles de
  `02.2 · 04–09`.
- El chip de fecha de las campañas dinámicas («F. Envío») ya usaba `calendar`: las fechas de
  creación y de envío tienen el mismo ícono.
