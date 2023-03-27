<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <div class="mt-5">
            <img
              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?w=740&t=st=1679648922~exp=1679649522~hmac=eb873f78590822f361a1ac883164013dabaf4c5bad418a7d957e2cc815333924"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div class="">
            <div class="form-container">
              <!-- <h2>Forgot Password</h2> -->

              <form @submit.prevent="forgot">
                <div
                  class="mb-4 d-flex flex-row align-items-center justify-content-center"
                >
                  <!-- <div class="fw-bold mt-2 pt-1 mb-0">Sign In</div>
              <h1 class="fw-bold mt-2 pt-1 mb-0">Sign In</h1> -->
                  <h1 class="display-6">Reset Password</h1>
                </div>

                <!-- Email input -->
                <hr class="solid" />
                <div class="form-outline mb-4 mt-2">
                  <label class="form-label mt-2 pt-1" for="form3Example3"
                    >Email address</label
                  >
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    style="padding-left: 2.5rem; padding-right: 2.5rem"
                  >
                    Submit
                  </button>
                </div>
                <div class="links">
                  <p>
                    Click Here to <router-link to="/login">Log in</router-link>
                  </p>
                </div>
              </form>
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
  name: "Forgot-password",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async forgot() {
      await axios
        .post("http://localhost:8000/api/customer/forGetPassword", this.email)
        .then((res) => {
          if (res.data.success) {
            this.$notify({
              title: "Success",
              text: "Successfully sent a link to your email..........",
              type: "success",
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
  },
};
</script>

<style scoped>
.form-container {
  width: 400px;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
