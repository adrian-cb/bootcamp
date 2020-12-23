const empleado = {  
    bruto: 15100,  
    hijos: 0,  
    pagas: 14,
}

let retencion;

if (empleado.bruto <= 12000){
    retencion = 0;
}else if(empleado.bruto <=24000) {
    retencion = 0.08
}else if (empleado.bruto <= 34000){
    retencion = 0.16
}else if (empleado.bruto >= 34000){
    retencion = 0.3
};
if (empleado.hijos >0){
    retencion = retencion - 0.02;
}

let total = empleado.bruto*retencion;

let neto = empleado.bruto - total;
let NetoMensual = neto / empleado.pagas;

console.log("total bruto: ", empleado.bruto);
console.log("retencion",retencion);
console.log("total retencion: ", total);
console.log("total neto: ",neto);
console.log("Neto mensual: ",NetoMensual);

