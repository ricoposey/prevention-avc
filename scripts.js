document.addEventListener('DOMContentLoaded', () => {
    // Simuler le chargement dynamique des ressources
    loadExtraResources();
    
    // Gestion du scroll
    handleScrollEffect();
    setupQuiz();
    setupRiskCalculator();
    setupContactForm();
});

// Fonction pour simuler le chargement des ressources supplémentaires
function loadExtraResources() {
    const extraResources = document.getElementById('extra-resources');
    
    setTimeout(() => {
        extraResources.innerHTML = `
            <h3>Ressources Supplémentaires</h3>
            <ul>
                <li><a href="#">Guide complet sur l'AVC</a></li>
                <li><a href="#">Articles de prévention</a></li>
                <li><a href="#">Témoignages et études de cas</a></li>
                <li><a href="#">Organisations et soutien</a></li>
            </ul>
        `;
    }, 1000);
}

// Fonction pour l'effet de scroll sur le header
function handleScrollEffect() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function setupQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtenir les réponses du formulaire
        const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
        const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
        const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);

        // Calculer le score
        const score = q1 + q2 + q3;
        let feedback = '';

        if (score === 3) {
            feedback = 'Excellent ! Vous avez une très bonne connaissance de la prévention des AVC.';
        } else if (score === 2) {
            feedback = 'Bien joué ! Vous avez de bonnes connaissances, mais il y a encore des choses à apprendre.';
        } else {
            feedback = 'Vous devriez en apprendre davantage sur la prévention des AVC. Voici des ressources utiles pour vous : [Lien vers les ressources].';
        }

        resultDiv.innerHTML = `<h3>Votre score : ${score}/3</h3><p>${feedback}</p>`;
    });
}

function setupRiskCalculator() {
    const form = document.getElementById('risk-form');
    const resultDiv = document.getElementById('risk-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const age = parseFloat(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const bloodPressure = parseFloat(document.getElementById('blood-pressure').value);
        const cholesterol = parseFloat(document.getElementById('cholesterol').value);

        // Exemple de calcul simplifié
        const riskScore = (age / 100) + (weight / 200) + (bloodPressure / 150) + (cholesterol / 250);

        let riskLevel = '';
        if (riskScore < 1) {
            riskLevel = 'Faible';
        } else if (riskScore < 2) {
            riskLevel = 'Modéré';
        } else {
            riskLevel = 'Élevé';
        }

        resultDiv.innerHTML = `<h3>Votre risque d'AVC est : ${riskLevel}</h3>`;
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const resultDiv = document.getElementById('contact-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Afficher un message de confirmation (ou envoyer les données au serveur)
        resultDiv.innerHTML = `<h3>Merci, ${name} !</h3><p>Votre message a été envoyé avec succès. Nous vous répondrons bientôt à l'adresse ${email}.</p>`;

        // Réinitialiser le formulaire
        form.reset();
    });
}

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // On arrête d'observer une fois que c'est visible
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => {
  observer.observe(section);
});
