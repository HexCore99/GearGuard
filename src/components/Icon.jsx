import styles from "./Icon.module.css";

function Icon({
  color = "#533df6",
  bgColor = "#e0e7ff",
  size = 20,
  shape = "rounded-square", // square | circle | pill | rounded-square
  children,
}) {
  const shapeClass =
    shape === "circle"
      ? styles.circle
      : shape === "square"
      ? styles.square
      : shape === "pill"
      ? styles.pill
      : styles.roundedSquare;

  return (
    <div
      className={`${styles.icon} ${shapeClass}`}
      style={{
        "--icon-color": color,
        "--icon-bg": bgColor,
        "--icon-size": `${size}px`,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export default Icon;
