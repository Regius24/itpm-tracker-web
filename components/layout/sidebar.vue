<template>
  <div class="drawer-side">
    <label
      for="my-drawer"
      class="drawer-overlay"
    ></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <div class="divider">Projects</div>
      <li>
        <NuxtLink to="/projects/dashboard">
          <label
            for="my-drawer"
            class="drawer-button"
          >Dashboard</label>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects/inventory">Inventory</NuxtLink>
      </li>

      <div class="divider">Reports</div>
      <li>
        <NuxtLink to="/reports">Raw</NuxtLink>
      </li>
    </ul>
  </div>
</template>