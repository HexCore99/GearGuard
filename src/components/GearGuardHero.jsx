import styles from "./GearGuardHero.module.css";
import { Package } from "lucide-react"; 

function GearGuardHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <Package className="w-8 h-8" />
        </div>

        <div className={styles.headings}>
          <h1>GearGuard</h1>
          <p>Sports Equipment Rental System</p>
        </div>
      </div>
    </div>
  );
}

export default GearGuardHero;
