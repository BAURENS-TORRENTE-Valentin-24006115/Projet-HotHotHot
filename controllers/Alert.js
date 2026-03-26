function creatNotificatio(S_message){
    if(Notification.permission == 'granted'){
        let notification = new Notification("Alert température", {
            body : S_message
        });
        setTimeout(function (){
            notification.close();
        }, 2000);
    }else{
        console.log("le permissiont a était refusé ou non défini")
    }
}

class Alert
{

    update(I_temperature)
    {
        let S_message = "";
        if (I_temperature < 0)
        {
            S_message = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            creatNotificatio(S_message)
        } else if (I_temperature > 30)
        {
            S_message = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            creatNotificatio(S_message)
        }

        document.getElementById("message").textContent = S_message;
    }

}