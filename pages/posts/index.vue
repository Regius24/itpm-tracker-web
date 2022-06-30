<template>
  <div class="container mx-auto py-3 grid grid-cols-3 gap-4">
    <div
      class="card w-full bg-purple-500 shadow-xl"
      v-for="post in data"
      :key="post.id"
    >
      <div class="card-body">
        <h2 class="card-title">{{ post.id }} - {{ post.title }}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>