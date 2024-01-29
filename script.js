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


