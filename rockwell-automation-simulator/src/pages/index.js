import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";



const LandingPage = () => {
  const router = useRouter();

  const onPrimaryButtonClick = useCallback(() => {
    router.push("/logIn");
  }, [router]);

  return (
    <div className={styles.landingPage}>
      <img className={styles.bgImage} alt="" src="/image-9@2x.png" />
      <section className={styles.rectangleParent}>
        <div />
        <h1 className={styles.title}>CONOCE COMO TRABAJAMOS</h1>
        <div className={styles.Wrapper}>
            En Rockwell Automation, nos dedicamos a impulsar la excelencia en la
            industria a través de soluciones de automatización de vanguardia.
            Desde sistemas de control avanzados hasta software de análisis de
            datos, estamos liderando el camino hacia un futuro más eficiente y
            productivo.
        </div>
        <div >
          <button
            className={styles.primaryButton}
            onClick={onPrimaryButtonClick}
          >
            <div className={styles.ingresar}>Ingresar</div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
