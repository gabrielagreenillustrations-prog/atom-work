# 0100 — Etiquetas: Editar y Eliminar según Dialog Patterns

**Estado:** vigente · reemplaza en la [0098](0098-dialogos-de-etiquetas-copy-y-validacion.md) el botón «Guardar» y el cuerpo de Eliminar
**Fecha:** 2026-10-06
**Componente:** `❖ atom-dialog`
**Alcance:** Etiquetas (`01.3` y `01.4 · 01`).

## Contexto

*Dato verificado* (Global Patterns · Dialog Patterns · Uses Cases): «Title + Primary Button: the infinitive verb in the title and the button must be the same» (ejemplo «Activar sobrescritura» / «Activar»). En Destructive Actions: «single-line body explaining the consequence (no inputs), Destructive Primary with the same verb as the title». El ejemplo «🚫 Don't» es «¿Estás seguro que deseas eliminar esta lista?»; el «✅ Do», «La lista se eliminará y ya no podrás usarla para el envío de campañas.».

## Decisión

- Editar etiqueta: botón principal **«Editar»**, loading **«Editando...»**.
- Eliminar etiqueta: cuerpo **«La etiqueta se eliminará y ya no podrás usarla para identificar ni filtrar registros.»**

## Por qué

Pedido de diseño: revisar título, botón y cuerpo contra Global Patterns. Elegido entre opciones.

*Interpretación:* la consecuencia sale de la descripción del módulo («identificar y filtrar diferentes registros»). No está verificado qué pasa con los registros que ya tienen la etiqueta.

## Consecuencias

- En Figma el cuerpo ocupa dos líneas con 400 de ancho; el pattern pide una sola oración, no una sola línea visual.
