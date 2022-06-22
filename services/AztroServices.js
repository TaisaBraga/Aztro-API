import axios from 'axios'
import Vuetify from 'vuetify/lib'

const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today'
new Vuetify({
  el: '#aztro',
  data() {
    return {
      data: {}
    }
  },
  created() {
    axios.post(URL).then(response => {
      this.data = response.data
    })
  }
})
