import styles from "./DashBoard.module.css";
import StatCard from "../StatCard";

function DashBoard() {
  return (
    <div className={styles.dashboard}>
      <StatCard value={2} label="Active Rentals" accentColor="#4B4DED" />
      <StatCard
        value={5}
        label="Overdue Items"
        accentColor="#b45309"
        labelColor="#b45309"
        background="linear-gradient(135deg, #fff4c3 0%, #f9d976 100%)"
      />
      <StatCard value={14} label="Returned" accentColor="#4B4DED" />
    </div>
  );
}
export default DashBoard;
