//Variables:
const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div'); 
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Index", "Products", "Contact"];
const liImg = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
const footer = document.getElementsByTagName('footer'); //Agarro al footer
const pFooter = document.createElement('p');
const TIME = new Date().getFullYear();

cabecera.appendChild(navegacion); //pongo al navegacion en el header
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar'; //le pongo una clase al div este

ul.appendChild(liImg);
liImg.appendChild(ORIGEN);

ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'img/logo.png'; //Es esto en html: <img src="img/logo.png"
img.alt = 'CoderHouse'; // alt="Lola Deco">

for (const link of links){
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
};
