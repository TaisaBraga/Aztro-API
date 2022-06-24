import axios from 'axios'

const URL = 'https://aztro.sameerkumar.website/'

export function returnSigns() {
  return axios.get(`${URL}/?sign=aries&day=today`).then(response => {
    const Signs = response.data
    return Signs?.map(sign => {
      return {
        daty: sign.current_date,
        compatibility: sign.compatibility,
        lucky_time: sign.lucky_time,
        lucky_number: sign.lucky_number,
        color: sign.color,
        date_range: sign.date_range,
        mood: sign.mood,
        description: sign.description
      }
    })
  })
}
