import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/AdminGView.module.css';
import { SatisfactionChart, ClientsContactedChart, AveragePlayTimeChart } from '@/components/Charts';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { set } from 'mongoose';

// Dynamically import the ClientSideGlobe component with no SSR
const ClientSideGlobe = dynamic(() => import('@/components/ClientSideGlobe'), { ssr: false });

function AdminGView() {
  const [user, setUser] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [newUsersToday, setNewUsersToday] = useState(0);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [contactedPlayers, setContactedPlayers] = useState(0);
  const [notContactedPlayers, setNotContactedPlayers] = useState(0);
  const [gameSuccess, setGameSuccess] = useState(0);
  const [satisfactionPlayers, setSatisfactionPlayers] = useState(0);
  const [dissatisfactionPlayers, setDissatisfactionPlayers] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [playDates, setPlayDates] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);
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
      setTotalPlayers(data.totalPlayers);
      setContactedPlayers(data.contactedPlayers);
      setNotContactedPlayers(data.notContactedPlayers);
      setGameSuccess(data.gameSuccess);
      setSatisfactionPlayers(data.satisfactionPlayers);
      setDissatisfactionPlayers(data.dissatisfactionPlayers);
      setSatisfactionRate(data.satisfactionRate);
      setConnectedUsers(data.connectedUsers);
      setPlayDates(data.playDates);
  
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
    { lat: -25.2744, lng: 133.7751, country: 'Australia' },
    { lat: 55.3781, lng: -3.4360, country: 'UK' },
    { lat: 61.5240, lng: 105.3188, country: 'Russia' },
    { lat: 35.8617, lng: 104.1954, country: 'China' },
    { lat: 20.5937, lng: 78.9629, country: 'India' },
    { lat: -30.5595, lng: 22.9375, country: 'South Africa' },
    { lat: -14.2350, lng: -51.9253, country: 'Brazil' },
    { lat: 48.8566, lng: 2.3522, country: 'France' },
    { lat: 51.1657, lng: 10.4515, country: 'Germany' },
    { lat: 36.2048, lng: 138.2529, country: 'Japan' },
  ];



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

            <div className={styles.chartContainer}>
              <SatisfactionChart satisfactionPlayers={satisfactionPlayers} dissatisfactionPlayers={dissatisfactionPlayers} />
      
            </div>
            <div className={styles.SatisfactionContainer}>
              <div className={styles.percentage}>
                <p>0%</p>
                <p>100%</p>
              </div>
              <h3>{(satisfactionRate * 100).toFixed(2)}%</h3>
              <p>Based on likes</p>
            </div>
            <br />
          </div>
          <div className={styles.satisfaction}>
            <h3>Game success</h3>
 
            <div className={styles.chartContainer}>
              <ClientsContactedChart contactedPlayers={contactedPlayers} notContactedPlayers={notContactedPlayers} />
            </div>

            <div className={styles.SatisfactionContainer2}>
            <h3>{gameSuccess * 100}%</h3>
              <p>Based on clients contacted</p>
  
            </div>
            <div className={styles.SatisfactionContainer2}>
            <div className={styles.percentage2}>
              <p>Played</p>
              <h3>{totalPlayers}</h3>
              </div>
              <div className={styles.percentage2}>
              <p>Contacted</p>
              <h3>{contactedPlayers}</h3>
              </div>
            </div>
      
            <br />
          </div>
        </div>
        <div className={styles.playtime}>
          <div className={styles.chartContainer2}>
            <AveragePlayTimeChart avgPlayTimes={contactedPlayers} playDates={playDates} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminGView;
