import React from "react";
import styles from "./StatusBanner.module.css";

function StatusBanner({ variant = "overdue", message, subText }) {
  const variantClass = styles[`banner--${variant}`] || "";

  const icon =
    variant === "overdue" ? "⚠️" : variant === "returned" ? "✅" : "⏳"; // active / not returned

  return (
    <div className={`${styles.banner} ${variantClass}`}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.textBlock}>
        <div className={styles.message}>{message}</div>
        {subText && <div className={styles.subText}>{subText}</div>}
      </div>
    </div>
  );
}

export default StatusBanner;
