# 0084 — Logs de IA: catálogo de verbos y vista suelta o agrupada

**Estado:** vigente
**Fecha:** 2026-10-05
**Componente:** atom-chat
**Alcance:** logs de la IA en la bandeja, el asistente, el Wizard y la prueba de agente.
**Fuentes:** frames «Definition Logs» (`11495:6531`) y «Explore Logs» (`11650:18656`).

## Contexto

Diseño compartió los dos frames con todos los tipos de log de conversaciones con la IA y del Wizard,
y pidió poder ver varios logs y agruparlos dentro de una conversación agente–cliente.

## Decisión

- Patrón: verbo en pretérito perfecto simple + nombre del objeto truncado + extensión (persiste). Por turno.
- El catálogo de tipos, verbos, íconos y detalle está en [`sistema/atom-chat.md`](../../../sistema/atom-chat.md#logs-de-ia--0084).
- Se pueden ver sueltos o agrupados en una línea colapsable «{autor} realizó N acciones ›», con
  «· N con error» cuando hay fallos.
- Los errores van en gris, con `circle-x`.

## Por qué

Respuesta de diseño a cómo ver los logs agrupados: *grupo colapsable* y *logs sueltos*.

*Dato verificado:* en los dos frames, los textos de error son `#71717b`, igual que los demás.
*Interpretación:* la línea del grupo no está dibujada; usa el estilo de log con el ícono `list-check`.

## Consecuencias

- Etapa, tipificación, etiqueta, Generó y Editó no tienen desplegable (tabla de la definición: «Sin desplegable»).
