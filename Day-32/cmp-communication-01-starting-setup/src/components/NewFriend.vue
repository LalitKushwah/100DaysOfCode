<template>
  <form @submit.prevent>
    <div>
      <label for="name">Enter Name</label>
      <input type="text" placeholder="Type name" id="name" ref="name" />
      <label for="email">Enter Email</label>
      <input type="email" placeholder="Type email" id="email" ref="email" />
      <label for="phone">Enter Email</label>
      <input type="phone" placeholder="Type phone number" id="phone" ref="phone" />
      <button @click="addFriend">Add Friend</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: {
    "add-friend": function (obj) {
     if (obj.name && obj.email && obj.phone) {
         return true;
     }
     return false;
    },
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", {
        name: this.$refs.name.value,
        email: this.$refs.email.value,
        phone: this.$refs.phone.value,
      });
    },
  },
};
</script>
<style>
div {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
input,
button {
  margin-top: 10px;
}
</style>