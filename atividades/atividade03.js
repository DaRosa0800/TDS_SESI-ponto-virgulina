let nome = "Boleslau";
let idade = 82;
let passeVip = false;

if (idade >= 22 && passeVip == true) {
    console.log("O senhor está liberado para entrar no local!");
}
else if(idade >= 22 && passeVip == false){
    console.log("O senhor não entra no local sem um Passe Vip!");
}
else{
    console.log("O senhor não atinge nenhum requisito mínimo para entrar no local!");
    
} 