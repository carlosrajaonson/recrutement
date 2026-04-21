AOS.init({ duration: 800, once: true });

document.addEventListener('input', function() {
    const ca = parseFloat(document.getElementById('ca').value) || 0;
    const heuresTravailSemaine = parseFloat(document.getElementById('heures-travail').value) || 0;
    const hfv = parseFloat(document.getElementById('heures-fv').value) || 0;
    const costRes = parseFloat(document.getElementById('cout-res').value) || 0;
    const hRecup = parseFloat(document.getElementById('heures-recup').value) || 0;

    // Calcul du taux horaire basé sur les heures RÉELLES entrées
    // (Heures/semaine * 4 pour avoir le mois)
    const heuresMoisReelles = heuresTravailSemaine * 4;
    
    let tauxHoraire = 0;
    if (heuresMoisReelles > 0) {
        tauxHoraire = ca / heuresMoisReelles;
    }
    document.getElementById('taux').value = Math.round(tauxHoraire);

    // Valeur des tâches à faible valeur
    const coutMensuelPerdu = (hfv * 4) * tauxHoraire;
    document.getElementById('cout-mensuel').value = Math.round(coutMensuelPerdu);

    // Valeur récupérée
    const valeurRecupere = (hRecup * 4) * tauxHoraire;
    document.getElementById('valeur-recup').value = Math.round(valeurRecupere);

    // ROI Net
    const roiNet = valeurRecupere - costRes;
    const display = document.getElementById('roi-final');
    display.innerText = Math.round(roiNet).toLocaleString();
    
    display.style.color = roiNet > 0 ? "#10b981" : "#f87171";
});