import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons/'

const getAll=()=>{
    const request = axios.get(baseUrl)
    return request.then(response=>response.data)
}
const create=(newContactObj)=>{
    const request = axios.post(baseUrl,newContactObj)
    return request.then(response=>response.data)
}
const updateName=(name,newContactObj)=>{
    const request = axios.put(`${baseUrl}/${name}`,newContactObj)
    return request.then(response=>response.data)
}
const updateNumber=(number,newContactObj)=>{
    const request = axios.put(`${baseUrl}/${number}`,newContactObj)
    return request.then(response=>response.data)
}

export default {getAll,create,updateName,updateNumber}