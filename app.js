const bebidas = [
    {id:1, nombre: "Novecento Cabernet", categoria: "vino", ml:"750ml", precio: 1300, imagenSrc: "Vinos/vino1.webp"},
    {id:2, nombre: "Novecento Raices Malbec", categoria: "vino", ml:"750ml", precio: 1900, imagenSrc: "Vinos/vino2.webp"},
    {id:3, nombre: "Cabernet Saugvinon", categoria: "vino", ml:"750ml", precio: 1100, imagenSrc: "Vinos/vino3.webp"},
    {id:4, nombre: "Santa Julia", categoria: "vino", ml:"750ml", precio: 1500, imagenSrc: "Vinos/vino4.webp"},
    {id:5, nombre: "Andes Rubia",categoria: "cerveza", ml:"750ml", precio: 1300, imagenSrc:"Cerveza/beer1.webp"},
    {id:6, nombre: "Andes Roja",categoria: "cerveza", ml:"750ml", precio: 1900, imagenSrc:"Cerveza/beer2.webp"},
    {id:7, nombre: "Pack:6 Andes Negra",categoria: "cerveza", ml:"750ml", precio: 1100, imagenSrc:"Cerveza/beer3.webp"},
    {id:8, nombre: "Pack:6 Andes IPA Roja",categoria: "cerveza", ml:"750ml", precio: 1500, imagenSrc:"Cerveza/beer4.webp"},
    {id:9, nombre: "Fernet Branca", categoria: "destilado", ml:"750ml", precio: 1300, imagenSrc:"Destilados/destilado1.webp"},
    {id:10, nombre: "Fernet 1882", categoria: "destilado", ml:"750ml", precio: 1900, imagenSrc:"Destilados/destilado2.webp"},
    {id:11, nombre: "Fernet Buho Negro", categoria: "destilado", ml:"750ml", precio: 1100, imagenSrc:"Destilados/destilado3.webp"},
    {id:12, nombre: "Fernet Branca", categoria: "destilado", ml:"750ml", precio: 1500, imagenSrc:"Destilados/destilado4.webp"},
    {id:13, nombre: "Citric Naranja", categoria: "sinalcohol", ml:"750ml", precio: 1300, imagenSrc:"Sin Alcohol/sinalcohol1.webp"},
    {id:14, nombre: "Jugo Baggio", categoria: "sinalcohol", ml:"750ml", precio: 1900, imagenSrc:"Sin Alcohol/sinalcohol2.webp"},
    {id:15, nombre: "Citric Pomelo", categoria: "sinalcohol", ml:"750ml", precio: 1100, imagenSrc:"Sin Alcohol/sinalcohol3.webp"},
    {id:16, nombre: "Jugo Del Valle", categoria: "sinalcohol", ml:"750ml", precio: 1500, imagenSrc:"Sin Alcohol/sinalcohol4.webp"}
    ]

localStorage.setItem('bebidas', JSON.stringify(bebidas));

localStorage.setItem('cuponDescuento',JSON.stringify('DESC123'));

const listaBebidas = JSON.parse(localStorage.getItem('bebidas'));
const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'));

function mostrarCervezas(){
    const carrouselCervezas = document.getElementById('carrouselCervezas');

    listaBebidas.forEach((element) =>{
        if(element.categoria == "cerveza"){
            carrouselCervezas.innerHTML += 
            `<div class="card">
                <img src="${element.imagenSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title text-truncate">${element.nombre}</h6>
                    <p class="card-text">${element.ml}<br><strong>$${element.precio}</strong></p>
                    <button 
                    class="btn btn-primary"
                    data-id="${element.id}" 
                    onclick="mostrarProducto(event)">AGREGAR</button>
                </div>
            </div>`
        }
    })
}

function mostrarSinalcohol(){
    const carrouselSinalcohol = document.getElementById('carrouselSinalcohol');
    
    listaBebidas.forEach(element =>{
        if(element.categoria == "sinalcohol"){
            carrouselSinalcohol.innerHTML += 
            `<div class="card">
                <img src="${element.imagenSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title text-truncate">${element.nombre}</h6>
                    <p class="card-text">${element.ml}<br><strong>$${element.precio}</strong></p>
                    <button 
                    class="btn btn-primary"
                    data-id="${element.id}" 
                    onclick="mostrarProducto(event)">AGREGAR</button>
                </div>
            </div>`
        }
    })
}

function mostrarDestilados(){
    const carrouselDestilados = document.getElementById('carrouselDestilados');
    
    listaBebidas.forEach(element =>{
        if(element.categoria == "destilado"){
            carrouselDestilados.innerHTML += 
            `<div class="card">
                <img src="${element.imagenSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title text-truncate">${element.nombre}</h6>
                    <p class="card-text">${element.ml}<br><strong>$${element.precio}</strong></p>
                    <button 
                    class="btn btn-primary"
                    data-id="${element.id}" 
                    onclick="mostrarProducto(event)">AGREGAR</button>
                </div>
            </div>`
        }
    })
}

function mostrarVinos(){
    const carrouselVinos = document.getElementById('carrouselVinos');
    
    listaBebidas.forEach(element =>{
        if(element.categoria == "vino"){
            carrouselVinos.innerHTML += 
            `<div class="card">
                <img src="${element.imagenSrc}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-title text-truncate">${element.nombre}</h6>
                    <p class="card-text">${element.ml}<br><strong>$${element.precio}</strong></p>
                    <button 
                    class="btn btn-primary"
                    data-id="${element.id}" 
                    onclick="mostrarProducto(event)">AGREGAR</button>
                </div>
            </div>`
        }
    })
}

function mostrarFiltrados(evt){
    const canvas = document.getElementById('canvas-body');
    canvas.innerHTML = "";
    const valorFiltro = evt.target.value.toLowerCase();
    
    const bebidasFiltradas = bebidas.filter(function(beb){
        const bebida = beb.nombre.toLowerCase();

        if(bebida.includes(valorFiltro)){
            return true;
        }
        return false;
    })
    renderizarCanvas(bebidasFiltradas)

}

function renderizarCanvas(filtrados){
    const canvas = document.getElementById('canvas-body');
    filtrados.forEach(ele => {
        canvas.innerHTML += 
        `<div class="card-modal" >
            <img src="${ele.imagenSrc}" alt="">
            <div class="card-info">
                <p data-id="${parseInt(ele.id)}" onclick="mostrarProducto(event)">${ele.nombre}</p>
                <p>$${ele.precio}</p>
            </div>
        </div>` 
    })
}

function mostrarProducto(evt){
    localStorage.setItem('id', evt.target.dataset.id)
    window.location.href = "producto.html";
}
function mostrarProductoFromCanvas(evt){
    localStorage.setItem('id', evt.target.dataset.id)
    window.location.href = "producto.html";
}

function carritoContadorIndex(){
    const carritoContador = document.getElementById('carritoContadorIndex');
    var carritoExistente = JSON.parse(localStorage.getItem('carrito'));
    if(carritoExistente === null || carritoExistente === undefined){
        carritoContador.innerHTML = 0;
    }else{
        carritoContador.innerHTML = carritoExistente.length;
    }
}

function renderizarCarrito(){
    const carritoCanvasCart = document.getElementById('offcanvas-cart');
    carritoCanvasCart.innerHTML =""; 
    if(carritoLocalStorage.length !== 0){
    carritoLocalStorage.forEach((element, index) =>{
        carritoCanvasCart.innerHTML += 
        `<div class="product-cart">
            <img src="${element.image}" alt="cerveza">
            <div class="product-cart-info">
                <p class="product-cart-info-nombre">${element.nombre + " " + element.ml}</p>
                <div class="product-cart-info-contador">
                    <p onclick="restarProductoCarrito(${index})">-</p>
                    <p id="cantidadProductoCarrito">${element.cantidad}</p>
                    <p onclick="sumarProductoCarrito(${index})">+</p>
                </div>  
            </div>
            <div class="total-product">
            <p>$${element.precio * element.cantidad}</p>
            <p onclick="eliminarProductoCarrito(${index})">❌</p>
            </div>
        </div>`
    })
    carritoCanvasCart.innerHTML += 
    `
                    <div class="totalesCompra">
                      <p>Subtotal</p>
                      <p id="subtotal"></p>
                    </div>
                    <div class="totalesCompra">
                      <p>Descuento</p>
                      <p id="descuento">---</p>
                    </div>
                    <div class="totalesCompra">
                      <p>Total</p>
                      <p id="totalCompra"></p>
                    </div>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ¿Tenés cupon de descuento?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <input type="text" id="inputCupon">
                    <p onclick="aplicarDescuento()">Aplicar</p>
                </div>
            </div>
        </div>
    </div>
    <div class="button">
        <button class="btn btn-primary" onclick="comprar()">COMPRAR</button>
    </div>`
    }else{
        carritoCanvasCart.innerHTML = 
        `<div class="carroVacio">
            <h1>El carrito de compras está vacio</h1>
            <a href="index.html" data-bs-dismiss="offcanvas">Volver a la tienda</a>
        </div>`
    }

    sumarTotalCarrito()
}
function sumarTotalCarrito(){
    const subTotalCarrito = document.getElementById('subtotal');
    const totalCompra = document.getElementById('totalCompra');
    let suma = 0;
    if(carritoLocalStorage.length !== 0){
    carritoLocalStorage.forEach(element =>{
        suma += element.cantidad * element.precio;
    })
    subTotalCarrito.innerText = "$" + suma;
    totalCompra.innerText = "$" + suma;
    localStorage.setItem('subtotal',suma)
    }
}
function sumarProductoCarrito(index){
    carritoLocalStorage[index].cantidad += 1;
    renderizarCarrito()
    localStorage.setItem('carrito', JSON.stringify(carritoLocalStorage))
}
function restarProductoCarrito(index){
    if(carritoLocalStorage[index].cantidad !== 1){
        carritoLocalStorage[index].cantidad -= 1;
        renderizarCarrito()
        localStorage.setItem('carrito', JSON.stringify(carritoLocalStorage))
    }
}
function eliminarProductoCarrito(index){
    carritoLocalStorage.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carritoLocalStorage))
    renderizarCarrito()
    carritoContadorIndex()
}

function comprar(){
    alert("GRACIAS POR SU COMPRA")
    let carrito = []
    localStorage.setItem("carrito",JSON.stringify(carrito))
    window.location.href = "index.html"    
}
function aplicarDescuento(){
    let cuponIngresado = document.getElementById('inputCupon');
    let cuponDescuentoLS = JSON.parse(localStorage.getItem('cuponDescuento'));
    let subTotalLS = JSON.parse(localStorage.getItem('subtotal'))
    let descuentoCarrito = document.getElementById('descuento')
    let totalCompra = document.getElementById('totalCompra');
    let descuento = (subTotalLS*70)/100;
    console.log(descuento)
    if(cuponIngresado.value === cuponDescuentoLS){
        descuentoCarrito.innerHTML = "$" + (subTotalLS - descuento);
        totalCompra.innerHTML = "$" + (subTotalLS - (subTotalLS - descuento));
    }else{
        alert("CUPON INCORRECTO")
    }
}
carritoContadorIndex()
mostrarCervezas()
mostrarVinos()
mostrarDestilados()
mostrarSinalcohol()
