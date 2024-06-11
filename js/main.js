// Selecciona el elemento con la clase "navbar" y almacena su posición superior (offsetTop) en la variable navbarOffsetTop.
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop; // Almacena la distancia desde la parte superior del 'navbar' hasta el borde superior del elemento padre más cercano.

// Selecciona todos los elementos 'seccion' y todos los elementos con la clase "navbar-link".
const secciones = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

// Selecciona el elemento con la clase "envoltura-barra-progreso" y define un array con porcentajes para la barra de progreso.
const barraProgreso = document.querySelector(".envoltura-barra-progreso");
const porcentajeBarraProgreso = [97, 92, 85, 90, 98, 94];

// Agrega un event listener al evento de desplazamiento (scroll) en la ventana que llama a la función funcionPrincipal.
window.addEventListener("scroll", () => {
  funcionPrincipal();
});

// Definición de la función principal.
const funcionPrincipal = () => {
  // Verifica si la posición de desplazamiento vertical (scrollY) es mayor o igual a la posición superior de la barra de navegación.
  // Si es así, agrega la clase "sticky" a la barra de navegación, de lo contrario, la elimina.
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // Itera sobre cada sección y verifica si la posición de desplazamiento vertical (pageYOffset) es mayor o igual a
  // la posición superior de la sección - 10. Si es así, actualiza las clases de los enlaces de la barra de navegación.
  secciones.forEach((seccion, i) => {
    if (window.pageYOffset >= seccion.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("cambiar");
      });
      navbarLinks[i].classList.add("cambiar");
    }
  });

  // Verifica si la posición de desplazamiento vertical más la altura de la ventana (window.innerHeight) es mayor o igual
  // a la posición superior de la barra de progreso. Si es así, actualiza el ancho y el texto de los elementos con la clase "porcentaje-progreso".
  if (window.pageYOffset + window.innerHeight >= barraProgreso.offsetTop) {
    document.querySelectorAll(".porcentaje-progreso").forEach((el, i) => {
      el.style.width = `${porcentajeBarraProgreso[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        porcentajeBarraProgreso[i];
    });
  }
};

// Llama a la función principal para ejecutarla inicialmente.
funcionPrincipal();

// Agrega un event listener al evento de cambio de tamaño de la ventana (resize) que recarga la página.
window.addEventListener("resize", () => {
  window.location.reload();
});
