class MinMax
{
    I_min = null;
    I_max = null;
    I_temperature;

    getMin() {
        return this.I_min;
    }

    setMin(I_min) {
        this.I_min = I_min;
    }

    getMax() {
        return this.I_max;
    }

    setMax(I_max) {
        this.I_max = I_max;
    }

    updateTemp(I_temperature, B_isMin, S_type) {
        if (B_isMin) {
            document.getElementById(S_type + "Min").textContent = "Temp min : " + I_temperature + "°C";
            document.getElementById(S_type + "MinAcc").textContent = I_temperature;
        } else {
            document.getElementById(S_type + "Max").textContent = "Temp max : " + I_temperature + "°C";
            document.getElementById(S_type + "MaxAcc").textContent = I_temperature;
        }
    }

    update(data)
    {
        this.I_temperature = data.valeur

        if (this.getMin() === null || this.I_temperature < this.getMin())
        {
            this.setMin(this.I_temperature);
            this.updateTemp(this.I_temperature, true, data.type);
        }

        if (this.getMax() === null || this.I_temperature > this.getMax())
        {
            this.setMax(this.I_temperature);
            this.updateTemp(this.I_temperature, false, data.type);
        }
    }
}