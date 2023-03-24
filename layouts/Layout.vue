<template>
  <div class="app-layout">
    <header>
      <div >
        <TopbarMenu />
      </div>
    </header>
    <main>
      <div class="sidebar-layout">
        <SidebarMenu />
        <router-view />
        <!-- <slot></slot> -->
      </div>
      <!-- Main content goes here -->
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
    height: 100%;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  /* display: flex; */
  /* flex-direction: column; */
  /* min-height: 100vh; */
}
/* main {
  flex: 1;
} */
.sidebar-layout {
    width: 300px;
    background: transparent;
    bottom: 44px;
    position: absolute;
    transition: all .1s ease-out;
    top: 0;
    padding: 96px 0 45px;
    position: fixed;
}
</style>
