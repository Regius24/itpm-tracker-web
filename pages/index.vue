<template>
  <div class="hero min-h-screen bg-base-200">

    <div class="hero-content flex-col md:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          CX IT Portfolio Management (IT-PM) Tracker, a single repository of information of all projects with Aurora
          wave initiated by Customer Experience (CX) Group. {{ model.uname }} {{ model.pword }} {{ count }}
        </p>
      </div>

      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              class="input input-bordered"
              v-model="model.uname"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              v-model="model.pword"
            />
          </div>

          <div class="form-control mt-6">
            <button
              class="btn btn-primary"
              @click="counterBtn"
            >Login</button>
          </div>
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
const count = ref(0)
const counterBtn = () => count.value++
</script>