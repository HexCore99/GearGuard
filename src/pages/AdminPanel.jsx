import { useState, useEffect } from "react";
import styles from "./AdminPanel.module.css";
import PageNav from "../components/PageNav";
import GearGuardHero from "../components/GearGuardHero";
import SectionTabs from "../components/AdminPanel/SectionTabs";
import EquipmentTable from "../components/AdminPanel/EquipmentTable";
import Footer from "../components/Footer";
import LogTable from "../components/AdminPanel/LogTable";
function AdminPanel() {
  const [userLogs, setUserLogs] = useState([]);
  const [equipments, setEquipments] = useState([]);

  const [selectedTab, setSelectedTab] = useState("management");

  function onSelectedTab(value) {
    setSelectedTab(value);
  }
  useEffect(() => {
    async function fetchUserLogs() {
      try {
        const res = await fetch("/data/UserLogs.json");
        if (!res.ok) throw new Error("Failed to load rentals");
        const data = await res.json();
        setUserLogs(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUserLogs();
  }, []);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const res = await fetch("/data/Equipments.json");
        if (!res.ok) throw new Error("Failed to load rentals");
        const data = await res.json();
        setEquipments(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchEquipments();
  }, []);

  return (
    <div className={styles.adminBody}>
      <PageNav />
      <GearGuardHero header="Admin Panel">
        Manage equipment and monitor user activity
      </GearGuardHero>
      <div className={styles.content}>
        <SectionTabs activeTab={selectedTab} setTab={onSelectedTab} />
        {selectedTab === "management" ? (
          <EquipmentTable equipments={equipments} />
        ) : (
          <LogTable userLogs={userLogs} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default AdminPanel;
