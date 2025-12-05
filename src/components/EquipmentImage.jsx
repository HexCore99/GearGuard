import styles from "./EquipmentImage.module.css";
function EquipmentImage({ image }) {
  return (
    <div className={styles.card}>
      <span>{image}</span>
    </div>
  );
}

export default EquipmentImage;
