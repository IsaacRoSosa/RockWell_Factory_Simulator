import styles from "./visin-general1.module.css";

const VisinGeneral = () => {
  return (
    <div className={styles.visinGeneral}>
      <div className={styles.menuLateralParent}>
        <img
          className={styles.menuLateralIcon}
          alt=""
          src="/menu-lateral3.svg"
        />
        <div className={styles.logoImage} />
        <img
          className={styles.rwLogoIcon}
          loading="lazy"
          alt=""
          src="/rw-logo@2x.png"
        />
      </div>
    </div>
  );
};

export default VisinGeneral;
