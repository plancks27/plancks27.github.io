/* ============================================================
   PLANCKS IAPS HONDURAS — Main JS
   ============================================================ */

(function () {
  'use strict';

  /* ── Sticky Nav ─────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  function handleScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ── Mobile Menu ────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  // Close on link click
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Schedule Day Tabs ──────────────────────────────────── */
  const tabs = document.querySelectorAll('.day-tab');
  const dayContents = document.querySelectorAll('.day-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetDay = tab.dataset.day;

      tabs.forEach(t => t.classList.remove('active'));
      dayContents.forEach(d => d.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById('day-' + targetDay);
      if (target) target.classList.add('active');
    });
  });

  /* ── FAQ Accordion ──────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => i.classList.remove('open'));

      // Open clicked if it wasn't open
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Active Nav Link on Scroll ──────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('nav-active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ── Smooth anchor offset ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Geo SVG rotation on scroll ─────────────────────────── */
  const heroGeo = document.querySelector('.hero-geo');
  if (heroGeo) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroGeo.style.transform = `translateY(-50%) rotate(${scrolled * 0.02}deg)`;
    }, { passive: true });
  }

})();
