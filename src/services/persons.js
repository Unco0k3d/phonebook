import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll=()=>{
    const request = axios.get(baseUrl)
    return request.then(response=>response.data)
}
const create=(newContactObj)=>{
    const request = axios.post(baseUrl,newContactObj)
    return request.then(response=>response.data)
}
const update=(name,newContactObj)=>{
    const request = axios.put(`${baseUrl}/${name}`,newContactObj)
    return request.then(response=>response.data)
}

export default {getAll,create,update}