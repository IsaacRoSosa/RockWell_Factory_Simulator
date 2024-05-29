import styles from "./inicio-de-sesin1.module.css";

const InicioDeSesin1 = () => {
  return (
<div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formLeft}></div>
        <div className={styles.formRight}>
          <h1 className={styles.title}>Complete Your Profile</h1>
          <p className={styles.description}>
            Enter your information so we are able to recommend you personalized options and contact you
          </p>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Enter your First Name" className={styles.input} required />
              <input type="text" placeholder="Enter your Last Name" className={styles.input} required />
            </div>
            <input type="email" placeholder="Enter your contact email" className={styles.inputFull} required />
            <input type="email" placeholder="Enter your username" className={styles.inputFull} required />
            <input type="password" placeholder="Enter your password" className={styles.inputFull} required />
            <input type="text" placeholder="Enter your company location" className={styles.inputFull} required />
            <input type="text" placeholder="Enter your Company" className={styles.inputFull} />
            <button type="submit" className={styles.button}>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioDeSesin1;
