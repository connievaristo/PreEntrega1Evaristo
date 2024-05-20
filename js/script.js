let monto;
let cuotas;
let montoCuotas;
let montoInteres;

const aplicarInteres = (monto, interes) => { return montoInteres = monto * interes };

function calculaMontoCuota(a, b) {
    if (b > 0) {
        return montoCuotas = a / parseInt(b);
    } else {
        "Ingrese un número válido. No se puede dividir por cero."
    };
};

do {
    monto = parseFloat(prompt("Indicá el monto que querés pagar en cuotas."));
    if (isNaN(monto || monto <= 0)){
        alert("No ingresó un monto válido")
    };
} while (isNaN(monto) || monto <= 0);

do {
    cuotas = parseInt(prompt("Indicá en cuántas cuotas querés pagar (3, 6, 9 o 12)"));
    if (cuotas == 3 || cuotas == 6 || cuotas == 9 || cuotas == 12) {
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
                console.log("Hubo un error en la operación");
        };
        console.log("El usuario quiere pagar " + monto + " en " + cuotas + " cuotas");
    } else {
        alert("No ingresó una cantidad de cuotas válida.");
    }
} while (cuotas !== 3 && cuotas !== 6 && cuotas !== 9 && cuotas !== 12);//Avanza si el usuario ingresa una de esas opciones, si no no sigue al resto del código.

alert("Son " + cuotas + " cuotas de " + Math.round(montoCuotas) + ". El monto total es de " + Math.round(montoInteres));


let nombreUsuario = prompt("Ahora vamos a pedirte algunos datos para contactarte. Por favor, ingresá tu nombre.");
let edadUsuario = parseInt(prompt("Indicanos tu edad"));
let celular;

if (edadUsuario < 18 && edadUsuario >= 0) {
    alert("No podemos avanzar con personas menores de 18 años.")
} else if (edadUsuario >= 18) {
    celular = (prompt("Por favor indicanos un número de teléfono"));
    console.log(nombreUsuario + " tiene " + edadUsuario + " años. Su celular es " + celular);
} else {
    alert("Por favor, ingresá un número válido.")
};    
