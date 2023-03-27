<template>
  <div>
    <h2 class="h-1 m-3">Users List</h2>
    <div class="flex items-center portlet p-2">
      <div class="pp-page-title mb-3"></div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Email</th>
            <th scope="col">User Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in tableData" :key="index">
            <th scope="row">{{ data.id }}</th>
            <td>{{ data.firstname }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.lastname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  name: "User-Table",
  data() {
    return {
      tableData: [
        {
          id: "1",
          firstname: "Maisey",
          lastname: "Ashok",
          email: "Maisey.Ashok@gmail.com",
        },
        {
          id: "2",
          firstname: "Rishi",
          lastname: "Makwana",
          email: "rishi@gmail.com",
        },
        {
          id: "3",
          firstname: "Iron",
          lastname: "Man",
          email: "ironman@gmail.com",
        },
        {
          id: "4",
          firstname: "Thor",
          lastname: "thor",
          email: "thor@gmail.com",
        },
        {
          id: "5",
          firstname: "Maisey",
          lastname: "Ashok",
          email: "Ashok@gmail.com",
        },
        {
          id: "6",
          firstname: "jon",
          lastname: "doe",
          email: "johan@gmail.com",
        },
      ],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      let loggedIn = JSON.parse(Cookies.get("user"));
      let token = loggedIn.data.token;
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      console.log(loggedIn.data.token, "jjjjjjjjjjjjj");
      await axios
        .get("http://localhost:8000/api/customer/list", config)
        .then((res) => {
          if (res.data.success) {
            this.tableData = res.data.data;
            console.log(res, "res--------------------");
          }
        })
        .catch((err) => {
          console.log(err, "ree-----------------------");
        });
    },
  },
};
</script>
<style>
.portlet {
  background: #fff;
  box-shadow: 0 15px 20px rgba(217, 223, 232, 0.2);
  border-radius: 12px;
}
</style>
