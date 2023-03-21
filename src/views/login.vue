<script>
// import axios from 'axios'
import Cookies from "js-cookie";

export default {
  middleware: ["notAuthenticated"],
  name: "Login-page",
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  watch: {
       "$store.state.user": {
        handler(val) {
          console.log(val,"val");
              this.logoutRedirect()
            },
          deep: true,
        },
  },
  mounted () {
    this.logoutRedirect();
  },
  methods: {
   async login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', user);
      // await axios.post('http://localhost:8000/api/customer/login', user)
      // .then(response => {
      //   // Handle the successful registration
      //   console.log( this.$router," this.$route------");
      //   this.$router.push({ path: "/" });
      //   this.$notify({
      //             title: 'Login',
      //             text: 'Logged in Successfully..........',
      //             type: 'success ',
      //             duration: 10000,
      //             speed: 1000
      //           })
      //   console.log("login------------------res",response);
      // })
      // .catch(error => {
      //   this.email = '',
      //   this.password = '',
      //   this.$notify({
      //             title: 'Login',
      //             text: 'Login Faild..........',
      //             type: 'error',
      //             duration: 10000,
      //             speed: 1000
      //           })
      //   console.log(error,"-----------------error");
      // });
    },
    logoutRedirect(){
      setTimeout(() => {
        let userData = this.$store.state.user
        let cookieData = Cookies.get('user')
          if (cookieData == undefined || cookieData == null || !userData) {
            this.$router.push("/login");
          }
          else {
             this.$router.push("/");
          }
        
      }, 1000);
      },

  },
};
</script>
<template>
  <div class="login-page">
    <div class="form-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="btn">Log in</button>
      </form>
      <div class="links">
        <router-link to="/forgot-password">Forgot password?</router-link>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
}

.form-container {
  width: 400px;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #f5f5f5;
  font-size: 16px;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.links {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.links a {
  color: #0077cc;
  text-decoration: none;
}
</style>
