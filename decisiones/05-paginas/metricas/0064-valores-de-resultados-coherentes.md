# 0064 — Resultados: los valores de las métricas cumplen su relación

**Estado:** vigente
**Fecha:** 2026-09-28
**Módulo:** Resultados de campañas · métricas
**Alcance:** Campañas · Resultados — todas las tablas de estáticas y dinámicas, en las dos pages.
Completa a [0063](0063-metricas-de-resultados.md): responde su pregunta abierta.

## Contexto

Con [0063](0063-metricas-de-resultados.md) las tablas quedaron con los valores que tenían: Enviados y
Errores repetían el mismo número, Clientes no era Enviados + Errores y Leídos repetía Entregados. En
la referencia `01.3 · 01` solo la primera fila cumplía la relación (10 = 5 + 5).

## Decisión

Los valores de ejemplo cumplen la relación que dicen los tooltips:

- **Campaña terminada** (Enviada, Con error) y **dinámica Activa**: Clientes = Enviados + Errores.
- **En proceso, En pausa y Detenida**: Enviados + Errores ≤ Clientes. La diferencia son los clientes
  a los que todavía no se envió, o a los que ya no se va a enviar.
- **Agendada**: Clientes es el tamaño de la lista; las demás métricas van en 0.
- Entregados ≤ Enviados. Leídos ≤ Entregados. Respondidos ≤ Entregados.
- Una campaña tiene los mismos valores en todas las tablas. La excepción es la fila 1 de los menús
  de `01.4`, que cambia de estado según el menú.

Valores de estáticas (Clientes · Enviados · Errores · Entregados · Leídos · Respondidos):

| Campaña | Estado | Valores |
|---|---|---|
| Encuesta satisfacción Q2 | Enviada | 10 · 5 · 5 · 3 · 2 · 1 |
| Promo Black Friday 2026 | Enviada | 3 · 3 · 0 · 3 · 2 · 1 |
| Recordatorio de pago septiembre | Enviada | 3 · 3 · 0 · 3 · 2 · 0 |
| Bienvenida nuevos clientes | Enviada | 27 · 13 · 14 · 12 · 9 · 5 |
| Lanzamiento colección otoño-invierno 2026… | Enviada | 2 · 1 · 1 · 1 · 1 · 0 |
| Reactivación clientes inactivos | Enviada | 8 · 3 · 5 · 3 · 2 · 1 |
| Confirmación de citas octubre | En proceso | 3 · 1 · 1 · 1 · 1 · 0 |
| Aviso de envío de pedidos | En pausa | 25 · 11 · 4 · 10 · 7 · 3 |
| Preventa Cyber Monday | Con error | 0 · 0 · 0 · 0 · 0 · 0 |
| Encuesta NPS postventa | Detenida | 96 · 4 · 4 · 3 · 2 · 1 |
| Programa de referidos | Agendada | 159 · 0 · 0 · 0 · 0 · 0 |
| Felicitación de cumpleaños | Enviada | 5 · 5 · 0 · 4 · 4 · 2 |

Fila 1 de `01.4`: Enviada sin errores (`01.4 · 01`) 5 · 5 · 0 · 4 · 3 · 1; Detenida (`07`)
10 · 4 · 2 · 3 · 2 · 1; En proceso (`06`) 10 · 3 · 2 · 2 · 1 · 0; en los demás, la de la tabla.
El buscador (`01.2 · 06` y `11`) usa los mismos valores, fila por fila.

Dinámicas: Clientes = Enviados + Errores en todas las filas; Leídos pasa a ser menor que Entregados
(por ejemplo, Encuesta de satisfacción 83 · 79 · 4 · 59 · 47 · 21).

## Por qué

Pedido de diseño: *"ajustar los valores de todas las rows para que haga sentido"*, como decisión del
módulo y de las métricas que muestra, no del componente.

*Interpretación:*

- Las reglas para En proceso, En pausa, Detenida y Agendada son mías: los tooltips definen la base de
  cada métrica, no qué pasa con una campaña que no terminó.
- Los números son de ejemplo y los elegí yo. Se mantuvieron la fila 1 de la referencia, Clientes y
  Enviados donde ya cumplían, y el 159 de la Agendada que tenía `01.4 · 03`.
- Preventa Cyber Monday (Con error) sigue en 0 porque el menú `01.4 · 05` oculta «Descargar errores»
  (la fila no tiene errores, [0053](../../03-moleculas/atom-dropdown-menu/0053-acciones-no-disponibles-se-ocultan.md)).
  Los menús que muestran «Descargar errores» siguen con Errores mayor que 0.

## Consecuencias

- Las 97 tablas de Resultados (con la referencia y `01.3 · 06`) tienen estos valores; el color de
  cada celda sigue a su valor (0 en `fg/secondary`).
- `01.4 · 04.1`: la fila En pausa tiene 4 errores (antes 11).
- El buscador de dinámicas (`01.8 · 05–07`) muestra Encuesta de satisfacción con los valores nuevos.
