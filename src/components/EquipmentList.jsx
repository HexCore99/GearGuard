import { useEffect, useState } from "react";
import Footer from "./Footer";
import PageNav from "./PageNav";
import styles from "./EquipmentList.module.css";
import GearGuardHero from "./GearGuardHero";
import EquipmentToolbar from "./EquipmentToolbar";
import EquipmentCards from "./EquipmentCards";
function EquipmentList() {
  const [, setIsLoading] = useState(false);
  const [equipmentList, setEqipmentList] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All Status");

  function onStatusChange(value) {
    setStatusFilter(value);
  }

  useEffect(() => {
    setIsLoading(true);
    async function loadData() {
      try {
        const res = await fetch("/data/Equipments.json");
        if (!res.ok) throw new Error("Failed to load equipments");
        const data = await res.json();
        setEqipmentList(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const STATUSES = [
    "All Status",
    "Available",
    "Rented",
    "Under Maintenance",
    "Damaged",
  ];
  return (
    <div className={styles.equipmentList}>
      <PageNav />
      <div className={styles.content}>
        <GearGuardHero header="Equipments">
          {" "}
          Sports Equipment Rental System
        </GearGuardHero>
        <EquipmentToolbar
          statusValue={statusFilter}
          STATUSES={STATUSES}
          onStatusChange={onStatusChange}
        />
        <EquipmentCards equipments={equipmentList} />
      </div>
      <Footer />
    </div>
  );
}

export default EquipmentList;
