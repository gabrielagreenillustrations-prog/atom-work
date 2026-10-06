# 0099 — Etiquetas: los errores del campo siguen Text Field Patterns

**Estado:** vigente · reemplaza el punto de errores de la [0098](0098-dialogos-de-etiquetas-copy-y-validacion.md)
**Fecha:** 2026-10-06
**Componente:** `❖ atom-text-field`
**Alcance:** Etiquetas (`01.2 · 03–04` y `01.3 · 02–03`).

## Contexto

Los frames de error tenían el copy de producción: «El mínimo de caracteres permitidos es de 3 y máximo 15» y «Ya existe etiqueta con ese nombre». *Dato verificado:* Global Patterns (Text Field Patterns) define mensajes estándar para requerido, formato, rango y longitud excedida, pero no para longitud mínima ni para nombre duplicado.

## Decisión

- Menos de 3 caracteres: **«Mínimo 3 caracteres requeridos»**, con la forma de «Máximo [N] caracteres permitidos».
- Nombre duplicado: **«El nombre ya está en uso.»**, el mismo de Gestión de flujos (`03.4 · 19`) y de `sistema/snackbars.md`.
- Los errores aparecen on blur. Sin helper text: el contador «n/15» muestra el límite. No se agrega el escenario de campo vacío.

## Por qué

Pedido de diseño: *"debemos seguir con los patrones del text field"*. Mínimo, duplicado, vacío y helper elegidos por diseño entre opciones.

## Consecuencias

- Hay que sumar a Global Patterns los casos «longitud mínima» y «nombre en uso».
- Las cards `description` de `01.2` y `01.3` lo dicen (se escriben con el plugin local).
