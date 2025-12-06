import styles from "./LogFooter.module.css";
function LogFooter({ action, name, id }) {
  return (
    <div className={styles.footer}>
      <span className={styles.action}>{action}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.id}>({id})</span>
    </div>
  );
}

export default LogFooter;
