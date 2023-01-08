import { Functions as Functions } from "./functions.js";
import { BBDD as BBDD } from "./BBDD.js";

const login = document.getElementById("logBTN");
const registro = document.getElementById("regBTN");

login.addEventListener("click", (e) => {
    if (document.getElementById("email").value == "") {
        Functions.validText("email", "Campo no vacío");
    }else if (document.getElementById("pass1").value == "") {
        Functions.validText("pass1", "Campo no vacío");
    } else {
        BBDD.getUser(document.getElementById("email").value, document.getElementById("pass1").value);
    }
});

registro.addEventListener("click", (e) => {
    window.location.href = "/Registro";
});