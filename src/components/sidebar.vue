
<template>
  <div class="left-side-menu pp-sidebar-menu sidebar">
    <simplebar class="h-100" data-simplebar>
      <!-- User box -->
    

      <!--- Sidemenu -->
      <div id="sidebar-menu" class="side_bar">
        <!-- Left Menu Start -->
        <ul class="list-unstyled" id="side-menu">
          <!--<li v-if='$store.state.authfack.user && $store.state.authfack.user.role != "admin"' class=""><a class="side-nav-link-ref" href='#'><div class='flex'> <i class="ri-braces-line"></i><div class="flex beamerTrigger">What's new</div></div></a></li>-->
       
          <template v-for="item in menuItems" :key="item.id">
            <li class="menu-title"  :id="item.id">
              <router-link :to="item.link"> {{item.label }}</router-link>
            </li>
          
          </template>
        </ul>
      </div>
      <!-- End Sidebar -->

      <div class="clearfix"></div>
    </simplebar>
  </div>
</template><!-- <template>
  <div class="center examplex">
    <vs-navbar center-collapsed v-model="active">
      <template #left>
        <img src="/logo2.png" alt="">
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat >Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <div class="square">
      <div class="child">
        child 1
      </div>
      <div class="child">
        child 2
      </div>
      <div class="child">
        child 3
      </div>
    </div>
  </div>
</template> -->
<script>
import 'simplebar/dist/simplebar.min.css'; 

export default {
  name:'side-barr',
  components: {
  },
  data:() => ({
    active: 'guide',
    menuItems : [
  {
    id: 1,
    label: "Dashboard",
    role:'user',
    //icon: "ri-dashboard-line",
    link: '/',
  },
  {
    id: 2,
    label: "Users",
    role:'user',
    link: '/users',
  },
  // {
  //   id: 3,
  //   label: "login",
  //   role:'user',
  //   link: '/login',
  // },
  // {
  //   id: 4,
  //   label: "Signup",
  //   role:'user',
  //   link: '/signup',
  // },
  {
    id: 5,
    label: "About",
    role:'user',
    link: '/about',
  },
]
  })
}
</script>
<style lang="scss" >
.menu-title{
  padding-left: 25px;
  min-height: 54px;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  color: #333;
  text-decoration: none;
  display: block;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.sidebar ul li a:hover {
  background-color: #333;
  color: #fff;
}
</style>