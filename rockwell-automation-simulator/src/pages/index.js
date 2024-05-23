import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/index.module.css";

const LandingPage = () => {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push("/logIn");
  }, [router]);

  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.textContainer}>
        <h1>TRY OUR NEW EXPERIENCE CENTER</h1>
        <p>
        At Rockwell Automation, we are dedicated to driving excellence in
            industry through cutting-edge automation solutions.
            From advanced control systems to analysis software
            data, we are leading the way towards a more efficient and
            productive.
        </p>
        <button className={styles.button} onClick={handleButtonClick}>
          Ingresar
        </button>
      </div>
    </main>
  </div>
  );
};

export default LandingPage;
