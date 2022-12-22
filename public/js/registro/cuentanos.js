import { Functions as Functions } from "/./../js/functions.js";

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

document.getElementById("profesionales").value = cvweb.objecpro;
document.getElementById("personales").value = cvweb.objecper;

Functions.navigation("/CVWeb/Datos");

document.getElementById("sig").addEventListener("click", () => {
    if(document.getElementById("profesionales").value == ""){
        Functions.validText("profesionales", "Este campo no puede estar vacio");
    }else if(document.getElementById("personales").value == ""){
        Functions.validText("personales", "Este campo no puede estar vacio");
    }else{
        cvweb.objecper = document.getElementById("personales").value;
        cvweb.objecpro = document.getElementById("profesionales").value;
        window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));
        window.location.href = "/CVWeb/Experiencia";
    }
});