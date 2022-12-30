const productos =[
    {
        id: "aml-01",
        nombre:"Amoladora Bosch",
        imagen:"css/Amoladora/aml-Bosch.jpg" ,
        categoria:{
            id:"amoladora",
            tipo:"Amoladora"
        },
        precio:25000
    },
    {
        id: "aml-02",
        nombre:"Amoladora Ezeta",
        imagen:"css/Amoladora/aml-Ezeta.jpg" ,
        categoria:{
            id:"amoladora",
            tipo:"Amoladora"
        },
        precio:25000
    },
    {
        id: "aml-03",
        nombre:"Amoladora Hilti",
        imagen:"css/Amoladora/aml-Hilti.jpg" ,
        categoria:{
            id:"amoladora",
            tipo:"Amoladora"
        },
        precio:25000
    },
    {
        id: "aml-04",
        nombre:"Amoladora Magnum",
        imagen:"css/Amoladora/aml-Magnum.jpg" ,
        categoria:{
            id:"amoladora",
            tipo:"Amoladora"
        },
        precio:25000
    },
    {
        id: "aml-05",
        nombre:"Amoladora Ptk",
        imagen:"css/Amoladora/aml-Ptk.jpg" ,
        categoria:{
            id:"amoladora",
            tipo:"Amoladora"
        },
        precio:2500
    },
    {
        id: "mts-01",
        nombre:"Motosierras Dogo",
        imagen:"css/Motosierras/mts-Dogo.jpg" ,
        categoria:{
            id:"motosierra",
            tipo:"Motosierras"
        },
        precio:25000
    },
    {
        id: "mts-02",
        nombre:"Motosierra Gamma",
        imagen:"css/Motosierras/mts-Gamma.jpg" ,
        categoria:{
            id:"motosierra",
            tipo:"Motosierra"
        },
        precio:25000
    },
    {
        id: "mts-03",
        nombre:"Motosierra Kinro",
        imagen:"css/Motosierras/mts-Kinro.jpg" ,
        categoria:{
            id:"motosierra",
            tipo:"Motosierra"
        },
        precio:25000
    },
    {
        id: "mts-04",
        nombre:"Motosierra ProAm",
        imagen:"css/Motosierras/mts-Pro-Am.jpg" ,
        categoria:{
            id:"motosierra",
            tipo:"Motosierra"
        },
        precio:25000
    },
    {
        id: "mts-05",
        nombre:"Motosierra Stihl",
        imagen:"css/Motosierras/mts-Stihl.jpg" ,
        categoria:{
            id:"motosierra",
            tipo:"Motosierra"
        },
        precio:2500
    },
    {
        id: "rtp-01",
        nombre:"Rotopercutor Argentech ",
        imagen:"css/Rotopercutor/rtp-Argentech.jpg" ,
        categoria:{
            id:"rotopercutor",
            tipo:"Rotopercutor"
        },
        precio:3500
    },
    {
        id: "rtp-02",
        nombre:"Rotopercutor Bosch ",
        imagen:"css/Rotopercutor/rtp-Bosch.jpg" ,
        categoria:{
            id:"rotopercutor",
            tipo:"Rotopercutor"
        },
        precio:3500
    },
    {
        id: "rtp-03",
        nombre:"Rotopercutor Einchell",
        imagen:"css/Rotopercutor/rtp-Einhell.jpg" ,
        categoria:{
            id:"rotopercutor",
            tipo:"Rotopercutor"
        },
        precio:3500
    },
    {
        id: "rtp-04",
        nombre:"Rotopercutor Magnum ",
        imagen:"css/Rotopercutor/rtp-Magnum.jpg" ,
        categoria:{
            id:"rotopercutor",
            tipo:"Rotopercutor"
        },
        precio:3500
    },
    {
        id: "rtp-05",
        nombre: "Rotopercutor Umi ",
        imagen:"css/Rotopercutor/rtp-Umi.jpg" ,
        categoria:{
            id:"rotopercutor",
            tipo:"Rotopercutor"
        },
        precio:3500
    },
];
    const contenedor = document.querySelector('#contenedor-productos'); //Capturo al article con id "contendor-productos"
    const botones = document.querySelectorAll('.boton-categoria');
    const titulo= document.querySelector('#titulo-principal');
    
    let botonesCarrito = document.querySelectorAll('.btnAgregar');

    const cantidadCompra = document.querySelector("#valor-compra");

    //-----------------------------------Funcion uno
        function pegarProductos (productoElegido){ //Creo una funcion para colocar los datos de mi producto

            contenedor.innerHTML="";

        productoElegido.forEach(elemento=>{ //Recorro el arrive el cual dentro posee un objeto por cada uno de los productos 
            //Le asigno al forEach una varible que represente a cada uno de las propiedades

            const div = document.createElement("div") // creo un div
            div.classList.add('producto-contenido'); //Le asigno una clase
            //Inserto dentro del html al div con el contenido
            div.innerHTML = `
            <img class="producto-img" src=${elemento.imagen} alt=${elemento.nombre}>
            <div class="producto-datos">
                <h3>${elemento.nombre}</h3>
                <p>$ ${elemento.precio}</p>
                <button class="btnAgregar" id="${elemento.id}"><i class="bi bi-bag-check"></i></button>
            </div>
            `
            //LLamo a mi contenido dentro del html
            contenedor.append(div)
            
        })
        crearBotonesAgregar()
        console.log(botonesCarrito)
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
botones.forEach(boton=>{
    //Como tengo mucho botones tengo un arrive con ellos , entonces lo que hago primero es recorrerlo
    boton.addEventListener("click",(e)=>{
        //Luego a cada boton le asigno un evento 
        if(e.currentTarget.id != "todos"){
            const categoria = productos.find(elemento => elemento.categoria.id === e.currentTarget.id); //Creo un filtrado del arrive  
            titulo.innerHTML = categoria.categoria.tipo; //le asigno al elemento h2 del html el valor que tiene categoria que es una parte del objeto y dentro de ella busco el parametro producto

            //-------------------
            //Creo una condicion en la cual indico que si los botonoes que elijo son distintos al elemento con id todos me muestre el producto que busco con id
            const elegidos = productos.filter(elemento => elemento.categoria.id === e.currentTarget.id)
            pegarProductos(elegidos)
        }else{
            titulo.innerHTML = "Todos los productos"
            //--------------
            //sino muestro todo el arrive de productos
            pegarProductos(productos)
        }
        
        
    })
    
})

    //-----------------------------------Funcion dos
    function crearBotonesAgregar(){
         botonesCarrito = document.querySelectorAll('.btnAgregar');
        
    }
 