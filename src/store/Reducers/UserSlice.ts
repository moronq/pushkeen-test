import {AsyncThunkPayloadCreator, createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import {UsersAPI} from "../../api/api";
import {GetUsersType, UserPostCommentsType, UserPostType} from "../../types/UsersTypes";

type InitialStateType = {
    statusInfo: 'idle' | 'loading' | 'succeeded' | 'failed'
    statusPost: 'idle' | 'loading' | 'succeeded' | 'failed'
    statusPostComments: 'idle' | 'loading' | 'succeeded' | 'failed'
    userInfo: GetUsersType
    userPosts: Array<UserPostType>
    userPostComments: Array<UserPostCommentsType>
    errorInfo: string | undefined
    errorPost: string | undefined
    errorComments: string | undefined
}

const initialState: InitialStateType = {
    statusInfo: 'idle',
    statusPost: 'idle',
    statusPostComments: 'idle',
    userInfo: {} as GetUsersType,
    userPosts: [],
    userPostComments: [],
    errorInfo: '',
    errorPost: '',
    errorComments: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
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
            .addCase(fetchUserPost.pending, (state) => {
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
            .addCase(fetchPostComments.pending, (state) => {
                state.statusPostComments = 'loading'
            })
            .addCase(fetchPostComments.fulfilled, (state, action: any) => {
                state.statusPostComments = 'succeeded'
                state.userPostComments = action.payload
            })
            .addCase(fetchPostComments.rejected, (state, action) => {
                state.statusPostComments = 'failed'
                state.errorComments = action.error.message
            })
            .addCase(addPostComment.fulfilled, (state, action: any) => {
                state.userPostComments = state.userPostComments.concat(action.payload)
            })
    }
})

export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async (id: string) => {
    return await UsersAPI.getUserInfo(id)
})
export const fetchUserPost = createAsyncThunk('user/fetchUserPost', async (id: string) => {
    return await UsersAPI.getUserPost(id)
})
export const fetchPostComments = createAsyncThunk('user/fetchPostComments', async (postId: string) => {
    return await UsersAPI.getPostComments(postId)
})
export const addPostComment = createAsyncThunk('user/addPostComment',
    async ({postId, bodyComment, name = 'user', email = 'user@gmail.com'}: {
        postId: string, bodyComment: string, name?:string, email?: string }) => {
        const comment = {
            postId: parseInt(postId),
            id: 12,
            name: name,
            email: email,
            body: bodyComment
        }
        return await UsersAPI.addComment(postId, comment)
    })

export default userSlice.reducer