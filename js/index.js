var resultado = 0;
salida = document.getElementById("salida")

tos = document.getElementById("tos");
frio = document.getElementById("frio");
popo = document.getElementById("popo");
garganta = document.getElementById("garganta");

musculo = document.getElementById("musculo");
cabeza = document.getElementById("cabeza");
fiebre = document.getElementById("fiebre");
pulmon = document.getElementById("pulmon");

debil = document.getElementById("debil");
viaje = document.getElementById("viaje");
visita = document.getElementById("visita");
paciente = document.getElementById("paciente");

salida.onclick = () =>{

    if(resultado>=0 && resultado<=2)
        alert("Ud puede padecer sintomas de estres.");
        else if(resultado>=3 && resultado <=5)
            alert("Ud deberia hidratarse adecuadamente, mantener buena higiene personal y pruebe dentro de 2 dias.");
            else if(resultado>=6 && resultado<=12)
                alert("Debe ir a una consulta Médica");
                else if (resultado>=13 && resultado<20)
                    alert("REPORTESE INMEDIATAMENTE A EPIDEMOLOGIA")
                    if(resultado == 20)
                        alert("Ud va a morir :3")
    
}

tos.onclick = () => {
    let cambio = document.querySelector("#Tos");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Tos.png";
        
        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Tos-gris.png";

        resultado-=1;

    }
}

frio.onclick = () => {
    let cambio = document.querySelector("#Frio");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "Iconos/Frio.png";

        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "Iconos/FrioGris.png";

        resultado-=1;

    }
}

popo.onclick = () => {
    let cambio = document.querySelector("#Popo");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Diarrea_Color.png";

        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Diarrea_Gris.png";

        resultado-=1;

    }
}

garganta.onclick = () => {
    let cambio = document.querySelector("#Garganta");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/DolorGarganta_Color_.png";

        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/DolorGarganta_Gris.png";

        resultado-=1;

    }
}

musculo.onclick = () => {
    let cambio = document.querySelector("#Musculo");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Musculo.png";

        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Musculo_gris.png";

        resultado-=1;

    }
}

cabeza.onclick = () => {
    let cambio = document.querySelector("#Cabeza");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/DolorDeCabeza_Color.png";

        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/DolorDeCabeza_Gris.png";

        resultado-=1;

    }
}

fiebre.onclick = () => {
    let cambio = document.querySelector("#Fiebre");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Fiebre_Color.png";

        resultado+=1;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Fiebre_Gris.png";

        resultado-=1;

    }
}

pulmon.onclick = () => {
    let cambio = document.querySelector("#Pulmon");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Pulmones_Color.png";

        resultado+=2;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Pulmones_Gris.png";

        resultado-=2;

    }
}

debil.onclick = () => {
    let cambio = document.querySelector("#Debil");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "Iconos/Cansansio_Color.png";

        resultado+=2;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "Iconos/Cansansio_Gris.png";

        resultado-=2;

    }
}

viaje.onclick = () => {
    let cambio = document.querySelector("#Viaje");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Avión_Color.png";

        resultado+=3;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Avión_Gris.png";

        resultado-=3;

    }
}

visita.onclick = () => {
    let cambio = document.querySelector("#Visita");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "Iconos/Mesa.png";

        resultado+=3;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "Iconos/Mesa_gris.png";

        resultado-=3;

    }
}

paciente.onclick = () => {
    let cambio = document.querySelector("#Paciente");

    if (cambio.className == "columna") {

        cambio.className = "columna-viva";
        cambio.children[3].className = "btn-vivo"
        cambio.children[1].src = "iconos/Visita_Color.png";

        resultado+=3;

    } else {

        cambio.className = "columna";
        cambio.children[3].className = "btn-gris"
        cambio.children[1].src = "iconos/Visita_Gris.png";

        resultado-=3;

    }

    
}