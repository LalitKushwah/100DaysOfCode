const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    myCounter (arg) {
      this.counter = this.counter + arg
    },
    setName (event) {
      this.name = event.target.value
    }
  }
});

app.mount('#events');
