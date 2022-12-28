import { Functions as Functions } from "/./../js/functions.js";
import { BBDD as BBDD } from "/./../js/BBDD.js";

Functions.navigation("/CVWeb/Idiomas");

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

Functions.chargeListaTecnologia(cvweb.tecnologias);

document.getElementById("anyadir").addEventListener("click", (e) => {
    let items = {
        tecnologia: document.getElementById("tecnologia").value,
        sinopsis: document.getElementById("sinopsis").value
    };
    cvweb.tecnologias.push(items);
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));

    Functions.chargeListaTecnologia(cvweb.tecnologias);

    document.getElementById("tecnologia").value = "";
    document.getElementById("sinopsis").value = "";
})

Functions.sigiente("/CVWeb/Hobbies", "Como mínimo ha de haber una tecnologia", cvweb, cvweb.tecnologias);