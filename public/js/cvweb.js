import { Functions as Functions } from "./functions.js";

let cv = window.sessionStorage.getItem("cv");

if(cv == null){
    let cvweb = {
        id: 1234,
        email2: "",
        phone: "",
        phone2: "",
        direccion: "",
        poblacion: "",
        cp:"",
        provincia: "",
        estado: "",
        facebook: "",
        linkedin: "",
        instagram:"",
        twiter: "",
        web: "",
        cc: false,
        fecha: "",
        genero: "",
        objecper: "",
        objecpro: "",
        experiencias: [],
        formacion: [],
        habilidades: [],
        idiomas: [],
        tecnologias: [],
        intereses: []
    }
    window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));
    document.getElementById("charge").innerHTML = "<div class='fwidith center-auto oheight'>" +
                                                  "<input type='image' src='/./../img/ooops.png' class='mwidith'/>" +
                                                  "<input type='button' id='irreg' value='Crear Curriculum Vitae' " +
                                                  "class='fwidith uheight center-auto txt-bold back-orange d-block'/></div>";
}else{
   //si existe lo pintaremos
}

document.getElementById("irreg").addEventListener("click", () => {
    window.location.href = "/CVWeb/Datos";
});
