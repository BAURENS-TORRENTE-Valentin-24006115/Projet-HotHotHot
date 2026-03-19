
class Temperature
{
    I_temperature;
    A_tempArray = [];
    I_index = 0;
    A_observers = [];

    constructor(I_qty) {
        this.setTemperatureArray(I_qty)
    }

    getTemperatureArray()
    {
        return this.A_tempArray
    }

    setTemperatureArray(I_qty)
    {
        for (let I_i = 0; I_i < I_qty; I_i++)
        {
            this.A_tempArray.push(Math.floor(Math.random() * 50) - 10);
        }
    }

    getTemperature()
    {
        return this.I_temperature;
    }

    setNextTemperature()
    {
        console.log(this);
        if (this.I_index <= this.getTemperatureArray().length - 1)
        {
            this.I_temperature = this.getTemperatureArray()[this.I_index];
            this.I_index++
            this.notify();
            if (this.I_index === this.getTemperatureArray().length)
            {
                clearInterval(N_timer);
            }
        }
    }

    getObservers()
    {
        return this.A_observers;
    }

    addObserver(observer)
    {
        this.A_observers.push(observer);
    }

    removeObserver(observer)
    {
        let I_index = 0;
        for (let currentObserver of this.getObservers())
        {
            if (currentObserver === observer)
            {
                this.getObservers().splice(I_index, 1);
            }

            I_index++;
        }
    }

    notify()
    {
        for (let observer of this.getObservers())
        {
            observer.update(this.getTemperature());
        }
    }
}
