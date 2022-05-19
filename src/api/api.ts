import {AxiosResponse} from "axios";
import {GetUsersType} from "../types/UsersTypes";

const axios = require('axios').default

export const UsersAPI = {
    getUsers: ()=> {
        return axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response:AxiosResponse<Array<GetUsersType>>) => response.data)
    }
}