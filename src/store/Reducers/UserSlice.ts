import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersAPI} from "../../api/api";
import {GetUsersType} from "../../types/UsersTypes";

type initialStateType = {
    status: 'idlk' | 'loading' | 'succeeded' | 'failed'
    usersList: Array<GetUsersType>
    error: string | undefined
}


const initialState:initialStateType = {
    usersList: [],
    status: 'idlk',
    error: ''
}

export const userSlice = createSlice({
    name: 'users',
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

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    return await UsersAPI.getUsers()
})

export default userSlice.reducer