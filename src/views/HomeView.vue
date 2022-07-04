<template>
  <div>
    <h1 class="title-home">Choose a zodiac sign to view daily horoscope</h1>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        Number 10
      </v-card-subtitle>

      <v-card-text class="text--primary" >
        <div>Whitehaven Beach</div>
        <h4>Description: {{signItem.description}}</h4>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>

        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>


<script>
import {returnSign} from '../../services/AztroServices'

export default {
  name: 'HomeView',

 return: {
  sign: {}
  },

  mounted(){
    this.signItem();
  },

  methods:{
    signItem(){
      returnSign()
      .then(result => {
        this.sign = result
        console.log(result)
      })
      .catch(error => {
      console.log(`Error o>>> ` + error)
    });      
    }
  }
}
</script>


<style scoped>
.title-home{
  color: #311B92;
  display: block;
  font-family: 'Charis SIL', serif;
  padding: 20px;
  text-align: center;
  text-shadow:  1px 1px 2px #311b9278;
}

</style>