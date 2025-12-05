import SearchBox from "../SearchBox";
import StatusFilter from "../StatusFilter";
import styles from "./FilterSection.module.css";
function FilterSection({ statusValue, onStatusChange, FilterStatuses }) {
  return (
    <div className={styles.filterSection}>
      <SearchBox />
      <StatusFilter
        statusValue={statusValue}
        onStatusChange={onStatusChange}
        STATUSES={FilterStatuses}
      />
    </div>
  );
}

export default FilterSection;
