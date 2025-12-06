import styles from "./ActivityCard.module.css";
import Icon from "../Icon";
import LogCardHeader from "./LogCardHeader";
import LogFooter from "./LogFooter";
import Date from "../Date";
import StatusBadge from "./StatusBadge";
function ActivityCard({ userLogs }) {
  const {
    userName,
    studentId,
    action,
    equipment,
    timestamp,
    status,
    equipmentId,
  } = userLogs;
  const parts = (userName ?? "").trim().split(/\s+/);
  const initials = (
    (parts[0]?.[0] || "") + (parts[parts.length - 1]?.[0] || "")
  ).toUpperCase();

  console.log(userLogs);
  return (
    <div className={styles.card}>
      <div className={styles.leftSection}>
        <span className={styles.icon}>
          <Icon size={15}>{initials}</Icon>
        </span>

        <div className={styles.cardInfo}>
          <LogCardHeader name={userName} id={studentId} />
          <LogFooter action={action} name={equipment} id={equipmentId} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <Date styling="none" size={15}>
          {timestamp}
        </Date>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

export default ActivityCard;
