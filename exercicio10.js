     let textoMenu = `Informe qual operação você deseja fazer:
                     1   Soma
                     2   Subtração
                     3   Multiplicação
                     4   Divisão
                     5   Potenciação
                     6   Radiciação
                     `;

    let operação_escolhida = prompt(textoMenu);
    let mensagem;

    switch (operação_escolhida) {
        case "1":
            let soma1 = parseFloat(prompt("Digite o primeiro número para somar:"));
            let soma2 = parseFloat(prompt("Digite o segundo número:"));
            let resultado_soma = soma1 + soma2;
            mensagem = "O resultado da soma é " + resultado_soma;
            break;

        case "2":
            let subtração1 = parseFloat(prompt("Digite o primeiro número para subtrair:"));
            let subtração2 = parseFloat(prompt("Digite o segundo número:"));
            let resultado_subtração = subtração1 - subtração2;
            mensagem = "O resultado da subtração é " + resultado_subtração;
            break;

        case "3":
            let multiplicação1 = parseFloat(prompt("Digite o primeiro número para multiplicar:"));
            let multiplicação2 = parseFloat(prompt("Digite o segundo número:"));
            let resultado_multiplicação = multiplicação1 * multiplicação2;
            mensagem = "O resultado da multiplicação é " + resultado_multiplicação;
            break;

        case "4":
            let divisão1 = parseFloat(prompt("Digite o primeiro número para dividir:"));
            let divisão2 = parseFloat(prompt("Digite o segundo número:"));
            if (divisão2 === 0) {
                mensagem = "Não é possível dividir por zero.";
            } else {
                let resultado_divisão = divisão1 / divisão2;
                mensagem = "O resultado da divisão é " + resultado_divisão;
            }
            break;

        case "5":
            let potenciação1 = parseFloat(prompt("Digite a base para a potenciação:"));
            let potenciação2 = parseFloat(prompt("Digite o expoente:"));
            let resultado_potenciação = potenciação1 ** potenciação2;
            mensagem = "O resultado da potenciação é " + resultado_potenciação;
            break;

        case "6":
            let radiciação1 = parseFloat(prompt("Digite o número para radicializar:"));
            let radiciação2 = parseFloat(prompt("Digite o índice da raiz:"));
            if (radiciação2 === 0) {
                mensagem = "O índice da raiz não pode ser zero.";
            } else {
                let resultado_radiciação = radiciação1 ** (1 / radiciação2);
                mensagem = "O resultado da radiciação é " + resultado_radiciação;
            }
            break;

        default:
            mensagem = "Operação inválida. Por favor, escolha um número entre 1 e 6.";
            break;
    }

    alert(mensagem);
