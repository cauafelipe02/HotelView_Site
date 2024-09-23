document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.eye');
    btn.addEventListener('click', function () {
      let input = document.querySelector('#senha');
      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        btn.textContent = 'Esconder';
      } else {
        input.setAttribute('type', 'password');
        btn.textContent = 'Mostrar';
      }
    });
  });