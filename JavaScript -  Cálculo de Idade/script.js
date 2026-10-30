const nome = prompt("Qual é o seu nome?");
const anoNascimento = prompt("Qual é o seu ano de nascimento?")
const idade = 2026 - Number(anoNascimento)
alert(`Olá, ${nome}!. Sua idade é: ${idade}, não é?`);