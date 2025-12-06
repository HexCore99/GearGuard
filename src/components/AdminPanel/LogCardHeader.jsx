import styles from "./LogCardHeader.module.css";
function LogCardHeader({ name, id }) {
  return (
    <div className={styles.logCardHeader}>
      <span className={styles.name}>{name}</span>
      <span className={styles.id}>{id}</span>
    </div>
  );
}

export default LogCardHeader;
