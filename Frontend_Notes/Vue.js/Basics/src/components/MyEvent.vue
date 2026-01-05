<script>
    import { ref } from 'vue';
    let count = ref(0);
</script>

<template>
    <h1> Count: {{count}}</h1>
    <button v-on:click="count++">Increment</button>
    <button @click="count--">Decrement</button>
</template>

<!-- 
Reactivity:
    It means that framework can automatically update (UI) when
    the info behind it changes. its a core concept that allows you
    to create dynamic and interactive user interfaces without manually
    manipulating the DOM.
 Reactive State:
 reactive()
 ref()
    
-->