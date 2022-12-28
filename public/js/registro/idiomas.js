import { Functions as Functions } from "/./../js/functions.js";

Functions.navigation("/CVWeb/SoftSkills");

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

Functions.chargeListaIdiomas(cvweb.idiomas);

document.getElementById("anyadir").addEventListener("click", (e) => {
    let items = {
                    idioma: document.getElementById("idioma").value,
                    fecha: document.getElementById("fecha").value,
                    nivel: document.getElementById("nivel").value,
                    certificado: document.getElementById("certificado").checked
                };
    cvweb.idiomas.push(items);
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));
    
    Functions.chargeListaIdiomas(cvweb.idiomas);

    document.getElementById("idioma").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("nivel").value = "";
    document.getElementById("certificado").checked = false;
})

Functions.sigiente("/CVWeb/Tecnologias", "Como mínimo ha de haber un idioma", cvweb, cvweb.idiomas);
