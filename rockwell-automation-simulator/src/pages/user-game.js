import styles from "./user-game.module.css";

const UserGame = () => {
  return (
    <div className={styles.userGame}>
      <main className={styles.bgParent}>
        <img className={styles.bgIcon} alt="" src="/bg1@2x.png" />
        <img
          className={styles.imagen202402291141302201Icon}
          loading="lazy"
          alt=""
          src="/imagen-20240229-114130220-1@2x.png"
        />
        <img
          className={styles.imagenDeWhatsapp20240417}
          loading="lazy"
          alt=""
          src="/imagen-de-whatsapp-20240417-a-las-1445-1@2x.png"
        />
        <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      </main>
      <footer className={styles.userGameInner}>
        <div className={styles.frameParent}>
          <div className={styles.titleWrapper}>
            <b className={styles.title}>{`RECOMENDATIONS `}</b>
          </div>
          <b className={styles.title1}>HOW OUR PRODCUTS HELP</b>
        </div>
      </footer>
    </div>
  );
};

export default UserGame;
