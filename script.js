(function() {
  const root = document.documentElement;
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const shown = navLinks.style.display === 'flex';
      navLinks.style.display = shown ? 'none' : 'flex';
    });
    Array.from(navLinks.querySelectorAll('a')).forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth < 640) navLinks.style.display = 'none';
    }));
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})(); 