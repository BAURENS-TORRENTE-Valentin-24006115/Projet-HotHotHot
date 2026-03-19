class History
{
    update(I_temperature)
    {
        document.getElementById("tabpanel-2").appendChild(document.createElement("p")).textContent = I_temperature + "°C";
    }
}