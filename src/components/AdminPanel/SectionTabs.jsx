// SectionTabs.jsx
import styles from "./SectionTabs.module.css";
import Tab from "./Tab";
import { Package, Users } from "lucide-react";

function SectionTabs({ activeTab, setTab }) {
  return (
    <div className={styles.sectionTab}>
      <Tab
        icon={<Package />}
        label="Equipment Management"
        activeTab={activeTab === "management"}
        onClick={() => setTab("management")}
      />
      <Tab
        icon={<Users />}
        label="User Activity Logs"
        activeTab={activeTab === "logs"}
        onClick={() => setTab("logs")}
      />
    </div>
  );
}

export default SectionTabs;
