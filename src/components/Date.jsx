import styles from "./Date.module.css";

function Date({
  color = "#7f8694",
  size = 10,
  styling = "pill", // "pill" | "none"
  children,
}) {
  const style = {
    "--date-color": color,
    "--date-size": `${size}px`,
  };

  const isPlain = styling === "none";

  return (
    <span
      className={`${styles.date} ${isPlain ? styles.noChrome : ""}`}
      style={style}
    >
      <span className={styles.text}>{children}</span>
    </span>
  );
}

export default Date;
