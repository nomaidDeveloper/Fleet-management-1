<template>
  <div>
    <div class="index-wrapper">
      <h1>!!!!!!  Home  !!!!!!</h1>
      <p>This is the Home page.</p>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "My-Home-Page",
  components: {  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.Sidebar-wrapper {
  width: 300px;
  background: transparent;
  bottom: 44px;
  position: absolute;
  transition: all 0.1s ease-out;
  top: 0;
  padding: 86px 0 45px;
}
.index-wrapper {
  margin-left: 300px;
  overflow: hidden;
  padding: 64px 0 65px;
}
</style>
