function calcularJuros() {
    const deposito = parseFloat(document.getElementById("deposito").value);
    const taxa = parseFloat(document.getElementById("taxa").value) / 100; 
    const tempo = parseFloat(document.getElementById("tempo").value);

    const montante = deposito + (deposito * taxa * tempo);
    const rendimento = montante - deposito;

    document.getElementById("resultado").textContent = `Rendimento: R$ ${rendimento.toFixed(2)}
    Valor total após o rendimento: R$ ${montante.toFixed(2)}`;
}
