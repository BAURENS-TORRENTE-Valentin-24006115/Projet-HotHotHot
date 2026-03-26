class History
{
    update(I_data)
    {
        const N_val = Number(I_data.valeur);
        const container = document.getElementById("tabpanel-2");
        if (container) {
            const p = document.createElement("p");
            p.textContent = isFinite(N_val) ? N_val.toFixed(1) + "°C" : "-";
            container.appendChild(p);
        }
    }
}