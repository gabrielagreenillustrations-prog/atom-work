# 0092 — Snackbars en `❖ atom-snackbars-stack`, abajo a la derecha

**Estado:** vigente
**Fecha:** 2026-09-29
**Componente:** `❖ atom-snackbars-stack` (Web Library `12541:38052`) y sus cinco `❖ atom-snackbar`
**Alcance:** los tres archivos: Campañas, Automatizaciones y la entrega de métricas.

## Contexto

Los snackbars de los handoffs eran instancias sueltas de `❖ atom-snackbar`, que no tiene variante de tipo: todos
mostraban `info-circle` en `fg/quaternary`, también los de éxito y error. Diseño preguntó por el color de los íconos en
los snackbars de Resultados de campañas.

`❖ atom-snackbars-stack` trae en su slot un snackbar por tipo, cada uno con su ícono:

| Tipo | Ícono | Acción que trae |
|---|---|---|
| Info | `info-circle` | icon button de cerrar |
| Error | `circle-x` | «Reintentar» |
| Warning | `exclamation-circle` | «Revisar» |
| Neutral | sin ícono | icon button de cerrar |
| Success | `check-circle` | icon button de cerrar |

## Decisión

- Cada snackbar es una instancia de `❖ atom-snackbars-stack`. En el slot queda visible solo el snackbar del tipo; los
  otros cuatro, ocultos.
- **Copy:** el cuerpo que ya tenía cada frame ([0052](0052-snackbars-copy-y-cierre.md), [0061](0061-snackbars-sin-nombre.md)).
- **Cierre:** el de la 0052. Success e Info, icon button de cerrar; Warning y Error, «Entendido» en lugar de
  «Revisar» y «Reintentar» (override de la etiqueta).
- **Posición:** flotando, fuera del auto layout del frame (posición absoluta), en la esquina inferior derecha, con
  constraints derecha y abajo. La separación del borde la da el padding del stack (16 a la derecha, 40 abajo).

## Por qué

Pedido de diseño: *"te pido que los cambies por el componente [...], conserva el copy correcto, conserva el icono
correcto para la snackbar de succes, informacion, warning, error [...] y la posición correcta es al extremo del fondo
a la derecha siempre"*. Y sobre la instancia: *"usaras el variant adecuado y los demas lo ocultes [...] no necesita
ir en una psición x o y sino que se alinea flotando; ignore layout, align right y align bottom"*.

*Interpretación:* «ignore layout» es la posición absoluta dentro del frame; «align right» y «align bottom», las
constraints derecha y abajo, para que el snackbar siga en la esquina si el frame cambia de tamaño. El tipo se tomó
del nombre del frame; los frames sin tipo en el nombre y con «exitosamente» en el cuerpo pasaron a Success.

## Consecuencias

- Campañas: 32 (12 Success, 3 Warning, 12 Error y 5 Info), 24 en Handoff v1 y 8 en Handoff v2.
- Automatizaciones: 16 (10 Success y 6 Error). Tres `❖ atom-snackbar` ocultos y con el cuerpo vacío en
  `03.8 · 01`, `03.8 · 03` y `03.8 · 04` (Columna Canal) no se cambiaron.
- Archivo de métricas: 2, los dos Success «Se ha copiado exitosamente.». Uno en la entrega (Casos edge · Límite de
  10 plantillas) y otro en `03.9 · 07` de la page *Nueva UI*, pedido aparte por diseño: *"si deberiamos pasarlo
  tambien al stack"*. Los otros dos snackbars de *Nueva UI* (`01.6 · 09` y `01.6 · 10`) ya eran stacks.
- *Verificado el 2026-09-29:* en los tres archivos, cada stack tiene un solo snackbar visible, está en la esquina
  inferior derecha del frame y tiene constraints derecha y abajo. Revisado con capturas: `01.7 · 01`, `01.7 · 06`,
  `01.7 · 10`, `02.5 · 04`, `03.8 · 02`, `03.4 · 18`, «Límite de 10 plantillas» y `03.9 · 07` de *Nueva UI*.
- El stack queda encima de la esquina inferior derecha del contenido (por ejemplo, la tabla): es la posición
  flotante del pedido.
- *Verificado el 2026-09-29 en Campañas:* el ícono toma el color del tipo con tokens: Success `fg/status/success`, Warning
  `fg/status/warning`, Error `fg/status/error` e Info `fg/status/informative`. Antes, con `❖ atom-snackbar` suelto,
  todos iban en `fg/quaternary`.
- Versión de Figma «Antes de snackbars con atom-snackbars-stack» en los tres archivos, y «Antes de snackbar de
  03.9 · 07 con atom-snackbars-stack» en el de métricas.
