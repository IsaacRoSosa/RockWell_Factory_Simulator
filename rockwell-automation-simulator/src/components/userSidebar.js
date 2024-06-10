// components/Sidebar.js
import styles from '@/styles/AdminSidebar.module.css';
import { useRouter } from 'next/router'; // Importa useRouter
import { useState } from 'react';


const UserSidebar = ({ setActiveSection }) => {
  const router = useRouter(); // Crea una instancia del enrutador
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogOut = () => {
    // Redirige al usuario a la página de inicio de sesión
    router.push('/logIn'); 
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  }

  const handleLogoutCancel = () => {
    setShowLogoutConfirmation(false);
  }

  return (
    <div className={styles.sidebar}>

       <img className={styles.logo} loading="lazy" alt="" src="/rw-logo-white.png" />
       <div className={styles.buttonContainer}>
       <button onClick={() => setActiveSection('section1')}> GAME</button>
       </div>
       <div className={styles.buttonContainer}>
       <button onClick={() => setActiveSection('section2')}>USER</button>
        </div>
  
        <footer className={styles.footer}> 
        <button onClick={handleLogoutClick}>Log Out</button> 
        </footer>
        {showLogoutConfirmation && (
        <div className={styles.logoutConfirmation}>
          <h1>Are you sure you want to log out?</h1>
          <div className={styles.buttonsContainer}>
            <button className={styles.yesButton} onClick={handleLogOut}>YES</button>
            <button className={styles.noButton} onClick={handleLogoutCancel}>NO</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSidebar;