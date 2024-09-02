/* Você foi contratado para desenvolver o programa 
   que monta a tabela de preços de pães, de 1 até 50 pães, 
   a partir do preço do pão informado pelo usuário,
   conforme o exemplo abaixo:
   Preço do pão: R$ 0,25 unid.
   1 = R$ 0,25  
   2 = R$ 0,50 
   ...
   50 = R$ 12,50
*/

// Pergunta
let preço = parseFloat(prompt("Qual é o preço do pão?"));

// Identificando se o número é válido
if (isNaN(preço)) {
    alert("Preço inválido ou em branco. Por favor, tente novamente.");
} else {
    // Criando sequência
    let resultado = `Preço do pão: R$ ${(preço).toFixed(2)} unid. <br>`;
for (let i = 1; i <= 50; i++) {
    resultado += `${i} = R$ ${(preço * i).toFixed(2)} <br>`;
}
    document.write(resultado); // Usando document.write para mostrar a tabela de preços
}