import { Functions as Functions } from "/./../js/functions.js";

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

Functions.navigation("/CVWeb/Experiencia");

Functions.chargeListaFormed(cvweb.formacion);

document.getElementById("anyadir").addEventListener("click", (e) => {
    let items = {
                    curso: document.getElementById("formacion").value,
                    centro: document.getElementById("centro").value,
                    lugar: document.getElementById("lugar").value,
                    diploma: document.getElementById("diploma").value,
                    finalizado: document.getElementById("cursado").checked,
                    fecha: document.getElementById("fecha").value
                };
    cvweb.formacion.push(items);
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));
    
    Functions.chargeListaFormed(cvweb.formacion);

    document.getElementById("formacion").value = "";
    document.getElementById("centro").value = "";
    document.getElementById("lugar").value = "";
    document.getElementById("diploma").value = "";
    document.getElementById("cursado").checked = false;
    document.getElementById("fecha").value = "";
})

Functions.sigiente("/CVWeb/SoftSkills", "Como mínimo ha de haber un empleo", cvweb, cvweb.formacion);
