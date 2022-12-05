const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btncalcular = document.querySelector('#btnCalcular');
const presult  = document.querySelector('#result');

form.addEventListener('submit', submitInputValues);

function submitInputValues(event){
event.preventDefault();
presult.innerHTML ="resultado es: " + (parseInt(calculo1.value) + parseInt(calculo2.value));
}