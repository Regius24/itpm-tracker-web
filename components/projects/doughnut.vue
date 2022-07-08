<template>
  <div class="card bg-neutral shadow-xl">
    <div class="card-body text-white">
      <Doughnut
        :chart-data="chartData"
        :chart-options="chartOptions"
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
ChartJS.defaults.color = '#FFF'

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