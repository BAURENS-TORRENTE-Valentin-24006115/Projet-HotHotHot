<head>
    <link rel="stylesheet" href="/assets_/css/TD2CompWeb.css">
    <title>Documentation</title>
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

        <h1 class="doc-title">Documentation</h1>

        <h2 class="doc-subtitle">L'équipe</h2>
        <ul class="doc-list">
            <li>Baurens-Torrente Valentin</li>
            <li>Dumont Aline</li>
            <li>Gudenschwager Oliver</li>
            <li>Sene Pablo</li>
        </ul>

        <h2 class="doc-subtitle">Description du projet</h2>
        <h3 class="doc-sub-subtitle">Outils Utilisés</h3>
        <p class="doc-text">
            Nous avons utilisé les outils suivants pour réaliser ce projet :
            <ul class="doc-list">
                <li>HTML/CSS : pour la structure et le style de l'interface utilisateur.</li>
                <li>JavaScript : pour la logique de l'application, y compris la gestion des données et l'interactivité.</li>
                <li>Git/GitHub : pour le contrôle de version et la collaboration entre les membres de l'équipe.</li>
                <li>PHP : pour le développement côté serveur, si nécessaire.</li>
                <li>PhpStorm : pour le développement et la gestion du code.</li>
            </ul>
        </p>
        <h3 class="doc-sub-subtitle">Organisation</h3>
        <p class="doc-text">
            Nous nous sommes organisés en utilisant GitHub pour gérer notre code et nos tâches.
            <br>
            Chaque membre de l'équipe a été responsable de différentes parties du projet,
            mais nous avons collaboré pour assurer la cohérence et la qualité du travail.
            <br>
            Nous avons également utilisé des branches pour développer de nouvelles fonctionnalités et corriger les bugs,
            ce qui nous a permis de travailler de manière efficace et de maintenir un code propre.
            <br>
            Lien du projet : <a class="doc-link" href="https://github.com/BAURENS-TORRENTE-Valentin-24006115/Projet-HotHotHot">Projet Hot-Hot-Hot</a>
            <br>
            Lien du GitHub Project: <a class="doc-link" href="https://github.com/users/BAURENS-TORRENTE-Valentin-24006115/projects/5">GitHub Project</a>
        </p>
        <h2 class="doc-subtitle">Difficultés rencontrées</h2>
        <h3 class="doc-sub-subtitle">1er Problème</h3>
        <p class="doc-text">
            <strong class="doc-highlight">Probleme PWA:</strong>
            <br>
            Lorsque l'application fut installé, elle affichait une page blanche / error 404. Le service worker ne trouvait pas les ressources nécessaires pour faire fonctionner l'application hors ligne.
            <br><br>
            <strong class="doc-highlight">Solution:</strong>
            <br>
            Nous avons modifié le chemin d'accès aux ressources dans le service worker pour qu'il puisse les trouver correctement. Nous avons également vérifié que toutes les ressources nécessaires étaient bien incluses dans le cache lors de l'installation du service worker.
            <br>
        </p>
        <h3 class="doc-sub-subtitle">2nd Problème</h3>
        <p class="doc-text">
            <strong class="doc-highlight">Probleme:</strong>
            <br>
            La classe Websocket ne pouvais pas directement update les autres classes
            <br><br>
            <strong class="doc-highlight">Solution:</strong>
            <br>
            Création du classes SensorManager qui recois les update du websocket et qui les appliques a l'affichage.
            <br>
        </p>

        <h2 class="doc-subtitle">Si l'on devrait recommencer...</h2>
        <p class="doc-text">
            Si l'on devrait recommencer le projet, nous pourrions envisager les améliorations suivantes :

        </p>
        <ul class="doc-list">
            <li>Améliorer l'interface utilisateur pour la rendre plus intuitive et attrayante.</li>
            <li>Faire le certificat https plus tot plutôt que de perdre du temps en plein milieu du projet.</li>
            <li>Optimiser le code pour améliorer les performances et la maintenabilité.</li>
        </ul>


        <script src="/models/Temperature.js"></script>
        <script src="/controllers/Display.js"></script>
        <script src="/controllers/History.js"></script>
        <script src="/controllers/Alert.js"></script>
        <script src="/Main.js" ></script>
        <script src="/controllers/TabsManual.js" ></script>
</body>