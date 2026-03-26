class Display
{
    constructor() {
        this.I_tempValueExt = document.getElementById("temp-ext-val");
        this.I_tempValueInt = document.getElementById("temp-int-val");
    }

    update(I_data)
    {
        let targetElement;
        if (I_data.type === "exterieur"){
            targetElement = this.I_tempValueExt;
        } else{
            targetElement = this.I_tempValueInt;
        }

        if (targetElement){
            const N_val = Number(I_data.valeur);
            targetElement.textContent = isFinite(N_val) ? N_val.toFixed(1) + "°C" : "-";
            this.applyColor(targetElement, N_val);
        }

    }

    applyColor(element, temperature){
        let S_color;
        if (temperature <= 0) S_color = "blue";
        else if (temperature <= 22) S_color = "green";
        else if (temperature <= 35) S_color = "orange";
        else S_color = "red";
        element.className = S_color;
    }
}