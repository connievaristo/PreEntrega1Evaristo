const personas = [];
const sectionContact = document.querySelector('.contactForm');
const formContacto = document.querySelector('.contact');
let datosContacto = document.createElement('div');


class Usuario {
    constructor(nombre, mail, celular) {
        this.nombre = nombre;
        this.mail = mail;
        this.celular = celular;
    }
};



document.addEventListener('DOMContentLoaded', function () {
    formContacto.addEventListener('submit', function (e) {
        //Evito que recargue y agarro valores de los inputs
        e.preventDefault();
        const nameF = document.getElementById('name').value;
        const mailF = document.getElementById('mail').value;
        const mobileF = document.getElementById('mobile').value;

        datosContacto.textContent = "";

        //Almaceno valores
        localStorage.setItem('nombreForm', nameF);
        localStorage.setItem('mailForm', mailF);
        localStorage.setItem('celuForm', mobileF);
        console.log("Valores de contacto guardados: " + nameF + " " + mailF + " " + mobileF);

        //Me traigo valores del almacenamiento local:
        const nombreForm = localStorage.getItem('nombreForm');
        const mailForm = localStorage.getItem('mailForm');
        const celuForm = localStorage.getItem('celuForm');

        datosContacto.innerHTML = `<p>Datos enviados</p><p>Nombre: ${nombreForm} - Mail: ${mailForm} - Teléfono: ${celuForm}</p>`;
        sectionContact.appendChild(datosContacto);

        const nuevaPersona = new Usuario(nombreForm,mailForm,celuForm);
        personas.push(nuevaPersona); //Lo guardo en el array de personas
        console.log(personas);
    });

});
