//Llamo los datos del localStorage
let productosComprados = localStorage.getItem("compras");
productosComprados = JSON.parse(productosComprados);

console.log(productosComprados);


const carritoVacio = document.getElementById("carrito-vacio");
console.log(carritoVacio)

const contenedorProductos = document.getElementById("contenedor-productos");
console.log(contenedorProductos)

const acciones = document.getElementById("acciones");
console.log(contenedorProductos)

let botonesEliminar = document.querySelectorAll(".eliminar");

//------------------------
//Vaciar Carrito

const botonVaciar = document.querySelector(".vaciar")

//Total-------
const valorTotal = document.querySelector(".total")


function cargarCarrito() {
    contenedorProductos.innerHTML = ""

    if (productosComprados && productosComprados.length > 0) {

        carritoVacio.classList.add("vacio")

        productosComprados.forEach(compra => {
            const article = document.createElement("article");
            article.classList.add("carrito-product")
            article.innerHTML =

                `
    <img src="${compra.imagen}"alt="">
    <p class="nombre">Nombre:  ${compra.nombre}</p>
    <p class="precio">Precio:  $${compra.precio}</p>
    <p class="cantidad">Cantidad: ${compra.cantidad}</p>
    <p class="subtotal">Subtotal:  $${compra.precio * compra.cantidad}</p>
    <button  class ="eliminar" id=${compra.id}>Quitar</button>
     `

            contenedorProductos.append(article);
        });

    } else {
        carritoVacio.classList.remove("vacio")
    }
    quitarProducto();
    actualizarTotal();
};
cargarCarrito()




function quitarProducto() {
    botonesEliminar = document.querySelectorAll(".eliminar");

    botonesEliminar.forEach(botonEliminar => {
        botonEliminar.addEventListener("click", eliminarDelCarrito)
    })
}



function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.idBoton


    //Busco al elemento con id igual al boton y lo elimino
    console.log(productosComprados)

    const index = productosComprados.findIndex(elemento => elemento.idBoton === idBoton);
    console.log(index)

    productosComprados.splice(index, 1)

    console.log(productosComprados);
    //Recargo la funcion cargar carrito nuevamente y elimino mis productos
    cargarCarrito()

    localStorage.setItem("compras", JSON.stringify(productosComprados))
}


botonVaciar.addEventListener('click', vaciarCompra)

function vaciarCompra() {
    productosComprados.length = 0
    localStorage.setItem("compras", JSON.stringify(productosComprados));
    cargarCarrito()
}

function actualizarTotal() {
    let numeroTotal = productosComprados.reduce((acc, elemento) => acc + (elemento.cantidad * elemento.precio), 0)
    valorTotal.innerText = `Valor Total : $${numeroTotal}`
}