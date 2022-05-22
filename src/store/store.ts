import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainReducer from "./Reducers/MainSlice";
import userReducer from "./Reducers/UserSlice";

const rootReducer = combineReducers( {
    mainPage: mainReducer,
    userPage: userReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch