// pages/admin.js
import React from 'react';
import styles from '@/styles/AdminGView.module.css';
import { SatisfactionChart, ClientsContactedChart } from '@/components/Charts';

function AdminGView() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1>Admin - General View</h1>
        <p>Dashboard</p>
      </div>
      <div className={styles.content}>
        <div className={styles.welcomeCard}>
          <div className={styles.welcomeText}>
            <h3>Welcome back</h3>
            <br />
            <h2> Mark Johnson</h2>
            <p>Glad to see you again! <br /> Ask me anything.</p>
          </div>
        </div>
        <div className={styles.map}></div>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>Total Users</h3>
            <div className={styles.statsinfo}>
              <p>2,300</p>
              <span>+5%</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <h3>New Users Today</h3>
            <div className={styles.statsinfo}>
              <p>2,300</p>
              <span>+5%</span>
            </div>
          </div>
        </div>
        <div className={styles.bottomStats}>
          <div className={styles.satisfaction}>
            <h3>Satisfaction Rate</h3>
            <div className={styles.chartContainer}>
              <SatisfactionChart />
            </div>
            <p>95% Based on likes</p>
          </div>
          <div className={styles.services}>
            <h3>Clients Contacted</h3>
            <div className={styles.chartContainer}>
              <ClientsContactedChart />
            </div>
            <p>Played: 145 people</p>
            <p>Contacted: 140</p>
            <p>Success Rate: 9.3</p>
          </div>
        </div>
        <div className={styles.playtime}></div>
      </div>
    </div>
  );
}

export default AdminGView;
