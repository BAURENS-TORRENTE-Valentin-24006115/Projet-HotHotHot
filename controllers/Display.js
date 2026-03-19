class Display
{
    I_tempValue = document.getElementById("value");

    getTempValue()
    {
        return this.I_tempValue;
    }

    update(I_temperature)
    {
        this.getTempValue().textContent = I_temperature + "°C";

        let S_color;
        if (I_temperature <= 0)
        {
            S_color = "blue";
        } else if (I_temperature <= 20)
        {
            S_color = "green";
        } else if (I_temperature <= 30)
        {
            S_color = "orange";
        } else
        {
            S_color = "red";
        }
        this.I_tempValue.setAttribute("class", S_color);
    }
}