class DonutGraph {
    A_tempLabels = ["< 1°C", "1-20°C", "21-30°C", "> 30°C"];
    A_tempColors = ["#0000FF", "#008000", "#FFA500", "#FF0000"];
    A_tempClassValues = [0, 0, 0, 0];
    donutChart = null;

    updateGraph() {
        if (this.donutChart) {
            this.donutChart.update()
        } else {
            this.donutChart = new Chart("donutChart", {
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
                        text: "Graphe des températures du jour"
                    }
                }
            });
        }
    }

    update(I_temperature) {
        if (I_temperature <= 0)
        {
            this.A_tempClassValues[0]++;
        } else if (I_temperature <= 20)
        {
            this.A_tempClassValues[1]++;
        } else if (I_temperature <= 30)
        {
            this.A_tempClassValues[2]++;
        } else
        {
            this.A_tempClassValues[3]++;
        }

        this.updateGraph();
    }
}