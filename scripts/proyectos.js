function verProyecto(proyecto) {
  // Podés redirigir a páginas individuales, por ejemplo:
  if (proyecto === "casa") {
    window.location.href = "cliente-casa.html";
  } else if (proyecto === "oficina") {
    window.location.href = "cliente-oficina.html";
  } else if (proyecto === "restaurante") {
    window.location.href = "cliente-restaurante.html";
  }
}

// Navegación
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animación de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});