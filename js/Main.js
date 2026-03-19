let capteur = new Temperature(20);
let tempDisplay = new Display();
let tempHistory = new History();
let tempAlert = new Alert();

capteur.addObserver(tempDisplay);
capteur.addObserver(tempHistory);
capteur.addObserver(tempAlert);

capteur.getTemperatureArray();
capteur.getTemperature();

let timer = setInterval(capteur.setNextTemperature.bind(capteur), 2000);

'use strict';

window.addEventListener('load', function () {
    var tablists = document.querySelectorAll('[role=tablist].manual');
    for (var i = 0; i < tablists.length; i++) {
        new TabsManual(tablists[i]);
    }
});