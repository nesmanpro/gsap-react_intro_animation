# GSAP + React Intro/Outro Animation 🚀

## 🚀 Using :

[![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![JavaScript](https://img.shields.io/badge/JS-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![NextJS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)]()
[![GSAP](https://img.shields.io/badge/GSAP-orange?style=for-the-badge)]()

Una animación fluida de entrada y salida (intro/outro) creada con **GSAP** y **React**, perfecta para páginas de inicio, portfolios, transiciones entre rutas o pagina de loading mientras carga la página.

![Gsap desktop](./public/desktop.webp)

## ✨ Características

- **Animación en 3 etapas**:
  1. Pantalla inicial de carga con logo
  2. Transición con efecto "reveal"
  3. Contenido principal con animación escalonada
- **Uso avanzado de GSAP**:
  - Timelines para secuencias complejas
  - Easing personalizado (`expo.inOut`)
  - Stagger effects para elementos listados
- **Responsive**: Diseño que se adapta a diferentes tamaños de pantalla
- **Fácil integración**: Componente React listo para implementar

![Gsap mobile](./public/mobile.webp)

## 🔧 Personalización

Ajusta en `IntroAnimation.js`:

- **Duración**: Modifica los valores en los métodos `tl.to()` y `tl.fromTo()`
- **Efectos**:
  - Cambia los tweens de GSAP (`y`, `opacity`, `scale`, etc.)
- **Timing**: Controla los delays entre animaciones con `stagger` y posiciones absolutas en la timeline

## 🧠 Tecnologías

- [GSAP](https://greensock.com/gsap/) - Motor profesional de animaciones
- [React](https://reactjs.org/) - Biblioteca frontend
- [Next.js](https://nextjs.org/) - Framework de React para produccióncomplementarias
