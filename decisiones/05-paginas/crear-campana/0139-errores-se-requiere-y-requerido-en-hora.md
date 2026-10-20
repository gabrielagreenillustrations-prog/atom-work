# 0139 — Crear campaña: errores «Se requiere…», salvo Hora y Minuto, que siguen con «Requerido»

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** `02.00`, `11.00`, `18.00` · FRD de Crear campaña (HU-2, HU-11, HU-18).
**Componente:** Páginas · Crear campaña · `❖ atom-text-field`, `❖ atom-select-input`

## Decisión

- El error aparece on blur, nunca al abrir el formulario, y reemplaza al texto de ayuda (Forms y Text field Patterns).
- Los requeridos siguen «Se requiere [el/la] [sustantivo]»: «Se requiere el nombre», «Se requiere el número», «Se requiere el nombre de la campaña», «Se requiere la plantilla», «Se requiere la lista de clientes», «Se requiere la fecha de envío», «Se requiere la cantidad de envíos por lote», «Se requiere el tiempo».
- **Hora y Minuto** mantienen el «Requerido» de QA.
- «El valor mínimo es 1» (tiempo entre lotes) es el texto de QA, porque Patterns no tiene uno para ese caso.

## Por qué

Diseño dejó «Requerido» en Hora y Minuto, en el FRD y en `18.00 · 02`. En QA hoy: «El nombre es requerido», «La lista es requerida», «La cantidad es requerida» y «La fecha de envío es requerida»: esos pasan al patrón de Global Patterns y son claves de i18n a actualizar.

## Consecuencias

- «Se requiere el tiempo» está en el FRD pero no en un frame.
- El error de fecha pasada («La fecha debe ser posterior a la fecha actual», texto de QA) salió del FRD.
</content>
</invoke>
