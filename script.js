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


const words = ["digital.", "Bridge."];
const speedType = 400; // Velocidade para digitar
const speedErase = 150; // Velocidade para apagar
let wordIndex = 0;
let letterIndex = 0;
const typingEffectElement = document.getElementById('typing-effect');

function type() {
  const currentWord = words[wordIndex];
  typingEffectElement.textContent = currentWord.slice(0, letterIndex) + "";
  
  if (letterIndex < currentWord.length) {
    letterIndex++;
    setTimeout(type, speedType / 2);
  } else {
    setTimeout(() => {
      erase();
    }, speedType);
  }
}


function erase() {
  const currentWord = words[wordIndex];
  typingEffectElement.textContent = currentWord.slice(0, letterIndex--) + "";

  if (letterIndex >= 0) {
    setTimeout(erase, speedErase / 2);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(() => {
      letterIndex = 0;
      type();
    }, speedType / 2);
  }
}

// Inicialize o conteúdo do elemento com uma string vazia
typingEffectElement.textContent = "";

// Inicie o efeito imediatamente
type();
