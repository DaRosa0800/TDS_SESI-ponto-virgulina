function criarCalculadoraDesconto(desconto) {
    return function(preco) {
        return preco - (preco * desconto);
    }
}

const desconto10 = criarCalculadoraDesconto(0.10);
const desconto20 = criarCalculadoraDesconto(0.50);

console.log(desconto10(200));
console.log(desconto10(1870));