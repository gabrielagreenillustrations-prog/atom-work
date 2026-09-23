# Gestión de flujos

Archivo: **Automatizaciones – Gestión flujos** · sección `10:22917`
Última revisión: **2026-09-23**

---

## De qué depende el menú de fila

**Del disparador + si está publicado.** El estado no agrega variantes por sí mismo.
Verificado en código — ver `comportamiento-verificado/menus-de-acciones.md`.

### Disparadores

Mensaje entrante · Campaña · Webhook · Tipificación · Lista dinámica.

### Menús por caso

| Caso | Acciones |
|---|---|
| Mensaje entrante · Publicado · **canal conectado** | Ver flujo · **Editar y publicar** · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Mensaje entrante · Publicado · **sin canal** | Ver flujo · Editar flujo · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Campaña · Publicado | Ver flujo · Editar y publicar · Métricas de plantilla · Simular · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Webhook · Publicado | igual que Campaña |
| Tipificación · Publicado | Ver flujo · Editar y publicar · Métricas de tipificación · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Lista dinámica · Publicado | Ver flujo · Métricas de flujo · Duplicar · Ver detalles · Descargar JSON · Desactivar |
| Cualquiera · Borrador | Editar flujo · (Simular) · Publicar · Duplicar · Ver detalles · Descargar JSON · Desactivar |

La etiqueta **`Editar y publicar`** aparece solo si `published` **y** `canal conectado`.

### Casos sin menú

| Caso | Qué se muestra |
|---|---|
| **Flujo inactivo** | Estado `Inactivo`. **Sin menú de 3 puntos**: un único icon button con `circle-play` y tooltip `Activar flujo`. |
| Flujo publicando | Botón de acciones deshabilitado |
| Flujo migrando | Botón de acciones deshabilitado |

---

## Modales de advertencia al editar un flujo publicado

Título: **`Editar y publicar flujo`** · Botones: `Cancelar` / `Editar de todas formas`

| Caso | Contenido |
|---|---|
| Campaña activa (una) | Lista con la campaña y su **tipo de lista** (`Lista dinámica` / `Lista estática`), tag Neutral |
| Campañas activas (varias) | Idem, 1..N campañas, cada una con ícono de redirección a Resultados |
| **Cargando** | Cabecera, texto de apoyo y botones. Sin la lista de campañas. |
| Webhook | *"Este flujo podría estar siendo invocado desde tu CRM o sistema externo…"* |
| Tipificación | Nombre de la tipificación + su **tipo** (ej. `Venta de Vehículo Nuevo` + tag `Fin positivo`) |

Texto de apoyo común: *"Eliminar componentes que esperan respuesta del cliente puede
interrumpir la ejecución correcta del flujo. Por favor, edita con precaución."*

---

## Reglas de la Épica 3 sin representación visual

Tres reglas del handoff `Ready for dev` que no tienen pantalla asociada. **Pendiente de
anotarlas en la descripción interna de la sección:**

1. **La URL del webhook no cambia al editar.** (`01.1_`)
2. **No se permite pasar de Publicado a Borrador** — "Guardar flujo" queda deshabilitado. (`01.2_`)
3. **Si la publicación falla se conserva la versión publicada anterior.** El historial de
   versiones sigue registrando snapshots. (`01.3_`)

La tercera sí tiene snackbar: *"No se pudo publicar el flujo. Se conserva la versión
publicada anterior."*

---

## Side panel de métricas de plantillas

Dos casos: plantilla histórica (2 de 10) y límite alcanzado (10 de 10).
Título con contador: `Métricas de plantillas del flujo (2)` / `(10)`.

*Pendiente:* el título no lleva el nombre del flujo, a diferencia de los paneles de
campañas dinámicas que sí lo llevan.

---

## Filtros

Disparador · Canales · Canal conectado · Estado de flujo · Estado · F. Última edición.
