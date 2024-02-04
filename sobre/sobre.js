function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../imagens/iconemenu.svg"
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "../imagens/iconecancel.svg"
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
    // Adiciona um evento de rolagem à janela
    window.addEventListener("scroll", function () {
        // Obtém a posição atual de rolagem
        var scrollPosition = window.scrollY;

        // Obtém o elemento de navegação (nav)
        var nav = document.querySelector("nav");

        // Adiciona ou remove a classe 'transparent' com base na posição de rolagem
        if (scrollPosition === 0) {
            nav.classList.remove("transparent");
        } else {
            nav.classList.add("transparent");
        }
    });
});
