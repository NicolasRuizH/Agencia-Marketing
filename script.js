  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    overlay.style.display = 'block';
    setTimeout(() => overlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Navbar scroll effect
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));

  // CTA button
  document.querySelector('.cta-form button').addEventListener('click', function() {
    const input = document.querySelector('.cta-form input');
    if (input.value && input.value.includes('@')) {
      this.textContent = '¡Listo! Te contactamos pronto ✓';
      this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else {
      input.style.border = '1px solid rgba(239,68,68,0.5)';
      input.placeholder = 'Ingresá un email válido';
      setTimeout(() => {
        input.style.border = '';
        input.placeholder = 'tu@empresa.com';
      }, 2000);
    }
  });
