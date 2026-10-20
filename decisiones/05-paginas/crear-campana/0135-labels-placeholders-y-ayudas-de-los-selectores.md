# 0135 — Crear campaña: labels, placeholders y ayudas de los selectores

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** todas las pantallas de Crear campaña · FRD de Crear campaña (HU-2, HU-3, HU-12).
**Componente:** Páginas · Crear campaña · `❖ atom-select-input` · regla de copy en [sistema/copy.md](../../../sistema/copy.md)

## Decisión

| Campo | Label | Placeholder | Texto de ayuda |
|---|---|---|---|
| Número | «Número del canal» | «Selecciona un número» | — |
| Plantilla | «Plantilla a enviar» | «Selecciona una plantilla» | «Es necesario seleccionar un número para mostrar las plantillas disponibles» |
| Flujo | «Flujo a enviar» | «Selecciona un flujo» | «Es necesario seleccionar un número para mostrar los flujos disponibles» |
| Lista | «Lista de clientes» | «Selecciona una lista» | — |
| Asignar a grupo | «Grupo» | «Selecciona un grupo» | — |
| Asignar a agente | «Agente» | «Selecciona un agente» | — |
| Fecha de envío | «Fecha de envío» | «Selecciona una fecha» | — |

Regla: el placeholder de un selector es **«Selecciona un/una [sustantivo]»**.

## Por qué

Pedidos de diseño: *"el label tiene que decir flujo a enviar, plantilla a enviar y listas de clientes, los placeholders deben ser "Selecciona un{sustantivo]" corrije eso en todos las pantallas de figmas"* y *"supportive text de seleccion de plantillas y flujos, tienes que seguir los que deje"* (los de `01.00 · 02` y `03`).

Antes, en el FRD: «Selecciona el grupo» y «Selecciona el agente» como labels, con el placeholder «Selecciona una opción». Diseño los dejó como «Grupo» y «Agente» en `12.00`.

*Interpretación:* el label del pedido dice «listas de clientes»; en Figma quedó «Lista de clientes», en singular, como en el FRD.

## Consecuencias

- *Verificado el 2026-10-19:* en `18.00 · 02`, «Fecha de envío» está vacío y en error, pero su placeholder dice «14 Oct 26» y no «Selecciona una fecha», como en `11.00 · 01`. Está preguntado.
</content>
</invoke>
<invoke name="Bash">
<parameter name="command">cd /home/claude/gabrielagreenillustrations-prog/atom-work/decisiones/05-paginas/crear-campana && head -1 0135-*.md