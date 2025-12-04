import styles from "./EquipmentHealthBar.module.css";

function EquipmentHealthBar({ health = 0 }) {
  const safeHealth = Math.max(0, Math.min(health, 100));
  const healthColor = health >= 80 ? "full" : health >= 20 ? "medium" : "low";
  return (
    <div className={styles.card}>
      <div className={styles.labelAndPoints}>
        <span>Health Condition</span>
        <span className={styles.healthValue}>{safeHealth}%</span>
      </div>
      <div className={styles.bar} aria-label={`Health ${safeHealth}%`}>
        <div
          className={`${styles.fill} ${styles[healthColor]}`}
          style={{ width: `${safeHealth}%` }}
        />
      </div>
    </div>
  );
}

export default EquipmentHealthBar;
