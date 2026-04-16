/* 
Atalho Comentário de várias linhas
Alt + Shift + A

Desafio: Criar uma função que receba preco e desconto em % 
e mostre o valor final com desconto.
Criar outra função que receba preço e quantidade
e mostre o valor total da compra
*/


const produto1 = "Península Iberica";
const preco1 = 1234;
const desconto1 = calculadoraDesconto(preco1, 0.15);
const quantidade = 6;
const valorTotal1 = calculadoraCompras(preco1, quantidade, desconto);
const desconto = 0.15;

function calculadoraDesconto(preco, desconto) {
    return preco - (preco * desconto);
}

console.log(`O preço do ${produto1} com desconto é ${desconto}`);

function calculadoraCompras(preco, quantidade, desconto) {
    return quantidade * (preco - (preco * desconto));
}

console.log(`O valor total da compra do ${produto1} é de R$ ${valorTotal1}`);