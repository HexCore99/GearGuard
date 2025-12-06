import styles from "./LogHeader.module.css";
function LogHeader({ children }) {
  return <div className={styles.status}>{children}</div>;
}

export default LogHeader;
