document.addEventListener("DOMContentLoaded", function() {

    const fechaEvento = new Date("2025-12-20T00:00:00").getTime();
    const contador = document.getElementById("contador");

    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaEvento - ahora;

        if (diferencia < 0) {
            contador.innerHTML = "¡La feria ya comenzó!";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
});
