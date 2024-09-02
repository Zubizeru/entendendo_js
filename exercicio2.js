   /*Solicite ao usuário um número de 1 a 7 e exiba em texto o dia da semana representado conforme abaixo.
1. Domingo
1. Segunda-feira
1. Terça-feira
1. Quarta-feira
1. Quinta-feira
1. Sexta
1. Sábado
*/

let dia_escolhido = (1, 2, 3, 4, 5, 6, 7);

dia_escolhido = (prompt("Informe o dia da Semana a Exibir:"));

if (dia_escolhido == 1) { 
    mensagem = "Hoje é Domingo";
}

else if (dia_escolhido == 2) {
    mensagem = "Hoje é Segunda-Feira";
}

else if (dia_escolhido == 3) { 
    mensagem = "Hoje é Terça-Feira"; 
}

else if (dia_escolhido == 4) { 
    mensagem = "Hoje é Quarta-Feira"; 
}

else if (dia_escolhido == 5) { 
    mensagem = "Hoje é Quinta Feira"; 
}

else if (dia_escolhido == 6) { 
    mensagem = "Hoje é Sexta-Feira"; 
}

else if (dia_escolhido == 7) { 
    mensagem = "Hoje é Sábado"; 
}

else { 
    mensagem = "Dia da semana não Reconhecido"; 
}

alert(mensagem); 


