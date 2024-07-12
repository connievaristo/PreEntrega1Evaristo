
const cardsProd = document.getElementById('cards');
let productos = []; // Declaro productos como una variable global

//Función para traer Productos de productos.json 
const peticionProductos = async () => {
    const respuesta = await fetch('productos.json');
    const datos = await respuesta.json();
    productos = datos; // Asignamos los datos a la variable global productos
    for (let item of datos) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.imagen} alt=${item.product} />
                <div class="card-body">
                    <h5>${item.product}</h5>
                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                    <p class="card-text">Precio: $${item.precio}</p>
                    <button href="#" class="botonGrey" onclick="addToCart(${item.id}, 1)">Agregar al Carrito</button>
                </div>
            </div>
        `;
        cardsProd.appendChild(card);
    }
}

peticionProductos();

let cart = cargarCartdeLocalStorage(); // Declaro abajo

// Función para agregar producto al carrito
function addToCart(productID, cantidad) {
    const producto = productos.find(p => p.id === productID); // Guardo al producto ahí cuando lo encuentro
    if (!producto) { // Si no encuentro producto
        console.error("Product not found");
        return;
    }

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
    
    Toastify({
        text: "Producto agregado al carrito",
        className: "info",
        gravity: "top",
        style: {
          background: "#4d464d",
        },
        duration: 1000
      }).showToast();

    guardarCartEnLocalStorage();
    renderCart();
}

// Función para crear lista del carrito
function renderCart() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>ID: ${item.id} Nombre: ${item.product} Cantidad: ${item.cantidad} Precio total: $${item.precioTotal}</p>`;
        carritoDiv.appendChild(itemDiv);
    });

    const cantidadItems = cart.reduce((acumulador, item) => acumulador + item.cantidad, 0);
    const totalItems = cart.reduce((acumulador, item) => acumulador + item.precioTotal, 0);
    const totalP = document.createElement('p');
    totalP.className = 'totalCarrito';
    totalP.innerHTML = `TOTAL: $${totalItems} (${cantidadItems} productos)`;
    carritoDiv.appendChild(totalP);

    //Declaro que siempre que el carrito esté vacío diga "No hay productos en el carrito"
    if (cantidadItems === 0 && totalItems === 0) {
        const carritoDiv = document.getElementById('carrito');
        carritoDiv.innerHTML = 'No hay productos en el carrito'; // limpio
    } else {
        const buttonComprar = document.createElement('button');
        buttonComprar.className = 'comprar';
        buttonComprar.textContent = 'COMPRAR';
        carritoDiv.appendChild(buttonComprar);
        buttonComprar.addEventListener('click', () => {
            Swal.fire({
                title: "¿Querés finalizar tu compra?",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Comprar",
                denyButtonText: `No todavía`
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("¡Compra realizada!", "", "success");
                    limpiarCarrito();
                } else if (result.isDenied) {
                    Swal.fire("Compra no realizada", "", "error");
                }
                ;
            })


        })

        const buttonLimpiar = document.createElement('button');
        buttonLimpiar.className = 'vaciarCart';
        buttonLimpiar.textContent = 'Vaciar carrito';
        carritoDiv.appendChild(buttonLimpiar);
        buttonLimpiar.addEventListener('click', limpiarCarrito);
    }
};

// Función para almacenar carrito en el LocalStorage
function guardarCartEnLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Recupero carrito de LocalStorage
function cargarCartdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('cart');
    return carritoGuardado ? JSON.parse(carritoGuardado) : []; // Si carrito guardado = true, desglosa el JSON del carrito, si no crea array vacío.
}

// Función para limpiar carrito
function limpiarCarrito() {
    cart = [];
    guardarCartEnLocalStorage(); // Asegúrate de limpiar también en localStorage

    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = 'No hay productos en el carrito'; // limpio
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});



