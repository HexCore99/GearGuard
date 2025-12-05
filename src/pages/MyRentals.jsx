import styles from "./MyRentals.module.css";
import GearGuardHero from "../components/GearGuardHero";
import DashBoard from "../components/MyRentalPage/DashBoard";
import FilterSection from "../components/MyRentalPage/FilterSection";
import PageNav from "../components/PageNav";
import { useEffect, useState } from "react";
import ShowEquipmentCards from "../components/MyRentalPage/ShowEquipmentCards";

const FilterStatuses = ["All Rentals", "Active", "Overdue", "Returned"];
function MyRentals() {
  const [rentalLog, setRentalLog] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All Rentals");

  function onFilterChange(filter) {
    setFilterStatus(filter);
  }

  useEffect(() => {
    async function fetchRentalLog() {
      try {
        const res = await fetch("/data/RentalInfo.json");
        if (!res.ok) throw new Error("Failed to load rentals");
        const data = await res.json();
        setRentalLog(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchRentalLog();
  }, []);

  return (
    <div className={styles.myRentals}>
      <PageNav />
      <div className={styles.content}>
        <GearGuardHero>
          Track Your Rented Equipment and return dates
        </GearGuardHero>
        <div className={styles.dashboard}>
          <DashBoard />
        </div>
        <div className={styles.filters}>
          <FilterSection
            stausValue={filterStatus}
            onStatusChange={onFilterChange}
            FilterStatuses={FilterStatuses}
          />
        </div>
        <div className={styles.equipments}>
          <ShowEquipmentCards rentalLog={rentalLog} />
        </div>
      </div>
    </div>
  );
}

export default MyRentals;
