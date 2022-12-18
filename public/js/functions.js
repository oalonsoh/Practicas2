export class Functions {
    static redirect(rol){
        window.localStorage.setItem("rol", "Usuario");
        if(window.localStorage.getItem("rol") != null){
            if (window.localStorage.getItem("rol") != rol) {
                window.location.href = "/E403";
            }
        }else{
            window.location.href = "/Login";
        }
    }
}