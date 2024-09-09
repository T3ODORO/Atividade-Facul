function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const peso1 = parseFloat(document.getElementById("peso1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const peso2 = parseFloat(document.getElementById("peso2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const peso3 = parseFloat(document.getElementById("peso3").value);

    const somaPesos = peso1 + peso2 + peso3;
    const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

    alert(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
}
