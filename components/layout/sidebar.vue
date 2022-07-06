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
        <NuxtLink to="/reports/raw">Raw</NuxtLink>
      </li>

      <div class="divider">Others</div>
      <li>
        <NuxtLink to="/faqs">FAQs</NuxtLink>
      </li>
      <li>
        <NuxtLink to="http://10.122.8.236/esolve/Login" target="_blank">File a CR</NuxtLink>
      </li>
    </ul>
  </div>
</template>