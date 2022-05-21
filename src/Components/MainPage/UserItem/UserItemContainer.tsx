import React, {useEffect} from 'react'
import UserItem from './UserItem'
import {useAppDispatch, useAppSelector} from '../../../hook/hook'
import {fetchUsers} from '../../../store/Reducers/UserSlice'
import styles from './UserItem.module.scss'

const UserItemContainer = () => {

    const dispatch = useAppDispatch()
    const {status, usersList} = useAppSelector(state => state.userReducer)


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <ul className={styles.usersItemContainer}>
            {usersList.slice(0,4).map((el)=><UserItem key={el.id} city={el.address.city} name={el.name}/>)}
        </ul>
    )
}


export default UserItemContainer