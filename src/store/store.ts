import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";


const rootReducer = combineReducers( {
    userReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch