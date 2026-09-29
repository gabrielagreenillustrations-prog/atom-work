# Snackbars

Última revisión: **2026-09-28** (sesión 12) · Decisiones: [0052](../decisiones/03-moleculas/atom-snackbar/0052-snackbars-copy-y-cierre.md) · [0059](../decisiones/03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md) · [0061](../decisiones/03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md)

Fuente del inventario: *Inventario de snackbars · Campañas y Automatizaciones* (PDF de Silvio,
25 sep 2026): 114 mensajes que dispara el código (72 de Campañas y 42 de Automatizaciones), con el
texto de `es.json`.

---

## Regla

### Tipo y cierre

| Tipo | Cuándo | Cierre |
|---|---|---|
| **Success** | La acción terminó bien. | Icon button de cerrar (`❖ atom-icon-button` Tertiary xs, `xmark`). Sin botón de texto. |
| **Info** | Un proceso quedó en curso o un aviso que no es error. | Icon button de cerrar. |
| **Warning** | La acción no se puede hacer por una condición (estado, datos, configuración). | `❖ atom-button` Secondary xs **«Entendido»**. |
| **Error** | Falló el servicio. | **«Entendido»**. |

El snackbar va sin título (`hasHeadline` apagado): solo el cuerpo.

*Interpretación:* «Entendido» va donde el usuario tiene que enterarse de que algo no pasó; el icon
button alcanza cuando el mensaje confirma algo que ya se ve en pantalla.

### Duración

3 s o 5 s, como en el pattern del Web Library; ningún snackbar dura 8 s — decisión
[0059](../decisiones/03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md). Con acción, el temporizador se pausa
mientras el cursor está encima. Cuál de las dos va en cada caso no lo definen el Web Library ni la
HU del componente.

### Copy

| Caso | Forma | Ejemplo |
|---|---|---|
| Éxito | «Se ha [participio] [objeto] exitosamente.» | «Se ha detenido la campaña exitosamente.» |
| Proceso en curso | Qué está pasando y, si hace falta, qué esperar. | «Te notificaremos cuando el archivo de descarga se haya generado.» |
| Cambio de configuración | El comportamiento nuevo. | «La campaña se reanudará de forma automática.» |
| Condición | El motivo, en una frase. | «La campaña no se puede reanudar porque no está pausada.» |
| Error del servicio | «No se pudo [verbo] [objeto]. Inténtalo más tarde.» · plural: «No se pudieron…» | «No se pudo eliminar la lista. Inténtalo más tarde.» |

- **Siempre «exitosamente»**: no «con éxito», «correctamente», «de forma exitosa», ni «¡…!».
- **Punto final siempre**, también cuando termina en un placeholder.
- **Tuteo** y sin «Por favor»: «Inténtalo más tarde.», no «Por favor vuelva a intentar más tarde».
- Sin «Ha ocurrido un error» ni «Hubo un problema»: se dice qué no se pudo hacer.
- **Sin el nombre de la campaña, el flujo o la lista:** pueden ser muy largos — decisión
  [0061](../decisiones/03-moleculas/atom-snackbar/0061-snackbars-sin-nombre.md). El objeto va en genérico: «la campaña», «el flujo», «la lista».
- Con «Entendido», el cuerpo entra en una línea hasta unos **60 caracteres**. *Verificado en Figma:*
  más largo, se recorta.
- Los códigos de backend se mantienen al final: «… (Código: FLB_A_001)».

---

## Copies

Columnas: **Hoy** es el texto de `es.json` según el inventario; **Estándar** es el texto con la
regla; «=» quiere decir sin cambios. **Tipo** es el del estándar; si el código usa otro, va entre
paréntesis. **Figma** es el frame que lo muestra, si existe.

### Campañas · Resultados (14)

| Contexto | Hoy | Estándar | Tipo | Figma |
|---|---|---|---|---|
| Ver configuración · falla la navegación | `error_viewing_campaign_details` *(sin traducción)* | No se pudo abrir la configuración. Inténtalo más tarde. | Error | `01.7 · 15` |
| Descargar resultados / errores · se dispara | Te notificaremos cuando el archivo de descarga se haya generado. | = | Info | `01.7 · 05` |
| Descargar resultados / errores · falla | Se ha producido un error al descargar los resultados. | No se pudieron descargar los resultados. Inténtalo más tarde. | Error | `01.7 · 10` |
| Descargar clientes · error | Ha ocurrido un error al generar la descarga de estos clientes. Por favor inténtalo más tarde. | No se pudieron descargar los clientes. Inténtalo más tarde. | Error | `01.7 · 11` |
| Reanudar · éxito | La campaña "{{campaignName}}" se ha reanudado de forma exitosa. | Se ha reanudado la campaña exitosamente. | Success | `01.7 · 02` |
| Reanudar · error del servicio | Ha ocurrido un error al reanudar la campaña "{{campaignName}}". Por favor vuelva a intentar más tarde. | No se pudo reanudar la campaña. Inténtalo más tarde. | Error | `01.7 · 12` |
| Reanudar · no está pausada | La campaña "{{campaignName}}" no se puede reanudar porque no se encuentra pausada. | La campaña no se puede reanudar porque no está pausada. | Warning *(Error)* | `01.7 · 07` |
| Reanudar · límite diario de WhatsApp | Se ha interrumpido la campaña "{{campaignName}}" por haber alcanzado el límite de conversaciones diarias iniciadas por la empresa que establece WhatsApp. Se podrá reanudar a partir del {{campaignResumeAt}}. | *Pendiente* — ver Preguntas | Warning *(Error)* | — |
| Reanudar · reanudación automática activa | La campaña "{{campaignName}}" tiene activa la reanudación automática y no se puede reanudar de manera manual. | No se puede reanudar: la campaña tiene reanudación automática. | Warning *(Error)* | `01.7 · 08` |
| Cambiar reanudación a automática | La campaña "{{campaignName}}" se reanudará de forma automática. | La campaña se reanudará de forma automática. | Success *(Info)* | `01.7 · 04` |
| Cambiar reanudación a manual | La campaña "{{campaignName}}" se reanudará de forma manual. | La campaña se reanudará de forma manual. | Success *(Info)* | `01.7 · 03` |
| Cambiar tipo de reanudación · error | Se ha producido un error al intentar cambiar el tipo de reanudación. Por favor vuelve a intentar más tarde. | No se pudo cambiar el tipo de reanudación. Inténtalo más tarde. | Error | `01.7 · 13` |
| Detener · éxito (clave del backend) | La campaña se ha detenido exitosamente. | Se ha detenido la campaña exitosamente. | Success | `01.7 · 01` |
| Detener · error | No es posible realizar esta acción en este momento. Por favor, intentar más tarde. | No se pudo detener la campaña. Inténtalo más tarde. | Error | `01.7 · 14` |

### Campañas · Resultados de dinámicas, legacy (3)

| Contexto | Hoy | Estándar | Tipo | Figma |
|---|---|---|---|---|
| Descargar errores del flujo · falla | Hubo un error al tratar de descargar los errores. Por favor, intentar más tarde. | No se pudieron descargar los errores. Inténtalo más tarde. | Error | — |
| Activar flujo asociado · éxito | Se ha activado el flujo exitosamente. | = | Success | — |
| Desactivar flujo asociado · éxito | Se ha desactivado el flujo exitosamente. | = | Success | — |

### Campañas · Crear / editar campaña (7)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Duplicar · la plantilla anterior no existe | No se ha podido encontrar la plantilla anteriormente usada. | No se encontró la plantilla que usaba la campaña original. | Warning *(Error)* |
| Duplicar · el flujo anterior no existe | No se ha podido encontrar el flujo anteriormente usado. | No se encontró el flujo que usaba la campaña original. | Warning *(Error)* |
| Duplicar · el grupo anterior no existe | No se ha podido encontrar el grupo usado anteriormente. | No se encontró el grupo que usaba la campaña original. | Warning *(Error)* |
| Duplicar · el agente anterior no existe | No se ha podido encontrar el agente usado anteriormente. | No se encontró el agente que usaba la campaña original. | Warning *(Error)* |
| Guardar · faltan campos requeridos | Falta completar algunos campos requeridos. Revísalos e intenta nuevamente. | Completa los campos requeridos para continuar. | Warning *(Error)* |
| Crear campaña · error del servicio | No se ha podido crear la campaña. Por favor vuelve a intentar más tarde. | No se pudo crear la campaña. Inténtalo más tarde. | Error |
| Editar campaña · error del servicio | No se ha podido editar la campaña. Por favor vuelve a intentar más tarde. | No se pudo editar la campaña. Inténtalo más tarde. | Error |

### Campañas · Listas (7)

| Contexto | Hoy | Estándar | Tipo | Figma |
|---|---|---|---|---|
| Eliminar lista · éxito | Se ha eliminado la lista exitosamente | Se ha eliminado la lista exitosamente. | Success | `02.5 · 02` |
| Eliminar lista · error | No se ha podido eliminar la lista. Por favor intentalo más tarde | No se pudo eliminar la lista. Inténtalo más tarde. | Error | `02.5 · 10` |
| Duplicar lista · error | Se ha producido un error al duplicar la lista. Por favor vuelva a intentar más tarde | No se pudo duplicar la lista. Inténtalo más tarde. | Error | `02.5 · 11` |
| Cambiar nombre · éxito | El nombre de la lista ha sido actualizado con éxito. | Se ha actualizado el nombre de la lista exitosamente. | Success | `02.5 · 01` |
| Cambiar nombre · error | Se ha producido un error al cambiar el nombre de la lista. Por favor vuelva a intentarlo más tarde. | No se pudo cambiar el nombre de la lista. Inténtalo más tarde. | Error | `02.5 · 09` |
| Descargar clientes · inicia | La descarga de los clientes de la lista "{{listName}}" empezará en un instante. | La descarga de los clientes de la lista empezará en un instante. | Info | `02.5 · 03` |
| Descargar clientes · lista vacía | Actualmente no existen clientes en esta lista. | Esta lista no tiene clientes para descargar. | Info | `02.5 · 04` |

### Campañas · Detalle de lista (6)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Volver tras agregar clientes a una lista estática | Los clientes se están agregando a la lista. | = | Info |
| Descargar clientes · lista vacía | Actualmente no existen clientes en esta lista. | Esta lista no tiene clientes para descargar. | Info |
| Descargar errores de una carga · no hay errores | No se han encontrado errores en la carga de trabajo seleccionada | La carga seleccionada no tiene errores. | Info |
| Agregar clientes a una lista dinámica | No puedes agregar clientes a una lista dinámica. | = | Warning *(Error)* |
| Eliminar clientes seleccionados · éxito | Se han eliminado los clientes seleccionados de tu lista. | Se han eliminado los clientes seleccionados exitosamente. | Success |
| Eliminar clientes seleccionados · error | No se ha podido eliminar los clientes de la lista. Por favor intentalo más tarde. | No se pudieron eliminar los clientes. Inténtalo más tarde. | Error |

### Campañas · Importar lista CSV (12)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Archivo con extensión inválida | Sólo se permiten archivos con la extensión .csv | Solo se permiten archivos .csv. | Warning *(Error)* |
| Archivo mayor a 5 MB | El tamaño del archivo es demasiado grande. El tamaño máximo es de 5MB | El archivo supera el máximo de 5 MB. | Warning *(Error)* |
| Subir archivo · respuesta sin éxito | Se ha producido un error. Por favor vuelve a intentar más tarde | No se pudo subir el archivo. Inténtalo más tarde. | Error |
| Subir archivo · error genérico | Se ha producido un error al cargar el archivo. Por favor vuelve a intentar más tarde | No se pudo subir el archivo. Inténtalo más tarde. | Error |
| LST_IMP_001 · archivo vacío | El archivo debe contener al menos un registro | El archivo debe tener al menos un registro. | Warning *(Error)* |
| LST_IMP_002 · sin columnas | El archivo debe contener al menos una columna | El archivo debe tener al menos una columna. | Warning *(Error)* |
| LST_IMP_003 · demasiados registros | Número máximo de registros excedido. El archivo puede contener hasta {{maxRecords}} registros. | El archivo supera el máximo de {{maxRecords}} registros. | Warning *(Error)* |
| LST_IMP_004 · demasiadas columnas | Número máximo de columnas excedido. El archivo puede tener hasta {{maxHeaders}} columnas. | El archivo supera el máximo de {{maxHeaders}} columnas. | Warning *(Error)* |
| Crear lista · proceso en segundo plano | El proceso de creación se está ejecutando. En un momento podrás ver los detalles | Se está creando la lista. En un momento podrás ver el detalle. | Info |
| Editar lista · proceso en segundo plano | El proceso de edición se está ejecutando. En un momento podrás ver los detalles | Se están guardando los cambios. En un momento podrás ver el detalle. | Info |
| Crear lista · error | Se ha producido un error al crear la lista. Por favor vuelve a intentar más tarde | No se pudo crear la lista. Inténtalo más tarde. | Error |
| Editar lista · error | Se ha producido un error al editar la lista. Por favor vuelve a intentar más tarde | No se pudo editar la lista. Inténtalo más tarde. | Error |

### Campañas · Crear / editar lista dinámica (4)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Eliminar grupo de condiciones | Se ha eliminado el grupo | Se ha eliminado el grupo exitosamente. | Success *(Info)* |
| Duplicar grupo de condiciones | Se ha duplicado el grupo | Se ha duplicado el grupo exitosamente. | Success |
| Cargar la lista a editar · error | `audiences.new.snackbar.errors.load-audience` *(sin traducción)* | No se pudo cargar la lista. Inténtalo más tarde. | Error |
| Entrar a editar sin una lista válida | `audiences.new.snackbar.errors.whit-out-audience` *(sin traducción)* | No se encontró la lista que quieres editar. | Warning |

### Campañas · Configurar lista dinámica (6)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Estimar clientes · filtro inválido | El filtro contiene una combinación inválida de campo y operador | El filtro tiene una combinación no válida de campo y operador. | Warning *(Error)* |
| Crear lista · éxito | El proceso de carga de tu lista ha comenzado. Esto puede tomar varios minutos | Se está cargando la lista. Puede tomar varios minutos. | Info |
| Actualizar lista · éxito | La lista dinámica se ha actualizado exitosamente | Se ha actualizado la lista dinámica exitosamente. | Success |
| Guardar cambios de edición · éxito | Lista dinámica actualizada exitosamente. | Se ha actualizado la lista dinámica exitosamente. | Success |
| Actualizar lista · error | No se ha podido actualizar la lista dinámica | No se pudo actualizar la lista dinámica. Inténtalo más tarde. | Error |
| Crear lista · error (flujo `isNewAudience`) | `audiences.setup.snackbar.errors.list` *(sin traducción)* | No se pudo crear la lista. Inténtalo más tarde. | Error |

### Campañas · Crear / editar lista estática (2) y Revisar lista estática (2)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Eliminar grupo de condiciones | Se ha eliminado el grupo | Se ha eliminado el grupo exitosamente. | Success *(Info)* |
| Duplicar grupo de condiciones | Se ha duplicado el grupo | Se ha duplicado el grupo exitosamente. | Success |
| Revisar · crear lista · éxito | El proceso de carga de tu lista ha comenzado. Esto puede tomar varios minutos | Se está cargando la lista. Puede tomar varios minutos. | Info |
| Revisar · crear o agregar a lista · error | No se pudo crear la lista. Intenta nuevamente. | No se pudo crear la lista. Inténtalo más tarde. | Error |

### Campañas · Crear lista desde HubSpot (4) y desde MCP (2)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| HubSpot · nombre de lista duplicado | El nombre de la lista ya se encuentra en uso. Por favor, ingresar otro | El nombre ya está en uso. Ingresa otro. | Warning *(Error)* |
| HubSpot · crear / sincronizar · éxito | Se está ejecutando el proceso de sincronización con HubSpot. Esto puede tomar algunos minutos hasta empezar la carga de clientes en la lista | Se está sincronizando con HubSpot. La carga de clientes puede tardar unos minutos. | Info |
| HubSpot · crear / sincronizar · error | Ocurrió un error al realizar la operación | No se pudo sincronizar con HubSpot. Inténtalo más tarde. | Error |
| HubSpot · guard de ruta sin integración | No se encontró una integración con HubSpot. Por favor, realizarla para poder proceder. | Conecta HubSpot para crear listas desde esta integración. | Warning *(Error)* |
| MCP · no se inicia la sesión del agente | No se pudo iniciar la sesión con el agente. Intenta de nuevo. | No se pudo iniciar la sesión con el agente. Inténtalo más tarde. | Error |
| MCP · no se envía el mensaje | No se pudo enviar el mensaje. Intenta de nuevo. | No se pudo enviar el mensaje. Inténtalo más tarde. | Error |

### Campañas · Envío rápido (3)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Plantilla · continuar sin canal válido | No dispones de un canal valido para el envío de campañas. | No tienes un canal válido para enviar campañas. | Warning *(Error)* |
| Plantilla · crear plantilla · error | Se ha producido un error al crear la plantilla, por favor vuelve a intentar más tarde | No se pudo crear la plantilla. Inténtalo más tarde. | Error |
| Contactos · crear lista · error | Se ha producido un error al crear la lista, por favor vuelve a intentar más tarde | No se pudo crear la lista. Inténtalo más tarde. | Error |

### Automatizaciones · Cortex (2) e Historial (1)

| Contexto | Hoy | Estándar | Tipo | Figma |
|---|---|---|---|---|
| Desactivar agente · éxito | Agente desactivado exitosamente | Se ha desactivado el agente exitosamente. | Success | — |
| Duplicar agente · éxito | Agente duplicado exitosamente | Se ha duplicado el agente exitosamente. | Success | — |
| Historial · copiar teléfono | Teléfono copiado | Se ha copiado el teléfono exitosamente. | Success | `04.5 · 01` |

### Automatizaciones · Tareas automatizadas (3)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Acción HTTP · faltan datos | Por favor, completa los datos para la petición HTTP | Completa los datos de la petición HTTP. | Warning *(Error)* |
| HubSpot · datos incompletos | Valide los datos de la tarea automatizada | Revisa los datos de la tarea automatizada. | Warning *(Error)* |
| HubSpot · entidad no identificada | No se logró identificar la entidad para la tarea | No se pudo identificar la entidad de la tarea. | Error |

### Automatizaciones · Gestión de flujos (14)

| Contexto | Hoy | Estándar | Tipo | Figma |
|---|---|---|---|---|
| Renombrar flujo · éxito | Se ha cambiado el nombre del flujo exitosamente. | = | Success | `03.7 · 03` |
| Renombrar / duplicar · el nombre ya existe | El nombre ya está siendo utilizado. | El nombre ya está en uso. | Warning *(Error)* | `03.7 · 07` |
| Renombrar, duplicar o descargar · error genérico | Hubo un problema. Por favor, intentar de nuevo más tarde. | No se pudo completar la acción. Inténtalo más tarde. | Error | `03.7 · 08` |
| Duplicar flujo · éxito | Se ha duplicado el flujo exitosamente. | = | Success | `03.7 · 02` |
| Desactivar flujo · éxito | Se ha desactivado el flujo exitosamente. | = | Success | `03.7 · 01` |
| Activar flujo · éxito | Se ha activado el flujo exitosamente. | = | Success | `03.7 · 04` |
| Activar flujo · error genérico (sin código del backend) | Hubo un problema. Por favor, intentar de nuevo más tarde. | No se pudo activar el flujo. Inténtalo más tarde. | Error | — |
| Simular flujo · éxito | Se ha simulado el flujo exitosamente. | = | Success | sin frame: la acción ya no existe ([0066](../decisiones/05-paginas/gestion-de-flujos/0066-descargar-flujo-y-detalles-del-flujo.md)) |
| Descargar flujo · éxito | Se ha descargado el flujo exitosamente. | = | Success | `03.7 · 06` |
| Detalle · copiar ID / URL | ¡Copiado con éxito! | Se ha copiado exitosamente. | Success | `03.7 · 05` |
| Detalle · cargar · error | Error al cargar el detalle | No se pudo cargar el detalle. Inténtalo más tarde. | Error | `03.7 · 09` |
| Detalle · campañas asociadas · error | Error al cargar las campañas asociadas a este flujo | No se pudieron cargar las campañas asociadas. Inténtalo más tarde. | Error | `03.7 · 10` |
| Detalle · métricas · error | Error al cargar las métricas | No se pudieron cargar las métricas. Inténtalo más tarde. | Error | `03.7 · 11` |
| Canal · copiar número / ID | ¡Copiado con éxito! | Se ha copiado exitosamente. | Success | `03.8 · 02`, `03.8 · 05`; Campañas `01.3 · 10` (interpretación: mismo mensaje) |

### Automatizaciones · Simulación de webhook (1) y Flujos predefinidos (9)

| Contexto | Hoy | Estándar | Tipo |
|---|---|---|---|
| Simulación · copiar URL o campos | ¡Copiado con éxito! | Se ha copiado exitosamente. | Success |
| Activar flujo predefinido · éxito | Flujo activado con éxito. | Se ha activado el flujo exitosamente. | Success |
| Activar flujo predefinido · error | Hubo un problema al activar el flujo. Por favor, intentar de nuevo más tarde. | No se pudo activar el flujo. Inténtalo más tarde. | Error |
| Editar información · éxito | Se ha cambiado la información del flujo predefinido exitosamente. | = | Success |
| Editar información · nombre duplicado | El nombre ya está siendo utilizado. | El nombre ya está en uso. | Warning *(Error)* |
| Desactivar flujo predefinido · éxito | Se ha desactivado el flujo predefinido exitosamente. | = | Success |
| Desactivar flujo predefinido · error | Hubo un problema al desactivar el flujo. Por favor, intentar de nuevo más tarde. | No se pudo desactivar el flujo. Inténtalo más tarde. | Error |
| Duplicar flujo predefinido · éxito | Se ha duplicado el flujo predefinido exitosamente. | = | Success |
| Subir archivo a la biblioteca · éxito | El flujo {{fileName}} se ha agregado correctamente | Se ha agregado el flujo exitosamente. | Success |
| Eliminar archivo de la biblioteca · éxito | El flujo {{flowName}} ha sido eliminado permanentemente. | Se ha eliminado el flujo exitosamente. | Success |

### Automatizaciones · Webhooks (8) y gestión de envíos (4)

| Contexto | Hoy | Estándar | Tipo | Figma |
|---|---|---|---|---|
| Activar webhook · éxito | Se ha activado el flujo exitosamente. | = | Success | — |
| Desactivar webhook · éxito | Se ha desactivado el flujo exitosamente. | = | Success | — |
| Copiar URL del webhook | ¡Copiado con éxito! | Se ha copiado exitosamente. | Success | `03.9 · 07` (mismo copy) |
| Deep-link · el webhook no existe | El webhook que se intenta seleccionar no existe | El webhook que buscas no existe. | Warning *(Error)* | — |
| Deep-link · no se pudo cargar el webhook | No se pudo obtener el webhook que se quiere seleccionar | No se pudo cargar el webhook. Inténtalo más tarde. | Error | — |
| Descargar errores · falla | Hubo un error al tratar de descargar los errores. Por favor, intentar más tarde. | No se pudieron descargar los errores. Inténtalo más tarde. | Error | `03.7 · 12` |
| Habilitar ejecución (reassign on) | Se ha habilitado la ejecución del flujo exitosamente. | = | Success | — |
| Deshabilitar ejecución (reassign off) | Se ha deshabilitado la ejecución del flujo exitosamente. | = | Success | — |
| Crear envío de estado de plantillas | El envío de estado de plantillas se ha creado correctamente | Se ha creado el envío de estado de plantillas exitosamente. | Success | — |
| Editar envío de estado de plantillas | Se han editado correctamente los campos del envío de estado de plantillas | Se ha editado el envío de estado de plantillas exitosamente. | Success | — |
| Guardar configuración · error | No se pudo guardar la configuración. Intenta nuevamente. | No se pudo guardar la configuración. Inténtalo más tarde. | Error | — |
| Cargar gestión de envíos · error | Error al cargar la gestión de envíos. Por favor, inténtelo de nuevo. | No se pudo cargar la gestión de envíos. Inténtalo más tarde. | Error | — |

---

## Anexo · errores del backend de Flujos

Al activar, desactivar, duplicar, simular o publicar un flujo, el snackbar muestra `errors.{{code}}`
del scope `flows`. Se mantienen tal cual, salvo:

| Código | Hoy | Estándar |
|---|---|---|
| `FLB_A_001` | Agente publicado con éxito. (Código: FLB_A_001) | Se ha publicado el agente exitosamente. (Código: FLB_A_001) |
| `FLB_A_005` | Se han extraído con éxito las características opcionales del agente. (Código: FLB_A_005) | Se han extraído exitosamente las características opcionales del agente. (Código: FLB_A_005) |
| `FLB_A_008` | Agente habilitado con éxito. (Código: FLB_A_008) | Se ha habilitado el agente exitosamente. (Código: FLB_A_008) |
| `FLB_A_009` | Agente deshabilitado con éxito. (Código: FLB_A_009) | Se ha deshabilitado el agente exitosamente. (Código: FLB_A_009) |
| `FLB_C_C_004` | Los Flujos de WhatsApp deben encontrarse bajo el mismo WABA ID (Código: FLB_C_C_004) | Los Flujos de WhatsApp deben estar bajo el mismo WABA ID. (Código: FLB_C_C_004) |
| sin código (`undefined`) | Error al iniciar la simulación. Verifica la configuración del flujo. | No se pudo iniciar la simulación. Revisa la configuración del flujo. |

`FLB_DYNAMIC_LIST_TRIGGER_EXCEPTION_001–003` son los únicos sin «(Código: …)» al final (pregunta).

---

## En Figma

| Archivo | Frames |
|---|---|
| Campañas | `01.5 · 07–08`, `01.7 · 01–08`, `01.7 · 10–15`, `02.4 · 04`, `02.5 · 01–04`, `02.5 · 09–11` |
| Automatizaciones | `03.7 · 01–13`, `03.8 · 02`, `03.8 · 05`, `03.9 · 07`, `04.5 · 01` |

*Verificado el 2026-09-26:* los 42 snackbars de los dos archivos (24 en Campañas y 18 en
Automatizaciones) siguen la regla: Success e Info con el icon button de cerrar, Warning y Error con
«Entendido», y punto final. Los 24 de Campañas van sin título.
`01.7 · 15` y `02.5 · 04` son casos del inventario que no tenían frame.

El snackbar «Se ha copiado exitosamente.» del panel de métricas (`01.6 · 09`) está ahora con el panel,
en el archivo *Métricas por plantilla inicial en flujos y campañas* ([0068](../decisiones/06-proceso-y-fuentes/handoff/0068-panel-de-metricas-en-su-archivo.md)). Antes: en la page *Campañas Handoff v1*, `01.6 · 09` llevaba `❖ atom-snackbar` Success «Se ha copiado
exitosamente.»: del archivo *Métricas por plantilla inicial* solo queda el panel
([0062](../decisiones/04-organismos/atom-sidepanel-metricas/0062-panel-v1-solo-el-panel-de-origen.md)). En Handoff v2, `01.6 · 10` decía «¡Copiado con éxito!» y pasó al
estándar.

*Verificado el 2026-09-28:* ningún snackbar de los dos archivos lleva el nombre de la campaña, el
flujo o la lista.

## Preguntas

- **Duración**: sin definir cuáles duran 3 s y cuáles 5 s. *Dato de diseño (26 sep):* el Web Library
  y la HU del componente dan la duración, pero no dicen cuál va en cada caso
  ([0059](../decisiones/03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md)).
- **Límite diario de WhatsApp**: el mensaje tiene nombre, motivo y fecha; con la regla queda en unos
  90 caracteres («La campaña alcanzó el límite diario de WhatsApp. Podrás reanudarla el
  {{campaignResumeAt}}.») y con «Entendido» no entra en una línea. ¿Snackbar en dos líneas, diálogo o
  alerta en la pantalla? Diseño preguntó qué dice y cuándo sale (26 sep). *Dato del inventario:* el
  código lo muestra como Error en el flujo de Reanudar («Reanudar - bloqueada por límite diario de
  WhatsApp»), con el texto de la tabla. En la revisión del código del 18 sep (artefacto *Handoff
  Campañas y Automatizaciones*, Especificaciones): los snackbars de la tabla de campañas duran 3 s y
  este, 8 s. Los 8 s no valen: la duración es de 3 s o 5 s
  ([0059](../decisiones/03-moleculas/atom-snackbar/0059-snackbars-duracion-3-y-5-s.md)). No hay frame en Figma. El formato
  sigue abierto.
- **Solo en Figma**, sin llamada en el código según el inventario: `01.5 · 07` (campaña agendada),
  `01.5 · 08` (campaña enviada), `01.7 · 06` (sin información para descargar), `02.4 · 04` (lista
  duplicada) y `03.7 · 13` (error al publicar, que en el código sale del backend). **Respuesta de
  diseño (26 sep):** se quedan en Figma; pueden ser entregas recientes que el inventario todavía no
  tiene.
- **Dinámicas legacy**: «Activar / Desactivar flujo asociado» y «Descargar errores del flujo»
  vienen de la tabla anterior de dinámicas. ¿Siguen existiendo con la tabla nueva?
- **Claves sin traducción** (el usuario ve la clave): `error_viewing_campaign_details`,
  `audiences.new.snackbar.errors.load-audience`, `audiences.new.snackbar.errors.whit-out-audience` y
  `audiences.setup.snackbar.errors.list`. La tabla propone el texto de cada una.
- **Tipos**: 24 mensajes que el código muestra como Error son condiciones (Warning en el estándar);
  los dos «Eliminar grupo de condiciones» son Info en el código y Success en el estándar; los dos de
  «Cambiar reanudación» son Info en el código y Success en Figma y en el estándar. ¿Se ajusta el código?
