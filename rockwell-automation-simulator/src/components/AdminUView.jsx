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

  const disableUser = async (userId) => {
    if (window.confirm('Are you sure you want to disable this user?')) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });
        if (response.ok) {
          fetchUsers(); // Refetch users to update the table
        } else {
          console.error('Failed to disable user:', await response.text());
        }
      } catch (error) {
        console.error('Error disabling user:', error);
      }
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
            <div className={styles.column}>SCORE</div>
            <div className={styles.column}>CONTACT ME</div>
            <div className={styles.column}>DISABLE</div>
            
          </div>
          {users.map((user, index) => (
            <div className={styles.tableRow} key={index}>
              <div className={styles.column}>{user.user_username}</div>
              <div className={styles.column}>{user.user_contactemail}</div>
              <div className={styles.column}>{user.company_name}</div>
              <div className={styles.column}>{user.date_registered}</div>
              <div className={styles.column}>{user.score}</div>
              <div className={styles.column}>
                {user.contact ? (
                  <button className={styles.contactButton} style={{ backgroundColor: 'green', color: 'white' }}>YES</button>
                ) : (
                  <button className={styles.contactButton} style={{ backgroundColor: 'red', color: 'white' }}>NO</button>
                )}
              </div>
              <div className={styles.column}>

              <button className={styles.disableButton} onClick={() => disableUser(user.id_user)}>DISABLE</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUView;
