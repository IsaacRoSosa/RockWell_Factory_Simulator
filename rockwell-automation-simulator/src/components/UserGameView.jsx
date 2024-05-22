import React from 'react'
import styles from '@/styles/UserGameView.module.css'

const UserGameView = () => {
    return (
        <div className={styles.section}>
        <div className={styles.left}>
          <h2>RECOMMENDATIONS</h2>
        </div>
        <div className={styles.center}>
          <img src="/path/to/your/image.png" alt="Digital Thread Mastery" className={styles.image} />
        </div>
        <div className={styles.right}>
          <h2>HOW OUR PRODUCTS HELP</h2>
        </div>
      </div>
    )
}

export default UserGameView