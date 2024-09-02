/* Faça um algoritmo que pergunte o nome do usuário, o quanto ganha por hora e o número de horas trabalhadas no mês.
   Calcule o resultado e mostre o nome e o total da renda recebida no mês. 
*/

let nome_do_usuario = prompt("Informe o seu nome:");

// Verificar se o nome foi inserido corretamente
if (!nome_do_usuario || nome_do_usuario.trim() === "") {
    alert("Nome do usuário é obrigatório.");
} else {
    let ganho_por_hora = parseFloat(prompt("Informe o quanto você ganha por hora:"));
    if (isNaN(ganho_por_hora)) {
        alert("Por favor, coloque um número válido para o valor por hora.");
    } else {
        let horas_trabalhadas = parseFloat(prompt("Informe a quantidade de horas trabalhadas:"));
        if (isNaN(horas_trabalhadas)) {
            alert("Por favor, coloque um número válido para as horas trabalhadas.");
        } else {
            let renda_total = ganho_por_hora * horas_trabalhadas;
            let mensagem = `${nome_do_usuario} recebe R$${renda_total.toFixed(2)} de renda total por mês.`;
            alert(mensagem);
        }
    }
}