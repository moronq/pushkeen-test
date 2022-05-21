import {AxiosResponse} from "axios";
import {GetUsersType} from "../types/UsersTypes";

const axios = require('axios').default

export const UsersAPI = {
    getUsers: ()=> {
        return axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response:AxiosResponse<Array<GetUsersType>>) => response.data)
    },
    getUserInfo: (id:string)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response:AxiosResponse<Array<GetUsersType>>) => response.data)
    },
    getUserPost: (id:string)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response:AxiosResponse<Array<GetUsersType>>) => response.data)
    },
}