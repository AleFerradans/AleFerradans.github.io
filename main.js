const menu = document.querySelector('.menu');
const enlaces = document.querySelector('ul');
const barras = document.querySelectorAll('.menu span');

menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});