'use strict';

let sensorManager = new SensorManager();
let webSocket = new WebSocketHandler('wss://ws.hothothot.dog:9502');
webSocket.addObserver(sensorManager);
webSocket.connect();
webSocket.notifyObservers();


let O_capteurExt, O_capteurInt, O_tempDisplay, O_tempHistory, O_tempAlert;

window.addEventListener('load', function () {
    O_capteurExt = new Temperature("exterieur", 20);
    O_capteurInt = new Temperature("interieur", 20);

    sensorManager.registerSensor("exterieur", O_capteurExt);
    sensorManager.registerSensor("interieur", O_capteurInt);

    O_tempDisplay = new Display();
    O_tempHistory = new History();
    O_tempAlert   = new Alert();
    let O_extDonutGraph = new DonutGraph();
    let O_intDonutGraph = new DonutGraph();
    let O_intTempMinMax = new MinMax();
    let O_extTempMinMax = new MinMax();

    O_capteurExt.addObserver(O_tempDisplay);
    O_capteurExt.addObserver(O_tempHistory);
    O_capteurExt.addObserver(O_tempAlert);
    O_capteurExt.addObserver(O_extDonutGraph);
    O_capteurExt.addObserver(O_extTempMinMax);

    O_capteurInt.addObserver(O_tempDisplay);
    O_capteurInt.addObserver(O_tempHistory);
    O_capteurInt.addObserver(O_tempAlert);
    O_capteurInt.addObserver(O_intDonutGraph);
    O_capteurInt.addObserver(O_intTempMinMax);


    if ("Notification" in window) {
        Notification.requestPermission().then(function(permission) {
            if (permission !== 'granted') {
                console.log("Les notifications push sont désactivées.");
            }
        });
    }

    const A_tablists = document.querySelectorAll('[role=tablist].manual');
    for (let I_i = 0; I_i < A_tablists.length; I_i++) {
        new TabsManual(A_tablists[I_i]);
    }
});