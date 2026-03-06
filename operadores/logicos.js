let temDinheiro = true;
let estaChovendo = false;
let carroNaGaragem = false;

let resultadoAND = " Voce vai ao shopping?";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = " Voce vai ao shopping";
resultadoOR += temDinheiro || carroNaGaragem;
console.log(resultadoOR);