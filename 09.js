function converterTempo() {
    const segundos = parseInt(document.getElementById("segundos").value);

    const dias = Math.floor(segundos / 86400);
    const horas = Math.floor((segundos % 86400) / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const resultado = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundosRestantes} segundos.`;

    document.getElementById("resultado").textContent = resultado;
}
