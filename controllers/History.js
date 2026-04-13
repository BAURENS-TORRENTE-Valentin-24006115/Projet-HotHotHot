class History
{
    update(I_data)
    {
        const N_val = Number(I_data.valeur);
        const container = document.getElementById(I_data.type + "Hist");
        if (container) {
            const tempVal = document.createElement("td");
            tempVal.textContent = isFinite(N_val) ? N_val.toFixed(1) + "°C" : "-";

            const timestampVal = document.createElement("td");
            timestampVal.textContent = I_data.timestamp;

            const tr = document.createElement("tr");
            tr.textContent

            tr.appendChild(tempVal);
            tr.appendChild(timestampVal);
            container.appendChild(tr);
        }
    }
}