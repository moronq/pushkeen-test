import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersAPI} from "../../api/api";
import {GetUsersType, UserPostType} from "../../types/UsersTypes";

type InitialStateType = {
    statusInfo: 'idle' | 'loading' | 'succeeded' | 'failed'
    statusPost: 'idle' | 'loading' | 'succeeded' | 'failed'
    userInfo: GetUsersType
    userPosts: Array<UserPostType>
    errorInfo: string | undefined
    errorPost: string | undefined
}

const initialState:InitialStateType = {
    statusInfo: 'idle',
    statusPost: 'idle',
    userInfo: {} as GetUsersType,
    userPosts: [],
    errorInfo: '',
    errorPost: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserInfo.pending, (state)=>{
                state.statusInfo = 'loading'
            })
            .addCase(fetchUserInfo.fulfilled, (state, action: any) => {
                state.statusInfo = 'succeeded'
                state.userInfo = action.payload
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.statusInfo = 'failed'
                state.errorInfo = action.error.message
            })
            .addCase(fetchUserPost.pending, (state)=>{
                state.statusPost = 'loading'
            })
            .addCase(fetchUserPost.fulfilled, (state, action: any) => {
                state.statusPost = 'succeeded'
                state.userPosts = action.payload
            })
            .addCase(fetchUserPost.rejected, (state, action) => {
                state.statusPost = 'failed'
                state.errorPost = action.error.message
            })

    }
})

export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async (id:string)=>{
    return await UsersAPI.getUserInfo(id)
})
export const fetchUserPost = createAsyncThunk('user/fetchUserPost', async (id:string)=>{
    return await UsersAPI.getUserPost(id)
})

export default userSlice.reducer