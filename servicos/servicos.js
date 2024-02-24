const btnmobile = document.getElementById('btn-mobile');


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

    
    if (scrollPosition > 0) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
});




const elementoCartoes = document.querySelector('.cards');


const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
           
            elementoCartoes.classList.add('show');
        } else {
            
            elementoCartoes.classList.remove('show');
        }
    });
}, { threshold: 0.3 }); 


observador.observe(elementoCartoes);


document.addEventListener('DOMContentLoaded', function () {
            var cards = document.querySelectorAll('.card');

            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function handleScroll() {
                cards.forEach(function (card) {
                    if (isElementInViewport(card)) {
                        card.classList.add('zoom');
                    } else {
                        card.classList.remove('zoom');
                    }
                });
            }

            document.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);

            
            handleScroll();
        });