# Decisiones

Una decisión por archivo. **No se editan.** Si cambio de opinión se escribe una nueva y
la vieja pasa a `Estado: reemplazada por NNNN`.

| # | Decisión | Estado | Fecha |
|---|---|---|---|
| [0001](0001-epica-2-reemplaza-epica-1.md) | La Épica 2 reemplaza a la Épica 1 | vigente | 2026-09-23 |
| [0002](0002-fuente-valida-epica-3.md) | De la Épica 3 manda la página *Actual UI* | vigente | 2026-09-23 |
| [0003](0003-formato-de-fecha.md) | Formato de fecha: 24 h sin sufijo | vigente | 2026-09-23 |
| [0004](0004-errores-reemplaza-fallidos.md) | "Errores" reemplaza a "Fallidos" en métricas | vigente | 2026-09-23 |
| [0005](0005-contador-en-metricas.md) | Contador `(N)` cuando hay más de un elemento | vigente | 2026-09-23 |
| [0006](0006-columnas-campanas-estaticas.md) | Columnas de campañas estáticas: las 12 de la Épica 2 | vigente | 2026-09-23 |
| [0007](0007-iconografia-activar-desactivar.md) | Iconografía de activar, desactivar y ver detalles | vigente | 2026-09-23 |
| [0008](0008-centrado-de-modales.md) | Los modales se centran sobre el área de contenido | vigente | 2026-09-23 |
| [0009](0009-copy-del-buscador.md) | Copy del buscador: "Buscar \<entidad\> por nombre" | vigente | 2026-09-23 |
| [0010](0010-orden-de-opciones.md) | Orden de opciones en filtros | vigente | 2026-09-23 |
| [0011](0011-descargar-json-se-mantiene.md) | "Descargar JSON" se mantiene aunque la épica no lo tenga | vigente | 2026-09-23 |
| [0012](0012-mensaje-entrante-editar-y-publicar.md) | Mensaje entrante conserva "Editar y publicar" | vigente | 2026-09-23 |

## Formato

```
# NNNN — Título

**Estado:** vigente | reemplazada por NNNN
**Fecha:** AAAA-MM-DD
**Alcance:** a qué archivos / módulos afecta

## Contexto        ← qué problema había
## Decisión        ← qué se decidió, en una frase
## Por qué         ← el razonamiento, incluidas las alternativas descartadas
## Consecuencias   ← qué hay que hacer o mantener por esta decisión
```
