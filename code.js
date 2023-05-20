// Fonction pour faire défiler jusqu'à une section spécifique avec un décalage personnalisé
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    let offset = section.offsetTop;

    // Ajuster le décalage pour les sections spécifiques
    if (sectionId === 'offres' || sectionId === 'contacter') {
        offset -= 90; // Décalage de -150 pixels
    } else {
        offset -= 150; // Décalage de -50 pixels pour les autres sections
    }

    // Désactiver temporairement le défilement par défaut du navigateur
    disableScroll();

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });

    // Réactiver le défilement par défaut du navigateur après le défilement
    setTimeout(enableScroll, 1000);
}

// Fonction pour désactiver le défilement par défaut du navigateur
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Fonction pour réactiver le défilement par défaut du navigateur
function enableScroll() {
    document.body.style.overflow = '';
}

// Sélectionner tous les boutons avec la classe "decouvrir"
const boutonsDecouvrir = document.querySelectorAll('.decouvrir');

// Ajouter des écouteurs d'événements à chaque bouton
boutonsDecouvrir.forEach(function(bouton) {
    bouton.addEventListener('click', function(event) {
        const sectionId = this.getAttribute('data-section');
        scrollToSection(event, sectionId);
    });
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  