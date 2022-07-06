<template>
  <div class="card bg-base-content shadow-xl">
    <div class="card-body">
      <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
      <h2 class="card-title justify-center text-black">{{ props.title }}</h2>
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
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps(['title'])
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