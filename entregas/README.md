# Entregas

Qué documento define qué, y cuál manda sobre cuál.

Última revisión: **2026-09-23**

---

## Jerarquía

| # | Fuente | Manda en |
|---|---|---|
| 1 | Código de producción | Comportamiento: qué acciones aparecen y cuándo |
| 2 | La épica vigente | Copy y estructura |
| 3 | Global Patterns | Layout, tokens, componentes |
| 4 | El handoff | Todo lo demás |

## Las entregas

| Entrega | fileKey | Define | Estado |
|---|---|---|---|
| **Épica 1** | — | Lógica de listas | **Reemplazada** por la Épica 2 · [0001](../decisiones/0001-epica-2-reemplaza-epica-1.md) |
| **Épica 2 · Lógica de Listas** | `9PYkcl8kpG1hlAun2sweWU` | Columnas de Resultados, lógica de listas | Vigente |
| **Épica 3 · Lógica de Listas Dinámicas y migración (Copy)** | `6l9KuqndV4WXq6KRrD99aG` | Edición de flujos publicados: menús, modales de advertencia, panel de métricas | Vigente — solo la página *Actual UI* · [0002](../decisiones/0002-fuente-valida-epica-3.md) |
| **Global Patterns** | — | Diálogos, tablas, forms, controles, tokens | Vigente |
| **Web Library** | — | Componentes `atom-*` | Vigente |

## Sin revisar

- Épica 4 · Logs de conversaciones (Historial)
- Métricas por plantilla inicial
- Soportar ejecución de WhatsApp Flows sin importar el WABA

## Inconsistencias conocidas en las entregas

**Global Patterns** no define formato de fecha y sus ejemplos se contradicen.
Ver [0003](../decisiones/0003-formato-de-fecha.md).

**Épica 3** tiene tres problemas internos:

- dice `temprada` en vez de "temporada" (frames `15110:158` y `18010:3909`)
- su texto de apoyo no está unificado entre modales: el genérico dice
  *"—como Smartons, evaluadores o ubicaciones—"* y los de campaña *"como Smartons,
  Evaluar o Ubicación;"*
- su panel de métricas usa `Errores` pero deja el encabezado "Detalles de fallidos" sin migrar

**Épica 2**: sus frames de *Nueva UI* de Resultados incluyen una columna `Lista` y algunos
todavía muestran `No entregados`, a diferencia de los frames de TableContent que se usaron
como referencia para las columnas. **Sin resolver.**
