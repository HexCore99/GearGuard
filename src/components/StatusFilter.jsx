import styles from "./StatusFilter.module.css";

const STATUSES = ["All Status", "Available", "Rented", "Under Maintenance", "Damaged"];

function StatusFilter({ value, handleOnChange }) {
  return (
    <div className={styles.filter}>
      <select
        value={value}
        onChange={handleOnChange}
        className={styles.select}
        aria-label="Filter by status"
      >
        {STATUSES.map((status) => (
          <option key={status} value={status === "All Status" ? "all" : status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StatusFilter;
