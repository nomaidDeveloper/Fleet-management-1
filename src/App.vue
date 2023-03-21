<template>
  <div>
    <div>
      <notifications position="top right" />
    </div>
    <Layout>
      <router-view />
    </Layout>
    <!-- <div class="">
      <SidebarMenu/>
    </div>
    <div class=""><router-view></router-view></div>
     -->
  </div>
</template>

<script>
export default {
  middleware: ["router-auth", "acl-user"],
  name: "App",
  components: { },
  data() {
    return {};
  },
};
</script>
<style></style>
