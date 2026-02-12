document.addEventListener('DOMContentLoaded', function () {
  /* =====================================
     COOKIE BANNER
  ====================================== */

  const cookieBanner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('acceptCookies');

  if (cookieBanner) {
    // Verifica se já aceitou
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'block';
    } else {
      cookieBanner.style.display = 'none';
    }

    // Clique em aceitar
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
      });
    }
  }

  /* =====================================
     FORMULÁRIO WHATSAPP
  ====================================== */

  const form = document.getElementById('captureForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const whatsapp = document.getElementById('whatsapp').value.trim();
      const area = document.getElementById('area').value;
      const mensagem = document.getElementById('mensagem').value.trim();

      // Define número baseado na área
      const numero = area === 'Criminal' ? '5511938059405' : '551150506310';

      const texto = `
        Olá! Meu nome é ${nome}.
        WhatsApp: ${whatsapp}
        Área: ${area}
        Mensagem: ${mensagem}
      `.trim();

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      window.open(url, '_blank');

      form.reset();
    });
  }

  /* =====================================
    HEADER SHOW / HIDE ON SCROLL
    ===================================== */

  let lastScroll = 0;
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;

      // Sempre mostrar no topo
      if (currentScroll <= 0) {
        header.classList.remove('header--hidden');
        header.classList.remove('header--scrolled');
        return;
      }

      // Adiciona sombra após rolar
      if (currentScroll > 20) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }

      // Scroll para baixo
      if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add('header--hidden');
      }
      // Scroll para cima
      else if (currentScroll < lastScroll) {
        header.classList.remove('header--hidden');
      }

      lastScroll = currentScroll;
    });
  }
});
