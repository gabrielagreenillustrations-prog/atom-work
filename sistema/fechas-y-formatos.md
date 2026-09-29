# Fechas y formatos

Última revisión: **2026-09-25** (sesión 10) · Decisiones: [0035](../decisiones/01-fundamentos/fechas/0035-formato-de-fecha-premade.md), que reemplaza a [0003](../decisiones/01-fundamentos/fechas/0003-formato-de-fecha.md) · [0050](../decisiones/01-fundamentos/fechas/0050-fechas-sin-relativas.md)

---

## Fecha con hora

**`DD Mmm AA HH:mm`**

- Día con cero a la izquierda: `04`, no `4`
- Mes de tres letras, en español y con mayúscula inicial: `Ene` · `Feb` · `Mar` · `Abr` · `May` ·
  `Jun` · `Jul` · `Ago` · `Sep` · `Oct` · `Nov` · `Dic`
- Año con dos dígitos
- Hora en **24 horas**, sin `am` / `pm`
- Ejemplo: `23 Oct 24 14:30`

Aplica a todas las fechas de los dos archivos: tablas, side panels, modales y textos corridos, como
las alertas. **No se usan fechas relativas** («hoy», «ayer») como valor de una fecha — decisión
[0050](../decisiones/01-fundamentos/fechas/0050-fechas-sin-relativas.md). Los presets de los filtros de fecha (Hoy · Ayer ·
Esta semana · Últimos 15 días · Personalizado) son rangos y no cambian.

## Columnas de fecha

| Dónde | Encabezado | Columna | Ancho |
|---|---|---|---|
| Resultados · estáticas | `Fecha de envío` | *F. Creación (premade)* | 137 px |
| Resultados · dinámicas | `F. Creación` | *F. Creación (premade)* | 137 px |
| Listas | `F. Creación` · `F. Actualización` | *F. Creación (premade)* · *F. Actualización (premade)* | 137 · 163 px |
| Gestión de flujos | `F. Última edición` | columna fija (el archivo no tiene las premade) | 163 px |
| Historial de conversaciones | `F. Actualización` | columna fija (el archivo no tiene las premade) | 163 px |
| Gestión · modal «Campañas asociadas» (`03.4 · 05`) | `F. Creación` | columna fija | 137 px |

- Orden descendente por defecto: flecha `arrow-down` en el encabezado y la fila más reciente arriba.
  Al cambiar de tabla o aplicar filtros, el orden se mantiene.
- En Listas la flecha va en F. Creación, que ordena la tabla.
- Si la fecha no entra, se trunca con tooltip.

## Dónde queda el formato anterior

*Verificado el 2026-09-25:*

- Las tablas de `03.8 · Specs · Columna Canal`, en Automatizaciones, entre ellas la de referencia de
  diseño y las de «NO TOCAR»: esa sección no se toca.
- 66 textos «Hoy, 1:15 P» · «Hoy, 9:30 AM» · «Ayer, 4:20 PM» dentro de columnas y celdas ocultas de
  las tablas de Historial de conversaciones: contenido por defecto del componente, que no se ve.

Los nodos sueltos de Campañas, que también tenían fechas anteriores, ya no están en el archivo
(ver `modulos/campanas/README.md`).

## Qué NO usar

| Mal | Por qué |
|---|---|
| `14 sep 15:02` | Formato anterior (0003): sin año y con el mes en minúscula |
| `14 sep 03:02 pm` | Mezcla relojes. Va en 24 h. |
| `24 mar 15:02 pm` | 24 h **con** sufijo. Es lo que hace Global Patterns y es incorrecto. |
| `12 ago 2026, 9:30 AM` | Año de cuatro dígitos y AM/PM (Historial lo tenía así) |
| `18 ago 26 15:38` | Mes en minúscula |

## Nota sobre Global Patterns

Patterns **no tiene regla escrita** de formato de fecha. Solo ejemplos, y se contradicen
entre sí. El nuestro llena ese vacío. Si Patterns publica una regla explícita, gana Patterns.

## Números

- Miles con coma: `1,876`
- Porcentajes sin decimal cuando son enteros: `93%`, no `93.0%`
