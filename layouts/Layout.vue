<template>
  <div class="app-layout">
    <header>
      <div>
        <TopbarMenu />
      </div>
    </header>
    <main>
      <div>
        <SidebarMenu />
      </div>
      <!-- Main content goes here -->
      <!-- <slot></slot> -->
    </main>
    <footer>
      <!-- Footer content goes here -->
    </footer>
  </div>
</template>
<script>
import SidebarMenu from "@/components/sidebar.vue";
import TopbarMenu from "@/components/topbar.vue";
export default {
  name: "Layout-page",
  components: { SidebarMenu, TopbarMenu },
};
</script>
<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
