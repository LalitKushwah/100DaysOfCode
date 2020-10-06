const app = Vue.createApp({
    data : function () {
        return {
            courseGoal: 'You are awesome, constant learning makes you more awesome',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoals () {
            const course = Math.random();
            return course > 0.5 ? 'Master Vue!' : this.courseGoal
        }
    }
});
app.mount('#user-goal');