¡Vamos a terminar esta lección con todo! :muscle:

Para eso, vamos a hacer las siguientes funciones:

* `meses`, que, dada una lista con registros, devuelve una lista de meses :calendar:;
* `afortunados`, que filtra aquellos registros que tuvieron una ganancia mayor a $100.000 :dollar:;
* `mesesAfortunados` devuelve aquellos meses que fueron afortunados.

```javascript
ム meses([
    { mes: "enero", ganancia: 87.000 }, 
    { mes: "febrero", ganancia: 100.000 }, 
    { mes: "marzo", ganancia: 102.000 }, 
    { mes: "abril", ganancia: 230.000 }, 
    { mes: "mayo", ganancia: -1.000 }
  ])
["enero", "febrero", "marzo", "abril", "mayo"]

ム afortunados([
      { mes: "enero", ganancia: 87.000 }, 
      { mes: "febrero", ganancia: 100.000 }, 
      { mes: "marzo", ganancia: 102.000 }, 
      { mes: "abril", ganancia: 230.000 }, 
      { mes: "mayo", ganancia: -1.000 }
    ])
[ { mes: "marzo", ganancia: 102.000 }, { mes: "abril", ganancia: 230.000 }]

ム mesesAfortunados([
    { mes: "enero", ganancia: 87.000 }, 
    { mes: "febrero", ganancia: 100.000 }, 
    { mes: "marzo", ganancia: 102.000 }, 
    { mes: "abril", ganancia: 230.000 }, 
    { mes: "mayo", ganancia: -1.000 }
  ])
["marzo", "abril"]
```
> Define las funciones `meses`, `afortunados`, `mesesAfortunados`.
