import { Functions as Functions } from "/./../js/functions.js";
import { BBDD as BBDD } from "/./../js/BBDD.js";

Functions.navigation("/CVWeb/Tecnologias");

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

Functions.chargeListaIntereses(cvweb.intereses);

document.getElementById("anyadir").addEventListener("click", (e) => {
    let items = {
        interes: document.getElementById("interes").value,
        sinopsis: document.getElementById("sinopsis").value
    };
    cvweb.intereses.push(items);
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));

    Functions.chargeListaIntereses(cvweb.intereses);

    document.getElementById("interes").value = "";
    document.getElementById("sinopsis").value = "";
})

document.getElementById("insertar").addEventListener("click", (e) => {
    if (cvweb.intereses.length==0) {
        Functions.validText("lista", "Por lo menos ha de tener un campo");
    } else {
        BBDD.insertCVWeb();
    }
})
