<template>
  <div
    class="h-screen w-screen grid place-items-center bg-center bg-cover overflow-auto my-lg"
    style="background-image: url('images/space-gradient.jpg');"
  >
    <div class="card lg:card-side drop-shadow-2xl rounded-xl bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900">
      <div class="card-body max-w-sm mx-auto">
        <div class="text-white">
          <h2 class="card-title">IT-PM Tracker</h2>
          <p class="text-gray-300">Welcome, login your credentials below:</p>
        </div>

        <form class="form-control my-5">
          <div class="form-control">
            <label class="label">
              <span class="label-text text-gray-300">What is your domain?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered rounded-lg"
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
              class="input input-bordered rounded-lg"
              :class="model.pword.length < 5 ? 'input-error' : ''"
              v-model="model.pword"
            />
          </div>
        </form>

        <div class="card-actions justify-end">
          <button
            class="btn btn-primary rounded-lg"
            @click="counterBtn"
          >Sign In</button>

          <NuxtLink
            class="btn btn-primary rounded-lg"
            to="/posts"
          >Posts</NuxtLink>
        </div>

        counter: {{ incrementCounter }}
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

// const count = ref(0)
const incrementCounter = useCounter()
// const incrementCounter = useState('counter', () => 0)
const counterBtn = () => incrementCounter.value++

</script>