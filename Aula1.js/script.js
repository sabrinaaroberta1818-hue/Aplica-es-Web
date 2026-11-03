const totalConta = prompt("Qual é o valor total da conta?");
const porcentagem = prompt("Qual é a porcentagem de gorjeta?");
const divisao = prompt("Em quantas pessoas a conta será dividida?");
const Totalconta = Number(totalConta) / Number(divisao);
alert(`Resumo da Conta: \n
    Consumo: R$ ${totalConta} \n
    Gorjeta: R$ ${totalConta * (porcentagem / 100)} \n
    Total com Gorjeta: R$ ${totalConta * (1 + (porcentagem / 100))} \n
    Divisão por pessoa (${divisao} pessoas): R$ ${Totalconta}`);