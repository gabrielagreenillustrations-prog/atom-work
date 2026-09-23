# Atom — Fuente de la verdad de diseño

Conocimiento de producto y diseño de **Atom**, plataforma SaaS B2B de CX omnicanal.

Este repo no es una bitácora de proyecto. Está organizado por **tema**, no por sesión,
y existe para responder tres preguntas cuando vuelvo a un diseño meses después:

| Pregunta | Dónde |
|---|---|
| **¿Cómo quedó X?** | `sistema/` para reglas transversales · `modulos/` para pantallas y flujos |
| **¿Por qué decidimos eso?** | `decisiones/` — una decisión por archivo, con su razón |
| **¿Qué entrega define esto?** | `entregas/` — qué épica manda sobre cuál |

---

## Estructura

```
RETOMAR.md                   ← dónde quedé y el prompt para abrir otra conversación
decisiones/                  ← decisiones numeradas, con contexto y razón. No se editan.
sistema/                     ← reglas transversales del DS: fechas, íconos, copy, modales…
modulos/                     ← por módulo: qué es, cómo quedó, qué falta
comportamiento-verificado/   ← reglas leídas del código de producción
entregas/                    ← el mapa de fuentes y su jerarquía
formas-de-trabajo/           ← mis principios y cómo quiero que trabajen conmigo
historial/                   ← el log cronológico. Es historia, no fuente.
```

---

## Las dos reglas del repo

**1. Las decisiones no se editan, se reemplazan.**
Un archivo en `decisiones/` es inmutable. Si cambio de opinión, se escribe una decisión
nueva y la vieja pasa a `Estado: reemplazada por NNNN`. Eso es lo que hace que el repo
sirva para entender el *por qué* y no solo el *qué*.

**2. Lo verificado y lo interpretado van separados.**
Vale para todo el repo, no solo para las entregas. Si algo se dedujo, se dice que se dedujo.

---

## Cómo se alimenta

Al cerrar una sesión de trabajo:

1. Una entrada nueva en `historial/AAAA-MM-DD.md` — qué se hizo y qué se rompió.
2. Las decisiones nuevas van a `decisiones/` con número, contexto y razón.
3. Los archivos de `sistema/` y `modulos/` que cambiaron se actualizan **en su lugar**
   (estos sí se editan: reflejan el estado vigente).
4. `RETOMAR.md` se reescribe con dónde quedé.
