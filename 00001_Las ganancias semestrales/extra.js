let balancesUltimoSemestre = [
    {
        mes: 'julio',
        ganancia: 5
    },
    {
        mes: 'agosto',
        ganancia: -12
    },
    {
        mes: 'septiembre',
        ganancia: 100
    },
    {
        mes: 'octubre',
        ganancia: 30
    },
    {
        mes: 'noviembre',
        ganancia: 20
    },
    {
        mes: 'diciembre',
        ganancia: 0
    }
];
let balancesPrimerTrimestre = [
    {
        mes: 'enero',
        ganancia: 8
    },
    {
        mes: 'febrero',
        ganancia: 45.3
    },
    {
        mes: 'marzo',
        ganancia: 100
    }
];
function gananciaSemestre(balances) {
    return balances[0].ganancia + balances[1].ganancia + balances[2].ganancia + balances[3].ganancia + balances[4].ganancia + balances[5].ganancia;
}