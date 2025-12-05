// Tab.jsx
import styles from "./Tab.module.css";

function Tab({ icon, label, activeTab, onClick }) {
  const tabColor = activeTab ? "active" : "";
  const iconColor = activeTab ? "activeIcon" : "";

  return (
    <div className={`${styles.tab} ${styles[tabColor]}`} onClick={onClick}>
      <span className={`${styles.icon} ${styles[iconColor]}`}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Tab;
