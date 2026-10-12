# 0120 — Stickers: Editar en un dialog (propuesta)

**Estado:** propuesta
**Fecha:** 2026-10-12
**Componente:** `❖ atom-dialog` · `❖ atom-text-field`
**Alcance:** Stickers, `01.3 · 01` (actual) y `01.3 · 02–08` (propuesta).

## Contexto

*Dato verificado en QA:* el nombre se edita dentro de la card (input con Guardar y Cancelar; Enter guarda, Esc cancela). No hay validación: aceptó 300 caracteres, emojis, símbolos, HTML y un nombre repetido; vacío o solo espacios se cancela sin aviso. *Dato verificado en el código:* el servicio solo actualiza el campo `name`.

## Decisión

- Se mantiene una fila con lo actual y una fila «Propuesta» con `❖ atom-dialog` «Editar sticker», que se abre desde Editar del menú ⋮.
- Campo Small «Nombre», placeholder «Ej. Gracias por tu compra», sin contador (no hay límite). Botón «Editar», deshabilitado hasta que haya cambios; loading «Editando...».
- Errores on blur: vacío «Se requiere el nombre»; repetido «El nombre ya está en uso.» (el de la [0099](../etiquetas/0099-errores-del-campo-segun-text-field-patterns.md)).

## Por qué

Respuestas de diseño: renombrar con *"Fila Propuesta con dialog"*; *"Si no hay limite de caracteres entonces solo errores como vacio, duplicado"*; el duplicado *"lo dejamos para validar con desarrollo si por alguna razon tecnica dejan el duplicado porque para experiencia de usuario en busqueda y reconocimiento no es buena practica"*; las acciones del menú son *"eliminar y editar"*.

*Interpretación:* «Renombrar» (tooltip de QA) pasa a «Editar» para alinear con Etiquetas ([0100](../etiquetas/0100-editar-y-eliminar-segun-dialog-patterns.md)).

## Consecuencias

- Por validar con desarrollo: el error de nombre en uso.
