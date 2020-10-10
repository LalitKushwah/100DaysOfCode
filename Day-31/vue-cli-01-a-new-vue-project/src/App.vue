<template>
    <section>
        <h2>Welcome Here...</h2>
        <h3>My Friends list</h3>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>
<script>
export default {
    data () {
        return {
            friends: [
                {
                    id: '1',
                    name: 'Lalit Kushwah',
                    email: 'lalitkushwah@gmail.com'
                },
                {
                    id: '2',
                    name: 'Megha Mehrotra',
                    email: 'megha@gmail.com'
                }
            ]
        }
    }
}
</script>
<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>