import axios from 'axios'
import config from './../config/config.js'

axios.defaults.baseURL = config.apiURL

export default axios