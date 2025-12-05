import React from "react";
import { NavLink } from "react-router-dom";
import { Shield } from "lucide-react";
import styles from "./PageNav.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <NavLink to="/" className={styles.logo}>
            <Shield className={styles.logoIcon} />
            <span className={styles.logoText}>GearGuard</span>
          </NavLink>

          {/* Navigation */}
          <nav className={styles.nav}>
            <NavLink
              to="/equipment"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Equipment
            </NavLink>
            <NavLink
              to="/my-rentals"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              My Rentals
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              About
            </NavLink>
            <NavLink to="/signIn" className={styles.signInButton}>
              Sign In
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
