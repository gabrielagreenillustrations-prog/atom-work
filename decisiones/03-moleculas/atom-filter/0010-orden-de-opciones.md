# 0010 — Orden de opciones en filtros

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** todos los paneles de filtro

## Decisión

| Tipo de opción | Orden |
|---|---|
| Nombres de elementos (campañas, creadores, tipos) | **Alfabético** |
| Estados | **Orden de ejecución**, no alfabético |
| Rangos de fecha | Hoy · Ayer · Esta semana · Últimos 15 días · **Personalizado** al final |

Además: **nombres completos cuando hay espacio.** Los títulos de panel usan el nombre
completo (`Filtrar por Fecha de creación`); los chips usan la abreviatura (`F. Creación`).

## Por qué

Un estado ordenado alfabéticamente obliga a leer toda la lista para ubicarse. Ordenado
por ciclo de vida, se encuentra por intuición.

## Consecuencias

- `01.2 · 08` reordenado a: Agendada · En proceso · En pausa · Enviada · Detenida · Con error.
- Listas ya estaba bien: Cargando · Completo · Actualizando, que coincide con el enum del
  código (0/1/2).
