let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 5.0;
const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7.0) {
    console.log("Aprovado, parabéns!");
}
else if(media < 6.9 && media >= 5.0){
    console.log("Em recupração!");
}
else{
    console.log("Reprovado, estuda mais ai capenga");
}