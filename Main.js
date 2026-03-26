'use strict';

let O_capteur = new Temperature(20);
let O_tempDisplay = new Display();
let O_tempHistory = new History();
let O_tempAlert = new Alert();
let O_DonutGraph = new DonutGraph();
let O_tempMinMax = new MinMax();

O_capteur.addObserver(O_tempDisplay);
O_capteur.addObserver(O_tempHistory);
O_capteur.addObserver(O_tempAlert);
O_capteur.addObserver(O_DonutGraph);
O_capteur.addObserver(O_tempMinMax);

let N_timer = setInterval(O_capteur.setNextTemperature.bind(O_capteur), 2000);

Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
    } else {
        console.log("La permission a été refusée ou non définie");
    }
});

window.addEventListener('load', function () {
    const A_tablists = document.querySelectorAll('[role=tablist].manual');
    for (let I_i = 0; I_i < A_tablists.length; I_i++) {
        new TabsManual(A_tablists[I_i]);
    }
});