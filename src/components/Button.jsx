import styles from "./Button.module.css";

// 218. Programmatic Navigation with useNavigate
function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
