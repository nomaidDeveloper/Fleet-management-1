<!-- <template>
  <div class="app-layout">
    
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
  transition: all 0.1s ease-out;
  top: 0;
  padding: 96px 0 45px;
  position: fixed;
}
</style> -->

<template>
  <div id="layout">
    <header>
      <!-- Top bar content goes here -->
      <TopbarMenu></TopbarMenu>
    </header>

    <div class="container">
      <nav>
        <!-- Side bar content goes here -->
        <SidebarMenu></SidebarMenu>
      </nav>

      <main>
        <router-view />
      </main>
    </div>

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
/* CSS styles for the layout component */

.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container{
  max-width: -webkit-fill-available !important;
}

nav {
  /* width: 250px; */
  height: 100%;
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.1);
}

main {
  flex: 1;
  width: calc(100% - 250px);
  padding: 20px;
}
#layout {
  background-color: #f2f4f8;
}
</style>
