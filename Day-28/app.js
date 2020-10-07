const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: [],
      listVisibility: false,
      listVisibilityLabel: 'Show List'
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal(index) {
      this.goals.splice(index,1);
    },
    toggleListVisibility () {
      this.listVisibility = !this.listVisibility;
      this.listVisibilityLabel = this.listVisibility ? 'Hide List' : 'Show List';
    }
  }
});

app.mount('#user-goals');
