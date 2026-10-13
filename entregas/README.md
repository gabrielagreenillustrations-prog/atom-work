# Entregas

Qué documento define qué, y cuál manda sobre cuál.

Última revisión: **2026-09-29**

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
| **Épica 1** | — | Lógica de listas | **Reemplazada** por la Épica 2 · [0001](../decisiones/06-proceso-y-fuentes/fuentes/0001-epica-2-reemplaza-epica-1.md) |
| **Épica 2 · Lógica de Listas** | `9PYkcl8kpG1hlAun2sweWU` | Columnas de Resultados, lógica de listas | Vigente |
| **Épica 3 · Lógica de Listas Dinámicas y migración (Copy)** | `6l9KuqndV4WXq6KRrD99aG` | Edición de flujos publicados: menús, modales de advertencia, panel de métricas | Vigente — solo la página *Actual UI* · [0002](../decisiones/06-proceso-y-fuentes/fuentes/0002-fuente-valida-epica-3.md) |
| **Crear listas AI, MCPs y CSV** | — | Listas: origen de la lista (selector «Crear nueva lista») y columna Origen | Vigente — la última entrega de Listas · [0018](../decisiones/03-moleculas/atom-filter/0018-listas-filtro-origen.md) · [0030](../decisiones/04-organismos/atom-data-table/columnas-listas/0030-listas-tabla-completa.md) |
| **FRD · Métricas por plantilla inicial, ajustes del 28-sep** | — | Tabla de Resultados (HU-01), naming, cards y bases de % del panel (HU-02), Errores Meta (HU-03) y los CSV | Vigente · copia en [frd/2026-09-28-metricas-por-plantilla-ajustes.md](frd/2026-09-28-metricas-por-plantilla-ajustes.md) · [0085](../decisiones/05-paginas/metricas/0085-entrega-de-metricas-alineada-al-frd.md) |
| **Global Patterns** | — | Diálogos, tablas, forms, controles, tokens | Vigente |
| **Web Library** | — | Componentes `atom-*` | Vigente |

## Sin revisar

- Épica 4 · Logs de conversaciones (Historial)
- Métricas por plantilla inicial. La [0025](../decisiones/04-organismos/atom-sidepanel-metricas/0025-titulos-de-side-panels-de-metricas.md)
  sigue lo que diseño dijo de la última entrega de side panels de métricas; en la sesión 05 la
  pestaña no tenía consola ni respondía a clicks, así que no se pudo leer.
- Soportar ejecución de WhatsApp Flows sin importar el WABA

## Inconsistencias conocidas en las entregas

**Global Patterns** no define formato de fecha y sus ejemplos se contradicen.
Ver [0035](../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md), que reemplaza a la
[0003](../decisiones/01-fundamentos/fechas/0003-formato-de-fecha.md).

**Épica 3** tiene tres problemas internos:

- dice `temprada` en vez de "temporada" (frames `15110:158` y `18010:3909`)
- su texto de apoyo no está unificado entre modales: el genérico dice
  *"—como Smartons, evaluadores o ubicaciones—"* y los de campaña *"como Smartons,
  Evaluar o Ubicación;"*
- su panel de métricas usa `Errores` pero deja el encabezado "Detalles de fallidos" sin migrar

**Épica 2**: sus frames de *Nueva UI* de Resultados incluyen una columna `Lista` y algunos
todavía muestran `No entregados`, a diferencia de los frames de TableContent que se usaron
como referencia para las columnas. **Sin resolver.**
