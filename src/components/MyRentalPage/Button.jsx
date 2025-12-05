import React from "react";
import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary", // "primary" | "danger" | "ghost"
  fullWidth = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
