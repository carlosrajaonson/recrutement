AOS.init({ duration: 800, once: true });

function calculerROI() {
    // Récupération des valeurs
    const ca = parseFloat(document.getElementById('ca').value) || 0;
    const heuresTravailSemaine = parseFloat(document.getElementById('heures-travail').value) || 0;
    const hfv = parseFloat(document.getElementById('heures-fv').value) || 0;
    const costRes = parseFloat(document.getElementById('cout-res').value) || 0;
    const hRecup = parseFloat(document.getElementById('heures-recup').value) || 0;

    // Calcul du taux horaire (CA mensuel / heures travaillées par mois)
    const heuresMois = heuresTravailSemaine * 4;
    let tauxHoraire = 0;
    
    if (heuresMois > 0) {
        tauxHoraire = ca / heuresMois;
    }

    // Mise à jour de l'affichage du taux
    document.getElementById('taux').value = Math.round(tauxHoraire);

    // Calcul de la valeur perdue
    const valeurPerdue = (hfv * 4) * tauxHoraire;
    document.getElementById('cout-mensuel').value = Math.round(valeurPerdue);

    // Calcul de la valeur récupérée
    const valeurRecup = (hRecup * 4) * tauxHoraire;
    document.getElementById('valeur-recup').value = Math.round(valeurRecup);

    // Calcul du ROI Net
    const roiNet = valeurRecup - costRes;
    const displayRoi = document.getElementById('roi-final');
    
    displayRoi.innerText = Math.round(roiNet).toLocaleString();
    displayRoi.style.color = roiNet > 0 ? "#10b981" : "#f87171";
}

// Écouter tous les changements d'entrée
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', calculerROI);
});