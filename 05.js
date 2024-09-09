function converter() {
    const palavra = document.getElementById("palavra").value;

    const maiusculas = palavra.toUpperCase();

    const minusculas = palavra.toLowerCase();

    document.getElementById("resultado").textContent = `Maiúsculas: ${maiusculas}, Minúsculas: ${minusculas}`;
}
