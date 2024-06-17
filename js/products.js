//Agregar productos al HTML
const productos = [{
    id: 1,
    product: "Mesa de luz",
    precio: 50000
},
{
    id: 2,
    product: "Mesa comedor",
    precio: 180000
},
{
    id: 3,
    product: "Espejo",
    precio: 35000
},
{
    id: 4,
    product: "Rack de TV",
    precio: 89500
},
{
    id: 5,
    product: "Silla Windsor",
    precio: 40000
},
{
    id: 6,
    product: "Escritorio",
    precio: 102000
},
{
    id: 7,
    product: "Mesa de arrime",
    precio: 120000
},
{
    id: 8,
    product: "Lámpara Pantalla de Bamboo",
    precio: 70000
},
{
    id: 9,
    product: "Silla Tulum",
    precio: 37000
},
{
    id: 10,
    product: "Lámpara de pie Oslo",
    precio: 80000
}
];


const divProd = document.createElement('div'); //Creo al div para los productos
const sectionProd = document.getElementById('sectionProd'); //Traigo a la section que declaré en HTML con el id
sectionProd.appendChild(divProd); //Anido al div de productos en la section

for (const producto of productos) {
    let literal = `Nombre: ${producto.product} | Precio $${producto.precio}`
    const texto = document.createElement('p');
    texto.innerHTML = literal; //Guardo texto en la etiqueta para que lo muestre
    divProd.appendChild(texto); //Lo guardo en el div
};

const botonID = document.getElementById('botonID');
botonID.addEventListener('click',buscarId);

function buscarId() {
    const idIngresado = prompt("Ingresá el nombre del producto para ver el ID (tal cual está escrito en la descripción)");
    console.log(idIngresado);

    const resultadoFind = productos.find((producto) => producto.product === `${idIngresado}`);
    alert(`El ID de ${resultadoFind.product} es ${resultadoFind.id}`);
    console.log(resultadoFind)
};