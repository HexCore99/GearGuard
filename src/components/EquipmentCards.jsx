import styles from "./EquipmentCards.module.css";
import EquipmentCard from "./EquipmentCard";

function EquipmentCards({ equipments }) {
  return (
    <div className={styles.cards}>
      {equipments.map((curr) => (
        <EquipmentCard equipmentObj={curr} />
      ))}
    </div>
  );
}

export default EquipmentCards;
