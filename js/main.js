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

  /* ── Countdown Timer ────────────────────────────────────── */
  function initCountdown(targetDate) {
    function update() {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        document.getElementById('countDays').textContent = '00';
        document.getElementById('countHours').textContent = '00';
        document.getElementById('countMinutes').textContent = '00';
        document.getElementById('countSeconds').textContent = '00';
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      document.getElementById('countDays').textContent = String(days).padStart(2, '0');
      document.getElementById('countHours').textContent = String(hours).padStart(2, '0');
      document.getElementById('countMinutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('countSeconds').textContent = String(seconds).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
  }
  // Target: June 1, 2027 (adjust once exact dates are confirmed)
  if (document.getElementById('countDays')) {
    initCountdown(new Date('2027-05-01T00:00:00'));
  }

  /* ── Language Toggle (EN/ES) ────────────────────────────── */
  const translations = {
    en: {
      'nav-about': 'About',
      'nav-host': 'Host City',
      'nav-experience': 'Experience',
      'nav-itinerary': 'Itinerary',
      'nav-venue': 'Venue',
      'nav-committee': 'Committee',
      'nav-faq': 'FAQ',
      'nav-sponsors': 'Sponsors',
      'nav-register': 'Register',
      'hero-eyebrow': 'IAPS International Physics Competition',
      'hero-title-1': 'PLANCKS',
      'hero-title-2': 'Honduras',
      'hero-title-3': '2027',
      'hero-subtitle': 'Physics League Across Numerous Countries for Kick-ass Students. The first edition of PLANCKS in Central America — expanding its reach to students and teams across Latin America, where ancient Maya civilisation meets the frontier of modern physics.',
      'hero-discover': 'Discover the Event',
      'hero-itinerary': 'View Itinerary ↓',
      'countdown-sub': 'until PLANCKS 2027 Honduras',
      'about-eyebrow': 'About',
      'about-title': 'Physics League Across<br>Numerous Countries<br><em>for Kick-ass Students</em>',
      'register-eyebrow': 'Registration',
      'register-title': 'Secure Your Place at PLANCKS 2027',
      'register-desc': 'Register your interest for the first PLANCKS in Central America. We\'ll notify you when official registration opens in 2026.',
      'register-cta-title': 'Registration Opens Early 2026',
      'register-cta-desc': 'Official registration will be handled via our external form. Click below to pre-register your interest and we\'ll notify you when the form opens.',
      'register-submit': 'Register Now →',
      'register-note': 'No commitment required. We\'ll keep you updated.',
      'register-info-1': '1–5 May 2027 — Event dates',
      'register-info-2': 'Teams of 3-4 students',
      'register-info-3': 'Accommodation & meals included',
      'register-info-4': 'Honduras',
      'footer-navigate': 'Navigate',
      'faq-title': 'Frequently Asked Questions',
      'faq-desc': 'Everything you need to know about registering, competing, and attending PLANCKS 2027 Honduras.',
      'committee-eyebrow': 'Organising Team',
      'committee-title': 'Organising Committee',
      'committee-desc': 'PLANCKS Honduras 2027 is co-organised by IAPS Honduras, IAPS Guatemala and IAPS Costa Rica — a trinational effort of physics students from three Central American countries, supported by IAPS internationally.',
      'footer-brand': 'Physics League Across Numerous Countries for Kick-ass Students. The first edition in Central America, co-organised by IAPS Honduras, IAPS Guatemala and IAPS Costa Rica.',
      'footer-contact': 'Contact',
      'pdf-badge': 'PLANCKS HONDURAS 2027',
      'pdf-download': 'Download PDF',
      'pdf-print': 'Print',
      'pdf-share': 'Share',
      'pdf-loading': 'Loading itinerary...',
      'pdf-footer': '📄 If the PDF doesn\'t load automatically, <a href="pdf/itinerary.pdf" download="PLANCKS_2027_Itinerary.pdf">click here to download it directly</a>. File size: ~2.5 MB | English & Spanish versions available',
      'count-days': 'Days',
      'count-hours': 'Hours',
      'count-minutes': 'Minutes',
      'count-seconds': 'Seconds',
      'hero-stat-1': 'Countries',
      'hero-stat-2': 'Student Teams',
      'hero-stat-3': 'Days of Science',
      'about-p1': 'PLANCKS is the premier international physics competition for bachelor\'s and master\'s students, organised by the International Association of Physics Students (IAPS). Each edition gathers the brightest young physicists from across the globe to compete, collaborate, and forge lasting scientific bonds.',
      'about-p2': 'Teams of three to four tackle rigorous theoretical problems spanning all domains of physics — classical mechanics, electromagnetism, quantum theory, statistical physics, relativity, astrophysics, and more — crafted by leading professors worldwide.',
      'about-p3': 'Beyond competition, PLANCKS is a five-day cultural and scientific exchange: symposia, laboratory visits, excursions, and an awards ceremony that celebrates excellence in physics education on an international stage.',
      'about-p4': 'The 2027 edition seeks to expand PLANCKS\'s reach by inviting students and teams from across all of Latin America, strengthening academic, cultural, and scientific exchange between participants from diverse countries. The official logo reflects this identity — integrating the scarlet macaw (Honduras\'s national bird), patterns inspired by Maya architecture and writing, the year 2027 in Maya numerals, and the reduced Planck constant <em>ħ</em>, one of the most iconic symbols of quantum mechanics.',
      'pillar-1-title': 'The Competition',
      'pillar-1-desc': 'A 3-hour theoretical exam of extraordinary depth, crafted by world-class physicists.',
      'pillar-2-title': 'International Community',
      'pillar-2-desc': 'Delegates from 30+ nations form friendships and collaborations that last careers.',
      'pillar-3-title': 'Cultural Immersion',
      'pillar-3-desc': 'Each edition explores the host country\'s history, landscape, and scientific heritage.',
      'honduras-eyebrow': 'Host Country',
      'honduras-title': 'The Heart of<br>Central America',
      'honduras-p1': 'Honduras — a land of volcanic mountains, ancient Maya civilisation, and extraordinary biodiversity — will host PLANCKS for the first time ever in Central America. A historic milestone in the competition\'s history.',
      'honduras-p2': 'The host city, <strong>San Pedro Sula</strong>, is the nation\'s industrial and economic heart, strategically located near the Caribbean coast and surrounded by Maya heritage, cloud forests, and colonial towns. Home to Copán — one of the great Maya ceremonial centres and a UNESCO World Heritage Site — and to coral reefs, rainforests, and vibrant cities, Honduras offers an incomparable cultural backdrop for an international scientific gathering.',
      'honduras-fact-1-label': 'Edition Year',
      'honduras-fact-1-p': '1–5 May · San Pedro Sula',
      'honduras-fact-2-label': 'In Central America',
      'honduras-fact-2-p': 'Historic milestone',
      'honduras-fact-3-label': 'PLANCKS Edition',
      'honduras-fact-3-p': 'Since Utrecht 2014',
      'honduras-fact-4-label': 'Days',
      'honduras-fact-4-p': 'Science, Culture & Nature',
      'venue-eyebrow': 'Venues',
      'venue-title': 'UNAH San Pedro Sula<br><span style="font-size:0.6em;color:var(--ink-muted);">&amp; Teatro José Francisco Saybe</span>',
      'venue-desc': 'PLANCKS 2027 will take place across two iconic venues in San Pedro Sula. The competition and academic sessions are hosted at the <strong>Universidad Nacional Autónoma de Honduras (UNAH)</strong> campus, while the opening and closing ceremonies will be held at the historic <strong>Teatro José Francisco Saybe</strong>.',
      'venue-location-label': 'Location',
      'venue-location-val': 'San Pedro Sula, Honduras',
      'venue-date-label': 'Date',
      'venue-date-val': '1–5 May 2027',
      'venue-accommodation-label': 'Accommodation',
      'venue-accommodation-val': 'Included for all registered participants',
      'venue-transport-label': 'Transportation',
      'venue-transport-val': 'Shuttle service included between venues',
      'venue-capacity-label': 'Capacity',
      'venue-capacity-val': 'Competition hall + theatre + seminar rooms',
      'itinerary-eyebrow': 'Official Document',
      'itinerary-title': 'Event Itinerary',
      'itinerary-desc': 'Download or view the complete PLANCKS 2027 Honduras itinerary with all schedules, maps, and important information.',
      'itinerary-notice': '📄 1–5 May 2027 · San Pedro Sula',
      'itinerary-card-1-title': 'Full Schedule',
      'itinerary-card-1-desc': 'Detailed daily breakdown of all events, lectures, competitions, and social activities.',
      'itinerary-card-2-title': 'Venue Maps',
      'itinerary-card-2-desc': 'Campus layouts, accommodation locations, and transportation routes included.',
      'itinerary-card-3-title': 'Important Info',
      'itinerary-card-3-desc': 'Rules, code of conduct, emergency contacts, and local recommendations.',
      'faq-eyebrow': 'FAQ',
      'faq-q1': 'Who can participate in PLANCKS?',
      'faq-a1': 'PLANCKS is open to bachelor\'s and master\'s students of physics or closely related disciplines. Teams consist of three to four members. Most countries hold national preliminaries — the winners represent their nation at the international competition.',
      'faq-q2': 'How does my country qualify?',
      'faq-a2': 'Each country\'s IAPS member committee organises a national preliminary. Countries without an existing committee can contact our organising team directly — we actively support new national committees, especially across Latin America and the Caribbean.',
      'faq-q3': 'What is included in the registration fee?',
      'faq-a3': 'Registration covers accommodation for all event nights, transport between venue and accommodation, all meals during the event, the cultural programme and excursions, access to all scientific sessions, and both opening and closing ceremonies. Flights are not included.',
      'faq-q4': 'Can I attend as an observer?',
      'faq-a4': 'Yes. Observer registration is available for students, professors, and interested parties who wish to attend the symposia, social events, and cultural programme without competing. Details will be published when registration opens in 2026.',
      'faq-q5': 'What topics does the exam cover?',
      'faq-a5': 'The exam covers the full breadth of theoretical physics: classical mechanics, electromagnetism, quantum mechanics, statistical physics, thermodynamics, relativity, optics, condensed matter, and astrophysics. Problems are original, challenging, and physically insightful — not merely computational.',
      'faq-q6': 'Will there be financial support available?',
      'faq-a6': 'We are actively seeking sponsorship to provide travel grants, particularly for teams from countries with limited resources and especially from Latin America and the Caribbean. Details will be published alongside the official registration opening.',
      'faq-q7': 'How do I stay updated on registration?',
      'faq-a7': 'Follow IAPS on social media or contact us directly via the email below. Registration will open in early 2026. All national IAPS committees will be notified as soon as fees are confirmed. The event takes place <strong>1–5 May 2027</strong> in San Pedro Sula, Honduras.',
      'sponsors-eyebrow': 'Partners & Sponsors',
      'sponsors-title': 'Supporting PLANCKS Honduras',
      'sponsors-desc': 'We gratefully acknowledge the institutions and companies making this historic edition possible.',
      'sponsors-tier-1': 'Platinum',
      'sponsors-tier-2': 'Gold',
      'sponsors-tier-3': 'Silver & Partners',
      'sponsors-cta': 'Interested in supporting the first PLANCKS in Central America?<br>We offer tailored sponsorship packages for all scales of involvement.',
      'sponsors-cta-btn': 'Become a Sponsor',
      'experience-eyebrow': 'Experience Honduras',
      'experience-title': 'Culture, Nature &amp; Gastronomy',
      'experience-desc': 'Beyond the competition, PLANCKS 2027 offers a rich cultural programme to discover the natural and cultural heritage of Honduras.',
      'experience-culture-title': 'Cultural Programme',
      'exp-culture-1-title': 'Tela &amp; Lancetilla Botanical Garden',
      'exp-culture-1-desc': 'Visit the coastal town of Tela and its renowned Lancetilla Botanical Garden — one of the largest botanical gardens in Latin America.',
      'exp-culture-2-title': 'Playa La Ensenada &amp; Cayos Cochinos',
      'exp-culture-2-desc': 'Relax on the beaches of La Ensenada and explore the marine biodiversity of Cayos Cochinos, a protected archipelago.',
      'exp-culture-3-title': 'Garífuna Community Visit',
      'exp-culture-3-desc': 'Experience the vibrant culture of the Garífuna people, recognised by UNESCO for their intangible cultural heritage.',
      'exp-culture-4-title': 'Folk Dance &amp; Music',
      'exp-culture-4-desc': 'Enjoy traditional Honduran folk dance performances and live music throughout the event.',
      'experience-food-title': 'Honduran Gastronomy',
      'exp-food-1-title': 'Baleada',
      'exp-food-1-desc': 'Honduras\'s beloved national dish: a thick flour tortilla filled with refried beans, cheese, and your choice of toppings.',
      'exp-food-2-title': 'Sopa de Caracol',
      'exp-food-2-desc': 'Traditional conch soup, a Caribbean coastal delicacy rich in coconut milk, spices, and fresh seafood.',
      'experience-tour-title': 'Tourist Attractions',
      'exp-tour-1-title': 'Laguna de los Micos',
      'exp-tour-1-desc': 'A lush coastal lagoon near Tela, home to howler monkeys and rich birdlife.',
      'exp-tour-2-title': 'Cataratas Pulhapanzak',
      'exp-tour-2-desc': 'A spectacular 43-metre waterfall on the Lindo River, one of Honduras\'s most impressive natural wonders.',
      'exp-tour-3-title': 'Fortaleza de San Fernando',
      'exp-tour-3-desc': 'An 18th-century Spanish fortress in Omoa, overlooking the Caribbean coast.',
    },
    es: {
      'nav-about': 'Sobre',
      'nav-host': 'Ciudad',
      'nav-experience': 'Experiencia',
      'nav-itinerary': 'Itinerario',
      'nav-venue': 'Sede',
      'nav-committee': 'Comité',
      'nav-faq': 'FAQ',
      'nav-sponsors': 'Patrocinadores',
      'nav-register': 'Registro',
      'hero-eyebrow': 'Competencia Internacional de Física IAPS',
      'hero-title-1': 'PLANCKS',
      'hero-title-2': 'Honduras',
      'hero-title-3': '2027',
      'hero-subtitle': 'Physics League Across Numerous Countries for Kick-ass Students. La primera edición de PLANCKS en Centroamérica — expandiendo su alcance a estudiantes y equipos de toda Latinoamérica, donde la antigua civilización maya se encuentra con la frontera de la física moderna.',
      'hero-discover': 'Descubre el Evento',
      'hero-itinerary': 'Ver Itinerario ↓',
      'countdown-sub': 'hasta PLANCKS 2027 Honduras',
      'about-eyebrow': 'Sobre',
      'about-title': 'Physics League Across<br>Numerous Countries<br><em>for Kick-ass Students</em>',
      'register-eyebrow': 'Registro',
      'register-title': 'Asegura tu Lugar en PLANCKS 2027',
      'register-desc': 'Registra tu interés para el primer PLANCKS en Centroamérica. Te notificaremos cuando la inscripción oficial abra en 2026.',
      'register-cta-title': 'Inscripciones Abren Inicios 2026',
      'register-cta-desc': 'La inscripción oficial se manejará a través de nuestro formulario externo. Haz clic abajo para pre-registrar tu interés y te notificaremos cuando el formulario esté disponible.',
      'register-submit': 'Registrarse Ahora →',
      'register-note': 'Sin compromiso. Te mantendremos informado.',
      'register-info-1': '1–5 de mayo 2027 — Fechas del evento',
      'register-info-2': 'Equipos de 3-4 estudiantes',
      'register-info-3': 'Alojamiento y comidas incluidas',
      'register-info-4': 'Honduras — Corazón de Centroamérica',
      'footer-navigate': 'Navegar',
      'faq-title': 'Preguntas Frecuentes',
      'faq-desc': 'Todo lo que necesitas saber sobre registrar, competir y asistir a PLANCKS 2027 Honduras.',
      'committee-eyebrow': 'Equipo Organizador',
      'committee-title': 'Comité Organizador',
      'committee-desc': 'PLANCKS Honduras 2027 es co-organizado por IAPS Honduras, IAPS Guatemala e IAPS Costa Rica — un esfuerzo trinacional de estudiantes de física de tres países centroamericanos, apoyado por IAPS internacionalmente.',
      'footer-brand': 'Physics League Across Numerous Countries for Kick-ass Students. La primera edición en Centroamérica, co-organizada por IAPS Honduras, IAPS Guatemala e IAPS Costa Rica.',
      'footer-contact': 'Contacto',
      'pdf-badge': 'PLANCKS HONDURAS 2027',
      'pdf-download': 'Descargar PDF',
      'pdf-print': 'Imprimir',
      'pdf-share': 'Compartir',
      'pdf-loading': 'Cargando itinerario...',
      'pdf-footer': '📄 Si el PDF no carga automáticamente, <a href="pdf/itinerary.pdf" download="PLANCKS_2027_Itinerary.pdf">haz clic aquí para descargarlo directamente</a>. Tamaño: ~2.5 MB | Versiones en inglés y español disponibles',
      'count-days': 'Días',
      'count-hours': 'Horas',
      'count-minutes': 'Minutos',
      'count-seconds': 'Segundos',
      'hero-stat-1': 'Países',
      'hero-stat-2': 'Equipos',
      'hero-stat-3': 'Días de Ciencia',
      'about-p1': 'PLANCKS es la competencia internacional de física más importante para estudiantes de licenciatura y maestría, organizada por la Asociación Internacional de Estudiantes de Física (IAPS). Cada edición reúne a los jóvenes físicos más brillantes del mundo para competir, colaborar y forjar lazos científicos duraderos.',
      'about-p2': 'Equipos de tres a cuatro personas resuelven problemas teóricos rigurosos que abarcan todos los dominios de la física — mecánica clásica, electromagnetismo, teoría cuántica, física estadística, relatividad, astrofísica y más — creados por profesores líderes a nivel mundial.',
      'about-p3': 'Más allá de la competencia, PLANCKS es un intercambio cultural y científico de cinco días: simposios, visitas a laboratorios, excursiones y una ceremonia de premiación que celebra la excelencia en la educación física en el escenario internacional.',
      'about-p4': 'La edición 2027 busca expandir el alcance de PLANCKS invitando a estudiantes y equipos de toda Latinoamérica, fortaleciendo el intercambio académico, cultural y científico entre participantes de diversos países. El logotipo oficial refleja esta identidad — integrando la guacamaya escarlata (ave nacional de Honduras), patrones inspirados en la arquitectura y escritura maya, el año 2027 en numeración maya, y la constante reducida de Planck <em>ħ</em>, uno de los símbolos más importantes de la mecánica cuántica.',
      'pillar-1-title': 'La Competencia',
      'pillar-1-desc': 'Un examen teórico de 3 horas de profundidad extraordinaria, elaborado por físicos de clase mundial.',
      'pillar-2-title': 'Comunidad Internacional',
      'pillar-2-desc': 'Delegados de más de 30 países forman amistades y colaboraciones que duran carreras enteras.',
      'pillar-3-title': 'Inmersión Cultural',
      'pillar-3-desc': 'Cada edición explora la historia, el paisaje y el patrimonio científico del país anfitrión.',
      'honduras-eyebrow': 'País Anfitrión',
      'honduras-title': 'El Corazón de<br>Centroamérica',
      'honduras-p1': 'Honduras — tierra de montañas volcánicas, antigua civilización maya y biodiversidad extraordinaria — será sede de PLANCKS por primera vez en Centroamérica. Un hito histórico en la historia de la competencia.',
      'honduras-p2': 'La ciudad anfitriona, <strong>San Pedro Sula</strong>, es el corazón industrial y económico del país, estratégicamente ubicada cerca de la costa caribeña y rodeada de herencia maya, bosques nubosos y pueblos coloniales. Hogar de Copán — uno de los grandes centros ceremoniales mayas y Patrimonio Mundial de la UNESCO — y de arrecifes de coral, selvas tropicales y ciudades vibrantes, Honduras ofrece un telón de fondo cultural incomparable para una reunión científica internacional.',
      'honduras-fact-1-label': 'Edición',
      'honduras-fact-1-p': '1–5 de mayo · San Pedro Sula',
      'honduras-fact-2-label': 'En Centroamérica',
      'honduras-fact-2-p': 'Hito histórico',
      'honduras-fact-3-label': 'Edición PLANCKS',
      'honduras-fact-3-p': 'Desde Utrecht 2014',
      'honduras-fact-4-label': 'Días',
      'honduras-fact-4-p': 'Ciencia, Cultura y Naturaleza',
      'venue-eyebrow': 'Sedes',
      'venue-title': 'UNAH San Pedro Sula<br><span style="font-size:0.6em;color:var(--ink-muted);">&amp; Teatro José Francisco Saybe</span>',
      'venue-desc': 'PLANCKS 2027 se llevará a cabo en dos sedes icónicas en San Pedro Sula. La competencia y las sesiones académicas se realizarán en el campus de la <strong>Universidad Nacional Autónoma de Honduras (UNAH)</strong>, mientras que las ceremonias de apertura y clausura se celebrarán en el histórico <strong>Teatro José Francisco Saybe</strong>.',
      'venue-location-label': 'Ubicación',
      'venue-location-val': 'San Pedro Sula, Honduras',
      'venue-date-label': 'Fecha',
      'venue-date-val': '1–5 de mayo 2027',
      'venue-accommodation-label': 'Alojamiento',
      'venue-accommodation-val': 'Incluido para todos los participantes',
      'venue-transport-label': 'Transporte',
      'venue-transport-val': 'Servicio de transporte incluido entre sedes',
      'venue-capacity-label': 'Capacidad',
      'venue-capacity-val': 'Salón de competencia + teatro + salas de seminarios',
      'itinerary-eyebrow': 'Documento Oficial',
      'itinerary-title': 'Itinerario del Evento',
      'itinerary-desc': 'Descarga o consulta el itinerario completo de PLANCKS 2027 Honduras con todos los horarios, mapas e información importante.',
      'itinerary-notice': '📄 1–5 de mayo 2027 · San Pedro Sula',
      'itinerary-card-1-title': 'Programa Completo',
      'itinerary-card-1-desc': 'Desglose diario detallado de todos los eventos, conferencias, competencias y actividades sociales.',
      'itinerary-card-2-title': 'Mapas de la Sede',
      'itinerary-card-2-desc': 'Planos del campus, ubicaciones de alojamiento y rutas de transporte incluidas.',
      'itinerary-card-3-title': 'Información Importante',
      'itinerary-card-3-desc': 'Reglas, código de conducta, contactos de emergencia y recomendaciones locales.',
      'faq-eyebrow': 'FAQ',
      'faq-q1': '¿Quién puede participar en PLANCKS?',
      'faq-a1': 'PLANCKS está abierto a estudiantes de licenciatura y maestría en física o disciplinas afines. Los equipos constan de tres a cuatro miembros. La mayoría de los países realizan preliminares nacionales — los ganadores representan a su país en la competencia internacional.',
      'faq-q2': '¿Cómo califica mi país?',
      'faq-a2': 'El comité miembro de IAPS de cada país organiza una preliminar nacional. Los países sin un comité existente pueden contactar directamente a nuestro equipo organizador — apoyamos activamente nuevos comités nacionales, especialmente en América Latina y el Caribe.',
      'faq-q3': '¿Qué incluye la tarifa de inscripción?',
      'faq-a3': 'La inscripción cubre alojamiento durante todas las noches del evento, transporte entre la sede y el alojamiento, todas las comidas durante el evento, el programa cultural y las excursiones, acceso a todas las sesiones científicas y las ceremonias de apertura y clausura. Los vuelos no están incluidos.',
      'faq-q4': '¿Puedo asistir como observador?',
      'faq-a4': 'Sí. La inscripción como observador está disponible para estudiantes, profesores y personas interesadas que deseen asistir a los simposios, eventos sociales y programa cultural sin competir. Los detalles se publicarán cuando la inscripción oficial abra en 2026.',
      'faq-q5': '¿Qué temas cubre el examen?',
      'faq-a5': 'El examen cubre toda la amplitud de la física teórica: mecánica clásica, electromagnetismo, mecánica cuántica, física estadística, termodinámica, relatividad, óptica, materia condensada y astrofísica. Los problemas son originales, desafiantes y físicamente profundos — no meramente computacionales.',
      'faq-q6': '¿Habrá apoyo financiero disponible?',
      'faq-a6': 'Estamos buscando activamente patrocinios para proporcionar becas de viaje, particularmente para equipos de países con recursos limitados y especialmente de América Latina y el Caribe. Los detalles se publicarán junto con la apertura de la inscripción oficial.',
      'faq-q7': '¿Cómo me mantengo actualizado sobre la inscripción?',
      'faq-a7': 'Sigue a IAPS en redes sociales o contáctanos directamente a través del correo electrónico abajo. La inscripción se abrirá a principios de 2026. Todos los comités nacionales de IAPS serán notificados tan pronto como se confirmen las tarifas. El evento se realiza del <strong>1–5 de mayo 2027</strong> en San Pedro Sula, Honduras.',
      'sponsors-eyebrow': 'Socios y Patrocinadores',
      'sponsors-title': 'Apoyando a PLANCKS Honduras',
      'sponsors-desc': 'Agradecemos sinceramente a las instituciones y empresas que hacen posible esta edición histórica.',
      'sponsors-tier-1': 'Platino',
      'sponsors-tier-2': 'Oro',
      'sponsors-tier-3': 'Plata y Socios',
      'sponsors-cta': '¿Interesado en apoyar el primer PLANCKS en Centroamérica?<br>Ofrecemos paquetes de patrocinio adaptados a todas las escalas de participación.',
      'sponsors-cta-btn': 'Conviértete en Patrocinador',
      'experience-eyebrow': 'Experience Honduras',
      'experience-title': 'Cultura, Naturaleza y Gastronomía',
      'experience-desc': 'Más allá de la competencia, PLANCKS 2027 ofrece un rico programa cultural para descubrir el patrimonio natural y cultural de Honduras.',
      'experience-culture-title': 'Programa Cultural',
      'exp-culture-1-title': 'Tela y Jardín Botánico Lancetilla',
      'exp-culture-1-desc': 'Visita la ciudad costera de Tela y su renombrado Jardín Botánico Lancetilla — uno de los jardines botánicos más grandes de Latinoamérica.',
      'exp-culture-2-title': 'Playa La Ensenada y Cayos Cochinos',
      'exp-culture-2-desc': 'Relájate en las playas de La Ensenada y explora la biodiversidad marina de Cayos Cochinos, un archipiélago protegido.',
      'exp-culture-3-title': 'Visita a Comunidad Garífuna',
      'exp-culture-3-desc': 'Experimenta la vibrante cultura del pueblo Garífuna, reconocido por la UNESCO por su patrimonio cultural inmaterial.',
      'exp-culture-4-title': 'Danzas Folclóricas y Música',
      'exp-culture-4-desc': 'Disfruta de presentaciones tradicionales de danzas folclóricas hondureñas y música en vivo durante todo el evento.',
      'experience-food-title': 'Gastronomía Hondureña',
      'exp-food-1-title': 'Baleada',
      'exp-food-1-desc': 'El amado plato nacional de Honduras: una tortilla gruesa de harina rellena de frijoles refritos, queso y tus ingredientes favoritos.',
      'exp-food-2-title': 'Sopa de Caracol',
      'exp-food-2-desc': 'Tradicional sopa de caracol, un manjar de la costa caribeña rico en leche de coco, especias y mariscos frescos.',
      'experience-tour-title': 'Atracciones Turísticas',
      'exp-tour-1-title': 'Laguna de los Micos',
      'exp-tour-1-desc': 'Una laguna costera frondosa cerca de Tela, hogar de monos aulladores y una rica avifauna.',
      'exp-tour-2-title': 'Cataratas Pulhapanzak',
      'exp-tour-2-desc': 'Una espectacular cascada de 43 metros en el Río Lindo, una de las maravillas naturales más impresionantes de Honduras.',
      'exp-tour-3-title': 'Fortaleza de San Fernando',
      'exp-tour-3-desc': 'Una fortaleza española del siglo XVIII en Omoa, con vista a la costa caribeña.',
    }
  };

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.dataset.lang;
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });
    // Toggle button states
    document.querySelectorAll('.lang-toggle, .lang-toggle-mobile').forEach(btn => {
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
      btn.classList.toggle('active', lang === 'es');
    });
    localStorage.setItem('plancks-lang', lang);
  }

  function toggleLang() {
    const current = document.documentElement.lang || 'en';
    const next = current === 'es' ? 'en' : 'es';
    applyLang(next);
  }

  // Init language
  const savedLang = localStorage.getItem('plancks-lang') || 'en';
  applyLang(savedLang);

  document.querySelectorAll('.lang-toggle, .lang-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });

})();
