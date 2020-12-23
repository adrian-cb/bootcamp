const product1 = { count: 2, price: 10, type: "ropa" };
const product2 = { count: 2, price: 10, type: "alimentacion" };
const product3 = { count: 2, price: 10, type: "libros" };

function getTotal (product){
    return product.count > 0 ? product.count * product.price : 0;
}

function getIva (product){
    let IVA = 0.21
        switch (product.type){
        case "libros":
        IVA =0.04;
        break;
        case "alimentacion":
        IVA =0.1;
        break;
        };
        return  IVA;
}

function printProductPrice(product) {
    const iva = getIva(product);
    const subtotal = getTotal(product);
    const total = subtotal + iva;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", iva + "€");
    console.log("Total:", total + "€");
  }

  printProductPrice (product3);
  
  