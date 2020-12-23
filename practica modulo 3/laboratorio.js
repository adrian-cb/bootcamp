
const product = { count: 1, price: 12.55, type: "libros" };

let total;
if (product.count > 0){
    total = product.count * product.price;
}else {
    total = 0
}

let tipoIVA = 0.21

switch (product.type){
    case "libros":
    tipoIVA =0.04;
    break;
    case "alimentacion":
    tipoIVA =0.1;
    break;
};
const iva = total * tipoIVA;

console.log("total sin iva: ",total);
console.log("IVA: ",iva)
console.log("total con iva: ", total + iva)

