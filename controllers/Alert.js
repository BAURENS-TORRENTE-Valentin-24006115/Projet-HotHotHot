class Alert
{
    update(I_temperature)
    {
        let S_message = "";
        if (I_temperature < 0)
        {
            S_message = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        } else if (I_temperature > 30)
        {
            S_message = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        }

        document.getElementById("message").textContent = S_message;
    }

}