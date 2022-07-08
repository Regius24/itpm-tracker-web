<template>
  <div class="card w-1/2 bg-white shadow-xl">
    <div class="card-body">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const chartOptions = {
  responsive: true
}
const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [{ data: [40, 20, 12] }]
}
const chartId = {
  type: String,
  default: 'bar-chart'
}
const datasetIdKey = {
  type: String,
  default: 'label'
}
const width = {
  type: Number,
  default: 400
}
const height = {
  type: Number,
  default: 400
}
const cssClasses = {
  default: '',
  type: String
}
const styles = {
  type: Object,
  default: () => { }
}
const plugins = {
  type: Object,
  default: () => { }
}

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>