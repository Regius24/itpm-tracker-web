<template>
  <div class="drawer">
    <!-- Drawer Ticker -->
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
    />

    <!-- Drawer Body -->
    <LayoutBody>
      <slot />
    </LayoutBody>

    <!-- Drawer Sidebar -->
    <LayoutSidebar />
  </div>
</template>