La función `gananciaSemestre` anterior tiene dos problemas :frowning::

1. Es muy repetitiva y tediosa de escribir. ¡Tenemos que hacer muchas sumas a mano!
2. No es genérica. Como bien dice su nombre, sólo sirve para sumar las ganancias de 6 balances:

  * si la lista tiene más de seis balances, sólo suma los primeros;
  * si tiene menos, no funciona (¿recuerdas cuando te dijimos que si te pasabas del índice podía suceder algo malo? :stuck_out_tongue:)

Lo que nos gustaría es poder sumar las ganancias de todos los balances de una lista, sin importar cuántos haya realmente; queremos una función `gananciaTotal` que pueda sumar balances de cualquier período de meses: semestres, cuatrimestres, trimestres, etc. ¡Qué difícil!

> ¡Relájate! Ya tenemos nuestra versión; pruébala con las siguientes consultas:
> 
> ```javascript
ム gananciaTotal([
      { mes: "enero", ganancia: 2 }, 
      { mes: "febrero", ganancia: 3 }
  ])
ム gananciaTotal([
      { mes: "enero", ganancia: 2 }, 
      { mes: "febrero", ganancia: 3 }, 
      { mes: "marzo", ganancia: 1 }, 
      { mes: "abril", ganancia: 8 }, 
      { mes: "mayo", ganancia: 8 }, 
      { mes: "junio", ganancia: -1 }
  ])
ム gananciaTotal([])
```

Después síguenos para que te contemos cómo lo hicimos. :wink:
