/* Anterior: estaba en index esto
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

// const botonContacto = document.getElementById('botonContacto');
// botonContacto.addEventListener('click', agregarContacto);

function agregarContacto() {
    const nuevaPersona = new Usuario(prompt("Vamos a pedirte algunos datos para contactarte. Por favor, ingresá tu nombre."), prompt("Indicanos tu edad"), prompt("Indicanos un número de teléfono"));

    nuevaPersona.validarEdad(); //Valido edad de la persona creada (new Usuario guardado en una constante)

    personas.push(nuevaPersona); //Lo guardo en el array de personas

    const personasMayores = personas.filter((persona) => persona.edad >= 18); //Hago array de solo personas >= 18
    console.log(personasMayores);
};
*/