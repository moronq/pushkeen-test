import React, {useEffect, useState} from 'react'
import UserItem from './UserItem'
import {useAppDispatch, useAppSelector} from '../../../hook/hook'
import {fetchUsers} from '../../../store/Reducers/MainSlice'
import styles from './UserItem.module.scss'
import Button from "../../../common/Button/Button";
import arrow from '../../../img/arrow-right-white.svg'


const UserItemContainer = () => {

    const dispatch = useAppDispatch()
    const {status, usersList} = useAppSelector(state => state.mainPage)

    const ITEM_DISPLAYED = 4
    const portionCount = Math.ceil(usersList.length / ITEM_DISPLAYED)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionItemNumber = (portionNumber - 1) * ITEM_DISPLAYED
    const rightPortionItemNumber = portionNumber * ITEM_DISPLAYED

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers())
        }
    }, [])

    return (<div className={styles.userItemListWrapper}>
            {portionNumber > 1 && <div className={styles.userItemPrevButton}>
                <Button borderRadius={'50%'} pdCol={'17px'} background={'black'} callBackFn={() => setPortionNumber(portionNumber - 1)}>
                    <img src={arrow} alt='button-left' style={{transform: 'rotate(180deg)'}}/>
                </Button>
            </div>}
            <ul className={styles.usersItemContainer}>
                {usersList.filter((el, index) => index >= leftPortionItemNumber && index < rightPortionItemNumber).map((el) =>
                    <UserItem id={el.id} key={el.id} city={el.address.city}
                              name={el.name}/>)}
            </ul>
            {portionNumber < portionCount && <div className={styles.userItemNextButton}>
                <Button borderRadius={'50%'} pdCol={'17px'} background={'black'} callBackFn={() => setPortionNumber(portionNumber + 1)}>
                    <img src={arrow} alt='button-right'/>
                </Button>
            </div>}
        </div>
    )
}


export default UserItemContainer