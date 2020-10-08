Vue.createApp({
    data () {
        return {
            data: ''
        }
    },
    methods : {
        getText () {
            this.data = this.$refs.userText.value;
        }
    }
}).mount('#app');