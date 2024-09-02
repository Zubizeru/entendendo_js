/* Desenvolva um gerador de tabuada, capaz de gerar 
   através de qualquer número inteiro, solicitando 
   ao usuário o número e mostrando na tela conforme 
   o exemplo abaixo:
   Tabuada de 5
   5 x 1 = 5
   5 x 2 = 10
   ...
   5 x 10 = 50
   Ao final, pergunte ao usuário se ele deseja 
   realizar uma outra geração ou sair.
*/

let continuar = "s";

do {
    let numero = parseFloat(prompt("Bem-vindo à tabuada, digite um número para multiplicar:"));
    // Identificando se o número é válido
    if (isNaN(numero)) {
        alert("Número inválido ou em branco. Por favor, tente novamente.");
    } else {
        // Criando sequência
        let mensagem = "";
        for (let i = 1; i <= 10; i++) {
            mensagem += `${numero} x ${i} = ${numero * i}\n`;
        }
        alert(mensagem);
    }
    // Pergunta para continuar
    continuar = prompt("Deseja executar a tabuada novamente? s=Sim n=Não");
} while (continuar === "s");