// script.js

// Intercepte les évènements de clic
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (anchor.classList.contains('LienExt')) {
            window.open(anchor.href, '_blank'); // si cliqué sur un <a> possédant la classe "LienExt", ouvre le lien contenu dedans
        }

        e.preventDefault();
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        targetSection.classList.add('blink');

        setTimeout(() => {
            targetSection.classList.remove('blink');
        }, 1); // Durée de l'animation en millisecondes
    });
});

const button = document.getElementById("buttonsidebar");

button.onclick = () => {
    button.classList.toggle("toggled");
}
