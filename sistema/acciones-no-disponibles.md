# Acciones no disponibles

Última revisión: **2026-09-28** (sesión 12) · Decisión: [0053](../decisiones/03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md)

---

## Regla

En un **menú de acciones** (el menú «más acciones» de una fila, o cualquier menú contextual), una
acción que no aplica al estado del objeto **no se muestra**. No hay ítems en Disabled.

- El orden relativo de las acciones es fijo: si una acción no está, las demás no cambian de orden.
- El menú cambia de largo según el estado. Si abre hacia arriba, se acomoda para no tapar el botón
  de la fila.
- Una acción que depende de los datos sigue la misma regla: «Descargar errores» aparece solo si la
  fila tiene errores (Errores mayor que 0).

**Disabled** queda para los controles que están siempre a la vista y cuya ausencia cambiaría la
pantalla: botones de una barra, el botón principal de un formulario, los filtros mientras hay una
búsqueda ([0055](../decisiones/03-moleculas/atom-search-input/0055-busqueda-deshabilita-filtros.md)), «Limpiar filtros» sin filtros
aplicados. Si el motivo no es evidente, un tooltip lo explica.

## Por qué

- **El menú responde a «qué puedo hacer ahora con esto».** Una acción en Disabled dice «existe, pero
  no ahora» y no dice por qué: en un menú no hay lugar para explicarlo, y un ítem deshabilitado no
  recibe el cursor ni el foco, así que tampoco puede llevar un tooltip.
- **Menos ruido y menos lectura.** Cada ítem en Disabled obliga a leerlo y descartarlo. En los menús de
  Resultados, una campaña Enviada sin errores mostraba «Descargar errores» y «Detener campaña»
  deshabilitados: dos de ocho ítems que no se podían usar.
- **Accesibilidad.** Los lectores de pantalla anuncian los ítems deshabilitados como «no disponible»
  o los saltean según la implementación; en los dos casos el usuario recorre opciones que no puede
  usar.
- **Coincide con Atom.** *Verificado en QA el 2026-09-25:* los menús de Gestión de flujos no
  devuelven las acciones que no aplican: no traen `disabled`
  ([0046](../decisiones/03-moleculas/atom-dropdown-menu/0046-gestion-acciones-no-disponibles-en-disabled.md), contexto).
- **Lo que sí conviene mostrar deshabilitado** es lo que el usuario espera encontrar siempre en el
  mismo lugar y que va a poder usar en cuanto cambie algo que él controla (completar un campo, borrar
  la búsqueda). En un menú el lugar no es fijo: se abre, se lee y se cierra.

## Dónde se aplica

| Archivo | Menús | Qué se ocultó |
|---|---|---|
| Campañas | `01.4 · 01` Enviada (Flujo y Plantilla) | «Descargar errores» (sin Errores) y «Detener campaña» |
| Campañas | `01.4 · 02` Enviada con errores (Flujo y Plantilla) | «Detener campaña» |
| Campañas | `01.4 · 03` Agendada (Flujo y Plantilla) | «Descargar errores» |
| Campañas | `01.4 · 04` En pausa · Flujo | «Detener campaña» |
| Campañas | `01.4 · 05` Con error (Flujo y Plantilla) | «Descargar errores» y «Detener campaña» |
| Campañas | `01.4 · 07` Detenida (Flujo y Plantilla) | «Detener campaña» |
| Automatizaciones | `03.3 · 03`, `15` | «Ver flujo» |
| Automatizaciones | `03.3 · 04`, `06`, `08` | «Publicar» |
| Automatizaciones | `03.3 · 05`, `07`, `16`, `17` | «Ver flujo» y «Métricas de plantilla» |
| Automatizaciones | `03.3 · 09`, `18` | «Ver flujo» y «Métricas de tipificación» |
| Automatizaciones | `03.3 · 19` | «Editar flujo» y «Publicar» |
| Automatizaciones | `03.3 · 20`, `21` | «Ver flujo» y «Métricas de flujo» |

*Verificado el 2026-09-26:* ningún menú de `01.4` ni de `03.3` tiene ítems en Disabled. Los menús de
campañas dinámicas siguen la [0054](../decisiones/05-paginas/resultados-de-campanas/0054-dinamicas-con-error-detener-y-duplicar.md).

## Pendiente de validar

En `01.4 · 04` (En pausa) el menú de Flujo tenía «Detener campaña» en Disabled y el de Plantilla lo
tiene habilitado. Con la regla, el de Flujo lo oculta. ¿Una campaña de Flujo en pausa se puede
detener? **Respuesta de diseño (26 sep):** queda así, oculto, hasta que diseño lo valide.
