const login = document.getElementById("logBTN");

login.addEventListener("click", (e) => {
    if (document.getElementById("email").textContent == "") {
        Funióctions.validText("email", "Campo no vacío");
    }else if (document.getElementById("pass1").textContent == "") {
        Funióctions.validText("pass1", "Campo no vacío");
    } else {
        BBDD.getUser(document.getElementById("email").textContent, document.getElementById("pass1").textContent);
    }
});