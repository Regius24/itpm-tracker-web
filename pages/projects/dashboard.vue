<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
    <DashboardDoughnut
      title="Completed"
      :data="completedData"
    />

    <DashboardDoughnut
      class="inline-block"
      title="Ongoing"
      :data="ongoingData"
    />

    <DashboardDoughnut
      class="inline-block"
      title="Others"
      :data="othersData"
    />
  </div>
</template>

<script setup>
const completedData = [
  { label: 'Completed', color: '#2ecc71', value: 52 },
  { label: 'Total', color: '#3498db', value: 240 }
]
const ongoingData = [
  { label: 'Ongoing', color: '#f39c12', value: 171 },
  { label: 'On Track', color: '#e67e22', value: 150 },
  { label: 'At Risk', color: '#e74c3c', value: 15 },
  // { label: 'Delayed', color: '#B53471', value: 0 },
  // { label: 'No Timeline', color: '#833471', value: 0 }
]
const othersData = [
  { label: 'Others', color: '#d1ccc0', value: 16 },
  { label: 'Cancelled', color: '#bdc3c7', value: 8 },
  { label: 'On Hold', color: '#95a5a6', value: 8 }
]
</script>