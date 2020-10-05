Vue.createApp({    
    data () {
        return {
            enteredValue: '',
            goals: []
        };
    },
    methods: {
        addGoal () {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app')