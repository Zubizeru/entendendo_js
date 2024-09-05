    // Montagem da função de cálculo
    function calcularAreaRetangulo(base, altura) {
        let area = base * altura;
        return area;
    }

    // Declarando as variáveis
    let infoPrompt = "Informe a Base do Retângulo:";
    let baseRetangulo = parseInt(prompt(infoPrompt));
    infoPrompt = "Informe a Altura do Retângulo:";
    let alturaRetangulo = parseInt(prompt(infoPrompt));

    // Chamando a função
    let resultado = calcularAreaRetangulo(baseRetangulo, alturaRetangulo);
    alert(`A área do retângulo é: ${resultado}`);
