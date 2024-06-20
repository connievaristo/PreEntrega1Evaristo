cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

ul.appendChild(liImg);
liImg.appendChild(ORIGEN);

ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'img/logo.png'; //Es esto en html: <img src="img/logo.png"
img.alt = 'Lola Deco'; // alt="Lola Deco">

for (const link of links){
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
};

footer[0].appendChild(pFooter); //Se anexa al footer como hijo del primer elemento -> [0]
pFooter.textContent = "Constanza Evaristo - Coderhouse";