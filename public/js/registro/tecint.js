import { Functions as Functions } from "/./../js/functions.js";
import { BBDD as BBDD } from "/./../js/BBDD.js";

Functions.navigation("/CVWeb/Idiomas", null);

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

BBDD.listTecnoInteres(true);
//BBDD.listTecnoInteres(false);

document.getElementById("tecnologia").addEventListener("click", (e) => {
    BBDD.insertTecnoInteres(document.getElementById("txt-tec").value, true);
})

document.getElementById("intereses").addEventListener("click", (e) => {
    BBDD.insertTecnoInteres(document.getElementById("txt-int").value, true);
})

