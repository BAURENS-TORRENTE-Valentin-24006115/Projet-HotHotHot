<head>
    <link rel="stylesheet" href="/assets_/css/TD2CompWeb.css">
    <title>Capteur</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
</head>
<body>
<header class="nav-container">
    <nav class="nav">
        <a href="index.php">Accueil</a>
        <a href="/views/Documentation.php">Documentation</a>
        <a href="/views/Account.php">Mon compte</a>
        <a href="#">Déconnexion</a>
    </nav>
</header>
<main>
    <div id="toast-container"></div>

    <h1>Température</h1>

        <div class="tabs">
            <div role="tablist" aria-labelledby="tablist-1" class="manual">
                <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
                    <span class="focus">Temps réels</span>
                </button>
                <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
                    <span class="focus">Historique</span>
                </button>
            </div>

            <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
                <div class="container-temps-reel">

                    <section class="colonne-capteur" id="zone-exterieur">
                        <h2 class="titre-capteur">Extérieur</h2>
                        <div class="affichage-temp">
                            <span id="temp-ext-val">--</span>
                        </div>
                        <div class="stats-jour">
                            <span>Min: <b id="temp-ext-min">--</b>°C</span>
                            <span>Max: <b id="temp-ext-max">--</b>°C</span>
                        </div>
                    </section>

                    <section class="colonne-capteur" id="zone-interieur">
                        <h2 class="titre-capteur">Intérieur</h2>
                        <div class="affichage-temp">
                            <span id="temp-int-val">--</span>
                        </div>
                        <div class="stats-jour">
                            <span>Min: <b id="temp-int-min">--</b>°C</span>
                            <span>Max: <b id="temp-int-max">--</b>°C</span>
                        </div>
                    </section>
                </div>

                <div id="alert-zone" aria-live="assertive"></div>
            </div>

            <div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
                <div id="histContainer">
                    <div id="extHist">
                        <p>| Extérieur |</p>
                        <canvas id="exterieurDonutChart" style="width:100%;max-width:700px"></canvas>
                        <p id="exterieurMax" aria-live="assertive">Temp max :</p>
                        <p id="exterieurMin" aria-live="assertive">Temp min :</p>
                        <p>Historique :</p>
                        <table id="exterieurHist" style="width:25%">
                            <tr>
                                <th>Valeur</th>
                                <th>Horodatage</th>
                            </tr>
                        </table>
                    </div>
                    <div id="intHist">
                        <p>| Intérieur |</p>
                        <canvas id="interieurDonutChart" style="width:100%;max-width:700px"></canvas>
                        <p id="interieurMax" aria-live="assertive">Temp max :</p>
                        <p id="interieurMin" aria-live="assertive">Temp min :</p>
                        <p>Historique :</p>
                        <table id="interieurHist" style="width:25%">
                            <tr>
                                <th>Valeur</th>
                                <th>Horodatage</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    </div>

    </main>
    <script src="/models/Temperature.js"></script>
    <script src="/controllers/Display.js"></script>
    <script src="/controllers/History.js"></script>
    <script src="/controllers/Alert.js"></script>
    <script src="/models/WebSocket.js"></script>
    <script src="controllers/MinMax.js"></script>
    <script src="/controllers/DonutGraph.js"></script>
    <script src="/models/SensorManager.js"></script>
    <script src="/Main.js" ></script>
    <script src="/controllers/TabsManual.js" ></script>
</body>