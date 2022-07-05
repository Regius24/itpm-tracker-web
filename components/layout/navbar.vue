<template>
  <div class="navbar bg-neutral shadow-lg">
    <div class="flex-none">
      <label
        for="my-drawer"
        class="btn btn-square btn-ghost drawer-button"
      >
        <IconsMdiMenu class="inline-block w-7 h-7" />
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
        <IconsCarbonUserData class="inline-block w-7 h-7" />
      </button>
    </div>

    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <IconsCarbonNotification class="inline-block w-7 h-7" />
      </button>
    </div>

    <div class="flex-none dropdown dropdown-end">
      <label
        tabindex="0"
        class="btn btn-square btn-ghost"
      >
        <IconsCarbonOverflowMenuHorizontal class="inline-block w-7 h-7" />
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a>Logout</a></li>
        <li><a>Settings</a></li>
        <li><a>About Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>