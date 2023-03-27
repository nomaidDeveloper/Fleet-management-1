<!-- -->
<template>
  <div id="app">
    <div>
      <notifications position="top right" />
    </div>
    <div
      v-if="
        $route.path == '/login' ||
        $route.path == '/signup' ||
        $route.path == '/forgotpassword'
      "
    >
      <LoginLayout></LoginLayout>
    </div>
    <div v-else>
      <AppLayout></AppLayout>
    </div>
  </div>
</template>

<script>
import AppLayout from "../layouts/Layout.vue";
import LoginLayout from "../layouts/loginLayout.vue";
export default {
  middleware: ["router-auth", "acl-user"],
  name: "App",
  components: { AppLayout, LoginLayout },
  data() {
    return {};
  },
};
</script>
<style></style>
