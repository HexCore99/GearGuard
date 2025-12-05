import styles from "./EquipmentCard.module.css";
import { Clock, Calendar } from "lucide-react";
import EquipmentHealthBar from "../EquipmentHealthBar";
import CardHeader from "./CardHeader";
import RentalMetaCard from "./RentalMetaCard";
import StatusBanner from "./StatusBanner";
import Button from "./Button";

function EquipmentCard({ rentLogObj }) {
  const {
    image,
    name,
    category,
    status, // "active" | "overdue" | "returned"
    daysOverdue,
    equipmentId,
    health,
    rentedDate,
    dueDate,
    lateFee,
    returnedDate,
  } = rentLogObj;

  let banner = null;

  if (status === "overdue") {
    banner = (
      <StatusBanner
        variant="overdue"
        message={`Overdue by ${daysOverdue} days`}
        subText={`Late Fee: $${lateFee}`}
      />
    );
  } else if (status === "returned") {
    banner = (
      <StatusBanner
        variant="returned"
        message={`Returned on ${returnedDate}`}
      />
    );
  } else if (status === "active") {
    // not returned yet, not overdue
    banner = (
      <StatusBanner
        variant="active"
        message="Item currently rented"
        subText={`Please return by ${dueDate}`}
      />
    );
  }

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
        <RentalMetaCard icon={<Calendar />} label="RENTED" date={rentedDate} />
        <RentalMetaCard icon={<Clock />} label="DUE DATE" date={dueDate} />
      </div>

      {banner}

      {status === "overdue" ? (
        <Button
          variant="danger"
          fullWidth
          //   onClick={handleReturnAndPayClick} // ← you control here
        >
          Return &amp; Pay Fee
        </Button>
      ) : status === "active" ? (
        <Button
          variant="primary"
          fullWidth
          //   onClick={handleReturnClick} // ← and here
        >
          Return Now
        </Button>
      ) : (
        <Button disabled>Return Now</Button>
      )}
    </div>
  );
}

export default EquipmentCard;
