<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
    <ProjectsPie
      title="Completed"
      :data="completedData"
    />

    <ProjectsPie
      class="inline-block"
      title="Ongoing"
      :data="ongoingData"
    />

    <ProjectsPie
      class="inline-block"
      title="Others"
      :data="othersData"
    />
  </div>
</template>

<script setup>
const completedData = [
  { label: 'Completed', color: '#20bf6b', value: 52 },
  { label: 'Total', color: '#079992', value: 240 }
]
const ongoingData = [
  { label: 'Ongoing', color: '#f7b731', value: 171 },
  { label: 'On Track', color: '#fa8231', value: 150 },
  { label: 'At Risk', color: '#eb3b5a', value: 15 },
  // { label: 'Delayed', color: '#B53471', value: 0 },
  // { label: 'No Timeline', color: '#833471', value: 0 }
]
const othersData = [
  { label: 'Others', color: '#4b6584', value: 16 },
  { label: 'Cancelled', color: '#778ca3', value: 8 },
  { label: 'On Hold', color: '#95a5a6', value: 8 }
]
</script>