import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/AdminGView.module.css';
import { SatisfactionChart, ClientsContactedChart, AveragePlayTimeChart } from '@/components/Charts';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

// Dynamically import the ClientSideGlobe component with no SSR
const ClientSideGlobe = dynamic(() => import('@/components/ClientSideGlobe'), { ssr: false });

function AdminGView() {
  const [user, setUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsersToday, setNewUsersToday] = useState(0);
  const [satisfactionData, setSatisfactionData] = useState([]);
  const [clientsContactedData, setClientsContactedData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const userCookie = cookie.get('user');
    console.log('User Cookie:', userCookie);
    if (userCookie) {
      setUser(JSON.parse(userCookie));
      fetchStats();
    } else {
      console.log('Redirecting to login'); // Agrega este log para verificar la redirección
      router.push('/login'); // Redirect to login if no user is found
    }
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setTotalUsers(data.totalUsers);
      setNewUsersToday(data.newUsersToday);
      setSatisfactionData(data.satisfactionData);
      setClientsContactedData(data.clientsContactedData);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Show a loading message
  }

  const pinsData = [
    { lat: 23.6345, lng: -102.5528, country: 'Mexico' },
    { lat: -35.6751, lng: -71.5430, country: 'Chile' },
    { lat: 4.5709, lng: -74.2973, country: 'Colombia' },
    { lat: 37.0902, lng: -95.7129, country: 'USA' },
    { lat: 56.1304, lng: -106.3468, country: 'Canada' },
  ];

  const calculateSatisfactionPercentage = (data) => {
    const total = data.length;
    const satisfied = data.filter(value => value >= 75).length;
    return (satisfied / total) * 100;
  };

  const calculateClientsContactedPercentage = (data) => {
    const total = data.length;
    const contacted = data.filter(value => value === true).length;
    return (contacted / total) * 100;
  };

  const satisfactionPercentage = calculateSatisfactionPercentage(satisfactionData);
  const clientsContactedPercentage = calculateClientsContactedPercentage(clientsContactedData);

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.welcomeCard}>
          <div className={styles.welcomeText}>
            <h3>Welcome back</h3>
            <br />
            <h2>{user.user_name}</h2>
            <p>Glad to see you again! <br /> Ask me anything.</p>
          </div>
        </div>
        <div className={styles.map}>
          <ClientSideGlobe pinsData={pinsData} />
        </div>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3>Total Users</h3>
            <div className={styles.statsinfo}>
              <p>{totalUsers}</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <h3>New Users Today</h3>
            <div className={styles.statsinfo}>
              <p>{newUsersToday}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomStats}>
          <div className={styles.satisfaction}>
            <h3>Satisfaction Rate</h3>
            <br />
            <div className={styles.chartContainer}>
              <SatisfactionChart satisfactionPercentage={satisfactionPercentage} />
            </div>
            <div className={styles.SatisfactionContainer}>
              <div className={styles.percentage}>
                <p>0%</p>
                <p>100%</p>
              </div>
              <h3>{satisfactionPercentage.toFixed(2)}%</h3>
              <p>Based on likes</p>
            </div>
            <br />
          </div>
          <div className={styles.satisfaction}>
            <h3>Clients contacted</h3>
            <br />
            <div className={styles.chartContainer}>
              <ClientsContactedChart clientsContactedPercentage={clientsContactedPercentage} />
            </div>
            <div className={styles.SatisfactionContainer2}>
              <p>Played</p>
              <h3>{(100 - clientsContactedPercentage).toFixed(2)}%</h3>
            </div>
            <div className={styles.SatisfactionContainer2}>
              <p>Contacted</p>
              <h3>{clientsContactedPercentage.toFixed(2)}%</h3>
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
