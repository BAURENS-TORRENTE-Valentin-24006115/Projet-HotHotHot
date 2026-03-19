class History
{
    update(temperature)
    {
        document.getElementById("tabpanel-2").appendChild(document.createElement("p")).textContent = temperature;
    }
}