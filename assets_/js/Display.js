class Display
{
    tempValue = document.getElementById("value");

    getTempValue()
    {
        return this.tempValue;
    }

    update(temperature)
    {
        this.getTempValue().textContent = temperature + "°C";

        let color;
        if (temperature <= 0)
        {
            color = "blue";
        } else if (temperature <= 20)
        {
            color = "green";
        } else if (temperature <= 30)
        {
            color = "orange";
        } else
        {
            color = "red";
        }
        this.tempValue.setAttribute("class", color);
    }
}