import React from 'react'
import styles from '@/styles/UserGameView.module.css'

const UserGameView = () => {
    return (
        <div className={styles.section}>
        <div className={styles.gameContainer}></div>
        <div className={styles.informationContainer}>
            <div className={styles.Recomendations}>
                <h1>RECOMENDATIONS</h1>
            </div>
            <div className={styles.Products}>
                <h1>HOW OUR PRODUCTS HELP</h1>
            </div>

        </div>
      </div>
    )
}

export default UserGameView