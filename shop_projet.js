// Variables globales
var currentImageIndex = 0;
var images = [
  "3cebb4605e6ecab31bd7540dd686bafc.jpg",
  "d375469.jpg",
  "mur-pierre-seche.jpg"
];

// Obtient la référence vers les éléments du carrousel
var carousel = document.querySelector('.carousel');
var carouselImages = Array.from(carousel.querySelectorAll('.carousel-image'));

// Fonction pour afficher l'image active
function showActiveImage() {
  carouselImages.forEach(function(image) {
    image.classList.remove('active');
  });
  carouselImages[currentImageIndex].classList.add('active');
}

// Fonction pour changer à l'image précédente
function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showActiveImage();
}

// Fonction pour changer à l'image suivante
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showActiveImage();
}

// Ajoute des gestionnaires d'événements aux boutons
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
