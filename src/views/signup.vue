<template>
  <div class="signup-page">
    <div class="form-container">
      <h2>Sign up</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required>
        </div>
        <button type="submit" class="btn">Sign up</button>
      </form>
      <div class="links">
        <p>Already have an account? <router-link to="/login">Log in</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
name:'Sign-up',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async registerUser(){
        let user = {
            fullname : this.name,
            email : this.email,
            password: this.password,
            confirmPassword: this.confirmPassword 
        }
         await axios.post("http://localhost:8000/api/customer/register",user).then((res)=>{
            if (res.data.success) {
              this.$notify({
                  title: 'Registered',
                  text: 'Registered Successfully..........',
                  type: 'success ',
                  duration: 10000,
                  speed: 1000
                })
              this.$router.push("/login");
            }
        }).catch((err)=>{
            console.log(err,"Error:");
        })
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
