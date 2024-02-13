function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/iconemenu.svg"
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imagens/iconecancel.svg"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuButton = document.querySelector(".mobile-menu-icon button");
    var body = document.body;

    mobileMenuButton.addEventListener("click", function () {
        body.classList.toggle("menu-opened");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Obtém o elemento de navegação (nav)
    var nav = document.querySelector("header");

    // Adiciona a classe 'transparent' por padrão
    nav.classList.add("transparent");

    // Adiciona um evento de rolagem à janela
    window.addEventListener("scroll", function () {
        // Obtém a posição atual de rolagem
        var scrollPosition = window.scrollY;

        // Adiciona ou remove a classe 'transparent' com base na posição de rolagem
        if (scrollPosition === 0) {
            nav.classList.add("transparent");
        } else {
            nav.classList.remove("transparent");
        }
    });
});

// Ajusta a largura dos cards com base no tamanho da janela de visualização
function ajustarLarguraCards() {
    const cardsContainer = document.getElementById('cardscontainer');
    const cards = cardsContainer.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.maxWidth = `${window.innerWidth / 4}px`; // Dividindo por 4 para mostrar inicialmente 4 cards
    });
}

