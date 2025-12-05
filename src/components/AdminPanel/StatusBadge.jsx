// src/components/StatusBadge.jsx
import styles from "./StatusBadge.module.css";

function StatusBadge({ status }) {
  const key = status.toLowerCase();

  let variant = "default";
  if (key.includes("available")) variant = "available";
  else if (key.includes("rented")) variant = "rented";
  else if (key.includes("maintenance")) variant = "maintenance";
  else if (key.includes("damaged")) variant = "damaged";

  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
