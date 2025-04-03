var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if(estadoLicuadora =="apagada") {
        estadoLicuadora == "encendida";
        licuadora.classList.add("active");
        console.log("me prendiste");
    } else {
        estadoLicuadora = "apagada"
        licuadrora.classList.remove ("active");
        console.log("me apagaste");
    }
}