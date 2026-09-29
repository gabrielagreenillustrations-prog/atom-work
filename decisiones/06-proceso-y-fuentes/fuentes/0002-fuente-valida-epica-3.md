# 0002 — De la Épica 3 manda la página *Actual UI*

**Estado:** vigente
**Fecha:** 2026-09-23
**Alcance:** Gestión de flujos — edición de flujos publicados

## Contexto

El archivo *Épica 3 · Lógica de Listas Dinámicas y migración (Copy)*
(`6l9KuqndV4WXq6KRrD99aG`) tiene dos páginas con contenido sobre lo mismo:

- `FRD 1 · Editar flujos · Actual UI` (`15050:16769`)
- `FRD 1 · Editar flujos · Nueva UI` (`15034:10502`)

Su copy de modales no coincide entre sí. La *Nueva UI* titula los modales
`Editar flujo`; la *Actual UI*, `Editar y publicar flujo`. Los cuerpos también difieren.

## Decisión

La fuente válida es **`FRD 1 · Editar flujos · Actual UI`**, que contiene la sección
`🅷 Handoff — Edición de flujos salientes publicados (Épica 3)` marcada **Ready for dev**.

La página *Nueva UI* se ignora.

## Por qué

*Verificado:* solo la *Actual UI* lleva el badge **Ready for dev**, y su copy es el que
coincide con lo que ya teníamos en el handoff. La *Nueva UI* parece una exploración previa
que quedó en el archivo.

## Consecuencias

- El título de los modales de edición es `Editar y publicar flujo`.
- Las historias de usuario HU-01, HU-02 y HU-03 se leen de los bloques `internal-sections`
  de esa página.
