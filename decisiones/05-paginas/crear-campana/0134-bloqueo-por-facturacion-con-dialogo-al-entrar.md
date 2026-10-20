# 0134 — Crear campaña: el bloqueo por facturación es un diálogo informativo al entrar

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** `01.00 · 06` · FRD de Crear campaña (HU-1).
**Componente:** Páginas · Crear campaña · `❖ atom-dialog`

## Contexto

Con facturas vencidas, la pantalla mostraba un `❖ atom-alert`.

## Decisión

Al entrar a Crear campaña con facturas vencidas aparece un `❖ atom-dialog` informativo de Dialog Patterns, con un solo botón:

- Título «Envío de campañas restringido».
- Cuerpo «La cuenta tiene facturas vencidas. Realiza los pagos correspondientes para volver a enviar campañas.»
- Botón «Entendido».

Reemplaza al `❖ atom-alert`. Los textos son propuesta (claves de i18n nuevas). El diálogo se centra respecto al frame completo ([0095](../../04-organismos/atom-dialog/0095-dialogos-centrados-en-el-frame.md)).

## Por qué

Pedido de diseño sobre el frame del bloqueo: *"este lo vamos a cambiar por un dialogo informacional […] ese tipo de dialogo está en global patterns"*, y a la pregunta de cuándo aparece: *"Al entrar a Crear campaña"*.

El cuerpo del diálogo lo ajustó diseño en Figma («Realiza los pagos correspondientes…»; la propuesta era «Regulariza el pago…»). El título anterior, «Regulariza el pago para enviar campañas», no entraba en una línea.

## Consecuencias

- No se documenta qué pasa después de «Entendido»: el frame `01.00 · 07` ya no está y el punto 07 salió del FRD a pedido de diseño (*"Borra el pnto 07 si no habla nada de lo que tiene figma"*).
</content>
</invoke>
<invoke name="Bash">
<parameter name="command">cd /home/claude/gabrielagreenillustrations-prog/atom-work/decisiones/05-paginas/crear-campana && for f in *.md; do echo "$f :: $(head -1 $f | cut -c1-12)"; done