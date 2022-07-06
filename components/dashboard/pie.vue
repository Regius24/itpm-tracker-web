<template>
  <div class="">
    <div class="card-body">
      <Pie
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
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
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const chartOptions = {
  responsive: true
}
const chartData = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}
const chartId = {
  type: String,
  default: 'pie-chart'
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
</script>