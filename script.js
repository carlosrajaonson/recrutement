AOS.init({ duration: 800, once: true });

function calculerTout() {
    // 1. Récupération des entrées
    const ca = parseFloat(document.getElementById('ca').value) || 0;
    const hSemaine = parseFloat(document.getElementById('heures-travail').value) || 0;
    const costRes = parseFloat(document.getElementById('cout-res').value) || 0;
    const hRecup = parseFloat(document.getElementById('heures-recup').value) || 0;

    // 2. Calcul du taux horaire
    const heuresMois = hSemaine * 4;
    let tauxHoraire = 0;
    if (heuresMois > 0) {
        tauxHoraire = ca / heuresMois;
    }
    document.getElementById('taux').value = Math.round(tauxHoraire);

    // 3. Calcul de la Valeur Récupérée par mois
    // (Heures récupérées par semaine * 4 semaines * taux horaire)
    const valeurMensuelleRecupere = (hRecup * 4) * tauxHoraire;
    document.getElementById('valeur-recup').value = Math.round(valeurMensuelleRecupere);

    // 4. Calcul du ROI Net
    // (Valeur récupérée - Coût de la ressource)
    const roiNet = valeurMensuelleRecupere - costRes;
    const displayRoi = document.getElementById('roi-final');
    
    displayRoi.innerText = Math.round(roiNet).toLocaleString() + " Ar";
    
    // Style dynamique pour le ROI
    if (roiNet > 0) {
        displayRoi.style.color = "#10b981"; // Vert
    } else if (roiNet < 0) {
        displayRoi.style.color = "#f87171"; // Rouge
    } else {
        displayRoi.style.color = "white";
    }
}

// Initialisation des écouteurs sur tous les inputs de type number
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculerTout);
});

// Lancer un premier calcul au chargement
calculerTout();