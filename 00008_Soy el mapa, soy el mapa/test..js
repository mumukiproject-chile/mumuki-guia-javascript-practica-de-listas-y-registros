describe("", function(){
  it("ganancias de los balances de un periodo me devuelve solo los valores de las ganancias", function() {
    assert.deepEqual(ganancias([{ mes: "marzo", ganancia: 10 }, { mes: "agosto", ganancia: 2 }, { mes: "septiembre", ganancia:0 }]), [10, 2, 0])
  })
})