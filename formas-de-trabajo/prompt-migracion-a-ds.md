# Prompt para migrar un módulo al Design System (handoff + FRD)

Para abrir una conversación nueva y repetir lo que se hizo con Crear campaña (2026-10-16 a 2026-10-19) en
otro módulo. Completá lo que está entre corchetes y pegalo tal cual.

---

> Trabajo en diseño de producto/UX en Atom (SaaS B2B de CX omnicanal). Vamos a migrar **[módulo · ruta]**
> al Design System 1.0: handoff en Figma y FRD en Confluence, como hicimos con Crear campaña.
>
> **Fuentes**
> - Repo, mi fuente de la verdad: https://github.com/gabrielagreenillustrations-prog/atom-work. Antes de
>   proponer nada, leé `formas-de-trabajo/principios.md`, `formas-de-trabajo/trabajar-con-claude.md`,
>   `RETOMAR.md`, `decisiones/README.md` y `sistema/`. El ejemplo terminado es
>   `modulos/campanas/crear-campana.md`.
> - Figma: [link de la page o de la sección] · archivo [nombre].
> - QA: [URL de la pantalla].
> - FRD: [link de Confluence] o «hay que crearlo» en el espacio AD.
> - Global Patterns y Web Library: los archivos abiertos en la app de Figma.
>
> **Reglas que no se negocian**
> - Solo componentes de la Web Library y nunca detachar. Solo tokens de Primitives y Semantics, nunca hex.
>   Sin frames contenedores innecesarios.
> - Seguir Global Patterns (Forms, Text field, Dialog, Dropdown Menu, Narrow Page Layout, Form + Preview
>   Panel…) y las decisiones del repo. Si algo choca con una decisión vigente, preguntame antes.
> - Suponer está fuera de límite: separá lo verificado (Figma, QA, código, i18n) de lo interpretado, en las
>   cards, en el FRD y en tus mensajes.
> - QA solo se lee. En producción, solo abrir diálogos y cancelar. Cualquier escritura en QA, con mi permiso
>   caso por caso. Nunca escribir contraseñas.
> - No borres nada mío sin preguntar. Si un frame o un texto cambió y no lo hiciste vos, lo cambié yo: tomalo
>   como la fuente.
>
> **Cómo trabajar en Figma** (detalle en `trabajar-con-claude.md`)
> - El MCP remoto de Figma no tiene acceso: se lee y se escribe por la consola de DevTools de la app de
>   escritorio, y se audita con `get_metadata` / `get_screenshot` del MCP de escritorio.
> - Una page a la vez. Nunca cargar todas las pages de un archivo: deja la pestaña sin memoria.
> - Configurar las instancias antes de meterlas en un slot; después, predicados de `findAll` con `try/catch`.
> - Antes de escribir o pegar en la consola, confirmar que el foco está en el prompt.
>
> **Pasos**
> 1. Relevamiento en QA: estados, textos, límites (min / max), validaciones y claves de i18n, con la fecha de
>    verificación.
> 2. Inventario del archivo y propuesta de filas (`NN.00`) con sus frames. Mostrámela antes de construir.
> 3. Handoff con la estructura de la decisión 0074: un `internal-title-section` por caso, la card del número
>    y la card de descripción por fila, y los frames `NN.00 · NN - …` en el orden de la grilla. Cada card
>    nombra los `❖` componentes, dice qué cambia respecto a QA y marca las interpretaciones.
> 4. FRD con la skill `frd-migracion-ds-2` si está disponible, o con la estructura del de Crear campaña: una
>    HU por fila, con «Migración de componentes», «🔧 Ajustes adicionales» y el link 🎨 Figma. Para
>    actualizarlo, cambios puntuales por la API con la versión del momento; nunca pises lo que edité yo.
> 5. Verificación: compará los textos visibles de los frames con las cards y con el FRD. Lo que cambié a mano
>    en Figma pasa a las cards y al FRD; si choca con algo que edité en el FRD, preguntame. Releé el FRD
>    después de guardar.
> 6. Al cerrar, actualizá el repo: entrada en `historial/`, decisiones nuevas en `decisiones/` con su razón y
>    los dos índices, `sistema/` y `modulos/` en su lugar, y `RETOMAR.md`. En una rama, con PR.
>
> Empezá por contarme qué leíste del repo que aplica a este módulo y qué necesitás de mí.
</content>
</invoke>
