const total = prompt("Informe o valor total da conta: ");
const pessoas = prompt("Informe quantas pessoas irão dividir o valor:");
let resultadoDivisao = Number(total)/Number(pessoas);
alert(`RESUMO DA CONTA: \n Consumo: R$${total}. \n Divisão por pessoa (${pessoas} pessoas): R$ ${resultadoDivisao}`);