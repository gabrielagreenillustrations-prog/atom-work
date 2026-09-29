# 0004 — "Errores" reemplaza a "Fallidos" en métricas

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** todos los side panels de métricas de los dos archivos

## Contexto

El handoff tenía los dos módulos desalineados: los paneles de campañas dinámicas ya
decían `Errores` y los de campañas estáticas seguían con `Fallidos`. El panel de métricas
de la Épica 3 (`Resultados de campañas-métricas de plantilla`) usa `Errores`.

## Decisión

La métrica se llama **`Errores`**. Los desgloses usan el formato **`Nombre (N)`**:
`Errores (15)`, `No entregados (22)`.

`No entregados` **se mantiene como métrica separada**.

## Por qué

*Verificado:* la Épica 3 usa `Errores` con ícono `triangle-exclamation` y `No entregados`
con ícono `ban`, como dos métricas distintas.

*Nota:* la propia Épica 3 deja sin migrar el encabezado "Detalles de fallidos" arriba de
`Errores (15)`. Es una inconsistencia de ellos; nosotros migramos también el encabezado.

## Consecuencias

Aplicado en 10 paneles: Campañas `01.6 · 01/02/04/05` y `01.8 · 10/11`; Automatizaciones
`03.9 · 01/02/03/04`.
