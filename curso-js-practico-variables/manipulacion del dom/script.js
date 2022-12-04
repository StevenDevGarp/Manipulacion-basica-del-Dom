const h1 = document.querySelector("h1");
const p = document.querySelector('p');
const pclass = document.querySelector('.classP');
const pId = document.querySelector('#pId');
const input = document.querySelector('input');


h1.innerHTML = 'Patito'

input.value = "456";

const img = document.createElement('img');
img.setAttribute('src', 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg');
pId.innerHTML = "";
pId.append(img);
