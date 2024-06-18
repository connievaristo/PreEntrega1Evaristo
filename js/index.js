const containerGaleria = document.querySelector('.slide');
const controlAnt = document.querySelector('.controlAnt');
const controlSig = document.querySelector('.controlSig');

const fotos = [
    {
        nombre: 'Rack de TV',
        precio: 250000
    },
    {
        nombre: 'Mesa Cava',
        precio: 120000
    },
    {
        nombre: 'Sillón',
        precio: 400000
    },
    {
        nombre: 'Mesa de Luz',
        precio: 150000
    }
    ]; //Nombre de fotos
let currentIndex = 0;

const formCalcularCuotas = document.getElementById('formCalcularCuotas');
const divCalculo = document.getElementById('divCalculo');
const textoCuotas = document.createElement('p');
textoCuotas.className = "txtCuotas";
let montoCuotas;
let montoInteres;

//Función para generar elementos de la galería de fotos
function crearGaleria() {
    fotos.forEach((img, index) => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = `img/${img.nombre}.jpg`; //paso parámetro img
        image.alt = `img ${index + 1}`;
        const p = document.createElement('p');
        p.textContent = `${img.nombre} - $${img.precio}`;
        li.appendChild(image);
        li.appendChild(p);
        if (index === 0) {
            li.classList.add('active'); //Declaro que el primer elemento va a ser el "activo"
        };
        containerGaleria.appendChild(li);
    });
};

//Función para mostrar la imagen según el índice
function mostrarImagen(index) {
    const itemsGaleria = document.querySelectorAll('.slide li'); //selecciono todos los li dentro de la id slide
    itemsGaleria.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

//Función para mostrar la imagen SIGUIENTE
function mostrarSig() {
    currentIndex = (currentIndex + 1) % fotos.length; //??
    mostrarImagen(currentIndex); //Muestro esa imagen
};

//Funcion para mostrar la imagen ANTERIOR
function mostrarAnt() {
    currentIndex = (currentIndex - 1 + fotos.length) % fotos.length;
    mostrarImagen(currentIndex);
};

controlAnt.addEventListener('click', mostrarAnt);
controlSig.addEventListener('click', mostrarSig);

crearGaleria();
mostrarImagen(currentIndex);



document.addEventListener('DOMContentLoaded', function () {
    formCalcularCuotas.addEventListener('submit', function (e) { //Agarro al formulario y le aplico evento para que no recargue
        e.preventDefault();
        //Agarro los valores de los inputs
        const montoForm = parseFloat(document.getElementById('montoForm').value);
        const cuotasForm = parseInt(document.getElementById('cuotasForm').value);

        if (isNaN(montoForm) || isNaN(cuotasForm) || montoForm <= 0 || ![3, 6, 9, 12].includes(cuotasForm)) {
            textoCuotas.textContent = "Por favor, ingrese un monto válido y una cantidad de cuotas válida (3, 6, 9 o 12)";
            divCalculo.appendChild(textoCuotas);
            return;
        }
        textoCuotas.textContent = "";
        //Almaceno los valores de los inputs
        localStorage.setItem('Monto', montoForm);
        localStorage.setItem('Cuotas', cuotasForm);
        console.log("Valores guardados, monto: " + montoForm + " y cuotas: " + cuotasForm);
        //Me TRAIGO los valores de los inputs
        const monto = parseFloat(localStorage.getItem('Monto'));
        const cuotas = parseInt(localStorage.getItem('Cuotas'));
        //Ejecuto función para calcular las cuotas
        simularCuota(monto, cuotas);

    });
});

//Función para calcular las cuotas
function simularCuota(monto, cuotas) {
    switch (cuotas) {
        case 3:
            aplicarInteres(monto, 1.3);
            calculaMontoCuota(monto, 3);
            break;
        case 6:
            aplicarInteres(monto, 1.6);
            calculaMontoCuota(montoInteres, 6);
            break;
        case 9:
            aplicarInteres(monto, 1.9);
            calculaMontoCuota(montoInteres, 9);
            break;
        case 12:
            aplicarInteres(monto, 1.12);
            calculaMontoCuota(montoInteres, 12);
            break;
        default:
            console.log("No ingresó una cantidad de cuotas válida.");
            localStorage.clear();
            formCalcularCuotas.reset();
    };
    textoCuotas.textContent = "Eligió abonar $" + monto + " en " + cuotas + " cuotas de $" + Math.round(montoCuotas) + ". El importe total final es de $" + Math.round(montoInteres);
    divCalculo.appendChild(textoCuotas);
};

//Función para aplicar interés
const aplicarInteres = (monto, interes) => { return montoInteres = monto * interes };

//Función para calcular el IMPORTE de la cuota
function calculaMontoCuota(a, b) {
    if (b > 0) {
        return montoCuotas = a / parseInt(b);
    } else {
        console.log("Número inválido. No se puede dividir por cero.");
    };
};

