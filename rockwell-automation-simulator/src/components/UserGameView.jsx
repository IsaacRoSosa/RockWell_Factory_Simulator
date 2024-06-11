import React from 'react'
import styles from '@/styles/UserGameView.module.css'

const UserGameView = () => {
  return (
    <div className={styles.section}>
      <div className={styles.gameContainer}>
        <iframe 
          src="/Build/index.html" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default UserGameView  