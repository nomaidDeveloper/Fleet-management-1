<template>
    <div class="app-layout">
      <main>
        <!-- Main content goes here -->
        <slot></slot>
      </main>
    </div>
  </template>
  <script>
  export default {
    name: "login-page",
    components: { },
  };
  </script>
  <style>
  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
  </style>
  