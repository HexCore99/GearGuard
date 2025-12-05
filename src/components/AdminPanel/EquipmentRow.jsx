import styles from "./EquipmentRow.module.css";
import EquipmentHealthBar from "../EquipmentHealthBar"; // your health bar
import HealthBar from "../AdminPanel/HealthBar";

import { Pen, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

function EquipmentRow({ item }) {
  return (
    <div className={styles.tableRow}>
      <span className={styles.id}>{item.id}</span>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.category}>{item.category}</span>
      <span className={styles.healthCell}>
        <EquipmentHealthBar health={item.health} />
      </span>
      <span>
        <StatusBadge status={item.status} />
      </span>
      <span className={styles.lastRented}>{item.lastRented}</span>
      <span className={styles.actions}>
        <span>
          <Pen />
        </span>
        <span>
          <Trash2 />
        </span>
      </span>
    </div>
  );
}

export default EquipmentRow;
