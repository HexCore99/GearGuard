import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>GearGuard</div>
      <div className={styles.meta}>
        <span>Protect your gear. Stay prepared.</span>
        <span>© {year} GearGuard</span>
      </div>
    </footer>
  );
}

export default Footer;
