# AGENTS.md

## Proyecto

**AstroExplora** — sitio web educativo e interactivo sobre astronomía (planetas, estrellas, galaxias y otros objetos del universo). Público: niños, jóvenes y adultos. Objetivo: despertar asombro, curiosidad y emoción.

## Stack

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks ni build step)
- Fuentes: Orbitron (títulos) e Inter (texto) vía Google Fonts
- Fondo de estrellas animado con `<canvas>`

## Comandos

- **Desarrollo/preview**: abrir `index.html` directamente en el navegador, o servir con `python -m http.server 8000` y visitar `http://localhost:8000`
- No hay dependencias, tests, lint ni build.

## Estructura

- `index.html` — secciones: hero, intro, planetas, estrellas, galaxias, objetos, curiosidades, footer, modal
- `styles.css` — paleta: negro `#05060f`, azul oscuro `#0a0e27`, morado `#6d28d9`, azul brillante `#38bdf8`, amarillo `#facc15`
- `script.js` — datos (arrays `planetas`, `estrellas`, `galaxias`, `objetos`, `curiosidades`), renderizado de tarjetas, modal, canvas de estrellas, animaciones de aparición e IntersectionObserver

## Convenciones

- Contenido en español.
- Los datos astronómicos son aproximados y educativos (no de nivel científico riguroso).
- Las tarjetas se generan desde los arrays de datos en `script.js` — editar ahí para cambiar contenido.
