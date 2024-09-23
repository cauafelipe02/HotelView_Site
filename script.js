// Esconder e mostrar navbar

let lastScrollTop = 0;
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Rolar para baixo - esconder navbar
    navbar.classList.add('hidden');
  } else {
    // Rolar para cima - mostrar navbar
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop = scrollTop;
});

// Adiciona o link em toda a área do botão login
document.getElementById('#login_button').addEventListener('click', function() {
  window.location.href = document.getElementById('link').href;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
