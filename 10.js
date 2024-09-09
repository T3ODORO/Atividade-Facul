function separarDigitos() {
    const numero = document.getElementById("numero").value;

    if (numero.length !== 5) {
        document.getElementById("resultado").textContent = "Digite um número de cinco dígitos.";
        return;
    }

    const digitosSeparados = numero.split("").join("  "); 
        
    document.getElementById("resultado").textContent = digitosSeparados;
}
