import { Functions as Functions } from "/./../js/functions.js";

Functions.navigation("/CVWeb/Estudios", "/CVWeb/Idiomas");

let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));

Functions.chargeListaSkills(cvweb.habilidades);

document.getElementById("anyadir").addEventListener("click", (e) => {
    let items = {
                    habilidad: document.getElementById("habilidad").value,
                    sinopsis: document.getElementById("sinopsis").value
                };
    cvweb.habilidades.push(items);
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));
    
    Functions.chargeListaSkills(cvweb.habilidades);

    document.getElementById("habilidad").value = "";
    document.getElementById("sinopsis").value = "";
})

Functions.sigiente("/CVWeb/Idiomas", "Como mínimo ha de haber una habilidad", cvweb, cvweb.habilidades);
