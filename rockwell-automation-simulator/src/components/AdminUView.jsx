// components/AdminUView.jsx
import React, { useState, useEffect } from 'react';
import styles from '@/styles/AdminUView.module.css';

const AdminUView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setUsers(data.usersWithCompany);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h2>USERS</h2>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.column}>USERNAME</div>
            <div className={styles.column}>CONTACT EMAIL</div>
            <div className={styles.column}>COMPANY</div>
            <div className={styles.column}>DATE REGISTERED</div>
            <div className={styles.column}>INDUSTRY</div>
            <div className={styles.column}>EDIT</div>
            <div className={styles.column}>DELETE</div>
            
          </div>
          {users.map((user, index) => (
            <div className={styles.tableRow} key={index}>
              <div className={styles.column}>{user.user_username}</div>
              <div className={styles.column}>{user.user_contactemail}</div>
              <div className={styles.column}>{user.company_name}</div>
              <div className={styles.column}>{user.date_registered}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUView;
