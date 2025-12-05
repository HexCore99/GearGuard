import React from "react";
import styles from "./StatCard.module.css";

function StatCard({
  value,
  label,
  accentColor = "#4B4DED",
  background = "#fff",
  labelColor,
}) {
  return (
    <div className={styles["stat-card"]} style={{ background }}>
      <div className={styles["stat-card-content"]}>
        <div
          className={styles["stat-card-value"]}
          style={{ color: accentColor }}
        >
          {value}
        </div>
        <div
          className={styles["stat-card-label"]}
          style={labelColor ? { color: labelColor } : undefined}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default StatCard;
