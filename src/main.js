import {
  perfil, sobreMi, contacto, tecnologias, habilidadesPersonales,
  experiencia, educacion, proyectos,
} from './data/content.js';

const iconos = {
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>',
  linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z"/></svg>',
  external: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
  pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent);vertical-align:-1px"><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  images: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 20"/></svg>',
  briefcase: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  cap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.5 2 6 2s6-1 6-2v-5"/></svg>',
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

function renderProyecto(p, i) {
  const enlaces = [];
  if (p.repo) enlaces.push(`<a href="${esc(p.repo)}" target="_blank" rel="noopener" aria-label="Repositorio de ${esc(p.nombre)}">${iconos.github}</a>`);
  if (p.demo) enlaces.push(`<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="Demo de ${esc(p.nombre)}">${iconos.external}</a>`);
  const stack = (p.stack || []).map((t) => `<span>${esc(t)}</span>`).join('<span aria-hidden="true">·</span>');
  const capturasBtn = (p.capturas && p.capturas.length)
    ? `<button class="project__gallery-btn" data-gallery="${i}">${iconos.images} Ver capturas (${p.capturas.length})</button>`
    : '';
  return `
    <article class="project">
      <div class="project__head">
        <h3 class="project__name">${esc(p.nombre)}</h3>
        <div class="project__links">${enlaces.join('')}</div>
      </div>
      <p class="project__desc">${esc(p.descripcion)}</p>
      <div class="project__stack">${stack}</div>
      ${capturasBtn}
    </article>`;
}

function render() {
  const contactos = [];
  if (contacto.email) contactos.push(`<a href="mailto:${esc(contacto.email)}">${iconos.mail} correo</a>`);
  if (contacto.github) contactos.push(`<a href="${esc(contacto.github)}" target="_blank" rel="noopener">${iconos.github} github</a>`);
  if (contacto.linkedin) contactos.push(`<a href="${esc(contacto.linkedin)}" target="_blank" rel="noopener">${iconos.linkedin} linkedin</a>`);

  const experienciaHTML = experiencia.map((e) => `
    <article class="exp">
      <div class="exp__icon">${iconos.briefcase}</div>
      <div class="exp__body">
        <h3 class="exp__role">${esc(e.puesto)}</h3>
        <p class="exp__meta">${esc(e.lugar)} · ${esc(e.periodo)}</p>
        <ul class="exp__points">
          ${(e.puntos || []).map((pt) => `<li>${esc(pt)}</li>`).join('')}
        </ul>
      </div>
    </article>`).join('');

  document.getElementById('app').innerHTML = `
    <header class="hero">
      <p class="hero__pretitle">Hola, soy</p>
      <h1 class="hero__name">${esc(perfil.nombre)}.</h1>
      <p class="hero__tagline">${esc(perfil.titulo)}.</p>
      <p class="hero__intro">${esc(perfil.presentacion)}</p>
      <p class="hero__location">${iconos.pin} ${esc(perfil.ubicacion)}</p>
    </header>

    <section class="section" aria-labelledby="about-title">
      <div class="section__head">
        <span class="section__num">01.</span>
        <h2 class="section__title" id="about-title">Sobre mí</h2>
        <span class="section__line" aria-hidden="true"></span>
      </div>
      <p class="about__text">${esc(sobreMi)}</p>
      <ul class="soft-list">
        ${habilidadesPersonales.map((h) => `<li>${esc(h)}</li>`).join('')}
      </ul>
    </section>

    <section class="section" aria-labelledby="tech-title">
      <div class="section__head">
        <span class="section__num">02.</span>
        <h2 class="section__title" id="tech-title">Tecnologías</h2>
        <span class="section__line" aria-hidden="true"></span>
      </div>
      <ul class="tech-list">
        ${tecnologias.map((t) => `<li>${esc(t)}</li>`).join('')}
      </ul>
    </section>

    <section class="section" id="proyectos" aria-labelledby="proj-title">
      <div class="section__head">
        <span class="section__num">03.</span>
        <h2 class="section__title" id="proj-title">Proyectos</h2>
        <span class="section__line" aria-hidden="true"></span>
      </div>
      <div class="projects">
        ${proyectos.map(renderProyecto).join('')}
      </div>
    </section>

    <section class="section" aria-labelledby="exp-title">
      <div class="section__head">
        <span class="section__num">04.</span>
        <h2 class="section__title" id="exp-title">Experiencia</h2>
        <span class="section__line" aria-hidden="true"></span>
      </div>
      <div class="exp-list">
        ${experienciaHTML}
      </div>
    </section>

    <section class="section" aria-labelledby="edu-title">
      <div class="section__head">
        <span class="section__num">05.</span>
        <h2 class="section__title" id="edu-title">Educación</h2>
        <span class="section__line" aria-hidden="true"></span>
      </div>
      <article class="exp">
        <div class="exp__icon">${iconos.cap}</div>
        <div class="exp__body">
          <h3 class="exp__role">${esc(educacion.titulo)}</h3>
          <p class="exp__meta">${esc(educacion.institucion)}</p>
          <p class="exp__meta">${iconos.pin} ${esc(educacion.lugar)}</p>
        </div>
      </article>
    </section>

    <section class="section" aria-labelledby="contact-title">
      <div class="section__head">
        <span class="section__num">06.</span>
        <h2 class="section__title" id="contact-title">Contacto</h2>
        <span class="section__line" aria-hidden="true"></span>
      </div>
      <nav class="contact__links">
        ${contactos.join('')}
      </nav>
    </section>

    <footer class="footer">
      Hecho por ${esc(perfil.nombre)} · ${new Date().getFullYear()}
    </footer>`;
}

render();

// --- Carrusel modal de capturas ---
(function initGaleria() {
  const modal = document.createElement('div');
  modal.className = 'gmodal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <button class="gmodal__close" aria-label="Cerrar">&times;</button>
    <div class="gmodal__stage">
      <button class="gmodal__nav gmodal__prev" aria-label="Anterior">&#8249;</button>
      <img class="gmodal__img" src="" alt="" />
      <button class="gmodal__nav gmodal__next" aria-label="Siguiente">&#8250;</button>
    </div>
    <div class="gmodal__bar">
      <span class="gmodal__counter"></span>
      <span class="gmodal__caption"></span>
    </div>`;
  document.body.appendChild(modal);

  const imgEl = modal.querySelector('.gmodal__img');
  const counterEl = modal.querySelector('.gmodal__counter');
  const captionEl = modal.querySelector('.gmodal__caption');

  let shots = [];
  let idx = 0;

  function show(i) {
    idx = (i + shots.length) % shots.length;
    imgEl.src = shots[idx].src;
    imgEl.alt = shots[idx].cap || '';
    counterEl.textContent = (idx + 1) + ' / ' + shots.length;
    captionEl.textContent = shots[idx].cap || '';
  }
  function open(gallery) {
    shots = gallery;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    show(0);
  }
  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  document.getElementById('app').addEventListener('click', (e) => {
    const btn = e.target.closest('.project__gallery-btn');
    if (!btn) return;
    const p = proyectos[Number(btn.dataset.gallery)];
    if (p && p.capturas && p.capturas.length) open(p.capturas);
  });

  modal.querySelector('.gmodal__next').addEventListener('click', () => show(idx + 1));
  modal.querySelector('.gmodal__prev').addEventListener('click', () => show(idx - 1));
  modal.querySelector('.gmodal__close').addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('gmodal__stage') || e.target.classList.contains('gmodal__bar')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
})();