# 0038 — Gestión de flujos: la vista por defecto no muestra flujos inactivos

**Estado:** vigente
**Fecha:** 2026-09-24
**Alcance:** Automatizaciones · Gestión de flujos — tabla y filtro Estado de flujo (`03.1 · 02`,
`03.2 · 07–11`, `03.3 · 12`).

## Contexto

El filtro Estado de flujo lista seis estados, con Inactivo al final («0 de 6»). Ninguna tabla de la
sección mostraba flujos inactivos, salvo `03.3 · 12`: una fila inactiva en la tabla sin filtros.

## Decisión

| Frame | Qué muestra |
|---|---|
| `03.2 · 08` | El panel de filtros abierto en Estado de flujo, con los seis estados. |
| `03.2 · 09` | Inactivo marcado, con el cursor encima; el contador pasa a «1 de 6» y «Limpiar todos» se habilita. |
| `03.2 · 10` | Panel cerrado: chip «Inactivo», «Limpiar filtros» y solo los flujos inactivos («1 - 3 de 3 registros»). El cursor está sobre «Limpiar filtros». |
| `03.2 · 11` | Filtros limpios: la tabla vuelve a la vista por defecto, sin inactivos. |
| `03.3 · 12` | La misma tabla filtrada por Inactivo, con el icon button «Activar flujo» en hover. |

- El filtro mantiene todos los estados; la vista por defecto no muestra flujos inactivos.
- Las filas inactivas no van en gris.

## Por qué

Pedido de diseño: *"Agrega la interacción con el acuerdo de que los estados incluiran todo el listado pero la
vista default de la tabla no mostrará resultados de flujos inactivos, para verlos tiene que filtrar
ese tipo y cuando se eliminen todos los filtros volverá a la vista default sin mostrar inactivos"*.
Sobre el gris de las filas inactivas eligió *"No, como están hoy"*.

*Interpretación:* el `❖ atom-filter` de la Web Library no tiene una variante con filtros aplicados y
el panel abierto. Por eso `03.2 · 09` muestra la selección con el panel abierto y `03.2 · 10`, el
resultado con el panel cerrado.

*Interpretación:* los flujos inactivos no pueden ser flujos de la vista por defecto, así que llevan
nombres nuevos: «Atención fuera de horario» (mensaje entrante), «Promoción Hot Sale» (campaña) y
«Sincronización de pedidos ERP» (webhook).

## Consecuencias

- `03.3 · 12` pasa a la tabla filtrada por Inactivo. Su icon button mostraba `circle-play`; vuelve a
  `circle-bolt`, como pide la [0015](../../01-fundamentos/iconografia/0015-iconos-de-menus-de-acciones.md).
- Las tablas filtradas usan el paginador en variante `single-page`: con una sola página, las cuatro
  flechas quedan deshabilitadas.
- `03.2 · 07` (No conectado aplicado) quedó con las filas y los anchos de la vista por defecto: el caso
  edge va en «Bienvenida nuevos contactos», como en las demás tablas.
