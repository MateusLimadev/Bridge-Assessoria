const btnmobile = document.getElementById('btn-mobile');

// Adiciona a classe 'transparent' inicialmente
var header = document.getElementById('header');
header.classList.add('transparent');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnmobile.addEventListener('click', toggleMenu);
btnmobile.addEventListener('touchstart', toggleMenu);

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    // Adiciona ou remove a classe 'transparent' com base no scroll
    if (scrollPosition > 0) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
});



 function showDescription(){

    var cardimg = document.getElementById('imgcard');
    var carddescription = document.getElementById('description-card');

    cardimg.style.display = 'block';

   
 
 }