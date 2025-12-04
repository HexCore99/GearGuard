import { useEffect, useState } from "react";
import Footer from "./Footer";
import PageNav from "./PageNav";
import styles from "./EquipmentList.module.css";
import GearGuardHero from "./GearGuardHero";
import EquipmentToolbar from "./EquipmentToolbar";
import EquipmentCards from "./EquipmentCards";
function EquipmentList() {
  const [isLoading, setIsLoading] = useState(false);
  const [equipmentList, setEqipmentList] = useState([]);

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

  return (
    <div className={styles.equipmentList}>
      <PageNav />
      <div className={styles.content}>
        <GearGuardHero />
        <EquipmentToolbar />
        <EquipmentCards equipments={equipmentList} />
      </div>
      <Footer />
    </div>
  );
}

export default EquipmentList;
