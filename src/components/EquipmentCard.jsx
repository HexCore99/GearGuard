import Button from "./Button";
import styles from "./EquipmentCard.module.css";
import EquipmentHeader from "./EquipmentHeader";
import EquipmentHealthBar from "./EquipmentHealthBar";
import EquipmentImage from "./EquipmentImage";
import EquipmentStat from "./EquipmentStat";
import Clock from "./Icon/Clock";
function EquipmentCard({
  name,
  category,
  status,
  health,
  lastRented,
  id,
  image,
}) {
  const isDisabled = health < 20;
  return (
    <div className={styles.card}>
      <div className={styles.imagePane}>
        <EquipmentImage image={image} />
      </div>

      <div className={styles.details}>
        <EquipmentHeader
          name={name}
          category={category}
          status={status}
          id={id}
        />
        <EquipmentHealthBar health={health} />
        <EquipmentStat
          icon={<Clock />}
          label="Last Rented"
          value={lastRented}
        />
        <Button size="sm" className={styles.centerButton} disabled={isDisabled}>
          Rent Now
        </Button>
      </div>
    </div>
  );
}

export default EquipmentCard;
