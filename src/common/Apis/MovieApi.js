import axios from 'axios'

export default axios.create({
    baseUrl: 'https://www.omdbapi.com/',
})