<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>
<script>
    export default {
        props: ['title']
    }
</script>
<style scoped>
header {
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    background: #640032;
}
header h1 {
    margin:0;
    color: white;
}
</style>