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

    static navigation(anterior){
        if(anterior != null){
            document.getElementById("anterior").addEventListener("click", (e) => {
                window.location.href = anterior;
            })
        }
    }

    static validText(element, action){
        document.getElementById(element).style.background = "#fadbd8";
        document.getElementById(element).style.color = "#ff0000";
        if(element == "lista"){
            document.getElementById(element).innerHTML = action;
        }else{
            document.getElementById(element).value = action;
        }
            setTimeout(() =>{
                document.getElementById(element).style.background = "white";
                document.getElementById(element).style.color = "black";
                if(element == "lista"){
                    document.getElementById(element).innerHTML = "";
                   
                }else{
                    document.getElementById(element).value = "";
                }
            },750);
        //funcion que pondra las cajas de texto y dibs en su estado habitual
    }

    static chargeListaJob(element){
        let i ="";
        for (let index = 0; index < element.length; index++) {
           i += "<div class='flex-container mwidith'><input type='checkbox' class='d-block xwidith border-blue'/>" +
                "<label class='d-block uxwidith'>"+element[index].init+"</label>" +
                "<label class='d-block uxwidith'>"+element[index].end+"</label>" +
                "<label class='d-block dwidith'>"+element[index].empresa+"</label>" +
                "<label class='d-block dwidith'>"+element[index].puesto+"</label>" +
                "<label class='d-block dwidith'>"+element[index].lugar+"</label>" +
                "<div class='flex-container xwidith'><input type='image' src='/./../img/edit.png' name='edit' class='cwidith edit'/>" +
                "<input type='image' src='/./../img/delete.png' class='cwidith delete'/></div></div>";
           
        }
    
        document.getElementById("lista").innerHTML = i;
    }

    static chargeListaFormed(element){
        let i ="";
        for (let index = 0; index < element.length; index++) {
        i += "<div class='flex-container mwidith'><input type='checkbox' class='d-block xwidith border-blue'/>" +
                "<label class='d-block uxwidith'>"+element[index].fecha+"</label>" +
                "<label class='d-block dxwidith'>"+element[index].curso+"</label>" + 
                "<label class='d-block twidith'>"+element[index].centro+"</label>" +
                "<label class='d-block uxwidith'>"+element[index].lugar+"</label>" +
                "<div class='flex-container xwidith'><input type='image' src='/./../img/edit.png' class='cwidith'/>" +
                "<input type='image' src='/./../img/delete.png' class='cwidith'/></div></div>";
        
        }

        document.getElementById("lista").innerHTML = i;
    }

    static chargeListaSkills(element){
        let i ="";
        for (let index = 0; index < element.length; index++) {
        i += "<div class='flex-container mwidith'><input type='checkbox' class='d-block xwidith border-blue'/>" +
                "<label class='d-block nwidith'>"+element[index].habilidad+"</label>" +
                "<div class='flex-container xwidith'><input type='image' src='/./../img/edit.png' class='cwidith'/>" +
                "<input type='image' src='/./../img/delete.png' class='cwidith'/></div></div>";
        
        }

        document.getElementById("lista").innerHTML = i;
    }

    static chargeListaTecnologia(element){
        let i ="";
        for (let index = 0; index < element.length; index++) {
        i += "<div class='flex-container mwidith'><input type='checkbox' class='d-block xwidith border-blue'/>" +
                "<label class='d-block nwidith'>"+element[index].tecnologia+"</label>" +
                "<div class='flex-container xwidith'><input type='image' src='/./../img/edit.png' class='cwidith'/>" +
                "<input type='image' src='/./../img/delete.png' class='cwidith'/></div></div>";
        
        }

        document.getElementById("lista").innerHTML = i;
    }

    static chargeListaIntereses(element){
        let i ="";
        for (let index = 0; index < element.length; index++) {
        i += "<div class='flex-container mwidith'><input type='checkbox' class='d-block xwidith border-blue'/>" +
                "<label class='d-block nwidith'>"+element[index].interes+"</label>" +
                "<div class='flex-container xwidith'><input type='image' src='/./../img/edit.png' class='cwidith'/>" +
                "<input type='image' src='/./../img/delete.png' class='cwidith'/></div></div>";
        
        }

        document.getElementById("lista").innerHTML = i;
    }

    static chargeListaIdiomas(element){
        let i ="";
        for (let index = 0; index < element.length; index++) {
        i += "<div class='flex-container mwidith'><input type='checkbox' class='d-block xwidith border-blue'/>" +
                "<label class='d-block txwidith'>"+element[index].fecha+"</label>" +
                "<label class='d-block txwidith'>"+element[index].idioma+"</label>" +
                "<label class='d-block dwidith'>"+element[index].nivel+"</label>" +
                "<div class='flex-container xwidith'><input type='image' src='/./../img/edit.png' class='cwidith'/>" +
                "<input type='image' src='/./../img/delete.png' class='cwidith'/></div></div>";
        
        }

        document.getElementById("lista").innerHTML = i;
    }

    static sigiente(element, msg, cvweb, list){
        document.getElementById("sig").addEventListener("click", () => {
            if(list.length == 0){
                Functions.validText("lista", msg);
            }else{
                window.sessionStorage.setItem("CVWeb", JSON.stringify(cvweb));
                window.location.href = element;
            }
        });
    }
}