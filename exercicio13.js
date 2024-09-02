    let usuario;
    let senha;

    // Validação do nome de usuário
    do {
        usuario = prompt("Digite o nome de usuário:");
        
        if (!usuario || usuario.trim() === "") {
            alert("Nome do usuário é obrigatório.");
        }
    } while (!usuario || usuario.trim() === "");

    // Validação da senha
    do {
        senha = prompt(`Digite uma senha diferente do seu nome de usuário ( seu nome de usuário escolhido foi ${usuario}):`);

        if (usuario === senha) {
            alert("A senha não pode ser igual ao nome de usuário. Tente novamente.");
        }
        if (!senha) {
            alert("A senha é obrigatoria. Tente novamente.");
        }
    } while (usuario === senha || !senha);

    alert(`Nome de usuário ${usuario} e senha ${senha} aceitos!`);
