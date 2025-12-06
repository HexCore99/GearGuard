import Button from "./Button";
import styles from "./EquipmentCard.module.css";
import Clock from "./Icon/Clock";
import { Calendar } from "lucide-react";
import CardHeader from "../components/MyRentalPage/CardHeader";
import RentalMetaCard from "../components/MyRentalPage/RentalMetaCard";
import EquipmentHealthBar from "./EquipmentHealthBar";
function EquipmentCard({ equipmentObj }) {
  const {
    image,
    name,
    category,
    status,
    daysOverdue,
    equipmentId,
    health,
    lastRented,
    price,
  } = equipmentObj;
  const isDisabled = health < 20 || status === "Rented";
  console.log(isDisabled);
  return (
    <div className={styles.card}>
      <CardHeader
        icon={image}
        itemName={name}
        itemCategory={category}
        itemStatus={status}
        daysOverdue={daysOverdue}
        itemID={equipmentId}
      />
      <EquipmentHealthBar health={health} />

      <div className={styles.rentalMetaCards}>
        <RentalMetaCard
          icon={<Calendar />}
          label="Last Rented"
          date={lastRented}
        />
      </div>
      <Button disabled={isDisabled} className={styles.centerButton}>
        Rent Now
      </Button>
    </div>
  );
}

export default EquipmentCard;
