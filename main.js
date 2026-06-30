/* ── NAV SCROLL ─────────────────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ── MOBILE MENU ────────────────────────────────────── */
function openMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) { menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) { menu.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ── FADE UP OBSERVER ───────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  fadeEls.forEach(el => observer.observe(el));
}

/* ── FAQ ACCORDION ──────────────────────────────────── */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── SCROLL STRIP TOUCH ─────────────────────────────── */
const track = document.querySelector('.scroll-track');
if (track) {
  track.addEventListener('touchstart', () => track.style.animationPlayState = 'paused', { passive: true });
  track.addEventListener('touchend',   () => track.style.animationPlayState = 'running', { passive: true });
}

/* ── SMOOTH ANCHOR SCROLL (for in-page links) ────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
