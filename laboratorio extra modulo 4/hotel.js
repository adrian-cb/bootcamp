// obtener los datos que ha rellenado el usuario...

function getDatos() {
    const nochesParking = parseInt(document.getElementById("inputNochesParking").value);
    const numeroNoches = parseInt(document.getElementById("inputNoches").value);
    const tipo = document.getElementById("inputTipo").value;
    const conSpa = document.getElementById("Spa").checked;
    const ocupacion = document.getElementById("inputOcupacion").value;

    return {
        nochesParking: nochesParking,
        numeroNoches: numeroNoches,
        tipo: tipo,
        conSpa: conSpa,
        ocupacion: ocupacion,
    }
}

function getPrecioPorTipo(tipo){
    let resultado;
    switch (tipo){
        case "junior":
            resultado = 120;
            break;
        case "suite":
            resultado = 150;
            break;
        case "standard":
            resultado = 100;
            break;
    };

    return resultado;
}
function getOcupacion(ocupacion){
    let resultado;
    switch (ocupacion){
        case "doble":
            resultado =1;
            break;
        case "individual":
            resultado = 0.75;
            break;
        case "triple":
            resultado = 1.25;
            break;
    };

    return resultado;
}

function calcular () {
    const datos = getDatos();

    let totalParking = datos.nochesParking * 10;

    let totalSpa = 0;
    if (datos.conSpa == true){
        totalSpa = 20;
    }

    let totalPorTipo = getPrecioPorTipo(datos.tipo)+ totalSpa ;
console.log("total por tipo",totalPorTipo);

    let totalNoches = totalPorTipo * getOcupacion(datos.ocupacion);
console.log("total noches",totalNoches);

    let totalPrice = totalNoches * datos.numeroNoches;
console.log("total ocupacion",totalPrice);
    
    const total = totalParking + totalPrice ;
    document.getElementById("total").innerText = total;
}

document.getElementById("calcular").addEventListener("click", calcular);
