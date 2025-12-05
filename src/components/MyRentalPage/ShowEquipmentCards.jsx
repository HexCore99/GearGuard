import EquipmentCard from "./EquipmentCard";
import styles from "./ShowEquipmentCards.module.css";

function ShowEquipmentCards({ rentalLog = [] }) {
  return (
    <div className={styles.cardDesk}>
      {rentalLog.map((curr) => (
        <EquipmentCard rentLogObj={curr} />
      ))}
    </div>
  );
}

export default ShowEquipmentCards;
