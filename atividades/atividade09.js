function mensagem0(hora0){
    let mensagem = "Eae pae!";

    if (hora0 >= 0 && hora0 < 12) {
        mensagem += "Bom dia!";
    } else if (hora0 >= 12 && hora0 < 18) {
        mensagem += "Boa tarde!";
    } else if (hora0 >= 19 && hora0 < 24) {
        mensagem += "Boa noite!"
    } else {
        mensagem += "Esse horário ta errado bota outro ai!";
    }
}

console.log(mensagem0(9));