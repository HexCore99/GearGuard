import styles from "./EquipmentTableHeader.module.css";
function EquipmentTableHeader() {
  return (
    <div className={styles.tableHeader}>
      <span>ID</span>
      <span>Name</span>
      <span>Category</span>
      <span>Health</span>
      <span>Status</span>
      <span>Last Rented</span>
      <span>Actions</span>
    </div>
  );
}

export default EquipmentTableHeader;
