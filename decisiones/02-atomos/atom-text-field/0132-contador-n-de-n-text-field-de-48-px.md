# 0132 — El contador «n/N» de la navegación de plantillas es un text field de solo lectura de 48 px

**Estado:** vigente
**Fecha:** 2026-10-19
**Alcance:** toda navegación entre plantillas: Crear campaña (`20.00 · 02–05`), page «Métricas de plantillas» del archivo de Campañas (36 campos) y el panel v2 del archivo *Métricas por plantilla inicial en flujos y campañas* (14 campos, ver Consecuencias) · FRD de Crear campaña (HU-20) y FRD de Métricas de plantilla (HU-4).
**Componente:** Átomos · `❖ atom-text-field`

## Contexto

La posición de la plantilla («1/3», «2/10») se mostraba con un `❖ atom-select-input` que abría la lista de plantillas.

## Decisión

- El contador es un `❖ atom-text-field` **Extra Small, sin label ni texto de ayuda, de solo lectura**: muestra la posición y no se edita ni abre una lista. Se cambia de plantilla con las flechas.
- **Ancho fijo de 48 px con el token `4xxl` de Primitives / Spacing** (`VariableID:4f108a812e8e6d9c86cd962ef3c7dd680efb209b/407:410`), ligado al ancho de la instancia.
- No se toma como regla la indicación de Global Patterns de no poner inputs en la vista previa.

## Por qué

Pedidos de diseño: *"el selector en la navegación de plantillas no sera selector sera un text field nrmalmente sin edicion solo de vista de los numeros 1/2 o 2/2 etc. eso en este habdoff y el que está en la page de Métricas de Plantillas"* y *"El selector lo dejaré con el token de 48px"*. Sobre la regla de Patterns: *"No tiene que ser una regla, ignoremoslo"*.

*Interpretación:* que «el selector» del pedido de 48 px es este contador se confirmó con lo que había en el archivo: los 4 campos de 20.00 ya estaban ligados a `4xxl` y 35 de los 36 de la page de Métricas medían 48 px.

## Consecuencias

- *Verificado el 2026-10-19:* los 36 campos de la page «Métricas de plantillas» y los 4 de 20.00 están ligados a `4xxl` (uno estaba ligado a `8 xxl`, 64 px, y se cambió).
- En *Métricas por plantilla inicial* (page *Nueva UI*), los 14 campos del panel v2 se cambiaron de select a text field el 2026-10-19, pero quedaron en **64 px sin token**: falta ligarlos a `4xxl`.
- Las secciones *Panel v1* y *Exploración* de ese archivo y el `03.9 · 02` del archivo de Automatizaciones usan el stepper anterior (`_atom-stepper-nav-base`) y no se cambiaron. *Interpretación:* son versiones anteriores al panel v2.
- Resultados de campañas no tiene navegación entre plantillas (*verificado*: ningún texto del page tiene la forma n/N).
</content>
</invoke>
