<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Email</th>
          <th scope="col">User Id</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="(data, index) in tableData" :key="index">
          <th scope="row">{{ data.id }}</th>
          <td>{{ data.fullname }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data._id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Cookies from "js-cookie";
export default {
  name: "User-Table",
  data() {
    return {
      tableData:[],
    };
  },
  mounted(){
    this.getAll()
  },
  methods: {
    async getAll(){
         let loggedIn = JSON.parse(Cookies.get('user'));
         let token = loggedIn.data.token
         let config = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }
         console.log(loggedIn.data.token,"jjjjjjjjjjjjj");
         await axios.get("http://localhost:8000/api/customer/list",config).then((res)=>{
            if (res.data.success) {
              this.tableData = res.data.data
              console.log(res,"res--------------------");
            }
        }).catch((err)=>{
            console.log(err,"ree-----------------------");
        })
    },
  }
};
</script>
