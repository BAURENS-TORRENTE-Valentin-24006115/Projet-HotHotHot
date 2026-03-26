function creatNotificatio(S_message){
    if(Notification.permission == 'granted'){
        let notification = new Notification("Alert température", {
            body : S_message
        });
        setTimeout(function (){
            notification.close();
        }, 2000);
    }else{
        console.log("le permissiont a était refusé ou non défini");
    }
}

function creatToast(S_message, S_type) {
    let O_toast = document.createElement("div");
    O_toast.classList.add("toast");
    O_toast.classList.add(S_type);
    O_toast.textContent = S_message;

    document.getElementById("toast-container").appendChild(O_toast)
    setTimeout(function (){
        O_toast.remove();
    }, 2000);
}

class Alert {

    update(I_temperature) {
        let S_message = "";
        if (I_temperature < 0) {
            S_message = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
            creatNotificatio(S_message);
            creatToast(S_message, "toast-froid");
        } else if (I_temperature > 30) {
            S_message = "Caliente ! Vamos a la playa, ho hoho hoho !!";
            creatNotificatio(S_message);
            creatToast(S_message, "toast-chaud");
        }

        document.getElementById("message").textContent = S_message;
    }

}