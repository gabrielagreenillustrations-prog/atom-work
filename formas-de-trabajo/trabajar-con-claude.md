# Trabajar con Claude en mis archivos

Conocimiento operativo. Evita reaprender lo mismo cada sesión.

---

## Acceso a Figma

El **MCP oficial de Figma está autenticado con otra cuenta** (`gabrielagreenillustrations@gmail.com`)
que **no tiene acceso** a mis archivos de trabajo. `use_figma` devuelve
*"you don't have edit access to this file"*.

Toda lectura y escritura se hace por la **consola de DevTools de la app de escritorio de
Figma**, donde el global `figma` (Plugin API) está disponible.

### Cómo abrirla

`cmd+alt+i`, o menú **Plugins → Development → Show/Hide console**. El selector de
contexto tiene que decir **`top`** — si dice un UUID o un nombre de worker, hay que
cambiarlo.

### El patrón que funciona

1. `computer_app_click` en el prompt de la consola — el resultado debe decir
   *"AXPress on AXTextArea 'Console prompt'"*. Si dice otra cosa, **el foco no está
   en la consola y lo que escribas va al canvas**.
2. `computer_app_type` con el script en **una sola línea**.
3. `computer_app_key` con `Return`.
4. Esperar. Un script sobre un archivo completo tarda **45–90 segundos**.
5. `computer_app_type` con `copy('X'+__r);` + `Return`, `app_release`, y leer el clipboard.

El prefijo (`'X'`, `'Y'`…) sirve para distinguir una lectura nueva de una stale.

---

## Gotchas que costaron caro

**El foco se pierde sin aviso.** Dos veces las pulsaciones fueron al canvas en vez de a
la consola y crearon capas de texto y un `Frame 1` dentro de un archivo de entrega ajeno.
Se recuperó con `cmd+z`. **Verificá siempre el resultado del click antes de escribir.**

**Los IDs anidados caducan.** Los IDs de frames de primer nivel son estables. Los que
llevan `;` cambian cuando se oculta o reordena algo dentro de una instancia. No los
guardes entre sesiones.

**`findAll` de instancias se invalida al ocultar.** Ocultar un `atom-list-item` re-crea
los IDs de sus hermanos, y el bucle revienta con *"node does not exist"*. Hay que
re-consultar en cada iteración.

**Acotá la búsqueda al contenedor correcto.** Buscar `atom-list-item` en todo el frame
encontró 12 filas de la tabla de fondo en vez de la fila del diálogo. Buscá dentro del
`atom-dialog`, no del frame.

**La consola se bloquea si un script cuelga.** Un `getNodeByIdAsync` sobre una página no
cargada nunca resuelve y deja la consola muerta: toda evaluación posterior se ignora en
silencio. Se arregla cerrando y reabriendo DevTools.

**Editar texto necesita cargar la fuente primero.**

```js
const setTxt = async (t, v) => {
  for (const s of t.getStyledTextSegments(['fontName'])) await figma.loadFontAsync(s.fontName);
  t.characters = v;
};
```

**El autocompletado de la consola se traga el Enter.** Terminar la línea con `;` lo evita.

---

## Estructura de los componentes

| Componente | Qué hay que saber |
|---|---|
| `❖ atom-list-item` | Propiedades booleanas: `Trailing tag#4962:30`, `Show category#4964:81`, `Show description#4962:55`, `Trailing icon#4962:25`. El texto principal se llama `Text` dentro de `Text and supporting text`. |
| `❖ atom-tag` | `↳ label#2975:0` para el texto, `Intent` para el color (`Neutral`, `Info`, `Success`…). |
| `v7-icon (pro)` | El glifo se cambia con la propiedad **`icon-name#1:13`**, no con `Glyph` (que suele venir vacía). |
| `❖ atom-text-field` | El placeholder es el TEXT que no se llama `Label text` ni `Supportive text`. Puede estar nombrado `Small`. |
| Modales | Hijos directos del frame: `Layout`, `backdrop` (RECTANGLE), `❖ atom-dialog` (INSTANCE). El backdrop se llama **`backdrop`**, no `overlay`. |

---

## Conexión

La conexión con el Mac se cae seguido y el permiso de computer-use **expira a los 30
minutos sin actividad**. Cuando pase, hay que volver a pedir acceso con
`computer_resolve_access` + `computer_request_access`.

El shell del escritorio (`device_bash`) corre en una **VM Linux aislada**, no es mi shell
de macOS: no tiene mis credenciales de git ni mi keychain. Y Terminal solo se puede
otorgar en modo *click*, sin escritura. **Conclusión: los `git push` los hago yo.**
