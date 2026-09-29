# FRD · Métricas por plantilla inicial — ajustes del 28-sep

Fuente: FRD compartido por diseño el 2026-09-29, copiado tal cual (sin las imágenes de referencia, que
no llegaron: `image-20260928-234421.png`, `image-20260929-002341.png`, `image-20260929-002744.png`).
Se omitió el nombre de la persona responsable del Figma.

Es un complemento del FRD original de *Métricas por plantilla inicial* (acceso, navegación, badges,
calidad Meta y límite de 10, en sus HU-1 a HU-3). Sus HU se numeran HU-01 a HU-03.

---

## Contexto

La iniciativa de métricas por plantilla inicial ya tiene acceso, navegación y scope por contexto (campaña
o flujo) en el FRD original. En producción, la tabla de Resultados de campaña sigue mostrando Fallidos y
No entregados por separado. Los administradores suman esas columnas y no llegan al total de Clientes. Hay
discrepancias con reportería.

El panel lateral sigue presentado como métricas de campaña, con card de Clientes y porcentajes sobre
Clientes. Eso mezcla el grano de la lista (campaña) con el grano de cada plantilla.

El 28-sep se cerró la lógica funcional para el sprint (UI actual). El Design System del panel y de las
tablas es un handoff separado; no entra en este FRD.

## Decisiones (28-sep)

| Tema | Decisión |
|---|---|
| Columna Fallidos | Se renombra a Errores. |
| Columna No entregados | Se elimina de la tabla. |
| Columna Entregados | Se agrega (doble check de Meta). |
| Orden de métricas en Resultados | Clientes → Enviados → Errores → Entregados → Leídos → Respondidos. |
| Identidad de la tabla | Enviados + Errores = Clientes. Entregados es subconjunto de Enviados (el hueco enviado sin doble check queda implícito; no hay columna propia). Leídos y Respondidos se calculan sobre Entregados. |
| Qué entra en Errores (tabla) | Errores de campaña (validaciones internas de Atom) más errores de Meta atribuidos a cada plantilla. Una sola columna; el detalle va al CSV descargable. |
| Panel: nombre | Deja de ser "métricas de campaña". Pasa a métricas de plantilla. Aplica también al naming de la acción rápida. |
| Panel: cards | Enviados, Entregados, Leídos, Respondidos. Sin card de Clientes. Al final, Errores Meta. En UI actual se mantiene layout 2×2; Errores Meta va debajo. |
| Panel: Errores Meta | Solo errores que Meta regresa de esa plantilla. Sin porcentaje. El resto de tipos de errores va al CSV descargable. |
| Opt-out | Aunque Atom lo intercepta antes, se contabiliza como error de Meta. Meta lo habría bloqueado igual. |
| BSUID | Los contadores de esta tabla y de este panel deben seguir funcionando cuando el envío fue por BSUID. Falta de teléfono y de BSUID válido = error de campaña (entra a Errores de la tabla; no a Errores Meta del panel). |

## Relación con iniciativas transversales

### Gestión de consentimiento (opt-out)

Aplica solo al conteo en Resultados y en el panel de plantilla. No reabre el FRD de consentimiento (regla
de no llamar a Meta, utility vs marketing, etc.).

- Plantilla de marketing + opt-out del canal → el caso entra a Errores en la tabla y a Errores Meta en el
  panel de esa plantilla.
- Plantilla utility → el opt-out de marketing no se evalúa (igual que el FRD de consentimiento).
- El 131050 de Meta y el bloqueo previo de Atom no se duplican para el mismo envío. En estas superficies
  el opt-out se presenta como error de Meta.

### BSUID

Aplica solo a que los nuevos conteos no se rompan. No reabre el FRD de envío (teléfono → BSUID → Error).

- Envío exitoso por BSUID incrementa Enviados / Entregados / Leídos / Respondidos igual que por teléfono.
- Sin teléfono y sin BSUID del portafolio del canal → Errores de campaña en la tabla. No aparece en
  Errores Meta del panel.

---

## HU-01 | Columnas de métricas en la tabla de Resultados de campañas

Prioridad: Crítica · Pre estimación: M

Como administrador de campañas, quiero ver en Resultados las columnas Clientes, Enviados, Errores,
Entregados, Leídos y Respondidos, con tooltips que digan sobre qué base se calcula cada una, para tener
más claridad sobre la data que se presenta en la tabla.

Aplica a campañas estáticas y dinámicas.

**Criterios de aceptación**

Columnas:

- La columna Fallidos se muestra como Errores.
- La columna No entregados ya no se muestra.
- Existe la columna Entregados (doble check de Meta).
- Orden de las métricas: Clientes, Enviados, Errores, Entregados, Leídos, Respondidos.
- Campañas Estáticas y dinámicas usan las mismas columnas de métricas.

Identidad:

- Se garantiza que la sumatoria de Enviados + Errores = Clientes.
- Entregados ≤ Enviados. La diferencia (enviado sin doble check) no tiene columna propia.
- Leídos y Respondidos se calculan sobre Entregados, no sobre Clientes ni sobre Enviados.
- El enfoque de la tabla es la campaña. El desglose por plantilla vive en el panel de métricas (HU-2 /
  HU-3). Es esperado que el número de Errores de la tabla no coincida 1:1 con Errores Meta de una
  plantilla del panel.

Tooltips:

- Se ajustan todos los tooltips proporcionados y detallados en el Figma para cada columna/métrica.

Opt-out y BSUID (conteo):

- Opt-out de marketing (bloqueo de Atom o 131050, sin duplicar el mismo envío) suma en Errores de la
  tabla y se trata como error de Meta.
- Envíos por BSUID actualizan Enviados, Entregados, Leídos y Respondidos igual que por teléfono.
- Contacto sin teléfono y sin BSUID válido para el portafolio del canal suma en Errores (error de
  campaña).

Acción descargar errores:

- La acción de descargar errores aplica cuando Errores ≥ 1. Si Errores = 0, no está disponible.

Acción de clic en métrica (número) de errores en la fila de la tabla → ajustes en el CSV que se descarga:

- En columna "Estado" se renombra el término "Fallido" por "Error".
- Se agrega una nueva columna (después de la de "Estado") llamada "Origen", clasificando cada uno, según
  corresponda, en una de estas categorías: "Error de configuración de la campaña" o "Error de Meta
  relacionado a la plantilla".
- Sustituir la columna actual "Respuesta" por la columna de "errorCode" que ya existe en el CSV que se
  descarga al hacer clic en el botón "Descargar errores" del panel de métricas de plantilla, pero
  colocando el naming a su equivalente en español "Código de error".
- Renombrar la columna "Error" por "Descripción de error".
- *Imagen de referencia: `image-20260928-234421.png` (no llegó).*

Acción en tabla "Descargar resultados" → ajustes en el CSV que se descarga:

- En columna "Estado" se renombran los términos "Fallido" y "No entregado" por "Error".
- Se renombra la columna "Razon_del_error" por "Descripción de error".
- Después de la columna "Descripción de error", se agrega una nueva columna llamada "Entregado", la cual
  devuelve los valores booleanos SI/NO, según corresponda, tal como lo hacen las columnas "Leído" y
  "Respondido".
- Se renombra/corrige la columna "Telefono" por "Teléfono".
- Se renombra/corrige la columna "Leido" por "Leído".
- *Imagen de referencia: `image-20260929-002341.png` (no llegó).*

## HU-02 | Naming, cards y bases de porcentaje del panel de métricas de plantilla

Prioridad: Crítica · Pre estimación: M

Como administrador, quiero que el panel muestre métricas de la plantilla (no de la campaña/lista), con
cards Enviados, Entregados, Leídos, Respondidos y detalle de Errores Meta al final, para analizar el
rendimiento de cada plantilla usada en esa campaña o flujo.

El acceso, la paginación entre plantillas, badges de activa/histórica, calidad Meta y el aviso de límite
10 siguen el FRD original (HU-1 y HU-2). Esta HU cambia naming, cards y bases de porcentaje.

**Criterios de aceptación**

Naming por superficie:

| Superficie | Opción en menú | Título del panel | Subtítulo |
|---|---|---|---|
| Campañas | Métricas de plantilla / Métricas de plantilla (N) | Métricas de plantilla | Analiza el rendimiento de cada plantilla utilizada en esta campaña. |
| Gestión de flujos | Métricas de plantilla / Métricas de plantilla (N) | Métricas de plantilla | Analiza el rendimiento de cada plantilla utilizada en este flujo. |

- En Resultados de campañas, la acción "Métricas de campaña" se renombra por "Métricas de plantilla".
- En el panel de métricas, el título "Métricas de campaña" se renombra por "Métricas de plantilla".
- N sigue la regla del FRD original (historial, tope 10).
- El scope sigue siendo esa plantilla en esa campaña o flujo. No se suma el acumulado global de la
  plantilla en Atom.

Cards:

- No se muestra la card Clientes. Los clientes pertenecen a la campaña / lista, no a la plantilla.
- Cards de métricas, en este orden: Enviados, Entregados, Leídos, Respondidos.
- El detalle de Errores Meta va al final, fuera de esa fila de métricas. No suma con las demás cards.
- En la UI actual se ajusta el layout a 2×2 para Enviados / Entregados / Leídos / Respondidos.

Porcentajes:

- Enviados: valor absoluto. Es la base de Entregados.
- Entregados: % sobre Enviados.
- Leídos: % sobre Entregados.
- Respondidos: % sobre Entregados.
- Errores Meta: sin porcentaje (no forman parte de los enviados).

Consistencia con envíos transversales:

- Las cards de esa plantilla incluyen eventos de envíos por BSUID igual que por teléfono.
- Webhooks / ejecuciones no se muestran en este panel (igual que el FRD original).

## HU-03 | Detalle de Errores Meta en el panel de métricas de plantilla

Prioridad: Alta · Pre estimación: S

Como administrador, quiero ver en el panel solo los errores que Meta regresa de esa plantilla, para no
mezclar validaciones internas de la campaña con el rendimiento de la plantilla.

**Criterios de aceptación**

Qué se muestra:

- En el panel solo se contabilizan errores de Meta atribuidos a esa plantilla en el contexto de
  apertura. Aplica a la acción "Métricas de plantilla" en el módulo de Resultados de campañas y Gestión
  de flujos (todos los disparadores).
- Tooltip de la sección de "Errores Meta": Se contabilizan solo los errores que Meta nos devuelve de esta
  plantilla.
- Errores de campaña (validaciones internas de Atom: por ejemplo falta de teléfono y BSUID) no aparecen
  en esta sección.
- Opt-out de marketing sí entra a Errores Meta de esa plantilla, aunque Atom lo haya interceptado antes
  de llamar a Meta. Un mismo envío no se cuenta dos veces.

Vacío:

- Si Errores Meta de esa plantilla = 0, no se renderiza desglose vacío ni placeholder de tipos. La card
  puede mostrar 0. La acción de "Descargar errores" de plantilla no se visualiza disponible.
- Si Errores Meta ≥ 1, se muestran la acción de "Descargar errores" ya definidas en el FRD original,
  acotadas a esa plantilla en ese contexto.

Copy de filas en detalle de errores:

- El término "mensajes" se sustituye por "plantillas" (ej. "5 plantillas").
- El porcentaje de cada detalle corresponde a la cantidad de plantillas sobre el total de Errores Meta.

Recomendaciones:

- La sección Recomendaciones del FRD original (HU-3) se mantiene: visible solo si hay errores de Meta, y
  Meta trajo recomendaciones para esa plantilla. Si no hay recomendaciones, no se muestra.

Acción descargar errores:

- La acción (botón) de "Descargar errores" aplica cuando Errores ≥ 1. Si Errores = 0, no está
  disponible.
- Ajustes en el CSV que se descarga: colocar el naming de cada columna al equivalente que se proporciona
  a continuación: Id de cliente, Teléfono, BSUID, Código de error, Descripción de error, Origen (se
  sustituye la columna actual "status" por la nueva columna "Origen" que se incorpora en la HU-01,
  mostrando la categoría "Error de Meta relacionado a la plantilla"), Fecha.
- *Imagen de referencia: `image-20260929-002744.png` (no llegó).*

---

## Comentarios del PO (2026-09-29)

- El ícono de Enviados era un check.
- Acordamos "plantillas" para el side panel de métricas en lugar de "mensajes" en las cards de los
  errores de Meta: donde dice "5 mensajes…" debe ser "5 plantillas". En el archivo de métricas y en los
  handoffs de Campañas y Automatizaciones.
- Cuando traigas la tabla, ahí se actualizarán las columnas nuevas y los menús de acciones.
- Para el tooltip de "atrás": ya se está usando "siguiente", entonces debe decir "anterior".
