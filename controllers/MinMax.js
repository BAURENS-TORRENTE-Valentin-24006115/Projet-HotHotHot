class MinMax
{
    I_min = null;
    I_max = null;

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

    updateTemp(I_temperature, B_isMin) {
        if (B_isMin) {
            document.getElementById("min").textContent = "Temp min : " + I_temperature + "°C";
        } else {
            document.getElementById("max").textContent = "Temp max : " + I_temperature + "°C";
        }
    }

    update(I_temperature)
    {
        if (this.getMin() === null || I_temperature < this.getMin())
        {
            this.setMin(I_temperature);
            this.updateTemp(I_temperature, true);
        }

        if (this.getMax() === null || I_temperature > this.getMax())
        {
            this.setMax(I_temperature);
            this.updateTemp(I_temperature, false);
        }
    }
}