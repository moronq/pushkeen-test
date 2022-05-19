import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersAPI} from "../../api/api";

type initialStateType = {
    status: string
    usersList:any
}

const initialState:initialStateType = {
    usersList: [],
    status: ''
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchComments.pending, (state)=>{
    //             state.isLoading = true
    //             state.status = 'loading'
    //         })
    //         .addCase(fetchComments.fulfilled, (state, action: any) => {
    //             state.isLoading = false
    //             state.status = 'succeeded'
    //             state.comments = state.comments.concat(action.payload)
    //         })
    //         .addCase(fetchComments.rejected, (state, action) => {
    //             state.isLoading = false
    //             state.status = 'failed'
    //             state.error = action.error.message
    //         })
    // }
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    console.log("dispatched")
    return await UsersAPI.getUsers()
})

export default userSlice.reducer