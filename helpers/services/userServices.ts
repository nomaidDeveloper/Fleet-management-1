import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:8000/api/customer";

async function login(email:String, password:String) {
  const user:any = {
    email: email,
    password: password,
  };
 return await axios.post(`${API_URL}/login`, user)
      .then(res => {
        if (res.data.token) {
            this.$router
            Cookies.set("user", JSON.stringify(res));
          }
          return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
}

async function register(user:any) {
  const response = await axios.post(`${API_URL}/register`, user);
  return response.data;
}

async function logout() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${API_URL}/login`, requestOptions);
  // const response = await axios.post(`${API_URL}/users/${user.id}`);
  Cookies.remove("user");
}

async function getUser(id:any) {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
}

async function updateUser(user:any) {
  const response = await axios.put(`${API_URL}/users/${user.id}`, user);
  return response.data;
}

export const userService = {
  login,
  getUser,
  register,
  updateUser,
  logout,
};
