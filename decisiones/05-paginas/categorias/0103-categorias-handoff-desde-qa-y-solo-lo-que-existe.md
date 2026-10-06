# 0103 — Categorías: handoff armado desde QA y solo con lo que existe

**Estado:** vigente
**Fecha:** 2026-10-06
**Componente:** página Categorías (`/settings/categories`)
**Alcance:** sección «Handoff Categorías · /settings/categories» del Figma de Configuraciones (page «Categorías 🟠»).

## Contexto

*Dato verificado:* Categorías no tiene FRD en Confluence y la page de Figma estaba vacía. *Dato verificado en QA (solo lectura):*
- Tabla con Nombre, Respuestas rápidas y Plantillas (checkbox de solo lectura), F. Creación, Activo y Acciones.
- Filtros Respuestas rápidas, Plantillas, F. Creación y Activo (Activo / Inactivo), con «Activo» aplicado al entrar.
- Menú de fila con Editar e Inactivar. Eliminar no aparece, aunque la app tiene textos para eliminar.
- Crear y Editar: Nombre y «Asociar categoría a» con dos checkboxes.

## Decisión

- El handoff se arma con lo que se ve en QA. Pedido de diseño: *"para Categorías no hay FRDs así que continúa sin eso"*.
- Grupos: 01.1 Ver categorías, 01.2 Crear, 01.3 Editar y 01.4 Inactivar.
- No se diseñan Eliminar, la vista de inactivas ni «Activar»: no están verificados en QA.
- Inactivar no lleva diálogo de confirmación: en QA no hay textos de confirmación.
- Datos de ejemplo sin nombres de personas: «Prueba Miguel» pasa a «Prueba de plantillas» y el segundo «Sin categoría» a «Ventas».

## Por qué

Regla de trabajo: lo que no tiene pantalla no se lleva al handoff, y se pregunta antes de inventar.

## Consecuencias

- Pendiente de verificar en QA: si Inactivar pide confirmación y si las inactivas tienen «Activar».
- *Dato verificado en QA:* hay dos categorías con el mismo nombre («Sin categoría»), aunque la app tiene el error de nombre duplicado.
