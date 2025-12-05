import styles from "./RentalMetaCard.module.css";

function RentalMetaCard({ icon, label, date }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.labelAndDate}>
        <span className={styles.label}>{label}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default RentalMetaCard;
