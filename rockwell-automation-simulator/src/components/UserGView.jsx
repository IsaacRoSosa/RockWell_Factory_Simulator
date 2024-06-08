import React, { useEffect, useState } from 'react';
import styles from '@/styles/UserGView.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const UserGeneralView = () => {
  const recommendedProducts = [
    {
      image: '/images/emulate3d.png',
      name: 'Emulate 3D',
      description: 'Emulate3D Ultimate technology is designed to save time for companies...',
      link: '/products/emulate3d',
      type: 'Software'
    },
    // Add more product objects as needed
  ];

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch('/api/user_stats', { 
      method: 'GET',
      credentials: 'include', 
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (!userData) {
    return <div>No user data found</div>; // Handle case when no user data is found
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>User Dashboard</h2>
        <p>Welcome Back :)</p>
      </div>

      <div className={styles.dashboard}>
        <div className={styles.left}>
          <div className={styles.userCard}>
            <img src="/RW-logo2.png" alt={userData.company2} className={styles.companyLogo} />
            <div className={styles.userInfo}>
              <h3>Username: {userData.username}</h3>
              <p>Company: {userData.company2}</p>
              <p>Date registered: {userData.date_registered}</p>
              <p>Experience Center: {userData.user_experience_center}</p>
            </div>
          </div>

          <div className={styles.leaderboard}>
            <h3>LEADERBOARD</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Minigame</th>
                  <th>Points</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="/images/coca-cola-logo.png" alt="Coca Cola" className={styles.icon} /> @CocaCola</td>
                  <td>Foods Industry</td>
                  <td>9821</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.recommendedProducts}>
            <h3>Recommended Products</h3>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
              {recommendedProducts.map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <a href={product.link} className={styles.productLink}>Learn More</a>
                  <span className={styles.productType}>{product.type}</span>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGeneralView;
