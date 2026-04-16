const compra = 10;
let descontoDaCompra = compra >= 100 ? descontoDaCompra = true && compra - (compra * 0.10) : descontoDaCompra = false && compra;

console.log(`O  preço final da compra foi ${descontoDaCompra}`);