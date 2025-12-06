import styles from "./GearGuardHero.module.css";
import { Package } from "lucide-react";

function GearGuardHero({ header, children }) {
  return (
    <div className={styles.hero}>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <Package className="w-8 h-8" />
        </div>

        <div className={styles.headings}>
          <h1>{header}</h1>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default GearGuardHero;
