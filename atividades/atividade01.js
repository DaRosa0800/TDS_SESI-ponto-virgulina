let preco = 3057;
let estoque = false;
let nome = "Pipa Astrolimatonica";

console.log("O item " + nome + " custa " + preco + "R$");

if (estoque <= false){
    console.log("Está sem estoque!");
}else if (estoque >= true){
    console.log("Está no estoque!");
}