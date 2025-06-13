 // script.js nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

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


//LightBox

 let currentImage = null;
    let galleryImages = [];

    // Llamado desde cada imagen
    function openLightbox(img) {
        currentImage = img;
        galleryImages = Array.from(document.querySelectorAll('.gallery-image'));

        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxCaption = document.getElementById('lightboxCaption');

        lightboxImage.src = img.src;
        lightboxCaption.textContent = img.alt || '';
        lightbox.style.display = 'flex';
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
        lightbox.classList.remove('active');
    }

    function nextImage() {
        if (!currentImage) return;
        let index = galleryImages.indexOf(currentImage);
        index = (index + 1) % galleryImages.length;
        openLightbox(galleryImages[index]);
    }

    function prevImage() {
        if (!currentImage) return;
        let index = galleryImages.indexOf(currentImage);
        index = (index - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(galleryImages[index]);
    }

    // Cerrar al hacer clic fuera del contenido
    document.getElementById('lightbox').addEventListener('click', function (e) {
        if (e.target.id === 'lightbox') {
            closeLightbox();
        }
    });