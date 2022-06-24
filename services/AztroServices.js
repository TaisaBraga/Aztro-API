import axios from 'axios'

const URL = 'https://aztro.sameerkumar.website'

export function returnSign() {
  return axios
    .post(`${URL}/?sign=aries&day=today`)
    .then(response => {
      const signs = response.data
      console.log(`current_date o>>> ` + signs.current_date)
      return {
        current_date: signs.current_date,
        compatibility: signs.compatibility,
        lucky_number: signs.lucky_number,
        lucky_time: signs.lucky_time,
        color: signs.color,
        date_range: signs.date_range,
        mood: signs.mood,
        description: signs.description
      }
    })
    .catch(error => {
      console.log(`Error o>>> ` + error)
    })
}
