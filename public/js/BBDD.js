export class BBDD {

    static getUser(user, pass) {
        fetch("/login", {
            method: 'POST',
            body: JSON.stringify({ 'usuario': user, 'pass': pass }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(data => {
            if (data.iduser) {
                window.localStorage.setItem("id", data.iduser);
                window.localStorage.setItem("name", data.nombre);
                window.localStorage.setItem("surname", data.apellidos);
                window.localStorage.setItem("rol", data.rol);
                //aqui es donde se guarda el cv
                window.sessionStorage.setItem("cv", getCV(window.localStorage.getItem(id)));
                window.location.href = "/CVWeb";
            } else {
                alert(data);
            }
          });
    }

    static insertCVWeb() {
        let cvweb = JSON.parse(window.sessionStorage.getItem("CVWeb"));
        fetch("/insertCVWeb", {
            method: 'POST',
            body: JSON.stringify({ 'name': cvweb }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(data => {
            console.log(data)
          });
    }

    
    getCV(id){
        //funcion para recoger los datos getCV
    }
    
}