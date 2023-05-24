const listaBebidas = JSON.parse(localStorage.getItem('bebidas'));
const ID = localStorage.getItem('id');

var carritoExistente = localStorage.getItem('carrito');
if(carritoExistente === null || carritoExistente === undefined){
    let carrito = []
    localStorage.setItem('carrito',JSON.stringify(carrito)) 
}

const producto = listaBebidas.filter(function(bebida){
    if(bebida.id == ID ){
        return true
    }
    return false
})
console.log(producto)
const productContainer = document.getElementById('product-container');

productContainer.innerHTML = 
   `
        <div class="volver">
            <h1 onclick="volver()">←</h1>
        </div>
        <img src="${producto[0].imagenSrc}" alt="" id="productImage">
        <div class="info-container">
            <div class="info">
                <p class="nombre" id="productName">
                ${producto[0].nombre}
                </p>
                
                <p class="nombre" id="productName">
                ${producto[0].ml}
                </p>

                <p class="precio" id="productPrecio">
                $${producto[0].precio}
                </p>
                <p>🚛 Envio gratis</p>
            </div>
            <div class="contadorCantidad">
                <div class="contadorCantidad-inner">
                    <h1 onclick="restarUno()">-</h1>
                    <h1 id="cantidad">1</h1>
                    <h1 onclick="sumarUno()">+</h1>
                </div>
            </div>
            <div class="botonesAumentarCantidad">
                <div class="botonAumentar" onclick="sumarTres()">
                    <h1>+3</h1>
                </div>
                <div class="botonAumentar" onclick="sumarSeis()">
                    <h1>+6</h1>
                </div>
                <div class="botonAumentar" onclick="sumarDoce()">
                    <h1>+12</h1>
                </div>
            </div>
            <div class="c-button">
            <button class="btn btn-primary" onclick="agregarACarrito()">AGREGAR</button>
            </div>
        </div>
`;

function volver(){
    window.location.href = "index.html"
}

function sumarUno(){
    const cantidad = document.getElementById('cantidad');
    const number = parseInt(cantidad.textContent);
    const cantidadIncrementada = number + 1;
    cantidad.textContent = cantidadIncrementada;
}
function restarUno(){
    const cantidad = document.getElementById('cantidad');
    const number = parseInt(cantidad.textContent);
    if(number !== 1){
        const cantidadIncrementada = number - 1;
        cantidad.textContent = cantidadIncrementada;
    }
}
function sumarTres(){
    const cantidad = document.getElementById('cantidad');
    const number = parseInt(cantidad.textContent);
    const cantidadIncrementada = number + 3;
    cantidad.textContent = cantidadIncrementada;
}
function sumarSeis(){
    const cantidad = document.getElementById('cantidad');
    const number = parseInt(cantidad.textContent);
    const cantidadIncrementada = number + 6;
    cantidad.textContent = cantidadIncrementada;
}
function sumarDoce(){
    const cantidad = document.getElementById('cantidad');
    const number = parseInt(cantidad.textContent);
    const cantidadIncrementada = number + 12;
    cantidad.textContent = cantidadIncrementada;
}


function agregarACarrito(){
    const cantidad = document.getElementById('cantidad');
    const number = parseInt(cantidad.textContent);
    const IDproduct = parseInt(ID);
    const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
    const index = carritoLocalStorage.findIndex((obj) => obj.id === IDproduct);

    if(carritoLocalStorage.length === 0){
        carritoLocalStorage.push({
            id: producto[0].id,
            nombre: producto[0].nombre,
            precio: producto[0].precio,
            ml: producto[0].ml,
            cantidad: number,
            image: producto[0].imagenSrc
    })
    alert("Producto Agregado!");
    localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
    }else if(index !== -1){
        carritoLocalStorage[index].cantidad += number;
        localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
        alert("Producto Agregado!");
    }else{
        carritoLocalStorage.push({
            id: producto[0].id,
            nombre: producto[0].nombre,
            precio: producto[0].precio,
            ml: producto[0].ml,
            cantidad: number,
            image: producto[0].imagenSrc
        })
        localStorage.setItem('carrito',JSON.stringify(carritoLocalStorage));
        alert("Producto Agregado!")
    }
    console.log(producto)
}

// carritoLocalStorage.push({
//     id: producto[0].id,
//     nombre: producto[0].nombre,
//     precio: producto[0].precio,
//     ml: producto[0].ml,
//     cantidad: number
// })