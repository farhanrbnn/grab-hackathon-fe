import { boot } from 'quasar/wrappers'
import axios from 'axios'


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
const api = axios.create({ 
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  baseURL: 'http://192.168.0.133:9090/api/v1/'
 })

export default boot(({ app }) => {
  // something to do
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { axios, api }


