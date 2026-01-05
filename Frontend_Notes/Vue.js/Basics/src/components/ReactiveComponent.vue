<script>
    import { reactive } from 'vue';
    let initialState = reactive({count: 0});
</script>

<template>
    <h1> Count: {{initialState.count}}</h1>
    <button @click="initialState.count++">+</button>
    <button @click="initialState.count--">-</button>
</template>

