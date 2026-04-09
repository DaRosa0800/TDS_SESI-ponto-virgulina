const Estoque = ["CPU", "GPU", "Fonte", "Placa-mãe", "SSD", "RAM"]; // Criação de estoque com produtos

Estoque.push ("CPU"); // Adiciona mais um produto ao estoque

// Declaração das variáveis
let produtoComprado = 40;
let valorTotal = 10000;
let nomeCliente = "Emanuel";
let idadeCliente = 18;
let temCupom = true;
let quantidadeDeItens;
let vendaPossivel;

// Declaração da função
function processarVenda(valorTotal, temCupom, quantidadeDeItens){
    let valorFinal = valorTotal > 500 || temCupom == true ? valorTotal = valorTotal * 0.5 : valorTotal; // Se o valor total for maior que 500 ele multiplica por 0.5 para fazer o desconto
    
    return valorTotal;
}

console.log(`Valor da compra: R$${processarVenda(valorTotal, temCupom)}`); // Exibindo o return da função

// If para verificar a idade
if (idadeCliente >= 16) {
    console.log(`Venda para ${nomeCliente} autorizada!`); 
    vendaPossivel = true;
}
else {   
    console.log(`Venda restringida! Motivo: Idade abaixo da permitida!`);
    vendaPossivel = false;
}

console.log("\n")

// If para a venda se for possível
if (vendaPossivel == true) {
    for (let i = 0; i < produtoComprado; i++) { // Loop for com varavel produtos comprados para facilitar
        console.log(`Item despachado: ${Estoque[1]}`); // vai entrar o produto correspondendo a interação de loop e for
    }

    for (let i = 0; i < produtoComprado; i++) {
        console.log(`Item despachado: ${Estoque[1]}`);
        Estoque.shift;
    }
}

quantidadeDeItens = Estoque.length; // Definir quantidade de itens

console.log("\n");

// Último console.log para o relatório
console.log(`Relatório:
O cliente ${nomeCliente} fez uma compra de ${processarVenda(valorTotal, temCupom)}.

itens restantes no estoque: ${quantidadeDeItens}`);
