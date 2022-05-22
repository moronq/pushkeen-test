import React from 'react'
import UserItemContainer from '../UserItem/UserItemContainer'
import styles from './TicketsPurchased.module.scss'

const TicketsPurchased: React.FC = () => {
    return (
        <section className={styles.ticketPurchased}>
            <div className={styles.ticketsMainTitleContainer}>
                <h4 className={styles.ticketsPurchasedTitle}>Купили билеты</h4>
                <p className={styles.ticketsPurchasedTitle}>932/
                    <span className={styles.ticketsPurchasedTitleGrey}>
                        {' 1000'}
                    </span>
                </p>
            </div>
            <UserItemContainer/>
        </section>
    )
}

export default TicketsPurchased;