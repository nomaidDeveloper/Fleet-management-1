<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "Bar-chart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "rgba(220, 220, 220, 1)",
            borderWidth: 1,
            pointBackgroundColor: "rgba(220, 220, 220, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            data: [50, 80, 60, 70, 90, 100, 80],
          },
          {
            label: "Expenses",
            backgroundColor: "rgba(151, 187, 205, 0.2)",
            borderColor: "rgba(151, 187, 205, 1)",
            borderWidth: 1,
            pointBackgroundColor: "rgba(151, 187, 205, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(151, 187, 205, 1)",
            data: [40, 60, 70, 50, 80, 70, 90],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {},
};
</script>
