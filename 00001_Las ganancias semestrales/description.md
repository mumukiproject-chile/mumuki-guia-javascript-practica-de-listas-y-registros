Ana, contadora de una empresa :office:, tiene registros para representar los balances de cada mes y una lista para guardarlos. Por ejemplo, para el último semestre del año pasado registró los siguientes:

```javascript
//En julio ganó $5.000, en agosto perdió $1.200, etc.
let balancesUltimoSemestre = [
  { mes: "julio", ganancia: 5.000 }, 
  { mes: "agosto", ganancia: -1.200 }, 
  { mes: "septiembre", ganancia: 100.000 }, 
  { mes: "octubre", ganancia: 30.000 }, 
  { mes:  "noviembre", ganancia: 20.000 }, 
  { mes: "diciembre", ganancia: 0 }
];
```

Y nos acaba de preguntar: _"¿puedo saber la ganancia de todo **un semestre**?"_

_"Obvio, sólo tenemos que sumar las ganancias de todos los balances"_, dijimos, y escribimos el siguiente código:

```javascript
function gananciaSemestre(balances) {
  return balances[0].ganancia + balances[1].ganancia +
         balances[2].ganancia + balances[3].ganancia +
         balances[4].ganancia + balances[5].ganancia;
}
```

_"Gracias :plus1:"_, nos dijo Ana, y se fue a calcular las ganancias usando la función que le dimos. Pero al rato, volvió contándonos que también había registrado los balances del primer trimestre de este año:

```javascript
//En enero la empresa ganó $8.000, en febrero, $45.300, en marzo, $100.000
let balancesPrimerTrimestre = [
  { mes: "enero", ganancia: 8.000 }, 
  { mes: "febrero", ganancia: 45.300 }, 
  { mes: "marzo", ganancia: 100.000 }
];
```

Y nos preguntó: _"¿Puedo usar esta función que me dieron para calcular las ganancias del primer trimestre?"_. :thought_balloon:

> ¿Tiene algún problema la función `gananciaSemestre` que escribimos anteriormente? ¿Funcionará con los balances trimestrales? ¿Y con los cuatrimestrestrales?
> 
> ¡Pruébala en la consola!
