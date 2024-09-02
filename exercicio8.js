/* Faça um algoritmo que o usuário escreva o nome e o preço de três produtos e assim que terminar de escrever o último 
   produto, mostre o nome e o valor do produto mais barato */

let nome_do_produto1 = prompt("Informe o nome do primeiro produto:");
let preço_do_produto1 = parseFloat(prompt("Informe o preço do primeiro produto:"));
if (isNaN(preço_do_produto1) || !nome_do_produto1 || nome_do_produto1.trim() === "") {
    alert("Erro ao identificar nome ou preço do primeiro produto, verifique novamente");
} else {
    let nome_do_produto2 = prompt("Informe o nome do segundo produto:");
    let preço_do_produto2 = parseFloat(prompt("Informe o preço do segundo produto:"));
    if (isNaN(preço_do_produto2) || !nome_do_produto2 || nome_do_produto2.trim() === "") {
        alert("Erro ao identificar nome ou preço do segundo produto, verifique novamente");
    } else {
        let nome_do_produto3 = prompt("Informe o nome do terceiro produto:");
        let preço_do_produto3 = parseFloat(prompt("Informe o preço do terceiro produto:"));
        if (isNaN(preço_do_produto3) || !nome_do_produto3 || nome_do_produto3.trim() === "") {
            alert("Erro ao identificar nome ou preço do terceiro produto, verifique novamente");
        } else {
            let mensagem;
            if (preço_do_produto1 <= preço_do_produto2 && preço_do_produto1 <= preço_do_produto3) {
                mensagem = `O produto mais barato é ${nome_do_produto1}, que custa R$${preço_do_produto1.toFixed(2)}.`;
            } else if (preço_do_produto2 <= preço_do_produto1 && preço_do_produto2 <= preço_do_produto3) {
                mensagem = `O produto mais barato é ${nome_do_produto2}, que custa R$${preço_do_produto2.toFixed(2)}.`;
            } else {
                mensagem = `O produto mais barato é ${nome_do_produto3}, que custa R$${preço_do_produto3.toFixed(2)}.`;
            }
            alert(mensagem);
        }
    }
}