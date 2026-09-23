# Resultados de campañas

Archivo: **Campañas – Adopción DS 1.0** · sección `266:150994`
Última revisión: **2026-09-23**

Cubre dos tablas distintas: **campañas estáticas** y **campañas dinámicas**.

---

## Tabla · Estáticas

12 columnas, adoptadas de la Épica 2 — decisión [0006](../../decisiones/0006-columnas-campanas-estaticas.md):

- *Tipo de campaña* va **después** de *Fallidos*
- *No entregados* está oculto
- La fecha es **`F. Creación`** (antes *Fecha de envío*)

Estados posibles: Agendada · En proceso · En pausa · Enviada · Detenida · Con error.

### Filtros

| Chip | Opciones |
|---|---|
| Campaña | Flujo · Flujo en lote · Plantilla · Plantilla en lote |
| Estado | Agendada · En proceso · En pausa · Enviada · Detenida · Con error *(orden de ejecución)* |
| Creador | buscador + lista de usuarios |
| F. Creación | Hoy · Ayer · Esta semana · Últimos 15 días · Personalizado |

### Menús de fila

Varían por estado de la campaña: enviada, agendada, en pausa, con error, en proceso, de voz.
La acción de métricas lleva contador cuando hay varias plantillas:
`Métricas de campaña (10)` — decisión [0005](../../decisiones/0005-contador-en-metricas.md).

---

## Tabla · Dinámicas

Se mantiene **la versión propia verificada en producción**, no la de la épica.

### Filtros

Solo dos: **Estado** (Activo · Inactivo) y **F. Creación**. No tiene Tipo ni Creador.

### Diferencias con estáticas

| | Estáticas | Dinámicas |
|---|---|---|
| Filtros | 4 | 2 |
| Estados | 6 | 2 |
| Fecha | F. Creación | F. Creación |

---

## Side panel de métricas

Métricas: Clientes · Enviados · Leídos · Respondidos · **Errores** · **No entregados**.
Desgloses con formato `Errores (15)` / `No entregados (22)`.

Título con el nombre de la campaña: `Métricas de campaña: <nombre>`.

Ver `sistema/metricas.md` para la regla completa, incluido lo que falta decidir
(subtítulo y badge de calidad).

---

## Pendiente

- La descripción del frame `01.3 · 01 - Tabla · Columnas y estados` todavía lista el set
  viejo de columnas.
- La fila anclada del frame `01.4 · 08` conserva el *Tipo de campaña* del frame original;
  debería decir `Plantilla en lote`.
