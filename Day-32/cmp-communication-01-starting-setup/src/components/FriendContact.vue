<template>
  <li>
    <h2>{{ name }} {{this.favourite ? ' - Favourite': ''}}</h2>
    <button @click="toggleFavourite(name)">Favourite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="removeFriend">Remove Friend</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    favourite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite(name) {
      this.$emit('toggle-favourite', name);
    },
    removeFriend () {
      this.$emit('remove-friend', this.name);
    }
  }
};
</script>