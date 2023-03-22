<template>
  <div>
    <div>
      <notifications position="top right" />
    </div>
    <div v-if="$route.path == '/login' || $route.path == '/signup'">
    <LoginLayout>
      <router-view />
    </LoginLayout>
     </div>
     <div v-else>
      <AppLayout>
      <router-view />
    </AppLayout>
     </div>
    <!-- <div class="">
      <SidebarMenu/>
    </div>
    <div class=""><router-view></router-view></div>
     -->
  </div>
</template>

<script>
import AppLayout from '../layouts/Layout.vue';
import LoginLayout from '../layouts/loginLayout.vue';
export default {
  middleware: ["router-auth", "acl-user"],
  name: "App",
  components: { AppLayout,LoginLayout},
  data() {
    return {};
  },
};
</script>
<style></style>
