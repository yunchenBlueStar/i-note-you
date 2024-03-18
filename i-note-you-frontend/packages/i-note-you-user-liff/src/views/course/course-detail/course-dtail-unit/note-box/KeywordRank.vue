<script setup lang="ts">
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { ref, computed } from "vue";

const chartData = computed(() => ({
  labels: [
    "Paris",
    "Nîmes",
    "Toulon",
    "Perpignan",
    "Autre",
    "Nîmes",
    "Toulon",
    "Perpignan",
    "Autre",
    "Perpignan",
  ],
  datasets: [
    {
      label: "全班關鍵字比例(%)",
      barThickness: 30,
      data: [30, 40, 60, 80, 5, 30, 40, 60, 100, 5],
      backgroundColor: ["#97B0C4"],
      borderRadius: 20,
    },
    {
      label: "我的筆記次數(%)",
      barThickness: 30,
      data: [30, 40, 60, 100, 5, 30, 40, 60, 100, 5],
      backgroundColor: ["#0079AF"],
      borderRadius: 20,
    },
  ],
}));

const options = {
  responsive: true,
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "probability",
        },
      },
    ],
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "關鍵字排行",
    },
  },
};
const { barChartProps } = useBarChart({
  chartData,
  options,
});

Chart.register(...registerables);
</script>
<template>
  <div
    class="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-full rounded-[10px] flex justify-center items-center"
  >
    <BarChart v-bind="barChartProps" class="w-[70vw] h-[80vh]" />
  </div>
</template>

<style scoped></style>
