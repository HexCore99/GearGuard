import styles from "./EquipmentStat.module.css";
function EquipmentStat({ icon, label, value }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.stats}>
        <label>{label}</label>
        <span className={styles.stat}>{value}</span>
      </div>
    </div>
  );
}


export default EquipmentStat;
