<template>
  <div
    class="h-screen w-screen grid place-items-center bg-center bg-cover overflow-auto my-lg"
    style="background-image: url('images/space-gradient.jpg');"
  >
    <div class="card lg:card-side drop-shadow-2xl bg-gradient-to-r from-purple-600 via-purple-800 to-fuchsia-800">
      <div class="card-body max-w-sm mx-auto">
        <div class="text-white">
          <h2 class="card-title">IT-PM Tracker</h2>
          <p class="text-gray-300">Welcome, login your credentials below: {{ count }}</p>
        </div>

        <form class="form-control my-5">
          <div class="form-control">
            <label class="label">
              <span class="label-text text-gray-300">What is your domain?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered"
              :class="model.uname.length < 5 ? 'input-error' : ''"
              v-model="model.uname"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text text-gray-300">What is your domain?</span>
            </label>
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Type here"
              class="input input-bordered"
              v-model="model.pword"
            />
          </div>
        </form>

        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            @click="counterBtn"
          >Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const model = ref({
  uname: '',
  pword: ''
})
const showPassword = ref(false)

const count = ref(0)
const counterBtn = () => count.value++
</script>