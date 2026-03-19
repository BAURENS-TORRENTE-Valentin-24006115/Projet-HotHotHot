
class Temperature
{
    temperature;
    tempArray = [];
    index = 0;
    observers = [];

    constructor(qty) {
        this.setTemperatureArray(qty)
    }

    getTemperatureArray()
    {
        return this.tempArray
    }

    setTemperatureArray(qty)
    {
        for (let I_i = 0; I_i < qty; I_i++)
        {
            this.tempArray.push(Math.floor(Math.random() * 50) - 10);
        }
    }

    getTemperature()
    {
        return this.temperature;
    }

    setNextTemperature()
    {
        console.log(this);
        if (this.index <= this.getTemperatureArray().length - 1)
        {
            this.temperature = this.getTemperatureArray()[this.index];
            this.index++
            this.notify();
            if (this.index === this.getTemperatureArray().length)
            {
                clearInterval(timer);
            }
        }
    }

    getObservers()
    {
        return this.observers;
    }

    addObserver(observer)
    {
        this.observers.push(observer);
    }

    removeObserver(observer)
    {
        let index = 0;
        for (let currentObserver of this.getObservers())
        {
            if (currentObserver === observer)
            {
                this.getObservers().splice(index, 1);
            }

            index++;
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
