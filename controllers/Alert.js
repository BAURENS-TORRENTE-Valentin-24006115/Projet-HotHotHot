function createNotification(S_message) {
    if (Notification.permission === 'granted') {
        let notification = new Notification("Alerte Température", {
            body: S_message
        });
        setTimeout(() => notification.close(), 3000);
    }
}

function createToast(S_message, S_style) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    let O_toast = document.createElement("div");
    O_toast.className = `toast ${S_style}`;
    O_toast.textContent = S_message;

    container.appendChild(O_toast);
    setTimeout(() => O_toast.remove(), 4000);
}


class Alert {
    update(I_data) {
        const N_val = Number(I_data.valeur);
        const S_type = I_data.type;
        let S_message = "";

        if (!isFinite(N_val)) return;

        if (S_type === "exterieur") {
            if (N_val > 35) S_message = "Hot Hot Hot !";
            else if (N_val < 0) S_message = "Banquise en vue !";
        } 
        else if (S_type === "interieur") {
            if (N_val > 50) S_message = "Appelez les pompiers ou arrêtez votre barbecue !";
            else if (N_val > 22) S_message = "Baissez le chauffage !";
            else if (N_val < 0) S_message = "Canalisations gelées, appelez SOS plombier et mettez un bonnet !";
            else if (N_val < 12) S_message = "Montez le chauffage ou mettez un gros pull !";
        }

        const containerId = S_type === "exterieur" ? "zone-exterieur" : "zone-interieur";
        const container = document.getElementById(containerId);
        
        if (S_message !== "") {
            createNotification(S_message);
            createToast(S_message, N_val > 22 ? "toast-chaud" : "toast-froid");

            if (container) {
                let alertEl = container.querySelector(`#alert-${S_type}`);
                if (!alertEl) {
                    alertEl = document.createElement("div");
                    alertEl.id = `alert-${S_type}`;
                    alertEl.className = "alert-item sensor-alert";
                    container.appendChild(alertEl);
                }
                alertEl.textContent = S_message;
            }
        } else {
            if (container) {
                const existing = container.querySelector(`#alert-${S_type}`);
                if (existing) existing.remove();
            }
        }
    }
}