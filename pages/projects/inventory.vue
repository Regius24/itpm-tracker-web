<template>
  <ProjectsTable
    data="/sample-data.json"
    :columns="columns"
    class="mb-5"
  />
</template>

<script setup>
const columns = [
  'Project Name',
  'Demand Number',
  'Wave Number',
  'Proponent',
  'Group Owner',
  'Overall Status',
  'Ageing in Days'
]
</script>