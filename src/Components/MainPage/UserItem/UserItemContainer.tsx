import React, {useEffect} from 'react';
import UserItem from "./UserItem";
import {useAppDispatch, useAppSelector} from "../../../hook/hook";
import {fetchUsers} from "../../../store/Reducers/UserSlice";

const UserItemContainer = () => {

    const dispatch = useAppDispatch()
    const {status} = useAppSelector(state => state.userReducer)

    //
    // useEffect(()=>{
    //     console.log('empty logic')
    // },[])

    useEffect(() => {
        if (status === 'idlk') {
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <div>
            <UserItem/>
        </div>
    )
}


export default UserItemContainer;