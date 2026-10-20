# Vista previa de plantilla y navegación entre plantillas

Última revisión: **2026-10-19** · Decisiones: [0129](../decisiones/05-paginas/crear-campana/0129-vista-previa-contenedor-inline.md) · [0130](../decisiones/05-paginas/crear-campana/0130-responsive-formulario-600-y-vista-previa-con-clamp.md) · [0131](../decisiones/05-paginas/crear-campana/0131-navegacion-de-plantillas-arriba-de-la-vista-previa.md) · [0132](../decisiones/02-atomos/atom-text-field/0132-contador-n-de-n-text-field-de-48-px.md) · [0140](../decisiones/05-paginas/crear-campana/0140-flujo-elegido-muestra-su-plantilla.md)

Vale donde se muestra una plantilla con su navegación: Crear campaña y el panel de Métricas de plantilla.

---

## Contenedor de la vista previa (formularios)

*Form + Preview Panel* de Global Patterns. No es un `❖ atom-sidepanel`.

| Propiedad | Valor |
|---|---|
| Fondo | `bg/primary` |
| Separador | vertical, 1 px, `border/tertiary` (borde izquierdo, `strokesIncludedInLayout = false`) |
| Sombra | ninguna |
| Debajo del título | `❖ atom-horizontal-divider` |
| Título | «Vista previa de plantilla» (1) · «Vista previa de plantillas» (más de 1) |
| Visibilidad | siempre inline, sin cerrar, en todos los anchos |
| Ancho | ≥ 992 px de área: `clamp(360px, 30%, 480px)` · < 992 px: `clamp(280px, 40%, 360px)` |

Con una plantilla elegida, en todas las pantallas: «Plantilla: [nombre]» (hasta 3 líneas, tooltip con el nombre completo) y `❖ atom-button` «Ver métricas de plantilla». Con un flujo elegido, la vista previa muestra su plantilla.

## Navegación entre plantillas

```
‹  [ n/N ]  ›          ← arriba, fuera del chat
Plantilla: [nombre]
[Ver métricas de plantilla]
[chat]
```

| Pieza | Componente |
|---|---|
| Flechas | `❖ atom-icon-button` xs, Tertiary, `chevron-left` / `chevron-right`. Primera: ‹ Disabled. Última: › Disabled |
| Contador | `❖ atom-text-field` **Extra Small**, sin label ni texto de ayuda, solo lectura, **48 px fijos con el token `4xxl`** (Primitives / Spacing) |
| Tooltips | «Anterior» / «Siguiente», arriba a 4 px |
| Una sola plantilla | sin flechas ni contador |

El contador no se edita ni abre una lista: solo muestra la posición.

### Dónde está aplicado

| Archivo · page | Estado (2026-10-19) |
|---|---|
| Campañas · Crear Campaña (`20.00 · 02–05`) | 4 contadores, 48 px con `4xxl` |
| Campañas · Métricas de plantillas (`1288:189238`) | 36 contadores, 48 px con `4xxl` |
| Métricas por plantilla inicial · Nueva UI · panel v2 (`15302:53128`, `15302:210233`) | 14 contadores en text field, **64 px sin token**: falta `4xxl` |
| Métricas por plantilla inicial · Panel v1 y Exploración · Automatizaciones · `03.9 · 02` | stepper anterior (`_atom-stepper-nav-base`), sin cambiar |

## Para armarlo en Figma

- Set de `❖ atom-text-field`: key `4632b719c25852f19c405533eb4933705ab4de7f`, variante `State=Enabled, Size=Extra Small`. Con todos los booleanos en `false` (`Show label`, `Show bottom`, `Show supportive text`, `Show chart count`, `Show leading inner`, `Show trailing inner`) solo queda el valor, en el TEXT `Extra small`.
- Token `4xxl`: `VariableID:4f108a812e8e6d9c86cd962ef3c7dd680efb209b/407:410` (colección Primitives / Spacing, key `2e7281d1cb1d8ff91790d33010de5277f1edead6`). Se liga con `node.setBoundVariable('width', variable)` con el ancho en `FIXED`.
</content>
</invoke>
