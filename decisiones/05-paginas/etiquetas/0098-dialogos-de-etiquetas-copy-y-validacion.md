# 0098 — Diálogos de Etiquetas: copy normalizado y validación del patrón de forms

**Estado:** vigente · el copy de los errores, reemplazado por [0099](0099-errores-del-campo-segun-text-field-patterns.md); botón de Editar y cuerpo de Eliminar, por [0100](0100-editar-y-eliminar-segun-dialog-patterns.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-dialog` · `❖ atom-text-field`
**Alcance:** Etiquetas (`01.2`–`01.4`).

## Contexto

*Dato verificado* (i18n `settings/tags` y QA): «Crear etiqueta», «Editar Etiqueta», «Eliminar Etiqueta», «¿Estás seguro que deseas eliminar esta etiqueta?», botones en mayúsculas, label «Etiqueta» dentro del campo, Crear habilitado al abrir.

## Decisión

- Títulos en sentence case: «Crear etiqueta», «Editar etiqueta», «Eliminar etiqueta». Cuerpo: «¿Estás seguro de que deseas eliminar esta etiqueta?».
- Campo Small con label visible «Nombre», placeholder «Ej. Cliente frecuente» y contador «n/15».
- Crear deshabilitado al abrir; Guardar deshabilitado mientras no haya cambios (submit gate de Forms).
- Errores con el copy de producción: «El mínimo de caracteres permitidos es de 3 y máximo 15» y «Ya existe etiqueta con ese nombre».
- Loading: «Creando...» y «Guardando...». Eliminar en `Destructive Primary`.

## Por qué

Pedido de diseño: copy «Normalizado». El resto viene de los patrones de Forms y Dialogs (`atom-patterns`).

*Interpretación:* el label «Nombre» y el placeholder son míos, por la regla de labels (sustantivo corto) y de placeholder («Ej.»).

## Consecuencias

- Hay copy nuevo frente a las claves actuales: hay que actualizar el FRD (pide no crear claves).
- *Bug visto en QA:* el error de duplicado queda visible después de cambiar el texto. Se reporta aparte; el handoff muestra el comportamiento correcto.
