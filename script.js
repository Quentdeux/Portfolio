document.addEventListener('DOMContentLoaded', () => {
    const BoutonsProjets = document.querySelectorAll('.BoutonProjets');
    const CadresProjets = document.querySelectorAll('.CadreProjets');

    BoutonsProjets.forEach(BoutonProjet => {
        // Pour chaque bouton ajoute l'interaction
        BoutonProjet.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSectionId = BoutonProjet.getAttribute('Show-Section');
            const targetSection = document.getElementById(targetSectionId);

            const CadreActif = document.querySelector('.CadreProjets.visible');
            if (CadreActif) {
                CadreActif.classList.add('fade-out');

                CadreActif.addEventListener('animationend', () => {
                    CadreActif.classList.remove('visible', 'fade-out');
                    targetSection.classList.add('visible', 'fade-in');

                    targetSection.addEventListener('animationend', () => {
                        targetSection.classList.remove('fade-in');
                    }, { once: true });
                }, { once: true });
            }
            // Si aucun cadre visible
            else {
                targetSection.classList.add('visible', 'fade-in');
                targetSection.addEventListener('animationend', () => {
                    targetSection.classList.remove('fade-in');
                }, { once: true });
            }
        });
    });
});

try{
    document.getElementById("toggleButton").addEventListener("click", function() {
        document.getElementById("toggleDiv").classList.toggle("maximized");
    });
}
catch{

}

