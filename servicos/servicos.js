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



// Obtenha o elemento alvo
const elementoCartoes = document.querySelector('.cards');

// Configure o Intersection Observer
const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            // Adicione a classe 'show' quando o elemento alvo estiver visível
            elementoCartoes.classList.add('show');
        } else {
            // Remova a classe 'show' quando o elemento alvo estiver fora de vista
            elementoCartoes.classList.remove('show');
        }
    });
}, { threshold: 0.3 }); // Ajuste o limiar conforme necessário

// Comece a observar o elemento alvo
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

            // Chame handleScroll() ao carregar a página para verificar os cards visíveis inicialmente
            handleScroll();
        });