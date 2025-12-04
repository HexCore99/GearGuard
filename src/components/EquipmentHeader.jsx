import styles from "./EquipmentHeader.module.css";

function EquipmentHeader({ name, category, status, id }) {
  const statusKey =
    typeof status === "string"
      ? status.trim().toLowerCase().replace(/\s+/g, "-")
      : "";
  const statusClass = statusKey && styles[statusKey] ? styles[statusKey] : "";

  return (
    <div className={styles.header}>
      <div className={styles.nameAndCategory}>
        <div className={styles.nameAndID}>
          <h2>{name}</h2>
          <span className={styles.id}>{id}</span>
        </div>
        <p>{category}</p>
      </div>
      <div className={`${styles.status} ${statusClass}`}>{status}</div>
    </div>
  );
}

export default EquipmentHeader;
