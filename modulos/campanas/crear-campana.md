# Crear campaña · `/campaigns/results/create`

Última revisión: **2026-10-19**

Formulario para crear una campaña de tipo Plantilla o Flujo, con sus side paths de edición
(`/campaigns/results/edit`) y de vista de configuración (`/campaigns/results/view`).

## Dónde está

| Qué | Dónde |
|---|---|
| Archivo | *Campañas – Adopción DS 1.0* (`QFcKK4fLWh3DxPNyTTxanr`) |
| Page | «Crear Campaña» (`1179:166593`) |
| Sección | «Handoff Crear campaña · /campaigns/results/create» (`1186:94`) · [link](https://www.figma.com/design/QFcKK4fLWh3DxPNyTTxanr?node-id=1186-94) |
| Frames de referencia de diseño | fuera de la sección: `1437:290716`, `1437:291280` (navegación de 20.00), `1437:292399` |
| FRD | [FRD \| Módulo Crear campaña - Migración a DS](https://atomchat.atlassian.net/wiki/spaces/AD/pages/4876533762) · v14 (2026-10-19) · HU-1 a HU-20, una por fila |

## Estructura del handoff

72 frames en 20 filas, con la estructura de la [0074](../../decisiones/06-proceso-y-fuentes/handoff/0074-estructura-del-handoff-como-conversaciones.md):
un `internal-title-section` por caso, la card del número y una o más cards de descripción.

| Fila | Caso | Frames |
|---|---|---|
| 01.00 | Pantalla y estados de carga | 01–06 |
| 02.00 | Tipo de campaña: Plantilla | 01–13 |
| 03.00 | Tipo de campaña: Flujo | 01–03 |
| 04.00 | Consideraciones de envío | 01–03 |
| 05.00 | Crear campaña (envío en carga y error) | 01–02 |
| 06.00 | Duplicar campaña | 01–02 |
| 07.00 | Plantilla · Enviar ahora | 01–04 |
| 08.00 | Plantilla · Agendar | 01–03 |
| 09.00 | Flujo · Enviar ahora | 01–03 |
| 10.00 | Flujo · Agendar | 01–03 |
| 11.00 | Errores y ayudas de configuración | 01–02 |
| 12.00 | Asignar conversaciones a | 01–02 |
| 13.00 | Finalización de campaña | 01–02 |
| 14.00 | Validaciones al enviar (Salir sin guardar) | 01 |
| 15.00 | Editar campaña · side path | 01–03 |
| 16.00 | Ver configuración · side path | 01–02 |
| 17.00 | Lista dinámica | 01–05 |
| 18.00 | Errores de validación | 01–02 |
| 19.00 | Responsive · Narrow Page Layout | 01–06 |
| 20.00 | Flujo con varias plantillas · Navegación de la vista previa | 01–05 |

## Cómo quedó

| Tema | Regla | Decisión |
|---|---|---|
| Vista previa | Contenedor de contenido inline (Form + Preview Panel), con nombre y «Ver métricas de plantilla» en todas las pantallas | [0129](../../decisiones/05-paginas/crear-campana/0129-vista-previa-contenedor-inline.md) |
| Layout | Formulario de hasta 600 px, margen mínimo 24; vista previa con clamp y corte en 992 px | [0130](../../decisiones/05-paginas/crear-campana/0130-responsive-formulario-600-y-vista-previa-con-clamp.md) |
| Varias plantillas | Navegación arriba de la vista previa; contador «n/N» en text field de 48 px (`4xxl`) | [0131](../../decisiones/05-paginas/crear-campana/0131-navegacion-de-plantillas-arriba-de-la-vista-previa.md) · [0132](../../decisiones/02-atomos/atom-text-field/0132-contador-n-de-n-text-field-de-48-px.md) |
| Flujo elegido | La vista previa muestra su plantilla | [0140](../../decisiones/05-paginas/crear-campana/0140-flujo-elegido-muestra-su-plantilla.md) |
| Agendar y finalización | 12 h con AM/PM en un select; Día 1–30, Hora 1–168 | [0133](../../decisiones/05-paginas/crear-campana/0133-hora-en-12-h-y-finalizacion-como-hoy.md) |
| Facturación | Diálogo informativo al entrar | [0134](../../decisiones/05-paginas/crear-campana/0134-bloqueo-por-facturacion-con-dialogo-al-entrar.md) |
| Selectores | «Plantilla a enviar», «Flujo a enviar», «Lista de clientes», «Grupo», «Agente»; «Selecciona un/una…» | [0135](../../decisiones/05-paginas/crear-campana/0135-labels-placeholders-y-ayudas-de-los-selectores.md) |
| Consideraciones | «Reanudar automáticamente…» marcado por defecto | [0136](../../decisiones/05-paginas/crear-campana/0136-reanudar-automaticamente-marcado-por-defecto.md) |
| Botón principal | «Enviar» / «Guardar» | [0137](../../decisiones/05-paginas/crear-campana/0137-boton-enviar-y-guardar.md) |
| Validaciones | Solo «Salir sin guardar» (Cancelar, ←, otro módulo) | [0138](../../decisiones/05-paginas/crear-campana/0138-validaciones-al-enviar-solo-salir-sin-guardar.md) |
| Errores | «Se requiere…»; Hora y Minuto con «Requerido» | [0139](../../decisiones/05-paginas/crear-campana/0139-errores-se-requiere-y-requerido-en-hora.md) |
| Diálogos | Centrados respecto al frame completo | [0095](../../decisiones/04-organismos/atom-dialog/0095-dialogos-centrados-en-el-frame.md) |

## Verificado en QA

- 2026-10-16: opciones de envío con lista dinámica (17.00).
- 2026-10-19: min y max de Hora y Minuto, opciones AM/PM, máximo de «Tiempo» según el período.
- Textos de los tooltips de Consideraciones (`shipping_considerations.*.tooltip`) y de la lista en proceso seleccionada (`list_select.in_progress_tooltip`), en QA y en i18n.

## Revisión del 2026-10-19 (Figma ↔ cards ↔ FRD)

Se compararon los textos visibles de los 72 frames con las cards y con el FRD v12. Lo que diseño cambió
a mano en Figma se pasó al FRD (v13) y a 12 cards: «Enviar» en el footer, cuerpo del diálogo de
facturación, tooltip de lista sin clientes, «Enviando», labels y placeholders de Asignar conversaciones,
el contador de 48 px, y la vista previa del flujo elegido. En v14 salió el punto 07 de la HU-1 (su frame
ya no existe). Las ediciones de diseño en el FRD se conservaron (se verificó después de cada guardado).

## Abierto

| Qué | Detalle |
|---|---|
| `18.00 · 02` · Fecha de envío | El campo está vacío y en error, pero el placeholder dice «14 Oct 26»; en `11.00 · 01` dice «Selecciona una fecha». ¿Se cambia? |
| Botón en carga | `05.00 · 01` dice «Enviando», sin «...»; la [0024](../../decisiones/02-atomos/atom-button/0024-botones-en-loading.md) pide «Enviando...». |
| HU-14 del FRD | La descripción todavía habla de validar los casos que impiden enviar. Es texto de diseño. |
| «Se requiere el tiempo» | Está en el FRD (HU-18) pero en ningún frame. |
| Duplicar | La card de 06.00 deja por confirmar con QA el título y el nombre de la campaña al duplicar. |
| `19.00 · 05–06` | Propuesta sin decidir: apilar las cards de tipo de campaña con el formulario por debajo de ~400 px. |
</content>
</invoke>
