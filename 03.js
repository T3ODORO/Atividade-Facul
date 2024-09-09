function verificarParImpar() {
    const numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, digite um número válido.";
    } else {
        if (numero % 2 === 0) {
            document.getElementById("resultado").textContent = `${numero} é um número PAR.`;
        } else {
            document.getElementById("resultado").textContent = `${numero} é um número ÍMPAR.`;
        }
    }
}
