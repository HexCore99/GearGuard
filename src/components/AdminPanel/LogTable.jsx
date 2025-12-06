import ActivityCard from "./ActivityCard";
import LogHeader from "./LogHeader";
import styles from "./LogTable.module.css";

function LogTable({ userLogs }) {
  return (
    <div className={styles.logTable}>
      <LogHeader>Recent User Activity</LogHeader>
      {userLogs?.map((log) => (
        <ActivityCard key={log.id} userLogs={log} />
      ))}
    </div>
  );
}

export default LogTable;
