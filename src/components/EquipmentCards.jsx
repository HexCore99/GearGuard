import styles from "./EquipmentCards.module.css";
import EquipmentCard from "./EquipmentCard";

function EquipmentCards({ equipments }) {
  return (
    <div className={styles.cards}>
      {equipments.map((curr) => (
        <EquipmentCard
          key={curr.id || curr.name}
          name={curr.name}
          category={curr.category}
          status={curr.status}
          health={curr.health}
          lastRented={curr.lastRented}
          id={curr.id}
          image={curr.image}
        />
      ))}
    </div>
  );
}

export default EquipmentCards;
