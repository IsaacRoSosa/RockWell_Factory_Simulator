import styles from "@/pages/logIn.module.css";
// InputField.js
const InputField = ({ placeholder, type }) => {
    return (
      <div className={styles.field}>
        <div className={styles.fieldWrapper}>
          <h3 className={styles.type}>{placeholder}</h3>
        </div>
        <div className={styles.backdropWrapper}>
          <input
            className={styles.backdrop}
            placeholder={`Enter your ${placeholder.toLowerCase()}`}
            type={type}
          />
        </div>
      </div>
    );
  };
  
  export default InputField;