import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src="src/assets/gear-guard.png" alt="GearGuard" />
      </Link>
    </div>
  );
}

export default Logo;
