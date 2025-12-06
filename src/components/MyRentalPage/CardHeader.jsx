import styles from "./CardHeader.module.css";
function CardHeader({
  icon,
  itemName,
  itemCategory,
  itemStatus,
  daysOverdue,
  itemID,
}) {
  const statusKey = (itemStatus ?? "").toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.info}>
          <span className={styles.name}>{itemName}</span>
          <span className={styles.category}>{itemCategory}</span>
          <span className={styles.itemId}>{itemID}</span>
        </div>
      </div>
      <div className={styles.status}>
        <span className={`${styles.itemStat} ${styles[statusKey]}`}>
          {itemStatus}
        </span>
        {daysOverdue > 0 && (
          <span
            className={`${styles.daysOverdue} ${
              styles[itemStatus.toLowerCase()]
            }`}
          >{`${daysOverdue} days late`}</span>
        )}
      </div>
    </div>
  );
}

export default CardHeader;
