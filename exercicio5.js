// Faça um algoritmo que leia três números e mostre o maior e o menor deles.

let numero1 = parseFloat(prompt("Digite o Primeiro Número"));
let numero2 = parseFloat(prompt("Digite o Segundo Número"));
let numero3 = parseFloat(prompt("Digite o Terceiro Número"));

// Verifica se os números são válidos
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Todos os números têm que ser válidos.");
} else {
    let maiorNumero;
    let menorNumero;

    // Encontrando o maior número
    if (numero1 >= numero2 && numero1 >= numero3) {
        maiorNumero = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        maiorNumero = numero2;
    } else {
        maiorNumero = numero3;
    }

    // Encontrando o menor número
    if (numero1 <= numero2 && numero1 <= numero3) {
        menorNumero = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menorNumero = numero2;
    } else {
        menorNumero = numero3;
    }

    // Exibindo o resultado
    let mensagem = `O maior número é o ${maiorNumero}, e o menor número é o ${menorNumero}.`;
    alert(mensagem);
}