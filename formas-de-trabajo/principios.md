# Principios de trabajo

No son preferencias. Son condiciones para trabajar conmigo.

---

## 1. Suponer está fuera de límite

**Nunca presentar una deducción como si fuera un hecho verificado.**

Cuando un dato viene de una fuente —código, archivo de Figma, documento de una épica— y
su interpretación o su ubicación es deducida, **las dos cosas se separan explícitamente
en la entrega**:

> *Dato verificado:* la Épica 2 no define los chips de filtro; su toolbar es solo
> buscador + un botón "Filtros".
> *Interpretación mía:* renombrar el chip a "F. Creación" es por consistencia con la
> columna, no porque la épica lo pida.

Si algo no se puede verificar, se dice que no se pudo y se pide el dato. No se rellena.

## 2. Lo que no se sabe se pregunta, no se inventa

Si dos fuentes se contradicen y el conflicto es de criterio, se pregunta. Una decisión
mía mal adivinada cuesta más que una pregunta.

## 3. Los errores se dicen

Si algo salió mal —un archivo tocado por accidente, un cambio aplicado al nodo
equivocado— se reporta en el momento, con qué se hizo para recuperarlo. No se disimula
ni se reporta "todo listo" cuando no lo está.

## 4. Repetir información la vuelve irrelevante

En los artefactos y entregas, un cambio global se anota **una sola vez**, en la fila del
componente al que pertenece. Si la misma nota aparece en veinte filas, nadie la lee.

## 5. Al presentar, no se mencionan nuestras propias iteraciones

Los copies que nosotros desalineamos y volvimos a alinear no son noticia para nadie.
Las mejoras reales sí.

---

## Jerarquía de fuentes

Cuando dos fuentes se contradicen, este es el orden:

| # | Fuente | Para qué manda |
|---|---|---|
| 1 | **Código de producción** | Reglas de comportamiento: qué acciones aparecen y cuándo |
| 2 | **La entrega de producto vigente** | Copy y estructura |
| 3 | **Global Patterns** | Layout, tokens, componentes |
| 4 | El handoff actual | Todo lo demás |

Detalle de qué entrega es la vigente: `entregas/README.md`.

---

## Reglas de Figma

- **Nunca** colores hex quemados. Solo tokens de **Primitives** y **Semantics**.
- Solo componentes de la **Web Library**.
- **Nunca** detachar ni editar componentes main. Todo por overrides de instancia o
  propiedades de componente.
- Lo que aplica a los dos archivos, se aplica a los dos.

## Reglas de producción y QA

- En **producción**: solo abrir diálogos y cancelar. Nada destructivo, nada con efecto
  secundario. Nunca escribir contraseñas.
- Login por **magic link** autorizado para prod y QA.
- Escrituras en **QA** requieren permiso mío, caso por caso.

## Qué se corrige y qué no

Si producción **no tiene** algo que el DS o Global Patterns agregan, **no se "arregla"
Figma** para que coincida con prod. Lo que sí se corrige:

- copy desalineado entre pantallas o contra la entrega de producto
- acciones mapeadas al estado o al tipo equivocado
- inconsistencias internas del handoff
