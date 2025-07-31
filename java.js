const peliculas = [
  {
    titulo: "Los Ángeles de Charlie (2019)",
    descripcion: "En Los Ángeles de Charlie (2019), un trío de agentes altamente capacitadas es enviado a detener una peligrosa tecnología que amenaza con caer en las manos equivocadas.",
    genero: "acción",
    portada: "img./angeles.jpg",
    youtube: "https://youtube.com/playlist?list=PLEDThb3hcx8upZTLBq1XK7EDViWwtWBsD&si=99oy4rZBD2nrv4Jc"
  },
  {
    titulo: "Aladdín",
    descripcion: "Aladdín intenta conquistar el corazón de la princesa Jasmín y enfrentarse al malvado visir Jafar, quien busca apoderarse del reino.",
    genero: "romanticos",
    portada: "img/aladin.jpg",
    youtube: "https://youtube.com/playlist?list=PLEDThb3hcx8upZTLBq1XK7EDViWwtWBsD&si=99oy4rZBD2nrv4Jc"
  },
  {
    titulo: "Yo antes de ti",
    descripcion: " La historia sigue a Louisa Clark, una joven alegre y algo peculiar, que acepta trabajar como cuidadora de Will Traynor, un joven rico y exitoso que quedó paralizado tras un accidente.",
    genero: "romanticos",
    portada: "img./antes.jpg",
    youtube: "https://youtube.com/playlist?list=PL_EXvN0NUMAMaUhqniGE8A49eDHev2ngw&si=IoZNEzgRXw1VW8SY"
  },
  {
    titulo: "16 Deseos",
    descripcion: " La historia sigue a Abby Jensen, una adolescente que ha esperado con ansias cumplir 16 años y ha hecho una lista con 16 deseos especiales para ese día.",
    genero: "comedia",
    portada: "img./deseos.jpg",
    youtube: "https://youtu.be/g2kVRLPTub4?si=Ch5R-7Wjh_sPU3Fs"
  },
  {
    titulo: "No se aceptan devoluciones",
    descripcion: "La historia sigue a Valentín, un hombre mujeriego y sin responsabilidades que vive en Acapulco. Su vida da un giro inesperado cuando una expareja le deja a una bebé llamada Maggie.",
    genero: "drama",
    portada: "img./eugenio.jpg",
    youtube: "https://youtube.com/playlist?list=PL3WPMWMHZxZB6qkkIyZPpazNYwi-oFOIG&si=r4Svi7wOpkj1w9W4"
  },
  {
    titulo: "Son como niños",
    descripcion: "La película cuenta la historia de cinco amigos de la infancia que se reencuentran tras la muerte de su antiguo entrenador de baloncesto.",
    genero: "comedia",
    portada: "img./niños.jpg",
    youtube: "https://youtu.be/y9EdbY23hwo?si=52X6RXGR-5Q2Qkg2"
  },
  {
    titulo: "Padre no hay más que uno",
    descripcion: "La historia gira en torno a Javier, un padre de familia que cree que cuidar de los hijos es tarea fácil... hasta que su esposa decide irse de viaje y dejarlo a cargo de la casa y sus cinco hijos. ",
    genero: "comedia",
    portada: "img./padre.jpg",
    youtube: "https://youtube.com/playlist?list=PLlRdIpiJUjiG1BIK4TGH3iits6gHulAvL&si=mEpRNP5qTi5_vjgP"
  },
  {
    titulo: "Ciudades de papel",
    descripcion: "La historia sigue a Quentin  Jacobsen, un chico tímido y responsable que ha estado enamorado desde la infancia de su enigmática vecina, Margo Roth Spiegelman.",
    genero: "romanticos",
    portada: "img./papel.jpg",
    youtube: "https://youtu.be/QtkG90LLg5E?si=HcNY8DJrwY6uwL0a"
  },
  {
    titulo: "Fragmentado",
    descripcion: "La historia sigue a Kevin Wendell Crumb (interpretado por James McAvoy), un hombre que padece trastorno de identidad disociativo y posee 23 personalidades diferentes.",
    genero: "drama",
    portada: "img./personalidades.jpg",
    youtube: "https://youtube.com/playlist?list=PLRvJAZ11FiDwDx8zPLx_BOoNUv3V3JETk&si=x2NFMATjfoItbAze"
  },
  {
    titulo: "La princesa y el sapo",
    descripcion: "La historia sigue a Tiana, una joven trabajadora y decidida que sueña con abrir su propio restaurante. Su vida da un giro inesperado cuando conoce al Príncipe Naveen.",
    genero: "caricaturas",
    portada: "img./princesa.jpeg",
    youtube: "https://youtube.com/playlist?list=PLb0hLdkli2UoSMqc-zooaeAoLydUqTD2J&si=3hnKwUyqjYFMetfm"
  }
];

document.addEventListener("DOMContentLoaded", () => mostrarPeliculas(peliculas));

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = "opacity 0.5s ease-in";
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

function mostrarPeliculas(filtradas) {
  const container = document.getElementById("peliculas-container");
  container.innerHTML = "";

  filtradas.forEach(pelicula => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "region");
    card.setAttribute("aria-label", `Película: ${pelicula.titulo}`);

    card.innerHTML = `
      <img src="${pelicula.portada}" alt="Portada de ${pelicula.titulo}" />
      <div class="info">
        <h3>${pelicula.titulo}</h3>
        <p>${pelicula.descripcion}</p>
        <button class="ver-youtube" aria-label="Ver tráiler de ${pelicula.titulo}">Ver Tráiler</button>
      </div>
    `;

    card.querySelector(".ver-youtube").addEventListener("click", () => {
      window.open(pelicula.youtube, "_blank");
    });

    container.appendChild(card);
    fadeIn(card);
  });
}

function filtrarGenero(genero) {
  if (genero === "todos") {
    mostrarPeliculas(peliculas);
  } else {
    const filtradas = peliculas.filter(p => p.genero === genero);
    mostrarPeliculas(filtradas);
  }
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.setAttribute("role", "button");
  btn.setAttribute("tabindex", "0");
  btn.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});
