import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/logIn.module.css";

const InicioDeSesion = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onLogInButtonClick = useCallback(() => {
    if (email === "user" && password) {
      router.push("/userView");
    } else if (email === "admin" && password) {
      router.push("/adminView");
    } else {
      setErrorMessage("Correo electrónico o contraseña incorrectos");
    }
  }, [router, email, password]);

  const onCreateAnAccountButtonClick = useCallback(() => {
    router.push("/signIn");
  }, [router]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.textContainer}>
        <div className={styles.formContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.logo} loading="lazy" alt="Logo" src="/RockwellFlogo.png" />
          </div>
          <div className={styles.form}>
            <h1 className={styles.title}>¡Welcome Back!</h1>
            <h2 className={styles.text}>Log in with your Rockwell Automation account</h2>
            <br />
            <h2 className={styles.InputTitle}>Email</h2>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
            <h2 className={styles.InputTitle}>Password</h2>
            <input
              placeholder="Enter your Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.input}
            />
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <br />
            <div className={styles.logContainer}>
              <div className={styles.logIn}>
                <input className={styles.rememberMeCheckbox} type="checkbox" />
                <h1>Stay logged In</h1>
              </div>
              <button className={styles.accountButton} onClick={onCreateAnAccountButtonClick}>
                Create an account
              </button>
            </div>
            <button className={styles.logButton} onClick={onLogInButtonClick}>
              <b>Log in</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.recImage}>

        
      </div>
    </div>
  );
};

export default InicioDeSesion;
