<script>
// import axios from 'axios'
import Cookies from "js-cookie";
// import { required  } from 'vuelidate/lib/validators'
export default {
  middleware: ["notAuthenticated"],
  name: "Login-page",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      submitted: false,
    };
  },
  watch: {
    "$store.state.user": {
      handler(val) {
        console.log(val, "val");
        this.logoutRedirect();
      },
      deep: true,
    },
  },
  // validations() {
  //   return {
  //     email: {
  //       email,
  //       required,
  //     },
  //     password: {
  //       required,
  //     },
  //   };
  // },
  mounted() {
    this.logoutRedirect();
  },
  methods: {
    async login() {
      this.submitted = true;
      // this.$v.$touch();  // stop here if form is invalid
      // if (this.$v.$invalid) {
      //   return;
      // } else {
        let user = {
          email: this.email,
          password: this.password,
        };
        console.log(user);
        this.$store.dispatch("login", user);
      // }
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
    logoutRedirect() {
      setTimeout(() => {
        console.log(
          this.$store.state.user,
          "this.$store.state.user*-----------"
        );
        // let userData = this.$store.state.user
        let cookieData = Cookies.get("user");
        if (cookieData == undefined || cookieData == null) {
          //|| !userData
          this.$router.push("/login");
        } else {
          this.$router.push("/");
        }
      }, 1000);
    },
  },
  layout: "loginLayout",
};
</script>
<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6">
          <div class="mt-5">
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1679648423~exp=1679649023~hmac=7a9b1eb39819585dec7edb0197dbf8cc637682b20abdcbd8e15c6661fd6dcad3"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="login">
            <div
              class="mb-4 d-flex flex-row align-items-center justify-content-center"
            >
              <!-- <div class="fw-bold mt-2 pt-1 mb-0">Sign In</div>
              <h1 class="fw-bold mt-2 pt-1 mb-0">Sign In</h1> -->
              <h1 class="display-1">Sign In</h1>
            </div>

            <!-- Email input -->
            <hr class="solid" />
            <div class="form-outline mb-4 mt-2">
              <label class="form-label mt-2 pt-1" for="inputEmail3"
                >Email address</label
              >
              <input
                type="email"
                id="inputEmail3"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                v-model="email"
                :class="{ 'is-invalid': submitted && $v.email.$error }"
              />
              <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                <span v-if="!$v.email.required"
                  >Email address is required.</span
                >
                <span v-if="!$v.email.email"
                  >Please enter valid email address.</span
                >
              </div>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <label class="form-label mt-2 pt-1" for="form3Example4"
                >Password</label
              >
              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="password"
                :class="{ 'is-invalid': submitted && $v.password.$error }"
              />
              <div
                v-if="submitted && !$v.password.required"
                class="invalid-feedback"
              >
                Password is required.
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Login
              </button>
            </div>
            <div class="footer-links">
              <div>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <router-link to="/signup" class="routerlink"
                    >Sign up</router-link
                  >
                </p>
              </div>
              <div>
                <router-link
                  to="/forgotpassword"
                  class="routerlink small fw-bold mt-2 pt-1 mb-0"
                  >Forgot password?</router-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="login-page">
    <div class="form-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="inputEmail3" class="form-label">Email</label>
          <div class="">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
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
  </div> -->
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

.routerlink {
  color: #0077cc;
  text-decoration: none;
}
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
.footer-links {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}
.invalid-feedback-custom {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #f1556c;
}
</style>
