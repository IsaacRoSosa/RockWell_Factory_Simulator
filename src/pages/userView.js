// components/Dashboard.js
import { useState } from 'react';
import UserSidebar from '@/components/userSidebar';
import UserGameView from '@/components/UserGameView';
import UserGeneralView from '@/components/UserGView';
import styles from '@/styles/UserDashboard.module.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const renderSection = () => {
    switch (activeSection) {
      case 'section1':
        return <UserGameView />;
      case 'section2':
        return <UserGeneralView />;
      default:
        return <UserGameView />;
     }
   };
 
  return (
    <div className={styles.dashboard}>
      <UserSidebar setActiveSection={setActiveSection} />
      <div className={styles.mainContent}>
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;

