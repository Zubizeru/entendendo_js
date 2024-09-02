    let numero = parseInt(prompt("Digite um número entre 1 e 999:"));
    let dezena_separada = (numero % 100);
    let centena = (numero - dezena_separada) / 100;
    let unidade = (dezena_separada % 10);
    let dezena = (dezena_separada - unidade) / 10;
    let mensagem = "";

    // Verificando se o número está dentro do intervalo permitido
    if (numero >= 1000 || numero < 1 || isNaN(numero)) {
        mensagem = "Número inválido, por favor, digite um número entre 1 e 999.";
    } else {
        // Plural para centena
        if (centena > 1) {
            mensagem = `${centena} centenas`;
        } else if (centena == 1) {
            mensagem = `${centena} centena`;
        }

        // Plural para dezena
        if (dezena > 1) {
            if (mensagem !== '') {
                if (unidade == 0) {
                    mensagem = `${mensagem} e ${dezena} dezenas.`;
                } else {
                    mensagem = `${mensagem}, ${dezena} dezenas`;
                }
            } else {
                mensagem = `${dezena} dezenas`;
            }
        } else if (dezena == 1) {
            if (mensagem !== '') {
                if (unidade == 0) {
                    mensagem = `${mensagem} e 1 dezena.`;
                } else {
                    mensagem = `${mensagem}, 1 dezena`;
                }
            } else {
                mensagem = `${dezena} dezena`;
            }
        }

        // Plural para unidade
        if (unidade > 1) {
            if (mensagem !== '') {
                mensagem = `${mensagem} e ${unidade} unidades.`;
            } else {
                mensagem = `${unidade} unidades`;
            }
        } else if (unidade == 1) {
            if (mensagem !== '') {
                mensagem = `${mensagem} e 1 unidade.`;
            } else {
                mensagem = `1 unidade.`;
            }
        }
    }

    alert(mensagem);
