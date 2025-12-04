import styles from "./Button.module.css";

function Button({
  children,
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  type = "button",
  ...rest
}) {
  const resolvedSize = styles[size] ? size : "md";
  const isDisabled = Boolean(rest.disabled);

  const classes = [
    styles.button,
    styles[resolvedSize],
    fullWidth ? styles.fullWidth : "",
    isDisabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
}

export default Button;
