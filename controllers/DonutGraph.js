class DonutGraph {
    A_tempLabels = ["< 1°C", "1-20°C", "21-30°C", "> 30°C"];
    A_tempColors = ["#0000FF", "#008000", "#FFA500", "#FF0000"];
    A_tempClassValues = [0, 0, 0, 0];
    donutChart = null;
    I_temperature;

    updateGraph(S_type) {
        if (this.donutChart) {
            this.donutChart.data.datasets[0].data = this.A_tempClassValues;
            this.donutChart.update();
        } else {
            this.donutChart = new Chart(S_type + "DonutChart", {
                type: "doughnut",
                data: {
                    labels: this.A_tempLabels,
                    datasets: [{
                        backgroundColor: this.A_tempColors,
                        data: this.A_tempClassValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Graphe des températures " + S_type + "es du jour"
                    }
                }
            });
        }
    }

    update(data) {
        this.I_temperature = data.valeur
        if (this.I_temperature <= 0)
        {
            this.A_tempClassValues[0]++;
        } else if (this.I_temperature <= 20)
        {
            this.A_tempClassValues[1]++;
        } else if (this.I_temperature <= 30)
        {
            this.A_tempClassValues[2]++;
        } else
        {
            this.A_tempClassValues[3]++;
        }

        this.updateGraph(data.type);
    }
}