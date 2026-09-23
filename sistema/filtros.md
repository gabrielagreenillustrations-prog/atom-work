# Filtros

Última revisión: **2026-09-23** · Decisión: [0010](../decisiones/0010-orden-de-opciones.md)

---

## Orden de opciones

| Tipo | Orden |
|---|---|
| Nombres de elementos | Alfabético |
| Estados | **Orden de ejecución** (ciclo de vida) |
| Rangos de fecha | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado |

`Personalizado` siempre va último.

## Naming

- Título del panel: nombre completo → `Filtrar por Fecha de creación`
- Chip: abreviatura → `F. Creación`

## Qué filtros tiene cada módulo

| Módulo | Chips |
|---|---|
| Campañas estáticas | Campaña · Estado · Creador · F. Creación |
| Campañas dinámicas | Estado · F. Creación |
| Listas | Tipo · Estado · Creador · F. Creación · F. Actualización |
| Gestión de flujos | Disparador · Canales · Canal conectado · Estado de flujo · Estado · F. Última edición |

Detalle de las opciones de cada uno en los archivos de `modulos/`.

## Nota

La Épica 2 **no define los chips**: su toolbar es solo buscador + un botón "Filtros".
Los chips son nuestros. *(Verificado.)*
