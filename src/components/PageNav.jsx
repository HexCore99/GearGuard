import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
function PageNav() {
  return (
    <div>
      <nav className={styles.navStyle}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/about" className={styles.button}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={styles.button}>
              Contact-Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.button}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
