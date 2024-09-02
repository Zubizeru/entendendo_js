     /*Faça um algoritmo que pergunte em que turno o usuário estuda. 
Peça para digitar M- Matutino, V- Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso digitado*/

let textoMenu = `Informe o turno que você estuda:
                 M- Matutino
                 V- Vespertino
                 N- Noturno`;

let turno_escolhido = prompt(textoMenu);
let turno_nome;

switch (turno_escolhido) {
    case "M":
        turno_nome = "Matutino";
        break
    case "V":
        turno_nome = "Vespertino"
        break
    case "N":
        turno_nome = "Noturno"
        break
    default:
        turno_nome = "Turno Inválido"
        break
}

mensagem = (`O turno escolhido foi: ${turno_nome}`);

alert(mensagem)


