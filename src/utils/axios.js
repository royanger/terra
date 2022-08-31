import axios from 'axios'

export default axios.create({
   baseURL: process.env.APP_URL,
   headers: {
      'Content-type': 'application/json',
   },
})
