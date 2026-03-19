class Alert
{
    update(temperature)
    {
        let message = "";
        if (temperature < 0)
        {
            message = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        } else if (temperature > 30)
        {
            message = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        }

        document.getElementById("message").textContent = message;
    }

}