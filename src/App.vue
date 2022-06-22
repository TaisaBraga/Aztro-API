<template>
  <v-app>
    <AppTopBar />
    <v-main class="main">
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import AppTopBar from '../src/components/AppTopBar.vue'

export default {
  name: 'App',
  components: {
    AppTopBar,
  }
}
</script>


<style lang="scss">

*{
  margin: 0;
  padding: 0;
}
.main{
  background-color: #EDE7F6;
}

</style>
