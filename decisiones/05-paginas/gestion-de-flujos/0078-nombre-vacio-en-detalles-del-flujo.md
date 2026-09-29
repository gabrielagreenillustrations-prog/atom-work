# 0078 — «Detalles del flujo»: con el nombre vacío, Enter muestra error y un clic fuera descarta

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** Automatizaciones · Gestión de flujos
**Componente:** ❖ atom-text-field
**Alcance:** modal «Detalles del flujo», `03.4 · 14–19` y su card. Completa la
[0076](0076-cerrar-detalles-con-el-nombre-en-edicion.md), que lo dejó sin definir.

## Decisión

Con el campo del nombre vacío:

- **Enter** muestra el error en el campo, como el nombre en uso de `03.4 · 19`.
- **Un clic fuera del campo** no guarda: queda el nombre anterior.

## Por qué

Diseño: *"si queda vacío entonces y se da enter salta el error pero si se cliques afuera no se guardar
los cambios"*.

## Consecuencias

- La card de `03.4 · 14–19` (`239:754775`) lo dice.
- *Sin definir:* el texto del error con el campo vacío. `03.4 · 19` muestra el de nombre en uso («El
  nombre ya está en uso.»); no hay frame del campo vacío.
