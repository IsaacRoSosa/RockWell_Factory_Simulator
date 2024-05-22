// components/Sidebar.js
import styles from '@/styles/AdminSidebar.module.css';
import { useRouter } from 'next/router'; // Importa useRouter

const Sidebar = ({ setActiveSection }) => {
  const router = useRouter(); // Crea una instancia del enrutador

  const handleLogOut = () => {
    // Redirige al usuario a la página de inicio de sesión
    router.push('/logIn');
  };

  return (
    <div className={styles.sidebar}>

       <img className={styles.logo} loading="lazy" alt="" src="/RW-logo2.png" />
       <div className={styles.buttonContainer}>
       <button onClick={() => setActiveSection('section1')}> General View</button>
       </div>
       <div className={styles.buttonContainer}>
       <button onClick={() => setActiveSection('section2')}>Users</button>
        </div>
    {/*
     <div className={styles.buttonContainer}>
        <button onClick={() => setActiveSection('section3')}>Section 3</button>
        </div>
    */}   
        <footer className={styles.footer}> 
        <button onClick={handleLogOut}>Log Out</button> 
        </footer>
    </div>
  );
};

export default Sidebar;