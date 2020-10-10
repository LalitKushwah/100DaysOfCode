<template>
  <li>
    <button @click="toggleDetails">{{isvisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="isvisible">
      <li>Name: {{friend.name}}</li>
      <li>Email: {{friend.email}}</li>
    </ul>
  </li>
</template>
<script>
export default {
  data() {
    return {
      isvisible: true,
      friend: {
        id: "1",
        name: "Lalit Kushwah",
        email: "lalitkushwah@gmail.com",
      },
    };
  },
  methods: {
      toggleDetails () {
          this.isvisible = !this.isvisible;
      }
  }
};
</script>
<style scoped>
    ul {
        list-style: none;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }
    li {
        position: relative;
        padding: 10px;
    }
</style>