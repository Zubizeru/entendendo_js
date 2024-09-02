/*Faça um algoritmo que faz uma conversão de temperaturas onde .
 
1. Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
 
2. Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9 */

let textoMenu = `Informe o tipo de conversão que você quer fazer:
1- Celsius para Fahrenheit
2- Fahrenheit para Celsius`;

let conversao_escolhida = prompt(textoMenu);
let mensagem;

switch (conversao_escolhida) {
    case "1":
        let celpfah = parseFloat(prompt("Digite a temperatura em Celsius para converter para Fahrenheit:"));
        if (isNaN(celpfah)) {
            alert("Digite um número válido.");
        } else {
            let resultado_celpfah = (celpfah * 9 / 5) + 32;
            mensagem = "A temperatura em Fahrenheit é " + resultado_celpfah.toFixed(2);
            alert(mensagem);
        }
        break;

    case "2":
        let fahpcel = parseFloat(prompt("Digite a temperatura em Fahrenheit para converter para Celsius:"));
        if (isNaN(fahpcel)) {
            alert("Digite um número válido.");
        } else {
            let resultado_fahpcel = (fahpcel - 32) * 5 / 9;
            mensagem = "A temperatura em Celsius é " + resultado_fahpcel.toFixed(2);
            alert(mensagem);
        }
        break;

    default:
        mensagem = "Opção inválida. Por favor, escolha 1 ou 2.";
        alert(mensagem);
        break;
}