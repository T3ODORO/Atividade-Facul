function contarPalavras() {
    const frase = document.getElementById("frase").value;

    const fraseSemEspacos = frase.trim();

    const palavras = fraseSemEspacos.split(/\s+/);

    document.getElementById("resultado").textContent = `Número de palavras: ${palavras.length}`;
}
