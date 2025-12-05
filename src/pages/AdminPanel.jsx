import { useState, useEffect } from "react";
import styles from "./AdminPanel.module.css";
import PageNav from "../components/PageNav";
import GearGuardHero from "../components/GearGuardHero";
import SectionTabs from "../components/AdminPanel/SectionTabs";
import EquipmentTable from "../components/AdminPanel/EquipmentTable";
function AdminPanel() {
  const [userLogs, setUserLogs] = useState([]);
  const [selectedTab, setSelectedTab] = useState("logs");

  function onSelectedTab(value) {
    setSelectedTab(value);
  }
  useEffect(() => {
    async function fetchUserLogs() {
      try {
        const res = await fetch("/data/Equipments.json");
        if (!res.ok) throw new Error("Failed to load rentals");
        const data = await res.json();
        setUserLogs(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUserLogs();
  }, []);

  return (
    <div className={styles.adminBody}>
      <PageNav />
      <div className={styles.content}>
        <GearGuardHero>
          Manage equipment and monitor user activity
        </GearGuardHero>
        <SectionTabs activeTab={selectedTab} setTab={onSelectedTab} />
        <EquipmentTable equipments={userLogs} />
      </div>
    </div>
  );
}

export default AdminPanel;
