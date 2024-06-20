//Agregar productos al HTML
const productos = [{
    id: 1,
    product: "Mesa de Luz",
    precio: 150000
},
{
    id: 2,
    product: "Mesa comedor",
    precio: 200000
},
{
    id: 3,
    product: "Espejo",
    precio: 50000
},
{
    id: 4,
    product: "Rack de TV",
    precio: 250000
},
{
    id: 5,
    product: "Silla Windsor",
    precio: 45000
},
{
    id: 6,
    product: "Escritorio",
    precio: 110000
},
{
    id: 7,
    product: "Mesa de arrime",
    precio: 170000
},
{
    id: 8,
    product: "Mesa Cava",
    precio: 120000
},
{
    id: 9,
    product: "Sillón",
    precio: 400000
},
{
    id: 10,
    product: "Lámpara de pie Oslo",
    precio: 80000
}
];

let cart = cargarCartdeLocalStorage(); //Declaro abajo

//Función para agregar producto al carrito
function addToCart(productID, cantidad) {
    const producto = productos.find(p => p.id === productID); //Guardo al producto ahí cuando lo encuentro
    if (!producto) { //Si no encuentro producto
        console.error("Product not found");
        return;
    };

    const cartItem = cart.find(item => item.id === productID);

    if (cartItem) {
        cartItem.cantidad += cantidad;
        cartItem.precioTotal = cartItem.cantidad * producto.precio;
    } else {
        cart.push({
            id: producto.id,
            product: producto.product,
            precio: producto.precio,
            cantidad: cantidad,
            precioTotal: cantidad * producto.precio
        });
    }

    guardarCartEnLocalStorage();
    renderCart();
};

//Función para crear al elemento del producto para que se vea
function renderProductos() {
    const listaProducto = document.getElementById('sectionProd');
    listaProducto.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `<p>${producto.product} - $${producto.precio}</p>
        <button onclick="addToCart(${producto.id},1)" class="botonGrey">Agregar al Carrito</button>`;
        listaProducto.appendChild(productoDiv);
    });
};

//Función para crear lista  del carrito
function renderCart() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>ID: ${item.id} Nombre: ${item.product} Cantidad: ${item.cantidad} Precio total: $${item.precioTotal}</p>`;
        carritoDiv.appendChild(itemDiv);
    });
    const cantidadItems = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0)
    const totalItems = cart.reduce((acumulador, item) => acumulador + item.precioTotal, 0)
    const totalP = document.createElement('p');
    totalP.className = 'totalCarrito';
    totalP.innerHTML = `TOTAL: $${totalItems} (${cantidadItems} productos)`;
    carritoDiv.appendChild(totalP);

    const buttonLimpiar = document.createElement('button');
    buttonLimpiar.className = 'vaciarCart';
    buttonLimpiar.textContent = 'Vaciar carrito';
    carritoDiv.appendChild(buttonLimpiar);
    buttonLimpiar.addEventListener('click', limpiarCarrito);
};

//Función para alamacenar carrito en el LocalStorage
function guardarCartEnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

//Recupero carrito de LocalStorage
function cargarCartdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('cart');
    return carritoGuardado ? JSON.parse(carritoGuardado) : []; //Si carrito guardado = true, desglosa el JSON del carrito, si no cre aarray vacío.
};

//Función para limpiar carrito
function limpiarCarrito() {
    cart = [];
    guardarCartEnLocalStorage(); //Guardo carrito vacío
    
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = 'No hay productos en el carrito'; //limpio
};

document.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    renderCart();
});







