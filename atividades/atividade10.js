let pcGamer = ["Processador", "Placa mãe", "Memória RAM", "Placa de Vídeo", "Water Cooler"]
console.log(pcGamer.join(' - '));

pcGamer.push("Fonte de Alimentação");
pcGamer.shift();

console.log(`\n${pcGamer.join(' - ')}`);