import styles from "./logIn.module.css";
import InputField from "@/components/InputField"; 
import { useCallback } from "react";
import { useRouter } from "next/router";

const InicioDeSesin = () => {

  const router = useRouter();
  const onLogInButtonClick = useCallback(() => {
    router.push("/visin-general");
  }, [router]);

  const onCreateAnAccountButtonClick = useCallback(() => {
    router.push("/inicio-de-sesin1");
  }, [router]);
  return (
    <div className={styles.inicioDeSesin}>
      <div className={styles.initScreen}>
        <div className={styles.image11Parent}>
          <img className={styles.logo} loading="lazy" alt="" src="/image-11@2x.png"/>
          <div className={styles.frameParent}>
            <form className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.Wrapper}>
                    <h1 className={styles.title}>¡Welcome Back!</h1>
                  </div>
                  <h2 className={styles.text}>
                    Log in with your Rockwell Automation account
                  </h2>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.fieldParent}>
                  <InputField placeholder="Email" type="email" />
                  <InputField placeholder="Password" type="password" />
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.signInButtonParent}>
                  <div className={styles.signInButton}>
                    
                    <div className={styles.CheckboxParent}>
                      <input
                        className={styles.rememberMeCheckbox}
                        type="checkbox"
                      />
                      <div
                        className={styles.stayLoggedIn}
                      >{`Stay logged in `}</div>
                    </div>
                  </div>
                  <button className={styles.rectangleParent} onClick={onCreateAnAccountButtonClick}> 
                    <div className={styles.frameItem} />
                    <div className={styles.createAnAccount}>
                      Create an account
                    </div>
                  </button>
                </div>
              </div>
            </form>
            <div className={styles.primaryButtonWrapper}>
              <button className={styles.primaryButton} onClick={onLogInButtonClick}>
                <b className={styles.logIn}>Log in</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.bgIcon} loading="lazy" alt="" src="/bg@2x.png" />
    </div>
  );
};

export default InicioDeSesin;
