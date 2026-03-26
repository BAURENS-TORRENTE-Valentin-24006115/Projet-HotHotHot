class Alert
{
    update(I_data) {
        const N_val = Number(I_data.valeur);
        const S_type = I_data.type;
        let S_message = "";

        // If value is not a number, remove any existing alert for this sensor and stop
        if (!isFinite(N_val)) {
            const containerId = S_type === "exterieur" ? "zone-exterieur" : "zone-interieur";
            const container = document.getElementById(containerId);
            if (container) {
                const existing = container.querySelector(`#alert-${S_type}`);
                if (existing) existing.remove();
            }
            return;
        }

        if (S_type === "exterieur") {
            if (N_val > 35) {
                S_message = "Hot Hot Hot !";
            }
            else if (N_val < 0){
                S_message = "Banquise en vue !";
            }
        }

        else if (S_type === "interieur") {
            if (N_val > 50) {
                // this is a very extreme case, keep highest priority
                S_message = "Appelez les pompiers ou arrêtez votre barbecue !";
            }
            else if (N_val > 22) {
                S_message = "Baissez le chauffage !";
            }
            else if (N_val < 0) {
                S_message = "Canalisations gelées, appelez SOS plombier et mettez un bonnet !";
            }
            else if (N_val < 12) {
                S_message = "Montez le chauffage ou mettez un gros pull !";
            }
        }

        // Find the correct sensor container (under which the alert must appear)
        const containerId = S_type === "exterieur" ? "zone-exterieur" : "zone-interieur";
        const container = document.getElementById(containerId);
        if (!container) return;

        // Use a single alert element per sensor so we update/remove it on each notification
        let alertEl = container.querySelector(`#alert-${S_type}`);

        if (S_message !== "") {
            if (!alertEl) {
                alertEl = document.createElement("div");
                alertEl.id = `alert-${S_type}`;
                alertEl.className = "alert-item sensor-alert";
                alertEl.setAttribute('role', 'status');
                alertEl.setAttribute('aria-live', 'polite');
                // Insert the alert under the main temperature display if possible
                const ref = container.querySelector('.affichage-temp');
                if (ref && ref.parentNode === container) {
                    ref.insertAdjacentElement('afterend', alertEl);
                } else {
                    container.appendChild(alertEl);
                }
            }
            // Update the message (will overwrite previous one)
            alertEl.textContent = S_message;
        } else {
            // No message for this value: remove existing alert for this sensor
            if (alertEl) alertEl.remove();
        }
    }
}