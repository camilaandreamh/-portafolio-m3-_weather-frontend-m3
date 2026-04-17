# Clima Click - Módulo 3

¡Hola! Soy Camila y este es mi proyecto para el Módulo 3, la continuación de Clima Click. 
En esta etapa me enfoqué en mejorar toda la estructura visual y la organización del código, 
pasando de un CSS básico a algo mucho más profesional usando SASS.

## ¿Qué mejoré en esta versión?

Para esta entrega apliqué estas herramientas y metodologías:

* **BEM**: Organicé todas las clases CSS con esta metodología para que el código sea más 
  claro y fácil de mantener. Por ejemplo: `.place-card`, `.place-card__header`, `.place-card__title`.
* **SASS**: Dividí los estilos en carpetas y archivos separados (parciales), así si quiero 
  cambiar un color solo lo hago en un lugar y se actualiza en toda la app.
* **Bootstrap 5**: Seguí usando el sistema de grilla para que las tarjetas se vean en una 
  sola columna en celulares y en varias filas en pantallas grandes.
* **JavaScript**: Ajusté el código para que las tarjetas se generen con la nueva estructura 
  de clases BEM, manteniendo la navegación hacia la página de detalle.

## Estructura SASS
scss/
├── base/
│   └── _variables.scss   → colores, tipografía, espaciados y mixin
├── layout/
│   └── _layout.scss      → estilos del body, header y footer
├── components/
│   └── _place-card.scss  → estilos de las tarjetas de ciudades
└── main.scss             → importa todos los parciales

## ¿Cómo puedes revisar mi trabajo?

1. Descarga los archivos de este repositorio.
2. Abre el archivo `index.html` en tu navegador favorito.
3. Los estilos vienen del archivo `css/main.css`, compilado desde la carpeta `scss/`.
4. Haz clic en "Ver detalle" para ver el pronóstico de cada ciudad.

## Autora
Camila Andrea Molina Hernández — Coronel, Chile — 2026