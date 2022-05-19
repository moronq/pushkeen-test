import React, {useEffect} from 'react';
import UserItem from "./UserItem";
import {useAppDispatch} from "../../../hook/hook";
import {fetchUsers} from "../../../store/Reducers/UserSlice";

const UserItemContainer = () => {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <UserItem/>
        </div>
    );
};

export default UserItemContainer;