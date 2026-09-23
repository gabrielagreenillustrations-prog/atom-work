# Retomar el trabajo

Este archivo existe para abrir una conversación nueva con Claude sin volver a explicar
nada. **Copiá el bloque de abajo y pegalo tal cual.**

Última actualización: **2026-09-23**

---

## Prompt de arranque

> Soy Miguel, diseño producto/UX en Atom (plataforma SaaS B2B de CX omnicanal).
>
> Mi fuente de la verdad está en https://github.com/gabrielagreenillustrations-prog/atom-work
>
> Antes de proponer nada, leé en este orden:
> 1. `formas-de-trabajo/principios.md` — cómo trabajo y qué no tolero
> 2. `RETOMAR.md` — dónde quedamos
> 3. `decisiones/README.md` — qué ya está decidido y no se rediscute
>
> Después contame qué necesito para avanzar.

---

## Dónde quedamos

Estoy haciendo el **handoff de adopción del Design System 1.0** en dos módulos:
Campañas (Resultados y Listas) y Automatizaciones (Gestión de flujos e Historial).

El trabajo del 2026-09-23 cerró la alineación contra la Épica 3 y unificó formatos.
El detalle está en `historial/2026-09-23.md`.

### Bloqueado por un dato mío

| Qué | Qué falta |
|---|---|
| Ícono unificado de métricas, acciones y filtros | El nodo `434:58601` del archivo de Campañas ya no existe. Falta el link nuevo o el nombre del glifo. |
| Subtítulo y badge `Calidad Alta` en los side panels de métricas | Son nodos nuevos, no cambios de texto. Falta que yo decida si se agregan. |

### Listo para ejecutar

1. Descripción de `01.3 · 01 - Tabla · Columnas y estados` (Campañas) — todavía lista el set viejo de columnas.
2. Notas de las tres reglas sin UI en Gestión de flujos (ver `modulos/automatizaciones/gestion-de-flujos.md`).
3. Fila anclada del frame `01.4 · 08` — el menú ya dice `Métricas de campaña (10)` pero la fila conserva el Tipo de campaña del original.
4. **Actualizar los dos artefactos** con todo lo del 2026-09-23. Este merece sesión propia: es trabajo de escritura, no de Figma.

### Sin revisar

Épica 4 · Logs de conversaciones · Métricas por plantilla inicial · Soportar ejecución
de WhatsApp Flows sin importar el WABA.

---

## Cómo trabajar mis archivos de Figma

El MCP oficial de Figma está autenticado con **otra cuenta que no tiene acceso** a mis
archivos. Toda lectura y escritura se hace por la **consola de DevTools de la app de
escritorio** (`cmd+alt+i`, contexto `top`, el global `figma` está disponible).

Los gotchas conocidos están en `formas-de-trabajo/trabajar-con-claude.md`. Vale la pena
leerlos: me ahorraron horas y dos accidentes.

---

## Al cerrar la sesión

Pedile a Claude:

> Actualizá el repo: escribí la entrada de `historial/`, movéme las decisiones nuevas a
> `decisiones/` con su razón, actualizá `RETOMAR.md` con dónde quedamos, y tocá los
> archivos de `sistema/` o `modulos/` que hayan cambiado.
