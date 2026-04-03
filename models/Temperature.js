class Temperature {
    constructor(type, I_qty = 0) {
        this.type = type;
        this.I_temperature = 0;
        this.A_tempArray = [];
        this.I_index = 0;
        this.A_observers = [];

        this.minVal = Infinity;
        this.maxVal = -Infinity;

        if (I_qty > 0) {
            this.setTemperatureArray(I_qty);
        }
    }

    addObserver(observer) {
        this.A_observers.push(observer);
    }

    notify() {
        const I_data = {
            type: this.type,
            valeur: this.I_temperature,
            min: this.minVal,
            max: this.maxVal,
            timestamp: 0
        };

        for (let observer of this.A_observers) {
            observer.update(I_data);
        }
    }

    setTemperature(nouvelleValeur) {
        this.I_temperature = parseFloat(nouvelleValeur);

        if (this.I_temperature < this.minVal) this.minVal = this.I_temperature;
        if (this.I_temperature > this.maxVal) this.maxVal = this.I_temperature;

        this.notify();
    }

    setTemperatureArray(I_qty) {
        for (let I_i = 0; I_i < I_qty; I_i++) {
            this.A_tempArray.push(Math.floor(Math.random() * 60) - 10);
        }
    }

    setNextTemperature() {
        if (this.I_index < this.A_tempArray.length) {
            this.setTemperature(this.A_tempArray[this.I_index]);
            this.I_index++;
        }
    }
}