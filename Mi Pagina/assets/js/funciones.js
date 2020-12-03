var cant = 4;
function validar(){
    var text;
    const botonReint = document.getElementById("btn-reintentar");
    const botonAceptar = document.getElementById("btn-aceptar");
    var respuesta = document.getElementById("imp-respuesta").value; 

    if (cant === 1){
        botonReint.disabled = false;
        botonAceptar.disabled = true;
    }
    respuesta = respuesta.toUpperCase();

    if (respuesta === "INGLATERRA" || respuesta === "GRAN BRETAÑA") {
        text = "FELICITACIONES, su respuesta es correcta.";
        document.getElementById("validacion").innerHTML = text;
        document.getElementById("validacion").className = "alert alert-success";
        botonAceptar.disabled = true;
    } else {
        cant--;
        switch(cant) {
            case 0:
                alert("No le quedan más intentos, presione el botón Reintentar");
                document.getElementById("validacion").innerHTML = "Perdió el juego. Inténtelo nuevamente.";
                document.getElementById("validacion").className = "alert alert-danger";
                break;
            case 2:
                alert("Respuesta equivocada - Le restan " + cant + " intentos.");
                document.getElementById("validacion").innerHTML = "Pista N° 1: El país está formado por una isla.";
                document.getElementById("validacion").className = "alert alert-info";
                document.getElementById("imp-respuesta").value = "";
                break;
            case 1:
                alert("Respuesta equivocada - Le restan " + cant + " intentos.");
                document.getElementById("validacion").innerHTML = "Pista N° 2: El país esta gobernado por la reina mas longeva del mundo.";
                document.getElementById("validacion").className = "alert alert-info";
                document.getElementById("imp-respuesta").value = "";
                break;
            default:
                alert("Respuesta equivocada - Le restan " + cant + " intentos.");
                document.getElementById("validacion").innerHTML = respuesta + " no es la respuesta correcta."
                document.getElementById("validacion").className = "alert alert-warning";
                document.getElementById("imp-respuesta").value = "";
        }
    }
}

function reintentar(){
    location.reload();
}