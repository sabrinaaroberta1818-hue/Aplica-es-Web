const corPulseira = prompt("Digite a cor da pulseira (vermelha, amarela, verde ou vermelho):");
const idadePaciente = parseInt(prompt("Digite a idade do paciente:"));
const gestante = prompt("A paciente está gestante? (s/n):");

if (corPulseira === "vermelha") {
    alert('Atendimento de Emergência: Sala de trauma imediata')
}

else if(corPulseira === "amarela"){
    if (idadePaciente >= 60 || gestante === "s") {
        alert('Atendimento Urgente: Prioridade Especial Preferencial')
    }
    else if(idadePaciente < 60 && gestante === "n"){
        alert('Atendimento Urgente: Fila padrão amarela')
    }
}

else if(corPulseira === "verde" && gestante === "s"){
    if(idadePaciente >= 12)
        {
    alert('Encaminhar para Clínica Geral')
    }
    else if(idadePaciente < 12)
        {
    alert('Encaminhar para Pediatria')
    }
}