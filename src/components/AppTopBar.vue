<template>
  <div>
    <v-app-bar
      color="deep-purple lighten-2"
      dense
      dark
      height="80px"
    >
      <v-toolbar-title class="title-bar">Astrology</v-toolbar-title>
    </v-app-bar>
  </div>
</template> 

<script>

export default {
  name: 'AppTopBar'
}
</script>

<style scoped>
.title-bar{
  font-family: 'Sacramento', cursive;
  font-size: 50px;
}


</style>