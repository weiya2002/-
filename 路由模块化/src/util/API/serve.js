import axios from 'axios'
import { config } from 'vue/types/umd'

const serve = axios.create({
    baseURL: "https://api.it120.cc",
})

serve.interceptors.request.use(config => {
    console.log('请求成功!');
    return config
},err=>{
    Promise.reject(err)
})

serve.interceptors.response.use(res=>{
    return res
},err=>{
    Promise.reject('抛出'+err)
})

export default serve