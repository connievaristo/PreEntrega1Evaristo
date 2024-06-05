let monto;
let cuotas;
let montoCuotas;
let montoInteres;

// //prueba .includes
// const cuotasTest = [3,6,9,12];
// console.log(cuotasTest.includes(3)); //true
// console.log(cuotasTest.includes(11)); //false

// cuotas = parseInt(prompt("Indicá en cuántas cuotas querés pagar (3, 6, 9 o 12)"));
// if ([3, 6, 9, 12].includes(cuotas)){
//     console.log("Cuotas elegidas: "+ cuotas)
// } else {
//     alert("ingresar cuotas válidas")
// };

const aplicarInteres = (monto, interes) => { return montoInteres = monto * interes };

function calculaMontoCuota(a, b) {
    if (b > 0) {
        return montoCuotas = a / parseInt(b);
    } else {
        "Ingrese un número válido. No se puede dividir por cero."
    };
};

function simularCuota() {
    do {
        monto = parseFloat(prompt("Ingresá el monto cotizado del producto que querés pagar en cuotas."));
        if (isNaN(monto || monto <= 0)) {
            alert("No ingresó un monto válido")
        };
    } while (isNaN(monto) || monto <= 0);

    while (true) {
        cuotas = parseInt(prompt("Indicá en cuántas cuotas querés pagar (3, 6, 9 o 12)"));
        if ([3, 6, 9, 12].includes(cuotas)) {
            break; //Deja de iterar si se cumple la condición 
        } else {
            alert("Ingresar una cantidad de cuotas válida (3, 6, 9 o 12)");
        }
    }; ////Avanza si se cumple la condición, si no no sigue al resto del código porque no sale del loop

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
    };
    console.log("El usuario quiere pagar " + monto + " en " + cuotas + " cuotas");

    alert("Son " + cuotas + " cuotas de " + Math.round(montoCuotas) + ". El monto total es de " + Math.round(montoInteres));
};

//Tomar datos del usuario y guardarlos en un Array
const personas = [];

class Usuario {
    constructor(nombre, edad, celular) {
        this.nombre = nombre;
        this.edad = edad;
        this.celular = celular;
    }
    validarEdad() {
        if (this.edad < 18 && this.edad >= 0) {
            alert("No podemos avanzar con personas menores de 18 años.")
        } else if (this.edad >= 18) {
            alert("Lo estaremos contactando a la brevedad al " + this.celular)
        } else {
            alert("No ingresó una edad válida.")
        }
    }
};

function agregarContacto() {
    const nuevaPersona = new Usuario(prompt("Vamos a pedirte algunos datos para contactarte. Por favor, ingresá tu nombre."), prompt("Indicanos tu edad"), prompt("Indicanos un número de teléfono"));

    nuevaPersona.validarEdad(); //Valido edad de la persona creada (new Usuario guardado en una constante)

    personas.push(nuevaPersona); //Lo guardo en el array de personas

    const personasMayores = personas.filter((persona) => persona.edad >= 18); //Hago array de solo personas >= 18
    console.log(personasMayores);
};
