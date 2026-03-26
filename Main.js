'use strict';
let O_capteurExt, O_capteurInt, O_tempDisplay, O_tempHistory, O_tempAlert;
window.addEventListener('load', function () {
    O_capteurExt = new Temperature("exterieur", 20);
    O_capteurInt = new Temperature("interieur", 20);
    O_tempDisplay = new Display();
    O_tempHistory = new History();
    O_tempAlert = new Alert();

    O_capteurExt.addObserver(O_tempDisplay);
    O_capteurExt.addObserver(O_tempHistory);
    O_capteurExt.addObserver(O_tempAlert);

    O_capteurInt.addObserver(O_tempDisplay);
    O_capteurInt.addObserver(O_tempHistory);
    O_capteurInt.addObserver(O_tempAlert);

    let N_timer = setInterval(O_capteurExt.setNextTemperature.bind(O_capteurExt), 2000);
    let N_timer2 = setInterval(O_capteurInt.setNextTemperature.bind(O_capteurInt), 2000);


        const A_tablists = document.querySelectorAll('[role=tablist].manual');
        for (let I_i = 0; I_i < A_tablists.length; I_i++) {
            new TabsManual(A_tablists[I_i]);
        }
});