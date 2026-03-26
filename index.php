<head>
    <link rel="stylesheet" href="/assets_/css/TD2CompWeb.css">
    <title>Capteur</title>
</head>
<body>
<header class="nav-container">
    <nav class="nav">
        <a href="index.php">Accueil</a>
        <a href="#">Documentation</a>

    </nav>
</header>
    <h1>Température</h1>

    <div class="tabs">

        <div role="tablist" aria-labelledby="tablist-1" class="manual">
            <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
                <span class="focus">Actuelle</span>
            </button>

            <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
                <span class="focus">Historique</span>
            </button>
        </div>

        <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
            <section>
                <p id="value" aria-live="assertive"></p>
                <p id="message" role="alert"></p>
            </section>
        </div>

        <div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
        </div>

    </div>

    <script src="/models/Temperature.js"></script>
    <script src="/controllers/Display.js"></script>
    <script src="/controllers/History.js"></script>
    <script src="/controllers/Alert.js"></script>
    <script src="/Main.js" ></script>
    <script src="/controllers/TabsManual.js" ></script>
</body>