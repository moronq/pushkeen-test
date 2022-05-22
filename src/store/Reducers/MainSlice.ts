import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersAPI} from "../../api/api";
import {GetUsersType} from "../../types/UsersTypes";

type initialStateType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    usersList: Array<GetUsersType>
    error: string | undefined
}


const initialState:initialStateType = {
    usersList: [],
    status: 'idle',
    error: ''
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action: any) => {
                state.status = 'succeeded'
                state.usersList = state.usersList.concat(action.payload)
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const fetchUsers = createAsyncThunk('main/fetchUsers', async ()=>{
    return await UsersAPI.getUsers()
})

export default mainSlice.reducer