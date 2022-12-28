import { Functions as Functions } from "/./../js/functions.js";

let cv = JSON.parse(window.sessionStorage.getItem("CVWeb"));
document.getElementById("email2").value = cv.email2;
document.getElementById("telp").value = cv.phone;
document.getElementById("tels").value = cv.phone2;
document.getElementById("direccion").value = cv.direccion;
document.getElementById("provincia").value = cv.provincia;
document.getElementById("cp").value = cv.cp;
document.getElementById("poblacion").value = cv.poblacion;
document.getElementById("cc").checked = cv.cc;
document.getElementById("genero").value = cv.genero;
document.getElementById("fecha").value = cv.fecha;
document.getElementById("estado").value = cv.estado;

document.getElementById("sig").addEventListener("click", (e) => {
    let reg= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(document.getElementById("email2").value != "" && !reg.test(document.getElementById("email2").value)){
        Functions.validText("email2", "Formato email incorrecto");
    }else if(document.getElementById("telp").value != "" && !/^([6||7||8||9]{1})+([0-9]{8})$/i.test(document.getElementById("telp").value)){
        Functions.validText("telp", "Formato telefono incorrecto");
    }else if(document.getElementById("tels").value != "" && !/^([6||7||8||9]{1})+([0-9]{8})$/i.test(document.getElementById("tels").value)){
        Functions.validText("tels", "Formato telefono incorrecto");
    }else if(document.getElementById("cp").value != "" && !/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/i.test(document.getElementById("cp").value)){
        Functions.validText("cp", "Formato cp incorrecto");
    }else{
        cv.email2 = document.getElementById("email2").value;
        cv.phone = document.getElementById("telp").value;
        cv.phone2 = document.getElementById("tels").value;
        cv.direccion = document.getElementById("direccion").value;
        cv.cp = document.getElementById("cp").value;
        cv.poblacion = document.getElementById("poblacion").value;
        cv.provincia = document.getElementById("provincia").value;
        cv.estado = document.getElementById("estado").value;
        cv.facebook = document.getElementById("facebook").value;
        cv.linkedin = document.getElementById("linkedin").value;
        cv.instagram = document.getElementById("instagram").value;
        cv.twiter = document.getElementById("twiter").value;
        cv.web = document.getElementById("web").value;
        if (document.getElementById('cc').checked){
            cv.cc = true;
        }else{
            cv.cc = false;
        }
        cv.fecha = document.getElementById("fecha").value;
        cv.genero = document.getElementById("genero").value;
        window.sessionStorage.setItem("CVWeb", JSON.stringify(cv));
        window.location.href = "/CVWeb/Cuentanos";
    }
})

document.getElementById("salir").addEventListener("click", () => {
    window.sessionStorage.removeItem("CVWeb");
    window.location.href = "/CVWeb";
});
