import { Functions as Functions } from "/./../js/functions.js";

Functions.navigation("/CVWeb/Cuentanos");

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

Functions.chargeListaJob(cvweb.experiencias);

document.getElementById("anyadir").addEventListener("click", (e) => {
    let items = {
                    init: document.getElementById("init").value,
                    end: document.getElementById("end").value,
                    empresa: document.getElementById("empresa").value,
                    puesto: document.getElementById("puesto").value,
                    sinopsis: document.getElementById("sinopsis").value,
                    lugar: document.getElementById("lugar").value
                };
    cvweb.experiencias.push(items);
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));

    Functions.chargeListaJob(cvweb.experiencias);

    document.getElementById("init").value = "";
    document.getElementById("end").value = "";
    document.getElementById("empresa").value = "";
    document.getElementById("puesto").value = "";
    document.getElementById("sinopsis").value = "";
    document.getElementById("lugar").value = "";
})

Functions.sigiente("/CVWeb/Estudios", "Como mínimo ha de haber un empleo", cvweb, cvweb.experiencias);
