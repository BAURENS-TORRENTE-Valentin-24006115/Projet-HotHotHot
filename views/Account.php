<head>
    <link rel="stylesheet" href="/assets_/css/TD2CompWeb.css">
    <title>Mon Compte</title>
</head>
<body>
<header class="nav-container">
    <nav class="nav">
        <a href="/index.php">Accueil</a>
        <a href="/views/Documentation.php">Documentation</a>
        <a href="/views/Account.php">Mon compte</a>
        <a href="#">Déconnexion</a>
    </nav>
</header>

<main class="account-main">
    <h1 class="account-title">Mon Compte</h1>

    <div class="account-grid">
        <section class="account-section">
            <h2 class="account-subtitle">Informations Personnelles</h2>
            <p class="account-text">
                <strong class="account-label">Nom:</strong> Olivier Gerard</p>
            <p class="account-text"><strong class="account-label">Email:</strong> olivier.gerard@univ-amu.com</p>
            <p class="account-text"><strong class="account-label">Téléphone:</strong> +33 6 12 34 56 78</p>
            <p class="account-text"><strong class="account-label">Adresse:</strong> 123 Rue de la Paix, 75000 Paris</p>
            <p class="account-text"><strong class="account-label">Date d'inscription:</strong> 15 janvier 2024</p>
        </section>

        <section class="account-section">
            <h2 class="account-subtitle">Abonnement</h2>
            <p class="account-text"><strong class="account-label">Plan:</strong> <span class="badge-premium">Premium</span></p>
            <p class="account-text"><strong class="account-label">Statut:</strong> <span class="badge-active">Actif</span></p>
            <p class="account-text"><strong class="account-label">Renouvellement:</strong> 15 mai 2026</p>
            <p class="account-text"><strong class="account-label">Prix mensuel:</strong> 29.99 €</p>
        </section>

        <section class="account-section">
            <h2 class="account-subtitle">Appareils Connectés</h2>
            <ul class="account-list">
                <li>Capteur Thermique - Salon <span class="badge-active">connecté</span></li>
                <li>Capteur Thermique - Chambre <span class="badge-active">connecté</span></li>
                <li>Capteur Humidité - Cuisine <span class="badge-inactive">déconnecté</span></li>
                <li>Capteur Lumière - Bureau <span class="badge-active">connecté</span></li>
            </ul>
        </section>

        <section class="account-section">
            <h2 class="account-subtitle">Historique de Facturation</h2>
            <ul class="account-list">
                <li>15 mars 2026 - <strong>29.99 €</strong></li>
                <li>15 février 2026 - <strong>29.99 €</strong></li>
                <li>15 janvier 2026 - <strong>29.99 €</strong></li>
                <li>15 décembre 2025 - <strong>29.99 €</strong></li>
            </ul>
        </section>

        <section class="account-section">
            <h2 class="account-subtitle">Paramètres</h2>
            <ul class="account-link-list">
                <li><a href="#" class="account-link">Modifier mon profil</a></li>
                <li><a href="#" class="account-link">Changer mon mot de passe</a></li>
                <li><a href="#" class="account-link">Gérer mes notifications</a></li>
                <li><a href="#" class="account-link">Préférences de confidentialité</a></li>
                <li><a href="#" class="account-link text-danger">Déconnexion</a></li>
            </ul>
        </section>
    </div>

    <p class="account-disclaimer"><em>Ceci est une page simulée de compte utilisateur. Elle n'est pas fonctionnelle et ne contient aucune donnée réelle.</em></p>
</main>

</body>