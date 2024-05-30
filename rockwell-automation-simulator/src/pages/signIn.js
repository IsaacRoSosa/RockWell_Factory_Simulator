import styles from "./signIn.module.css";

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

              <div className={styles.nameContainer}>
              <h2 className={styles.InputTitle}>First Name</h2>
              <input type="text" placeholder="Enter your First Name" className={styles.input} required />
              </div>

              <div className={styles.nameContainer}>
              <h2 className={styles.InputTitle}>Last Name</h2>
              <input type="text" placeholder="Enter your Last Name" className={styles.input} required />
              </div>
             

            </div>
            <h2 className={styles.InputTitle}>Email</h2>
            <input type="email" placeholder="Enter your contact email" className={styles.inputFull} required />
            <h2 className={styles.InputTitle}>Username</h2>
            <input type="email" placeholder="Enter your username" className={styles.inputFull} required />
            <h2 className={styles.InputTitle}>Password</h2>
            <input type="password" placeholder="Enter your password" className={styles.inputFull} required />
            <h2 className={styles.InputTitle}>Company location</h2>
            <input type="text" placeholder="Enter your company location" className={styles.inputFull} required />
            <h2 className={styles.InputTitle}>Company</h2>
            <input type="text" placeholder="Enter your Company" className={styles.inputFull} />
            <button type="submit" className={styles.button}>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InicioDeSesin1;