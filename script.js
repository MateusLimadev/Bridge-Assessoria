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



document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  let currentIndex = 0;

  function showImage(index) {
    const transformValue = -index * 100 + "%";
    carousel.style.transform = "translateX(" + transformValue + ")";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    showImage(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    showImage(currentIndex);
  }

  setInterval(nextSlide, 3000); // Trocar a imagem a cada 3 segundos (ajuste conforme necessário)
});




document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    function checkVisibility() {
        projects.forEach(function (project) {
            const rect = project.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                project.classList.add('appear');
            }
        });
    }

    document.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Chame checkVisibility() ao carregar a página para verificar os projetos visíveis inicialmente
    checkVisibility();
});
