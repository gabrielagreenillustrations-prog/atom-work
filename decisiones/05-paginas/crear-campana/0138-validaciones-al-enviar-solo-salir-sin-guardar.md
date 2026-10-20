# 0138 — Crear campaña: de las validaciones al enviar queda solo «Salir sin guardar»

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** `14.00 · 01`, `15.00 · 03` y el dropdown de listas (`02.00 · 12`) · FRD de Crear campaña (HU-2, HU-14, HU-15).
**Componente:** Páginas · Crear campaña · `❖ atom-dialog`

## Contexto

El handoff tenía tres diálogos nuevos en 14.00: lista sin clientes al enviar, horario sin días al enviar y salir sin guardar.

## Decisión

- Salen los diálogos de **lista sin clientes** y **horario sin días**. La lista con 0 clientes se resuelve en el dropdown: va deshabilitada y, al pasar el cursor, un `❖ atom-tooltip` dice «No se pueden utilizar listas estáticas con cero clientes para el envío de campañas.» (`02.00 · 12`).
- Queda **«Salir sin guardar»**: con cambios, «Cancelar», la flecha ← del header o ir a otro módulo de Atom abren el diálogo de confirmación de Dialog Patterns. Sin cambios, sale directo. No se cierra con clic afuera (excepción de Dialog Patterns por cambios sin guardar).
  - Título «Salir sin guardar» · cuerpo «Si sales ahora no se guardará tu progreso y perderás los cambios realizados.» · «Cancelar» / «Salir».
- El diálogo se centra respecto al frame completo ([0095](../../04-organismos/atom-dialog/0095-dialogos-centrados-en-el-frame.md)).

## Por qué

Diseño sacó esos dos diálogos de la HU-14 del FRD y borró sus frames; el que quedó se renumeró como `14.00 · 01`. «O cliquear en otro módulo de Atom» lo agregó diseño en el FRD.

## Consecuencias

- La descripción de la HU-14 en el FRD todavía habla de validar los casos que impiden enviar: es texto de diseño y no se tocó.
- La card de 14.00 y la referencia de 15.00 (`14.00 · 01`) se actualizaron el 2026-10-19.
</content>
</invoke>
