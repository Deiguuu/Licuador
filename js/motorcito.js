var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora === "apagada") {
        estadoLicuadora = "encendida";  // Se corrige la asignación
        licuadora.classList.add("active");
        console.log("Me prendiste");
        hacerBrrBrr();
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");  // Se corrige "licuadrora" -> "licuadora"
        console.log("Me apagaste");
        hacerBrrBrr();
    }
}

function hacerBrrBrr() {
    if (sonidoLicuadora.paused) {
        sonidoLicuadora.play();
        botonLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
