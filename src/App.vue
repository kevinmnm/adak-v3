<template>
   <div id="app">
      <v-app>
         <Home />
      </v-app>
   </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
   name: "App",
   components: {
      Home: Home
   }
};
</script>
