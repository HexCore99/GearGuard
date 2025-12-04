// CategorySelector.jsx
import { Filter } from "lucide-react";
import styles from "./CategorySelector.module.css";

const categories = ["all", "Ball Sports", "Board Games", "Racket Sports"];

function CategorySelector({ value, handleOnChange }) {
  return (
    <button type="button" className={styles.selector}>
      <Filter className={styles.icon} size={16} />
      <select
        className={styles.select}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
        aria-label="Filter by category"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "All Categories" : cat}
          </option>
        ))}
      </select>
    </button>
  );
}

export default CategorySelector;
