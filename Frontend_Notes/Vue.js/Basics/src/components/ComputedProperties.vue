<script>
    import { computed } from 'vue';
    let firstName = "John";
    let lastName = "Doe";
    let fullName = computed(() => {
        return `${firstName} ${lastName}`;
    });
</script>

<template>
    <h1>Full Name: {{fullName}}</h1>
</template>

<!-- 
Computed Properties:

It is a special kind of variable that automatically updates 
itself whenever the data it depends on changes.

-->

<!-- 

v-for:
The v-for directive is used to iterate over an array or an object 
and render a template for each item in the collection.

-->