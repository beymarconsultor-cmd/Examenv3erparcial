/* ============================================================
   AstroExplora — Lógica interactiva
   ============================================================ */

/* ---------- DATOS ---------- */

const planetas = [
  {
    icono: '☿️', nombre: 'Mercurio', tag: 'El más cercano al Sol',
    texto: 'El planeta más pequeño y veloz de nuestro sistema solar.',
    datos: {
      'Diámetro': '4.879 km',
      'Distancia al Sol': '57,9 millones de km',
      'Duración del año': '88 días terrestres',
      'Temperatura': 'De -180 °C a 430 °C',
      'Lunas': 'Ninguna'
    },
    datoCurioso: 'Un día en Mercurio (de amanecer a amanecer) dura 176 días terrestres: ¡dos años mercurianos!'
  },
  {
    icono: '♀️', nombre: 'Venus', tag: 'El planeta más caliente',
    texto: 'Brilla tanto que se le conoce como la "Estrella de la mañana".',
    datos: {
      'Diámetro': '12.104 km',
      'Distancia al Sol': '108,2 millones de km',
      'Duración del año': '225 días terrestres',
      'Temperatura': '465 °C en promedio',
      'Lunas': 'Ninguna'
    },
    datoCurioso: 'Venus gira al revés: en el Sol sale por el oeste y se pone por el este.'
  },
  {
    icono: '🌍', nombre: 'La Tierra', tag: 'Nuestro hogar',
    texto: 'El único planeta conocido con vida y agua líquida en superficie.',
    datos: {
      'Diámetro': '12.742 km',
      'Distancia al Sol': '149,6 millones de km',
      'Duración del año': '365,25 días',
      'Temperatura': '15 °C en promedio',
      'Lunas': '1 (La Luna)'
    },
    datoCurioso: 'La Tierra es el planeta más denso del sistema solar: 5,51 g/cm³.'
  },
  {
    icono: '♂️', nombre: 'Marte', tag: 'El planeta rojo',
    texto: 'Su color oxidado lo convierte en el objetivo favorito de la exploración espacial.',
    datos: {
      'Diámetro': '6.779 km',
      'Distancia al Sol': '227,9 millones de km',
      'Duración del año': '687 días terrestres',
      'Temperatura': '-65 °C en promedio',
      'Lunas': '2 (Fobos y Deimos)'
    },
    datoCurioso: 'En Marte está el volcán más alto del sistema solar: el Monte Olimpo, con 21,9 km de altura.'
  },
  {
    icono: '♃', nombre: 'Júpiter', tag: 'El gigante gaseoso',
    texto: 'El planeta más grande: caben más de 1.300 Tierras dentro de él.',
    datos: {
      'Diámetro': '139.820 km',
      'Distancia al Sol': '778,5 millones de km',
      'Duración del año': '12 años terrestres',
      'Temperatura': '-110 °C en promedio',
      'Lunas': '95 lunas confirmadas'
    },
    datoCurioso: 'La Gran Mancha Roja es una tormenta más grande que la Tierra que lleva siglos activa.'
  },
  {
    icono: '♄', nombre: 'Saturno', tag: 'El de los anillos',
    texto: 'Sus espectaculares anillos están hechos de hielo y roca.',
    datos: {
      'Diámetro': '116.460 km',
      'Distancia al Sol': '1.430 millones de km',
      'Duración del año': '29 años terrestres',
      'Temperatura': '-140 °C en promedio',
      'Lunas': '146 lunas confirmadas'
    },
    datoCurioso: 'Saturno es tan ligero que flotaría en una piscina lo suficientemente grande.'
  },
  {
    icono: '⛢', nombre: 'Urano', tag: 'El gigante de hielo',
    texto: 'Gira de lado, como si rodara por el espacio.',
    datos: {
      'Diámetro': '50.724 km',
      'Distancia al Sol': '2.870 millones de km',
      'Duración del año': '84 años terrestres',
      'Temperatura': '-195 °C en promedio',
      'Lunas': '28 lunas conocidas'
    },
    datoCurioso: 'Urano fue el primer planeta descubierto con un telescopio (1781, por William Herschel).'
  },
  {
    icono: '♆', nombre: 'Neptuno', tag: 'El más lejano',
    texto: 'El planeta más distante del Sol, con los vientos más rápidos del sistema.',
    datos: {
      'Diámetro': '49.244 km',
      'Distancia al Sol': '4.500 millones de km',
      'Duración del año': '165 años terrestres',
      'Temperatura': '-200 °C en promedio',
      'Lunas': '16 lunas conocidas'
    },
    datoCurioso: 'Los vientos de Neptuno alcanzan 2.100 km/h: los más rápidos del sistema solar.'
  }
];

const estrellas = [
  {
    icono: '☀️', nombre: 'El Sol', tag: 'Nuestra estrella',
    texto: 'Una estrella amarilla de tamaño mediano que nos da luz y calor.',
    datos: {
      'Tipo': 'Enana amarilla (G2V)',
      'Diámetro': '1,39 millones de km',
      'Edad': '4.600 millones de años',
      'Temperatura superficial': '5.500 °C',
      'Composición': '73% hidrógeno, 25% helio'
    },
    datoCurioso: 'El Sol contiene el 99,86% de toda la masa del sistema solar.'
  },
  {
    icono: '⭐', nombre: 'Sirio', tag: 'La más brillante',
    texto: 'La estrella más brillante del cielo nocturno, en la constelación Can Mayor.',
    datos: {
      'Distancia': '8,6 años luz',
      'Tipo': 'Estrella blanca de la secuencia principal',
      'Brillo': '25 veces más luminosa que el Sol',
      'Sistema': 'Binaria (Sirio A y Sirio B)'
    },
    datoCurioso: 'Sirio B es una enana blanca: el resto de una estrella que murió hace millones de años.'
  },
  {
    icono: '🌟', nombre: 'Betelgeuse', tag: 'A punto de explotar',
    texto: 'Una supergigante roja que podría convertirse en supernova pronto.',
    datos: {
      'Distancia': 'Unos 640 años luz',
      'Tipo': 'Supergigante roja',
      'Tamaño': '700 veces el diámetro del Sol',
      'Brillo': '100.000 veces más luminosa que el Sol'
    },
    datoCurioso: 'Cuando Betelgeuse explote, será visible desde la Tierra incluso de día.'
  },
  {
    icono: '💫', nombre: 'Polaris', tag: 'La estrella polar',
    texto: 'La estrella que guía a los navegantes desde hace siglos.',
    datos: {
      'Distancia': 'Unos 433 años luz',
      'Tipo': 'Supergigante amarilla',
      'Rol': 'Estrella polar del hemisferio norte',
      'Edad': 'Unos 70 millones de años'
    },
    datoCurioso: 'Polaris es en realidad un sistema de tres estrellas unidas por la gravedad.'
  }
];

const galaxias = [
  {
    icono: '🌌', nombre: 'Vía Láctea', tag: 'Nuestra galaxia',
    texto: 'La galaxia espiral donde vive nuestro sistema solar.',
    datos: {
      'Tipo': 'Espiral barrada',
      'Diámetro': 'Unos 100.000 años luz',
      'Estrellas': 'Entre 100.000 y 400.000 millones',
      'Edad': '13.600 millones de años',
      'Grupo': 'Grupo Local'
    },
    datoCurioso: 'Nuestro sistema solar tarda 230 millones de años en dar una vuelta a la galaxia.'
  },
  {
    icono: '🌀', nombre: 'Andrómeda', tag: 'Nuestra vecina',
    texto: 'La galaxia espiral más cercana y la que chocará con la nuestra.',
    datos: {
      'Tipo': 'Espiral (M31)',
      'Distancia': '2,5 millones de años luz',
      'Diámetro': 'Unos 220.000 años luz',
      'Estrellas': 'Un billón aproximadamente',
      'Destino': 'Colisionará con la Vía Láctea en 4.500 millones de años'
    },
    datoCurioso: 'Andrómeda se acerca a nosotros a 110 km/s: ¡es el objeto más lejano visible a simple vista!'
  },
  {
    icono: '🌪️', nombre: 'Galaxia del Sombrero', tag: 'La elegante',
    texto: 'Una galaxia con un disco de polvo que parece un sombrero mexicano.',
    datos: {
      'Tipo': 'Espiral (M104)',
      'Distancia': '28 millones de años luz',
      'Diámetro': 'Unos 50.000 años luz',
      'Característica': 'Núcleo brillante y banda de polvo oscura'
    },
    datoCurioso: 'Su agujero negro central pesa lo mismo que mil millones de Soles.'
  },
  {
    icono: '🔭', nombre: 'Galaxia de Triángulo', tag: 'La pequeña',
    texto: 'La tercera galaxia más grande de nuestro Grupo Local.',
    datos: {
      'Tipo': 'Espiral (M33)',
      'Distancia': '2,7 millones de años luz',
      'Diámetro': 'Unos 60.000 años luz',
      'Estrellas': 'Unos 40.000 millones'
    },
    datoCurioso: 'Es una de las galaxias con mayor ritmo de formación estelar del Grupo Local.'
  }
];

const objetos = [
  {
    icono: '🕳️', nombre: 'Agujeros Negros', tag: 'Los devoradores de luz',
    texto: 'Regiones del espacio donde la gravedad es tan fuerte que ni la luz escapa.',
    datos: {
      'Qué son': 'Zonas de gravedad extrema',
      'Horizonte de eventos': 'El punto de no retorno',
      'Tipos': 'Estelares, supermasivos, intermedios',
      'Famoso': 'Sagitario A*, en el centro de la Vía Láctea'
    },
    datoCurioso: 'El primer agujero negro fotografiado (M87*) está a 55 millones de años luz.'
  },
  {
    icono: '☁️', nombre: 'Nebulosas', tag: 'Cunas de estrellas',
    texto: 'Nubes de gas y polvo donde nacen nuevas estrellas.',
    datos: {
      'Qué son': 'Nubes de gas y polvo interestelar',
      'Función': 'Formación de estrellas y planetas',
      'Famosas': 'Nebulosa de Orión, Nebulosa del Cangrejo',
      'Colores': 'Producen los tonos rojos, azules y verdes del espacio'
    },
    datoCurioso: 'La Nebulosa de Orión está a solo 1.344 años luz: es la guardería estelar más cercana.'
  },
  {
    icono: '💥', nombre: 'Supernovas', tag: 'Explosiones estelares',
    texto: 'La muerte espectacular de una estrella masiva.',
    datos: {
      'Qué son': 'Explosión de una estrella al final de su vida',
      'Brillo': 'Puede superar al de toda su galaxia',
      'Legado': 'Esparcen elementos pesados por el universo',
      'Famosa': 'SN 1054, origen de la Nebulosa del Cangrejo'
    },
    datoCurioso: 'El oro de tus joyas se forjó en una supernova o en la colisión de estrellas de neutrones.'
  },
  {
    icono: '🌠', nombre: 'Púlsares', tag: 'Los faros del cosmos',
    texto: 'Estrellas de neutrones que giran y emiten haces de radiación.',
    datos: {
      'Qué son': 'Estrellas de neutrones en rotación',
      'Giro': 'Hasta 700 veces por segundo',
      'Precisión': 'Su pulso es más exacto que un reloj atómico',
      'Descubierto': 'En 1967 por Jocelyn Bell Burnell'
    },
    datoCurioso: 'Un púlsar puede tener la masa del Sol comprimida en una esfera de 20 km.'
  },
  {
    icono: '☄️', nombre: 'Cometas', tag: 'Los viajeros helados',
    texto: 'Cuerpos de hielo y polvo que desarrollan colas al acercarse al Sol.',
    datos: {
      'Qué son': 'Cuerpos helados del sistema solar',
      'Cola': 'Siempre apunta en dirección contraria al Sol',
      'Famosos': 'Halley, Hale-Bopp, NEOWISE',
      'Origen': 'Cinturón de Kuiper y Nube de Oort'
    },
    datoCurioso: 'El cometa Halley regresa cada 76 años: la próxima vez será en 2061.'
  },
  {
    icono: '🌑', nombre: 'Exoplanetas', tag: 'Mundos lejanos',
    texto: 'Planetas que orbitan estrellas distintas al Sol.',
    datos: {
      'Qué son': 'Planetas fuera del sistema solar',
      'Confirmados': 'Más de 5.500 (y contando)',
      'Método principal': 'Tránsito: medir el oscurecimiento de la estrella',
      'Zona habitable': 'Región donde podría haber agua líquida'
    },
    datoCurioso: 'El exoplaneta más cercano, Proxima Centauri b, está a 4,24 años luz.'
  }
];

const curiosidades = [
  { icono: '🌍', titulo: 'Toda la humanidad cabe en un cubo', texto: 'Si comprimieras a los 8.000 millones de personas en un cubo del tamaño de un azúcar, cabrían todas: la materia es casi todo espacio vacío.' },
  { icono: '⏳', titulo: 'El universo tiene 13.800 millones de años', texto: 'El Big Bang ocurrió hace unos 13.800 millones de años. La luz de las galaxias más lejanas que vemos hoy salió cuando el universo era joven.' },
  { icono: '🚀', titulo: 'Ya hay humanos que viven en el espacio', texto: 'Los astronautas de la Estación Espacial Internacional orbitan la Tierra cada 90 minutos: ven 16 amaneceres al día.' },
  { icono: '🪐', titulo: 'En Saturno llueven diamantes', texto: 'Los rayos en Saturno convierten el metano en grafito que cae y se comprime en diamantes durante miles de kilómetros.' },
  { icono: '🌌', titulo: 'Hay más estrellas que granos de arena', texto: 'Los astrónomos calculan que hay más estrellas en el universo observable que granos de arena en todas las playas de la Tierra.' },
  { icono: '🧲', titulo: 'La Tierra es un imán gigante', texto: 'El núcleo de hierro líquido de la Tierra genera un campo magnético que nos protege del viento solar.' },
  { icono: '🌙', titulo: 'La Luna se aleja de nosotros', texto: 'La Luna se aleja de la Tierra 3,8 cm por año. Dentro de miles de millones de años, los eclipses totales serán cosa del pasado.' },
  { icono: '☀️', titulo: 'La luz del Sol tarda 8 minutos en llegar', texto: 'Cuando miras al Sol (¡no lo hagas directamente!), estás viendo cómo era hace 8 minutos y 20 segundos.' }
];

/* ---------- RENDERIZADO ---------- */

function crearTarjeta(item, tipo) {
  const card = document.createElement('article');
  card.className = 'card reveal';
  card.innerHTML = `
    <span class="card__icon">${item.icono}</span>
    <h3 class="card__title">${item.nombre}</h3>
    <p class="card__text">${item.texto}</p>
    <span class="card__hint">Toca para más →</span>
  `;
  card.addEventListener('click', () => abrirModal(item, tipo));
  return card;
}

function renderizar(id, datos, tipo) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return;
  datos.forEach(item => contenedor.appendChild(crearTarjeta(item, tipo)));
}

renderizar('planetGrid', planetas, 'planeta');
renderizar('starGrid', estrellas, 'estrella');
renderizar('galaxyGrid', galaxias, 'galaxia');
renderizar('objectGrid', objetos, 'objeto');
renderizar('factGrid', curiosidades, 'curiosidad');

/* ---------- MODAL ---------- */

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

function abrirModal(item, tipo) {
  let html = `
    <h3>${item.icono} ${item.nombre}</h3>
    <span class="modal__tag">${item.tag}</span>
    <p>${item.texto}</p>
  `;

  if (item.datos) {
    html += '<ul>';
    for (const [clave, valor] of Object.entries(item.datos)) {
      html += `<li><strong>${clave}:</strong> ${valor}</li>`;
    }
    html += '</ul>';
  }

  if (item.datoCurioso) {
    html += `<p style="margin-top:1.2rem; color: var(--amarillo);"><strong>💡 Dato curioso:</strong> ${item.datoCurioso}</p>`;
  }

  if (tipo === 'curiosidad') {
    html = `
      <h3>${item.icono} ${item.titulo}</h3>
      <span class="modal__tag">Dato curioso</span>
      <p>${item.texto}</p>
    `;
  }

  modalBody.innerHTML = html;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modal.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', cerrarModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarModal();
});

/* ---------- NAV MENÚ MÓVIL ---------- */

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- FONDO DE ESTRELLAS (canvas) ---------- */

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let estrellas = [];

function redimensionarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  estrellas = [];
  const cantidad = Math.floor((canvas.width * canvas.height) / 4000);
  for (let i = 0; i < cantidad; i++) {
    estrellas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radio: Math.random() * 1.4 + 0.3,
      velocidad: Math.random() * 0.35 + 0.05,
      opacidad: Math.random(),
      direccionOpacidad: Math.random() > 0.5 ? 1 : -1
    });
  }
}

function animarEstrellas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  estrellas.forEach(s => {
    s.opacidad += 0.008 * s.direccionOpacidad;
    if (s.opacidad >= 1 || s.opacidad <= 0.2) s.direccionOpacidad *= -1;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radio, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(248, 250, 252, ${s.opacidad})`;
    ctx.fill();
  });
  requestAnimationFrame(animarEstrellas);
}

redimensionarCanvas();
animarEstrellas();
window.addEventListener('resize', redimensionarCanvas);

/* ---------- ANIMACIONES DE APARICIÓN ---------- */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---------- CONTADORES ANIMADOS ---------- */

const contadorObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    contadorObserver.unobserve(el);
    const objetivo = parseInt(el.dataset.count, 10);
    const duracion = 1800;
    const inicio = performance.now();
    function tick(ahora) {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      el.textContent = Math.floor(progreso * objetivo);
      if (progreso < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => contadorObserver.observe(el));
