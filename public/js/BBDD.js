export class BBDD{
    static listTecnoInteres(isTecno) {
        fetch('/listTecnoInteres', {
            method: 'POST',
            body: JSON.stringify({ 'isTecno': isTecno}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                for (let index = 0; index < data.length; index++) {
                    const option = document.createElement('option');
                    if(isTecno){
                        option.value = data[0].idcv_techs;
                        option.text = data[index].tecnologia;
                        document.getElementById("ltecnologias").appendChild(option);
                    }else{
                        option.value = data[0].idcv_hobbies;
                        option.text = data[index].interes;
                        document.getElementById("lintereses").appendChild(option);
                    }
                }
            });
    }

    static insertTecnoInteres(file, isTecno) {
        fetch("/insertTecnoInteres", {
            method: 'POST',
            body: JSON.stringify({ 'name': file, 'isTecno': isTecno}),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                const option = document.createElement('option');
                option.value = data[0].cod;
                option.text = file;
                if(isTecno){
                    document.getElementById("ltecnologia").appendChild(option);
                }else{
                    document.getElementById("lintereses").appendChild(option);
                }
            });
    }
}