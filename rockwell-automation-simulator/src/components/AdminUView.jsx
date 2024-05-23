// components/UserSection.js
import React from 'react';
import styles from '@/styles/AdminUView.module.css';

const users = [
  {
    username: 'coca - cola',
    imageUrl: 'path/to/cocacola-logo.png',
    industry: 'Food & Beverages',
    contact: 'YES',
    dateRegistered: '14/06/21',
  },
  {
    username: 'NESTLE',
    imageUrl: 'path/to/nestle-logo.png',
    industry: 'Food & Beverages',
    contact: 'NO',
    dateRegistered: '14/06/21',
  },
  // Add more users as needed
];

const AdminUView = () => {
  return (
    <div className={styles.section}>
    
      <div className={styles.content}>
        <h2>USERS</h2>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.column}>USERNAME</div>
            <div className={styles.column}>INDUSTRY</div>
            <div className={styles.column}>CONTACT ME</div>
            <div className={styles.column}>DATE REGISTERED</div>
          </div>
          {users.map((user, index) => (
            <div className={styles.tableRow} key={index}>
              <div className={styles.column}>
                <img src={user.imageUrl} alt={user.username} className={styles.userImage} />
                <div className={styles.userInfo}>
                  <div className={styles.username}>{user.username}</div>
                  <div className={styles.userCompany}>{user.username}</div>
                </div>
              </div>
              <div className={styles.column}>{user.industry}</div>
              <div className={styles.column}>
                <button className={user.contact === 'YES' ? styles.contactYes : styles.contactNo}>
                  {user.contact}
                </button>
              </div>
              <div className={styles.column}>
                {user.dateRegistered}
                <span className={styles.edit}>Edit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUView;
