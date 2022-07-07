<template>
  <div class="card bg-base-content shadow-xl">
    <div class="card-body text-black">
      <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :width="400"
        :height="400"
      />

      <div class="card-title uppercase justify-center">{{ props.title }}</div>
    </div>
  </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'
import ChartDataLabes from 'chartjs-plugin-datalabels'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, ChartDataLabes)

const props = defineProps(['title', 'data'])

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}
const chartData = {
  labels: props.data.length > 0 ? props.data.map(m => m.label) : [],
  datasets: [
    {
      backgroundColor: props.data.length > 0 ? props.data.map(m => m.color) : [],
      data: props.data.length > 0 ? props.data.map(m => m.value) : []
    }
  ]
}
</script>