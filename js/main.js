const productos = [
    {
        id: "P-1",
        nombre: "Auricular con cable",
        imagen: "../css/Tienda/Auriculares/AuricularConCable.jpg",
        categoria: {
            id: "auricular", //Dejar Esto (Filtrado)
            tipo: "Auriculares"
        },
        precio: `${5000}`
    },
    {
        id: "P-2",
        nombre: "Auricular con diseño",
        imagen: "../css/Tienda/Auriculares/AuricularConDiseño.jpg",
        categoria: {
            id: "auricular", //Dejar Esto (Filtrado)
            tipo: "Auriculares"
        },
        precio: `${5000}`
    },
    {
        id: "P-3",
        nombre: "Auricular inalambrico grande",
        imagen: "../css/Tienda/Auriculares/AuricularInalambrico.jpg",
        categoria: {
            id: "auricular", //Dejar Esto (Filtrado)
            tipo: "Auriculares"
        },
        precio: `${5000}`
    },
    {
        id: "P-4",
        nombre: "Auricular chico",
        imagen: "../css/Tienda/Auriculares/AuricularInalambricoChico.jpg",
        categoria: {
            id: "auricular", //Dejar Esto (Filtrado)
            tipo: "Auriculares"
        },
        precio: `${5000}`
    },
    //GABINETES-----------------------------
    {
        id: "P-5",
        nombre: "Gabinete Blanco",
        imagen: "../css/Tienda/Gabinetes/GabineteBlanco.jpg",
        categoria: {
            id: "gabinete", //Dejar Esto (Filtrado)
            tipo: "Gabinetes"
        },
        precio: `${10000}`
    },
    {
        id: "P-6",
        nombre: "Gabinete Clasico",
        imagen: "../css/Tienda/Gabinetes/GabineteClasic.jpg",
        categoria: {
            id: "gabinete", //Dejar Esto (Filtrado)
            tipo: "Gabinetes"
        },
        precio: `${5000}`
    },
    {
        id: "P-7",
        nombre: "Gabinete Led",
        imagen: "../css/Tienda/Gabinetes/GabineteLed-02.jpg",
        categoria: {
            id: "gabinete", //Dejar Esto (Filtrado)
            tipo: "Gabinetes"
        },
        precio: `${5000}`
    },
    {
        id: "P-8",
        nombre: "Gabinete Led",
        imagen: "../css/Tienda/Gabinetes/GabineteLed.jpg",
        categoria: {
            id: "gabinete", //Dejar Esto (Filtrado)
            tipo: "Gabinete"
        },
        precio: `${5000}`
    },
    {
        id: "P-9",
        nombre: "Gabinete Retro",
        imagen: "../css/Tienda/Gabinetes/GabineteRetro.jpg",
        categoria: {
            id: "gabinete", //Dejar Esto (Filtrado)
            tipo: "Gabinetes"
        },
        precio: `${5000}`
    },
    {
        id: "P-10",
        nombre: "Gabinete Violeta",
        imagen: "../css/Tienda/Gabinetes/GabineteVioleta.jpg",
        categoria: {
            id: "gabinete", //Dejar Esto (Filtrado)
            tipo: "Gabinetes"
        },
        precio: `${5000}`
    },
    //GRAFICAS----------------
    {
        id: "P-11",
        nombre: "Grafica Asus",
        imagen: "../css/Tienda/Graficas/GraficaAsus.jpg",
        categoria: {
            id: "graficas", //Dejar Esto (Filtrado)
            tipo: "Graficas"
        },
        precio: `${5000}`
    },
    {
        id: "P-12",
        nombre: "Grafica Zotac",
        imagen: "../css/Tienda/Graficas/GraficaZotac.jpg",
        categoria: {
            id: "graficas", //Dejar Esto (Filtrado)
            tipo: "Graficas"
        },
        precio: `${5000}`
    },
    {
        id: "P-13",
        nombre: "Grafica RTX",
        imagen: "../css/Tienda/Graficas/GraficaRtx.jpg",
        categoria: {
            id: "graficas", //Dejar Esto (Filtrado)
            tipo: "Graficas"
        },
        precio: `${5000}`
    },
    {
        id: "P-14",
        nombre: "Grafica GTX",
        imagen: "../css/Tienda/Graficas/GraficaGtx.jpg",
        categoria: {
            id: "graficas", //Dejar Esto (Filtrado)
            tipo: "Graficas"
        },
        precio: `${5000}`
    },
    {
        id: "P-15",
        nombre: "Grafica Geforce",
        imagen: "../css/Tienda/Graficas/GraficaGeforce.jpg",
        categoria: {
            id: "graficas", //Dejar Esto (Filtrado)
            tipo: "Graficas"
        },
        precio: `${5000}`
    },
    //MOUSE------------------------------
    {
        id: "P-16",
        nombre: "Mouse diseño especial",
        imagen: "../css/Tienda/Mouse/MouseDiseñoEspecial.jpg",
        categoria: {
            id: "mouse", //Dejar Esto (Filtrado)
            tipo: "Mouse"
        },
        precio: `${5000}`
    },
    {
        id: "P-17",
        nombre: "Mouse gamer",
        imagen: "../css/Tienda/Mouse/MouseGamer.jpg",
        categoria: {
            id: "mouse", //Dejar Esto (Filtrado)
            tipo: "Mouse"
        },
        precio: `${5000}`
    },

    {
        id: "P-18",
        nombre: "Mouse Inalambrico",
        imagen: "../css/Tienda/Mouse/MouseInalambrico.jpg",
        categoria: {
            id: "mouse", //Dejar Esto (Filtrado)
            tipo: "Mouse"
        },
        precio: `${5000}`
    },

    {
        id: "P-19",
        nombre: "Mouse Led",
        imagen: "../css/Tienda/Mouse/MouseLed.jpg",
        categoria: {
            id: "mouse", //Dejar Esto (Filtrado)
            tipo: "Mouse"
        },
        precio: `${5000}`
    },
    {
        id: "P-20",
        nombre: "Mouse Razer",
        imagen: "../css/Tienda/Mouse/MouseRazer.jpg",
        categoria: {
            id: "mouse", //Dejar Esto (Filtrado)
            tipo: "Mouse"
        },
        precio: `${5000}`
    },
    //Notebook------------------------
    {
        id: "P-21",
        nombre: "Mac",
        imagen: "../css/Tienda/Notebook/Mac.jpg",
        categoria: {
            id: "notebook", //Dejar Esto (Filtrado)
            tipo: "Notebook"
        },
        precio: `${5000}`
    },
    {
        id: "P-22",
        nombre: "Notebook Acer",
        imagen: "../css/Tienda/Notebook/NotebookAcer.jpg",
        categoria: {
            id: "notebook", //Dejar Esto (Filtrado)
            tipo: "Notebook"
        },
        precio: `${5000}`
    },
    {
        id: "P-23",
        nombre: "Notebook Gamer",
        imagen: "../css/Tienda/Notebook/NotebookGamer.jpg",
        categoria: {
            id: "notebook", //Dejar Esto (Filtrado)
            tipo: "Notebook"
        },
        precio: `${5000}`
    },
    {
        id: "P-24",
        nombre: "Notebook Lenovo",
        imagen: "../css/Tienda/Notebook/NotebookLenovo.jpg",
        categoria: {
            id: "notebook", //Dejar Esto (Filtrado)
            tipo: "Notebook"
        },
        precio: `${5000}`
    },
    //TECLADOS--------------------
    {
        id: "P-25",
        nombre: "Teclado Clasico",
        imagen: "../css/Tienda/Teclado/TecladoClasico.jpg",
        categoria: {
            id: "teclado", //Dejar Esto (Filtrado)
            tipo: "Teclado"
        },
        precio: `${5000}`
    },
    {
        id: "P-26",
        nombre: "Teclado Gamer",
        imagen: "../css/Tienda/Teclado/TecladoGamer.jpg",
        categoria: {
            id: "teclado", //Dejar Esto (Filtrado)
            tipo: "Teclado"
        },
        precio: `${5000}`
    },

    {
        id: "P-27",
        nombre: "Teclado Inalambrico  ",
        imagen: "../css/Tienda/Teclado/TecladoInalambrico.jpg",
        categoria: {
            id: "teclado", //Dejar Esto (Filtrado)
            tipo: "Teclado"
        },
        precio: `${5000}`
    },
    {
        id: "P-28",
        nombre: "Teclado Inalambrico Rosa",
        imagen: "../css/Tienda/Teclado/TecladoInalambricoRosa.jpg",
        categoria: {
            id: "teclado", //Dejar Esto (Filtrado)
            tipo: "Teclado"
        },
        precio: `${5000}`
    },
    {
        id: "P-29",
        nombre: "Teclado Numerico",
        imagen: "../css/Tienda/Teclado/TecladoNumerico.jpg",
        categoria: {
            id: "teclado", //Dejar Esto (Filtrado)
            tipo: "Teclado"
        },
        precio: `${5000}`
    },
    {
        id: "P-30",
        nombre: "Teclado Touch",
        imagen: "../css/Tienda/Teclado/TecladoTouch.jpg",
        categoria: {
            id: "teclado", //Dejar Esto (Filtrado)
            tipo: "Teclado"
        },
        precio: `${5000}`
    },




];
const contenedorProductos = document.querySelector('#contenedor-productos'); //Capturo al article con id "contendor-productos"

const botones = document.querySelectorAll('.boton-categoria');

const titulo = document.querySelector('.titulo');

let botonesCarrito = document.querySelectorAll('.btnAgregar');

const cantidadCompra = document.querySelector("#valor-compra");

//-----------------------------------Funcion uno
function pegarProductos(productoElegido) { //Creo una funcion para colocar los datos de mi producto

    contenedorProductos.innerHTML = "";

    productoElegido.forEach(elemento => { //Recorro el arrive el cual dentro posee un objeto por cada uno de los productos 
        //Le asigno al forEach una varible que represente a cada uno de las propiedades

        const div = document.createElement("div") // creo un div
        div.classList.add('producto-contenido'); //Le asigno una clase
        //Inserto dentro del html al div con el contenido
        div.innerHTML = `
            <img class="producto-img" src=${elemento.imagen} alt=${elemento.nombre}>
            <div class="producto-datos">
                <h3>${elemento.nombre}</h3>
                <p>$ ${elemento.precio}</p>
                <button class="btnAgregar" id=${elemento.id}><i class="bi bi-bag-check"></i></button>
            </div>
            `
        //LLamo a mi contenido dentro del html
        contenedorProductos.append(div)

    })
    crearBotonesAgregar()


}



//EJEMPLO PREVIAMENTE PENSADO ANTES PARA VER Y DARME UNA IDEA

/*<article id="contenedor-productos"  class="produc-content">
                <img class="produc-img" src="https://www.martinezescalada.com.ar/312-extra_large_default/martillo-rotopercutor-sds-plus-gbh-4-32-dfr-900-w-5-j-47-kg.jpg" alt="">
                <div class="produc-date">
                    <h3 class="produc-name">Producto 1</h3>
                    <p class="produc-valor">$2000</p>
                    <button><i class="bi bi-bag-check"></i></button>
                </div>
            </article>*/


//FILTRADO DE CADA UNA DE LAS IMAGENES
botones.forEach(boton => {
    //Como tengo mucho botones tengo un arrive con ellos , entonces lo que hago primero es recorrerlo
    boton.addEventListener("click", (e) => {
        //Luego a cada boton le asigno un evento 
        if (e.currentTarget.id != "todos") {

            const categoria = productos.find(elemento => elemento.categoria.id === e.currentTarget.id); //Creo un filtrado del arrive  
            titulo.innerHTML = categoria.categoria.tipo; //le asigno al elemento h2 del html el valor que tiene categoria que es una parte del objeto y dentro de ella busco el parametro Tipo


            //-------------------
            //Creo una condicion en la cual indico que si los botonoes que elijo son distintos al elemento con id todos me muestre el producto que busco con id
            const elegidos = productos.filter(elemento => elemento.categoria.id === e.currentTarget.id)
            pegarProductos(elegidos)
        } else {
            titulo.innerHTML = "Todos Nuestro productos"
            pegarProductos(productos)
            //--------------
            //sino muestro todo el arrive de productos

        }


    })

})

//-----------------------------------Funcion dos
function crearBotonesAgregar() {
    botonesCarrito = document.querySelectorAll(".btnAgregar");

    botonesCarrito.forEach(btn => {
        btn.addEventListener('click', agregar)

    })
}

let productosComprados;

let productosCompradosLs = localStorage.getItem("compras");

if (productosCompradosLs) {

    productosComprados = JSON.parse(productosCompradosLs)

    sumarCantidad()
} else {
    productosComprados = []
}







function agregar(e) {
    const id = e.currentTarget.id;
    //Traigo al de la lista producto al primer elemento con el id que sea igual al id del boton
    const productoAgregado = productos.find(elemento => elemento.id === id)

    if (productosComprados.some(elemento => elemento.id === id)) {

        //Consigo el numero de indice de mi producto 
        const index = productosComprados.findIndex(elemento => elemento.id === id)
        productosComprados[index].cantidad++


    } else {
        //Agrego el producto comprado dentro del array con el metodo push.
        productoAgregado.cantidad = 1;
        productosComprados.push(productoAgregado)
    }

    sumarCantidad()
    //----------------------------------------
    //Pasar el array de productosComprados al localStorage (Almacenamiento Local)

    localStorage.setItem("compras", JSON.stringify(productosComprados))

    //-------------------------------------
}
function sumarCantidad() {
    //Funcionamiento de reduce
    //Acc  : acumulador
    let numeroCompra = productosComprados.reduce((acc, elemento) => acc + elemento.cantidad, 0)

    //Agrego al elemento del carrito la cantidad de compras que tengo 
    cantidadCompra.innerText = numeroCompra
};
