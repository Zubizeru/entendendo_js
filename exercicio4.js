    // Faça um algoritmo que leia três números e mostre o maior deles.

let numero1 = parseFloat(prompt("Digite o Primeiro Número"));
let numero2 = parseFloat(prompt("Digite o Segundo Número"));
let numero3 = parseFloat(prompt("Digite o Terceiro Número"));

// Verifica se os números são válidos
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Todos os números devem ser válidos.");
} else {
    let mensagem;

    // Comparações
    if (numero1 >= numero2 && numero1 >= numero3) {
        mensagem = `O maior número é o ${numero1}.`;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mensagem = `O maior número é o ${numero2}.`;
    } else {
        mensagem = `O maior número é o ${numero3}.`;
    }

    alert(mensagem);
}