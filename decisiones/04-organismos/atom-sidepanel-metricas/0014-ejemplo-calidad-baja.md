# 0014 — La calidad del panel de métricas se documenta con un ejemplo de «Calidad baja»

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** side panels de métricas de los dos archivos

## Contexto

Estaba bloqueado «agregar subtítulo y badge `Calidad Alta` a los side panels de métricas»,
con la idea de que eran nodos nuevos.

*Verificado el 2026-09-23:* los 10 side panels de métricas ya tenían el subtítulo y el badge
de calidad. Campañas (`01.6 · 01/02/04/05`, `01.8 · 10/11`) dice `Calidad Alta`; Gestión de
flujos (`03.9 · 01–04`) dice `Calidad pendiente`. No hacían falta nodos nuevos.

## Decisión

Los paneles existentes quedan como están y se agrega **un ejemplo de calidad baja**:
`01.6 · 06 - Side panel · Métricas de campaña · Calidad baja` (`465:149064`), armado con la
referencia del archivo *Pausado y reactivación de envíos de Campañas*
(`iILSQHSxySqTdShkVQUkPt`, nodo `13024:64957`).

## Por qué

Pedido de diseño: *"Haz uno de ejemplo de calidad baja con este"*, con el link a la referencia.

*Interpretación:* la calidad baja es el único valor que cambia la pantalla (alerta y pausa de
la campaña); los demás solo cambian el texto del badge.

## Consecuencias

- `01.6 · 06` es un clon de `01.6 · 02` con:
  - `❖ atom-alert` `Type=Warning, Banner=Inline` al inicio del `BodySlot`, con el copy literal
    de la referencia: *"Meta calificó como baja la calidad de la plantilla promo_septiembre_v1"* /
    *"Se pausó la campaña temporalmente para que reconsideres si deseas continuar con su envío,
    ya que Meta podría deshabilitar la plantilla."* / *"Calidad baja - Pausada hoy, 09:18."*
  - Ícono de la alerta `triangle-exclamation`. La referencia usa `EXCLAMATION-TRIANGLE`, el mismo
    glifo con el nombre viejo.
  - `❖ atom-tag` `Calidad baja` con `Intent=Neutral`, como en la referencia.
  - Texto de plantilla `Plantilla: promo_septiembre_v1`, para que coincida con la alerta.
- *Interpretación:* el ejemplo va en Campañas porque la referencia es un panel de métricas de
  campaña. El título del panel sigue siendo el de `01.6 · 02` («Encuesta satisfacción Q2»).
