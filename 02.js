function calcular() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 / numero2;

    const mensagem = `Resultados:
    Soma: ${soma}
    Subtração: ${subtracao}
    Multiplicação: ${multiplicacao}
    Divisão: ${divisao}`;

    alert(mensagem);
}
