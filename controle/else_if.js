// Desafio 

/*let nota = 9.1;
const media = 8;

if(nota >= media){
    console.log("Aprovado!");
}
else if(nota >= 5){
    console.log("Recuperação!");
}
else{
    console.log("Reprovado!");
}
*/

let n1 = 7.5;
let n2 = 8.0;
let n3 = 5.0;
let media = (n1 + n2 + n3) / 3;

if (media >= 7.5) {
    console.log("Aprovado, parabéns!");
}
else if(media < 7.5 && media >= 5.0){
    console.log("Em recupração!");
}
else{
    console.log("Reprovado, estuda mais otário");
}