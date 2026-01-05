<script>

    const myMessage = 'Text Interpolation';
    const myNumber = 123;
    const youtubeLink = 'https://www.youtube.com/';
    const googleLink = 'https://www.google.com/';
    const myImage = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
    const altText = 'Google Logo';
</script>

<template>

    <h1> {{myMessage}}</h1>
    <h2>{{ myNumber }}</h2>
    <h3>{{ myNumber + 1 }}</h3>
    <a :href="youtubeLink">Youtube</a>
    <a v-bind:href="googleLink">Google</a>
    <img :src="myImage" :alt="altText"/>
</template>


<!--  
Text Interpolation {{}} 

Text interpolation in refers to the process of dynamically binding data 
to the content of an HTML element in your template. It allows you to display
the value of a javascript expression or a variable within the markup.

 -->

 <!-- 
 Attribute binding:

  It is a way to bind Html attributes to data in Vue instance. 
  old way : v-bind:attr
  new way : :attr
 
  Dynamic Binding
  -->
