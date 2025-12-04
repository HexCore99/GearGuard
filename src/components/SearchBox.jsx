import { useState } from "react";
import { Search } from "lucide-react";
import styles from "./SearchBox.module.css";

function SearchBox() {
  const [searchedText, setSearchedText] = useState("");

  function handleSearch(text) {
    setSearchedText(text);
  }

  return (
    <div className={styles.searchBox}>
      <Search className={styles.icon} />
      <input
        type="text"
        value={searchedText}
        placeholder="Search equipment by name, ID, or category..."
        onChange={(e) => handleSearch(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}

export default SearchBox;
