# 0137 — Crear campaña: el botón principal dice «Enviar» al crear y «Guardar» al editar

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** el `❖ atom-actionfooter` de todas las pantallas de Crear campaña, `05.00` y `15.00` · FRD de Crear campaña (HU-1, HU-5, HU-11, HU-12, HU-15, HU-18).
**Componente:** Páginas · Crear campaña · `❖ atom-button`

## Decisión

- Creación: «Cancelar» / **«Enviar»**. Edición (`/campaigns/results/edit`): «Cancelar» / **«Guardar»**.
- «Enviar» queda deshabilitado hasta que el formulario sea válido; «Guardar», hasta que haya cambios respecto al estado inicial (Forms Patterns).
- Error del servicio: `❖ atom-snackbars-stack` Error «No se pudo enviar la campaña. Inténtalo más tarde.» con «Entendido».

## Por qué

Diseño cambió el botón a «Enviar» en los frames (67 de 72) y renombró la HU-5 del FRD a «Enviar campaña». Según la card de 05.00, QA también dice «Enviar».

## Consecuencias

- El 2026-10-19 se pasaron a «Enviar» las menciones de «Crear» que quedaban en el FRD (HU-1) y en las cards.
- **Abierto:** `05.00 · 01` muestra el botón en carga como «Enviando», sin puntos suspensivos. La [0024](../../02-atomos/atom-button/0024-botones-en-loading.md) pide gerundio con «...» («Enviando...»). El FRD y la card quedaron con «Enviando», como el frame: falta confirmar cuál vale.
</content>
</invoke>
<invoke name="Bash">
<parameter name="command">cd /home/claude/gabrielagreenillustrations-prog/atom-work/decisiones && for f in 05-paginas/crear-campana/*.md 02-atomos/atom-text-field/*.md; do echo "$(basename $f | cut -c1-4) :: $(head -1 $f | cut -c3-6)"; done