import styles from "./EquipmentTable.module.css";
import SearchBox from "../SearchBox";
import Button from "../MyRentalPage/Button";
import EquipmentTableHeader from "./EquipmentTableHeader";
import EquipmentRow from "./EquipmentRow";
function EquipmentTable({ equipments }) {
  return (
    <div className={styles.equipmentTable}>
      <div className={styles.toolbar}>
        <SearchBox />
        <Button>+ Add Equipment</Button>
      </div>
      <EquipmentTableHeader />
      {equipments.map((curr) => (
        <EquipmentRow item={curr} />
      ))}
    </div>
  );
}

export default EquipmentTable;
