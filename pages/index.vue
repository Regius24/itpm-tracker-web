<template>
  <div
    class="h-screen w-screen grid place-items-center bg-center bg-cover overflow-auto my-lg"
    style="background-image: url('../assets/bars-light.jpg');"
  >
    <div class="card lg:card-side shadow-xl  backdrop-blur-3xl">
      <figure style="width: 100%;">
        <img
          src="~/assets/undraw_performance_overview.svg"
          alt="perf_over"
        >
      </figure>

      <div class="card-body max-w-sm backdrop-sepia-0 bg-black/10 mx-auto">
        <div class="text-white">
          <h2 class="card-title">LOGIN HERE!</h2>
          <p>If a dog chews shoes whose shoes does he choose? {{ model }}</p>
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
          <button class="btn btn-primary">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const model = ref({
  uname: '',
  pword: ''
})
const showPassword = ref(false)

const count = ref(0)
const counterBtn = () => count.value++
</script>