//ATIVIDADE 1 
const nota1 = 7.5
const nota2 = 8.0
const nota3 = 6.5

const media = (nota1 + nota2 + nota3) / 3
const mediaFinal = media.toFixed(2)
console.log(mediaFinal)

//ATIVIDADE 2
const valorA = 10;
const valorB = "10";

if (valorA === valorB){
    alert('Os valores são iguais.');
}
else if (valorA !== valorB){
    alert('Os valores não são iguais.');
}

//ATIVIDADE 3

const pontuacao = 85;

if (pontuacao >= 90) {
    console.log("Classificação: A.");
}

else if (pontuacao >= 70){
    console.log("Classificação: B.");
}

else{
    console.log("Classificação: Precisa melhorar.");
}


//ATIVIDADE 4
const idade = Number(prompt("Informe sua idade:"))
const altura = Number(prompt("Informe sua altura:"))
let podeEntrar = true;

if (idade >= 16 && altura >= 1.60){
    podeEntrar = true;
}
else{
    podeEntrar = false;
}

alert("Apto? " + podeEntrar)
