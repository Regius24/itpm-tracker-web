<template>
  <div class="container mx-auto py-3 grid gap-4">
    <div class="card w-full bg-purple-500 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{{ data.id }} - {{ data.title }}</h2>
        <p>{{ data.body }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts/' + route.params.id, { baseURL: false })
</script>