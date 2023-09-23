let totalNeto = 0
let iva = 0.19
const carrito = []

const productos =[
    {producto: "notebook", marca: "asus", precio: 1000, cantidad: 0},
    {producto: "torre", marca: "msi", precio: 1200, cantidad: 0},
    {producto: "monitor", marca: "gigabyte", precio: 130, cantidad: 0},
    {producto: "teclado", marca: "hyperx", precio: 50, cantidad: 0},
    {producto: "mouse", marca: "razer", precio: 60, cantidad: 0}
];

const comprobarCarrito = (nombreProducto) => {
    return carrito.find ((el) => el.producto === nombreProducto)
}

function calcularEnvio () {
    let envio = 0
        if (totalNeto >= 5000) {
            envio = 0;
        } else {
            envio = 20
            
        } 
        return envio
}

function CalcularImpuesto () {
    let impuesto = totalNeto * iva

    return impuesto
}

function calcularTotal () {
    let total = totalNeto + envio + impuesto

    return total
}

const creacionCarrito = () => {
    const listaProductos = productos.map (el => {return "- " +el.producto+ " $" +el.precio })
    alert("Bienvenidos a Ollie-Gamming"+"\n"+"Revisa nuestros stock de productos en oferta:"+"\n\n"+listaProductos.join ("\n"))
    
    let busqueda = ""

    do {      
        do { busqueda = prompt("Que deseas llevar?"+"\n"+"Revisa nuestros stock de productos en oferta:"+"\n\n"+listaProductos.join ("\n")).toLowerCase()

        } while ((busqueda != "notebook") && (busqueda != "torre") && (busqueda!= "monitor") && (busqueda != "teclado") && (busqueda != "mouse"));
        
            if (busqueda) {
                const nuevoProducto = productos.find ((el) => el.producto === (busqueda));
                
                if (nuevoProducto) {
                    let cantidad = 0
                    do {
                        cantidad = parseInt(prompt("Cuantas unidades quieres llevar"));
 
                    } while (isNaN(cantidad) || cantidad <=0);

                    const productoEnCarrito = comprobarCarrito (busqueda);
                    
                    if (productoEnCarrito) {
                        productoEnCarrito.cantidad += cantidad;
                    } else {
                        nuevoProducto.cantidad += cantidad;
                        carrito.push(nuevoProducto) 
                    }               
                }
        } 
        seguirComprando = confirm("Quieres seguir comprando?")

    } while (seguirComprando)
}     
creacionCarrito()
console.log(carrito)

carrito.forEach ((producto) => {
   const subtotal = producto.precio *= producto.cantidad
   totalNeto += subtotal;
   alert(`Subtotal de ${producto.producto}: $${subtotal}`)
})

console.log(totalNeto)

let envio = calcularEnvio ()
console.log(envio)

let impuesto = CalcularImpuesto ()
console.log (impuesto)

let total = calcularTotal ()
alert ("El costo total neto de tu pedido es de:"+"\n"+"$ " +totalNeto+ "\n" +"Iva: $" +impuesto +"\n"+"El gran total de su compra es: $" +total+ "\n\n" +"Muchas gracias por tu compra, vuelve pronto")

