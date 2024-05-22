import styles from "@/pages/logIn.module.css";
// InputField.js
const InputField = ({ placeholder, type, value, onChange }) => {
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
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  };
  
  export default InputField;