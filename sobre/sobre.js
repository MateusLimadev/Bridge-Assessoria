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


document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    function checkVisibility() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Verifica se o scroll está no topo da página
        if (scrollY === 0) {
            projects.forEach(function (project) {
                project.classList.remove('appear');
            });
            return; // Não precisa verificar visibilidade se estiver no topo
        }

        // Verifica a visibilidade dos projetos
        projects.forEach(function (project) {
            const rect = project.getBoundingClientRect();
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                project.classList.add('appear');
            } else {
                project.classList.remove('appear');
            }
        });
    }

    document.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Chame checkVisibility() ao carregar a página para verificar os projetos visíveis inicialmente
    checkVisibility();
});



 $(document).ready(function() {
    // Encontra todas as divs com a classe 'mvvcontainer'
    var divs = $('.mvvcontainer > div');

    // Inicializa o índice da div atual
    var currentIndex = 0;

    // Configura a função de rolagem
    function scrollToNextDiv() {
      // Verifica se há uma próxima div
      if (currentIndex < divs.length - 1) {
        // Incrementa o índice da div
        currentIndex++;

        // Obtém a posição top da próxima div
        var nextDivTop = divs.eq(currentIndex).offset().top;

        // Realiza a animação de rolagem
        $('html, body').animate({
          scrollTop: nextDivTop
        }, 800); // 800 é a duração da animação em milissegundos
      }
    }

    // Configura o evento de rolagem da página
    $(window).on('scroll', function() {
      // Obtém a posição atual da janela de visualização
      var windowTop = $(window).scrollTop();

      // Obtém a posição top da div atual
      var currentDivTop = divs.eq(currentIndex).offset().top;

      // Define uma margem de folga para a transição suave
      var marginOfError = 50;

      // Verifica se a janela de visualização está perto do topo da div atual
      if (windowTop > currentDivTop - marginOfError) {
        // Chama a função para rolar para a próxima div
        scrollToNextDiv();
      }
    });
  });
        