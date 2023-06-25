<template>
  <v-app>
    <v-main>
        <v-app-bar :elevation="5">
  <template v-slot:append>
  
    <v-btn icon="mdi-heart"></v-btn>

    <v-btn icon="mdi-magnify" to=""></v-btn>

    <v-btn icon="mdi mdi-dots-vertical" to="about"> </v-btn>
  </template>
</v-app-bar> 
  <v-icon class="mdi mdi-home" >mdi mdi-home</v-icon>

  <v-icon icon="mdi-home" />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
