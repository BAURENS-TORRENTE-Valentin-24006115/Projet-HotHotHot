class SensorManager {
    constructor() {
        this.sensors = {};
    }

    registerSensor(name, temperatureObject) {
        this.sensors[name] = temperatureObject;
    }

    updateFromWebSocket(capteurs) {
        capteurs.forEach(capteur => {
            if (this.sensors[capteur.Nom]) {
                this.sensors[capteur.Nom].setTemperature(capteur.Valeur, new Date(capteur.Timestamp * 1000));
            }
        });
    }
}

