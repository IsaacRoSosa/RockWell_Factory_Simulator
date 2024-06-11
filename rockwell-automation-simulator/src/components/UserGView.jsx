import React, { useEffect, useState } from 'react';
import styles from '@/styles/UserGView.module.css';
import Loader from '@/components/Loader';
import ProductCard from '@/components/ProductCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${styles.arrow} ${styles.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${styles.arrow} ${styles.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const UserGeneralView = () => { 
  const [userData, setUserData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user_stats', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data.user);
        setLeaderboard(data.leaderboard);
        setRecommendedProducts(data.recommendedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);



  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rows: 1, // Limita el número de filas a 1
    slidesPerRow: 1, // Limita el número de slides por fila a 1

  };

  if (loading) {
    return <div className={styles.Loader}><Loader /></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
            <img src="/user-png.webp" alt="" className={styles.companyLogo} />
            <div className={styles.userInfo}>
              <h3>{userData.user_username}</h3>
              <p>{userData.company_name}</p>
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
                  <th>Company</th>
                  <th>Score</th>
                  <th>Date Played</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((item, index) => (
                  <tr key={index}>
                    <td>{item.user_username}</td>
                    <td>{item.company_name}</td>
                    <td>{item.max_score}</td>
                    <td>{item.last_played}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.recommendedProducts}>
            <h3>Recommended Products</h3>
            <div className={styles.sliderContainer}>

            <Slider {...sliderSettings} className={styles.slider}>
              {recommendedProducts.map((product, index) => (
                <div key={index} className={styles.slide}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGeneralView;
