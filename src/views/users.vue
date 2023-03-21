<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="(data, index) in items" :key="index">
          <th scope="row">{{ data.id }}</th>
          <td>{{ data.first_name }}</td>
          <td>{{ data.last_name }}</td>
          <td>{{ data.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "User-Table",
  data() {
    return {
      items: [
        { id:1,age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { id:2,age: 21, first_name: "Larsen", last_name: "Shaw" },
        { id:3,age: 89, first_name: "Geneva", last_name: "Wilson" },
        { id:4,age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>
