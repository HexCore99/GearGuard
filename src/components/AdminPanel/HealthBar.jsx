// EquipmentHealthBar.jsx
import styles from "./HealthBar.module.css";

function EquipmentHealthBar({ value }) {
  const clamped = Math.min(100, Math.max(0, value));

  let level = "good";
  if (clamped < 30) level = "low";
  else if (clamped < 70) level = "medium";

  return (
    <div className={styles.wrapper}>
      <div className={styles.barBackground}>
        <div
          className={`${styles.barFill} ${styles[level]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className={styles.label}>{clamped}%</span>
    </div>
  );
}

export default EquipmentHealthBar;
