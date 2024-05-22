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
        <h1>CONOCE COMO TRABAJAMOS</h1>
        <p>
          En Rockwell Automation, nos dedicamos a impulsar la excelencia en la
          industria a través de soluciones de automatización de vanguardia.
          Desde sistemas de control avanzados hasta software de análisis de
          datos, estamos liderando el camino hacia un futuro más eficiente y
          productivo.
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
