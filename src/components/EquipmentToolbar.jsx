import CategorySelector from "./CategorySelector";
import styles from "./EquipmentToolbar.module.css";
import SearchBox from "./SearchBox";
import StatusFilter from "./StatusFilter";

function EquipmentToolbar() {
  return (
    <div className={styles.toolbar}>
      <SearchBox />
      <CategorySelector />
      <StatusFilter />
    </div>
  );
}

export default EquipmentToolbar;
