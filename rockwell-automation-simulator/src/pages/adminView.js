// components/Dashboard.js
import { useState } from 'react';
import Sidebar from '@/components/AdminSlidebar';
import AdminGView from '@/components/AdminGView';
import AdminUView from '@/components//AdminUView';
import styles from '@/styles/AdminDashboard.module.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('section1');

  const renderSection = () => {
    switch (activeSection) {
      case 'section1':
        return <AdminGView />;
      case 'section2':
        return <AdminUView />;
      default:
        return <AdminGView />;
    }
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar setActiveSection={setActiveSection} />
      <div className={styles.mainContent}>
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
