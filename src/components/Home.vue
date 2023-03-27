<template>
  <div class="pp-main-content">
    <div class="index-wrapper">
      <div class="pp-page-title mb-3">
        <h2 class="h-2 m-0">Dashboard</h2>
      </div>
      <div class="dashboard-orders">
        <div class="flex items-center portlet p-2">
          <div class="flex items-center">
            <div class="mr-3">this is card 1</div>
            <div class="flex items-center">content goes here</div>
          </div>
        </div>
        <div class="flex items-center portlet p-2">
          <div class="flex items-center">
            <div class="mr-3">Card 2</div>
            <div class="flex items-center">content goes here</div>
          </div>
        </div>
      </div>
      <div class="flex items-center portlet p-2" >
        <BarChart/>
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from '@/components/linechart.vue';

export default {
  name: "My-Home-Page",
  components: {
    BarChart
  },
  data() {
    return {
      
    };
  },
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
/* .index-wrapper {
  margin-left: 300px;
  overflow: hidden;
  padding: 64px 0 65px;
} */
.portlet {
  background: #fff;
  box-shadow: 0 15px 20px rgba(217, 223, 232, 0.2);
  border-radius: 12px;
}
.dashboard-orders {
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
}
.pp-main-content {
  padding: 30px 18px 30px 30px;
}
</style>
