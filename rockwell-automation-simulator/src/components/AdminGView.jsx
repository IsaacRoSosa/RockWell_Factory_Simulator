import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/AdminGView.module.css';
import { SatisfactionChart, ClientsContactedChart, AveragePlayTimeChart } from '@/components/Charts';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { set } from 'mongoose';
import Loader from '@/components/Loader';


// Dynamically import the ClientSideGlobe component with no SSR
const ClientSideGlobe = dynamic(() => import('@/components/ClientSideGlobe'), { ssr: false });

const experienceCenters = {
  "HQ CXC": { lat: 43.0389, lng: -87.9065, country: 'Milwaukee, WI' },
  "San Jose EVIC": { lat: 37.3382, lng: -121.8863, country: 'San Jose, CA' },
  "Americas Innovation Center": { lat: 25.6866, lng: -100.3161, country: 'Monterrey, MX' },
  "Mexico HQ": { lat: 19.4326, lng: -99.1332, country: 'Mexico City, MX' },
  "Colombia CXC": { lat: 4.7110, lng: -74.0721, country: 'Bogota, Colombia' },
  "EMEA CXC": { lat: 49.0069, lng: 8.4037, country: 'Karlsruhe, Germany' },
  "APAC HQ CEC": { lat: 1.3521, lng: 103.8198, country: 'Singapore' },
  "Digital Transformation CXC": { lat: 18.5204, lng: 73.8567, country: 'Pune, India' },
};

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
  const [loading, setLoading] = useState(true);
  const [experienceCenterData, setExperienceCenterData] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);




  useEffect(() => {
    const userCookie = cookie.get('user');
    console.log('User Cookie:', userCookie);
    if (userCookie) {
      setUser(JSON.parse(userCookie));
      fetchStats();
    } else {
      console.log('Redirecting to login'); 
      router.push('/login'); 
    }
  }, []);

  const fetchStats = async () => {
    setLoading(true);
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
      setExperienceCenterData(data.experienceCenterData);
  
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className={styles.Loader}><Loader /></div>;
  }



  const pinsData = experienceCenterData.map(center => ({
    ...experienceCenters[center.center],
    user_count: center.user_count,
    avg_satisfaction: center.avg_satisfaction
  }));


  const userCounts = pinsData.map(center => center.user_count);
const minUsers = Math.min(...userCounts);
const maxUsers = Math.max(...userCounts);

const getPinColor = (user_count) => {
  if (minUsers === maxUsers) {
    return `rgb(255, 0, 0)`; // Devuelve un color predeterminado si todos los usuarios tienen el mismo conteo
  }
  const percentage = (user_count - minUsers) / (maxUsers - minUsers);
  const colorValue = Math.round(255 * percentage);
  return `rgb(${255 - colorValue}, ${colorValue}, 0)`;
};




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
        <div className={styles.experienceCenterButtons}>
          {pinsData.map((center, index) => (
            <button
              key={index}
              onClick={() => setSelectedCenter(center)}
              className={styles.experienceCenterButton}
              style={{backgroundColor: getPinColor(center.user_count)}}
            >
              {center.country}
            </button>
          ))}
        </div>
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
            <h3>{(gameSuccess * 100).toFixed(2)}%</h3>
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
            <AveragePlayTimeChart avgPlayTimes={connectedUsers} playDates={playDates} />
          </div>
        </div>
        {selectedCenter && (
        <div className={styles.popUp}>
          <h2>{selectedCenter.country}</h2>
          <p>Users: {selectedCenter.user_count}</p>
          <p>Avg Satisfaction: {selectedCenter.avg_satisfaction.toFixed(2)}</p>
          <button onClick={() => setSelectedCenter(null)}>Close</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default AdminGView;
