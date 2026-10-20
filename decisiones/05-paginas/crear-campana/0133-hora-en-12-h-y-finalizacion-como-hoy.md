# 0133 — Crear campaña: la hora sigue en 12 h y la finalización se cuenta como hoy

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** `08.00`, `10.00`, `13.00`, `15.00` · FRD de Crear campaña (HU-8, HU-10, HU-13).
**Componente:** Páginas · Crear campaña · `❖ atom-text-field`, `❖ atom-select-input`

## Decisión

- **Agendar:** se conserva el formato de 12 horas de hoy. «Hora» acepta de 1 a 12, «Minuto» de 0 a 59 y un `❖ atom-select-input` AM/PM ofrece AM y PM (AM por defecto). No hay conversión automática a 24 horas.
  - El AM/PM no lleva label visible, como en QA. En Figma su label queda vacío para alinear el campo con «Hora» y «Minuto»; en código necesita un `aria-label` («AM/PM»).
- **Finalización de campaña** (solo tipo Plantilla): «Tiempo» y «Período» son una duración contada desde el envío, no una hora de reloj. Con «Día», de 1 a 30; con «Hora», de 1 a 168 (7 días). «Día» por defecto.

## Por qué

Diseño pidió conservar el comportamiento actual y que el AM/PM sea un selector: *"Debe ser un selector, tienes razon"*.

*Verificado en QA el 2026-10-19:* el min y max de los inputs de hora y minuto, las opciones AM y PM, y que el máximo de «Tiempo» cambia según el período (min 1, max 30 o 168, step 1).

## Consecuencias

- Diseño de referencia de la fila de la hora: `15.00 · 01`.
- *Propuesta, sin verificar en QA:* fuera de rango, «El valor debe estar entre 1 y 30» (Día) o «El valor debe estar entre 1 y 168» (Hora), según Text field Patterns.
</content>
</invoke>
<invoke name="Bash">
<parameter name="command">cd /home/claude/gabrielagreenillustrations-prog/atom-work/decisiones/05-paginas/crear-campana && head -1 0133-*.md