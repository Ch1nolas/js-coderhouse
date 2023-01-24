console.log("Nicolás Martinez");

// Variables
const productos = [
    {id: 1, nombre: "carne molida", categoria: "carnes", precio: 1400},
    {id: 2, nombre: "asado", categoria: "carnes", precio: 2000},
    {id: 3, nombre: "chorizo", categoria: "carnes", precio: 1500},
    {id: 4, nombre: "milanesa", categoria: "carnes", precio: 1000},
    {id: 5, nombre: "queso", categoria: "fiambres", precio: 1200},
    {id: 6, nombre: "jamon", categoria: "fiambres", precio: 1350},
    {id: 7, nombre: "coca cola", categoria: "bebidas", precio: 600},
    {id: 8, nombre: "sprite", categoria: "bebidas", precio: 550}
]

let carrito = []

alert('⚠️ ATENCIÓN!!! ⚠️ \nSolo tienes $ 10.000 para gastar')
// Funciones

function agregar_carrito () {
    let producto = prompt('Ingrese el nombre del producto que quiera comprar \n 1-carne molida\n 2-asado\n 3-chorizo\n 4-milanesa\n 5-queso\n 6-jamon\n 7-coca cola\n 8-sprite');

    let producto_carrito = productos.find((el) => el.nombre == producto)
    carrito.push(producto_carrito);
    valor_carrito()

}

function valor_carrito () {
    let valor = carrito.reduce((acc, el) => acc + el.precio, 0)
    console.log('Total $ ' + valor)
    if (valor >= 10000) {
        alert('Has alcanzado el límite de plata')
        alert('Adiós 👋')
        console.log('Tienes ' + carrito.length + ' productos en tu carrito');
        console.log(carrito)
        console.log('Tu total es de $ '+valor)
    }
    else {
        agregar_carrito()
    }
}

agregar_carrito ();