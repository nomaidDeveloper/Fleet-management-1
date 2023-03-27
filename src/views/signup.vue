<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6">
          <div class="mt-5">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1679643289~exp=1679643889~hmac=2225ec4c09cf892c64dd3a395c694da61de7ad176a32c610164deb218fbadf3d"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div class="">
            <div class="form-container">
              <h2>Sign up</h2>
              <form @submit.prevent="registerUser">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" v-model="name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="email" required />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    v-model="confirmPassword"
                    required
                  />
                </div>
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div class="links">
                <p>
                  Already have an account?
                  <router-link to="/login">Log in</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Sign-up",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async registerUser() {
      let user = {
        fullname: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      await axios
        .post("http://localhost:8000/api/customer/register", user)
        .then((res) => {
          if (res.data.success) {
            this.$notify({
              title: "Registered",
              text: "Registered Successfully..........",
              type: "success ",
              duration: 10000,
              speed: 1000,
            });
            this.$router.push("/login");
          }
        })
        .catch((err) => {
          console.log(err, "Error:");
        });
    },
    handleSubmit(e) {
      e.preventDefault();
      // TODO: Handle signup logic
    },
  },
};
</script>

<style scoped>
.signup-page {
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

input[type="text"],
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
}

.links p {
  margin-bottom: 0;
}

.links a {
  color: #0077cc;
  text-decoration: none;
}
</style>
