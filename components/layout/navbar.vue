<template>
  <div class="navbar bg-neutral shadow-lg">
    <div class="flex-none">
      <label
        for="my-drawer"
        class="btn btn-square btn-ghost drawer-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>

    <div class="flex-1">
      <NuxtLink
        to="/projects"
        class="btn btn-ghost normal-case text-xl"
      >ITPM Tracker</NuxtLink>
    </div>

    <div class="flex-none mx-2">
      <div class="uppercase text-xl">admin</div>
    </div>

    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <IconsCarbonUserData class="inline-block w-6 h-6" />
      </button>
    </div>

    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
</script>