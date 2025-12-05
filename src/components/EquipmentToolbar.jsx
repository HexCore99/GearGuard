import styles from "./EquipmentToolbar.module.css";
import CategorySelector from "./CategorySelector";
import SearchBox from "./SearchBox";
import StatusFilter from "./StatusFilter";

function EquipmentToolbar({
  STATUSES = [],
  statusValue = "All Status",
  onStatusChange,
}) {
  return (
    <div className={styles.toolbar}>
      <SearchBox />
      <CategorySelector />
      <StatusFilter
        STATUSES={STATUSES}
        statusValue={statusValue}
        onStatusChange={onStatusChange}
      />
    </div>
  );
}

export default EquipmentToolbar;
