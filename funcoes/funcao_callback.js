function processopedido(valor, quantidade, operacao) {
    return operacao(valor, quantidade);
}

function calculartTotal(preco, qtd) {
    return preco * qtd
}

let resultado = calculartTotal(370, 871, calculartTotal);

// Imprimir com template string
console.log(`Total do pedido: ${resultado}`);
