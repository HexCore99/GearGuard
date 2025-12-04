import styles from "./Clock.module.css";
import { Clock as ClockIcon } from "lucide-react";

function Clock() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <ClockIcon size={20} strokeWidth={2.6} className={styles.icon} />
    </div>
  );
}

export default Clock;
