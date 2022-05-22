import {AxiosResponse} from "axios";
import {GetUsersType, UserPostCommentsType, UserPostType} from "../types/UsersTypes";

const axios = require('axios').default

export const UsersAPI = {
    getUsers: ()=> {
        return axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response:AxiosResponse<Array<GetUsersType>>) => response.data)
    },
    getUserInfo: (id:string)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response:AxiosResponse<GetUsersType>) => response.data)
    },
    getUserPost: (id:string)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response:AxiosResponse<Array<UserPostType>>) => response.data)
    },
    getPostComments: (postId:string)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response:AxiosResponse<Array<UserPostCommentsType>>) => response.data)
    },
    addComment: (postId:string, initialPost:UserPostCommentsType)=>{
        return axios.post(`https://jsonplaceholder.typicode.com/posts`, initialPost)
            .then((response:AxiosResponse) => response.data)
    },
}