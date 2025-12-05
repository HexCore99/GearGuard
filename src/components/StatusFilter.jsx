import styles from "./StatusFilter.module.css";
import { Filter } from "lucide-react";

function StatusFilter({ statusValue, onStatusChange, STATUSES }) {
  return (
    <div className={styles.filter}>
      <span>{<Filter />}</span>
      <select
        value={statusValue}
        onChange={(e) => onStatusChange(e.target.value)}
        className={styles.select}
        aria-label="Filter by status"
      >
        {STATUSES.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StatusFilter;
