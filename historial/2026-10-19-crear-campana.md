# 2026-10-19 · Crear campaña: cierre de las 20 HUs, FRD y navegación de plantillas

Archivo: *Campañas – Adopción DS 1.0* (`QFcKK4fLWh3DxPNyTTxanr`), page «Crear Campaña» (`1179:166593`), sección
`1186:94`. FRD: [FRD | Módulo Crear campaña - Migración a DS](https://atomchat.atlassian.net/wiki/spaces/AD/pages/4876533762).
Estado del módulo en [modulos/campanas/crear-campana.md](../modulos/campanas/crear-campana.md).

## Lote de diseño (19 oct)

- Vista previa como contenedor de contenido, no side panel, con su regla de ancho ([0129](../decisiones/05-paginas/crear-campana/0129-vista-previa-contenedor-inline.md), [0130](../decisiones/05-paginas/crear-campana/0130-responsive-formulario-600-y-vista-previa-con-clamp.md)).
- Navegación entre plantillas arriba de la vista previa, con el frame de referencia de diseño, nombre de hasta 3 líneas con tooltip y título en singular o plural ([0131](../decisiones/05-paginas/crear-campana/0131-navegacion-de-plantillas-arriba-de-la-vista-previa.md)).
- El nombre de la plantilla y «Ver métricas de plantilla» en todas las vistas previas con plantilla, como `20.00 · 01` ([0129](../decisiones/05-paginas/crear-campana/0129-vista-previa-contenedor-inline.md)).
- Fila de la hora en 12 h con AM/PM en un select, y la duración de Finalización como hoy ([0133](../decisiones/05-paginas/crear-campana/0133-hora-en-12-h-y-finalizacion-como-hoy.md)).
- Bloqueo por facturación como diálogo informativo al entrar ([0134](../decisiones/05-paginas/crear-campana/0134-bloqueo-por-facturacion-con-dialogo-al-entrar.md)).
- Primer checkbox de Consideraciones marcado en todas las pantallas ([0136](../decisiones/05-paginas/crear-campana/0136-reanudar-automaticamente-marcado-por-defecto.md)).
- Labels, placeholders y textos de ayuda de los selectores en todas las pantallas ([0135](../decisiones/05-paginas/crear-campana/0135-labels-placeholders-y-ayudas-de-los-selectores.md)).
- El contador «n/N» pasó de select a text field de solo lectura, en Crear campaña y en la page Métricas de plantillas ([0132](../decisiones/02-atomos/atom-text-field/0132-contador-n-de-n-text-field-de-48-px.md)).
- Mensaje de avance para el tech lead y el equipo (20 HUs terminadas, propuesta de revisión en reunión o video).

## El contador en otros archivos

Pedido: revisar si el cambio hace falta en Resultados de campañas y en los archivos de métricas y de
Automatizaciones.

- *Métricas por plantilla inicial en flujos y campañas*, page *Nueva UI*: 14 selects de navegación en el panel
  v2 (7 en «Campañas · Panel v2 · 01.6 y 01.8», 7 en «Automatizaciones · Panel v2 · 03.9») pasaron a
  text field, en 64 px. Los de *Panel v1* y *Exploración* usan el stepper anterior y no se tocaron. *Actual
  UI* no tiene navegación.
- *Automatizaciones* (`orW6xPCAzrumJLpkSWO1Ef`): solo Flujos tiene el panel (`03.9 · 02` y «Modal — 1 sola
  plantilla»), con el stepper anterior. Sin cambios. Historial, Webhooks y Logs no tienen navegación.
- Resultados de campañas: ningún texto con la forma n/N.
- Diseño decidió el ancho de 48 px con el token `4xxl`: los 36 contadores de la page Métricas de plantillas
  quedaron ligados (35 medían 48 sin token y uno estaba en `8 xxl`); los 4 de 20.00 ya lo tenían. El FRD de
  Métricas de plantilla (v11) y el de Crear campaña lo dicen.

## Revisión Figma ↔ cards ↔ FRD

Se compararon los textos visibles de los 72 frames con las cards y el FRD v12. Cambios de diseño hechos a
mano en Figma, pasados al FRD (v13) y a 12 cards:

- Botón «Enviar» en 67 frames ([0137](../decisiones/05-paginas/crear-campana/0137-boton-enviar-y-guardar.md)); quedaban cinco «Crear» en la HU-1.
- Cuerpo del diálogo de facturación: «Realiza los pagos correspondientes…».
- Tooltip de la lista sin clientes: «No se pueden utilizar listas estáticas con cero clientes para el envío de campañas.»
- Botón en carga «Enviando»; snackbar «No se pudo enviar la campaña…».
- Asignar conversaciones: «Grupo» y «Agente» con «Selecciona un grupo» y «Selecciona un agente».
- Diseño borró `14.00 · 01–02` (lista sin clientes y horario sin días) y `01.00 · 07`; las cards de 14.00 y
  15.00 se ajustaron ([0138](../decisiones/05-paginas/crear-campana/0138-validaciones-al-enviar-solo-salir-sin-guardar.md)).
- `18.00 · 02` y las cards: Hora y Minuto con «Requerido» ([0139](../decisiones/05-paginas/crear-campana/0139-errores-se-requiere-y-requerido-en-hora.md)).
- `03.00 · 03` muestra la plantilla del flujo; diseño confirmó que es el estado inicial ([0140](../decisiones/05-paginas/crear-campana/0140-flujo-elegido-muestra-su-plantilla.md)).

FRD v14: salió el punto 07 de la HU-1, a pedido de diseño. Después de cada guardado se releyó el FRD y
seguían las ediciones de diseño.

## Errores durante la sesión

- **La pestaña de Campañas se quedó sin memoria.** Un script que cargó todas las pages del archivo para
  buscar los contadores llevó la pestaña a «Open this file in recovery mode». No se perdió nada: se cerró
  la pestaña y se reabrió el archivo desde *Home → Recents* (doble clic). Desde entonces, las búsquedas van
  page por page con `get_metadata` del MCP de escritorio.
- En *Métricas por plantilla inicial*, un `cmd+a` llegó al canvas y seleccionó todas las secciones. No se
  cambió nada; la selección se limpió por consola.
- Dos scripts fallaron con *SyntaxError* porque el `copy(...)` tecleado se pegó al final del script anterior,
  que seguía en el prompt.
- El primer reemplazo de los contadores no hizo nada: con `skipInvisibleInstanceChildren = false`, el
  primer `Label text` del select era el label oculto («Label»), no el valor.
- Después de insertar los text fields en el slot del panel, un `findAll` sobre la sección falló con «in
  get_name: The node … does not exist». Se resolvió con `try/catch` dentro del predicado.
</content>
</invoke>
