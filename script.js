// Sélectionne tous les liens du menu
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Empêcher le saut instantané

        let targetId = this.getAttribute("href").substring(1); // Récupère l'ID de la section
        let targetSection = document.getElementById(targetId);

        // Défilement fluide vers la section ciblée
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajuster pour éviter que le header cache le haut de la section
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        let nom = document.getElementById("nom").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (nom === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Veuillez entrer un email valide.");
            return;
        }

        this.submit(); // Envoie le formulaire si tout est bon
    });

    // Fonction pour vérifier le format de l'email
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
