# 0024 — Botones en loading: gerundio y spinner

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** todos los botones en estado *Loading*, en los dos archivos.

## Contexto

Diseño encontró botones en loading con el verbo en gerundio («Duplicando…») y se preguntó si
había que pasarlos a infinitivo.

## Decisión

Un botón en *Loading* dice el **verbo en gerundio seguido de puntos suspensivos** y lleva el
**ícono izquierdo encendido, con el spinner**. Ejemplo: «Duplicando...».

## Por qué

Pedido de diseño: *"No, los botones en estado loading así deben de quedar todos y el icon left encendido
y trae el spinner"*.

## Consecuencias

- *Verificado:* hay un solo botón en *Loading* en los dos archivos: «Duplicando...» en
  `03.5 · 03` (Automatizaciones), con `hasLeftIcon` encendido. En Campañas no hay ninguno.
  No hubo que cambiar nada en Figma.
- En QA el botón de duplicar muestra solo el spinner, sin texto: el handoff lo marca como
  diferencia en `03.5 · 03`.
