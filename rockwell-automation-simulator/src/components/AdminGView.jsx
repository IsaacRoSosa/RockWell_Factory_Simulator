// pages/admin.js
import React from 'react';
import styles from '@/styles/AdminGView.module.css';
import { SatisfactionChart, ClientsContactedChart, AveragePlayTimeChart }from '@/components/Charts';

function AdminGView() {
  return (
    <div className={styles.section}>
      
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

            </div>
          </div>
          <div className={styles.statCard}>
            <h3>New Users Today</h3>
            <div className={styles.statsinfo}>
              <p>15</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomStats}>
          <div className={styles.satisfaction}>
            <h3>Satisfaction Rate</h3>
            <br />

            <div className={styles.chartContainer}>
            <SatisfactionChart />
            </div>

            
            <div className={styles.SatisfactionContainer}>
              <div className={styles.percentage}>
                <p>0%</p>
                <p>100%</p>
              </div>
              <h3>95%</h3>
              <p>Based on likes</p>
            </div>
            <br />
            
          </div>

          <div className={styles.satisfaction}>
            <h3>Clients contacted</h3>
            <br />

            <div className={styles.chartContainer}>
            <ClientsContactedChart />
            </div>

            
            <div className={styles.SatisfactionContainer}>
              <div className={styles.percentage}>
                <p>0%</p>
                <p>100%</p>
              </div>
              <h3>80%</h3>
              <p>Game Success</p>
            </div>
            <br />
            
          </div>
          
        </div>
        <div className={styles.playtime}>
      <div className={styles.chartContainer2}>
  
        <AveragePlayTimeChart />
      </div>
        </div>
      </div>
    </div>
  );
}

export default AdminGView;
