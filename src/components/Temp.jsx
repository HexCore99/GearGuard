import { useMemo, useState } from "react";
import Footer from "./Footer";
import PageNav from "./PageNav";
import styles from "./Temp.module.css";

const equipment = [
  {
    id: "BB-104",
    name: "Cricket Bat (English Willow)",
    category: "Cricket",
    status: "Available",
    health: 92,
    location: "Rack A2",
    lastCheckout: "2025-02-12",
    due: null,
    renter: null,
    lastServiced: "2025-02-01",
    notes: "Grip replaced and balanced for outdoor play.",
    overdue: false,
  },
  {
    id: "FB-021",
    name: "Match Football",
    category: "Football",
    status: "Rented",
    health: 71,
    location: "Locker C",
    lastCheckout: "2025-02-17",
    due: "2025-02-21",
    renter: "Sam Carter",
    lastServiced: "2025-02-05",
    notes: "Valve checked. Monitor seam wear after return.",
    overdue: false,
  },
  {
    id: "BK-009",
    name: "Indoor Basketball",
    category: "Basketball",
    status: "Rented",
    health: 64,
    location: "Locker D",
    lastCheckout: "2025-02-18",
    due: "2025-02-20",
    renter: "Jordan Lee",
    lastServiced: "2025-01-29",
    notes: "Marked for grip refresh on return.",
    overdue: true,
  },
  {
    id: "CH-003",
    name: "Tournament Chess Set",
    category: "Chess",
    status: "Available",
    health: 88,
    location: "Studio Shelf",
    lastCheckout: "2025-02-10",
    due: null,
    renter: null,
    lastServiced: "2025-02-02",
    notes: "Pieces polished. Keep box latched between uses.",
    overdue: false,
  },
  {
    id: "RB-014",
    name: "Rollerblade Pair (M)",
    category: "Skates",
    status: "Under Maintenance",
    health: 14,
    location: "Maintenance Bay",
    lastCheckout: "2025-02-08",
    due: null,
    renter: null,
    lastServiced: "2025-02-03",
    notes: "Auto-flagged. Wheels and bearings replaced this week.",
    overdue: false,
  },
  {
    id: "SB-042",
    name: "All-Mountain Snowboard",
    category: "Snowboard",
    status: "Available",
    health: 78,
    location: "Rack B1",
    lastCheckout: "2025-02-15",
    due: null,
    renter: null,
    lastServiced: "2025-02-06",
    notes: "Edges sharpened; base waxed for colder temps.",
    overdue: false,
  },
  {
    id: "TN-017",
    name: "Tennis Racket (String 54lb)",
    category: "Tennis",
    status: "Available",
    health: 83,
    location: "Rack C4",
    lastCheckout: "2025-02-13",
    due: null,
    renter: null,
    lastServiced: "2025-02-07",
    notes: "Strings recalibrated. Grip tape refreshed.",
    overdue: false,
  },
  {
    id: "RM-006",
    name: "Rowing Machine",
    category: "Cardio",
    status: "Under Maintenance",
    health: 18,
    location: "Maintenance Bay",
    lastCheckout: "2025-02-10",
    due: null,
    renter: null,
    lastServiced: "2025-02-11",
    notes: "Flagged after heavy rental; replacing chain + monitor.",
    overdue: false,
  },
  {
    id: "VC-025",
    name: "Volleyball (Outdoor)",
    category: "Volleyball",
    status: "Rented",
    health: 57,
    location: "Locker B",
    lastCheckout: "2025-02-19",
    due: "2025-02-23",
    renter: "Priya N.",
    lastServiced: "2025-02-09",
    notes: "Bladder firm. Check panels after tournament.",
    overdue: false,
  },
];

const activityLog = [
  {
    id: 1,
    type: "return",
    title: "Returned: Cricket Bat #BB-104",
    detail: "Health recalculated to 92 pts. No maintenance needed.",
    at: "2025-02-19 09:20",
  },
  {
    id: 2,
    type: "checkout",
    title: "Checked out: Volleyball #VC-025",
    detail: "Due back Sun • Logged by Priya N.",
    at: "2025-02-19 08:10",
  },
  {
    id: 3,
    type: "maintenance",
    title: "Maintenance started: Rowing Machine #RM-006",
    detail: "Auto-flagged below 20 pts. Parts ordered.",
    at: "2025-02-18 17:45",
  },
  {
    id: 4,
    type: "checkout",
    title: "Checked out: Indoor Basketball #BK-009",
    detail: "Due back Thu • Logged by Jordan Lee.",
    at: "2025-02-18 16:05",
  },
];

const formatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
});

const statusClassMap = {
  Available: "statusAvailable",
  Rented: "statusRented",
  "Under Maintenance": "statusMaintenance",
};

const activityClassMap = {
  checkout: "checkout",
  return: "return",
  maintenance: "activityMaintenance",
};

function formatDate(dateString) {
  if (!dateString) return "—";
  return formatter.format(new Date(dateString));
}

function Temp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const stats = useMemo(() => {
    const total = equipment.length;
    const available = equipment.filter(
      (item) => item.status === "Available"
    ).length;
    const rented = equipment.filter((item) => item.status === "Rented").length;
    const maintenance = equipment.filter(
      (item) => item.status === "Under Maintenance" || item.health < 20
    ).length;
    const overdue = equipment.filter((item) => item.overdue).length;
    const averageHealth = Math.round(
      equipment.reduce((sum, item) => sum + item.health, 0) / total
    );

    const healthBuckets = equipment.reduce(
      (acc, item) => {
        if (item.health >= 80) acc.strong += 1;
        else if (item.health >= 50) acc.stable += 1;
        else if (item.health >= 20) acc.watch += 1;
        else acc.critical += 1;
        return acc;
      },
      { strong: 0, stable: 0, watch: 0, critical: 0 }
    );

    return {
      total,
      available,
      rented,
      maintenance,
      overdue,
      averageHealth,
      healthBuckets,
    };
  }, []);

  const filteredEquipment = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    return equipment.filter((item) => {
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  }, [searchTerm, statusFilter]);

  const maintenanceQueue = useMemo(
    () =>
      equipment.filter(
        (item) => item.status === "Under Maintenance" || item.health <= 35
      ),
    []
  );

  return (
    <div className={styles.equipmentList}>
      <PageNav />
      <main className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.headings}>
            <p className={styles.kicker}>GearGuard • Equipment List</p>
            <h1>Live inventory with health-aware rentals</h1>
            <p className={styles.lead}>
              Track status, health points, and return windows in one view. Items
              drop into maintenance automatically when health dips below 20
              points.
            </p>
            <div className={styles.pills}>
              <span className={styles.pill}>Asset tracking</span>
              <span className={styles.pill}>Auto maintenance</span>
              <span className={styles.pill}>Late-fee visibility</span>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStatCard}>
              <span className={styles.heroStatLabel}>Total items</span>
              <span className={styles.heroStatValue}>{stats.total}</span>
              <span className={styles.heroStatSub}>
                {stats.available} ready • {stats.maintenance} in repair
              </span>
            </div>
            <div className={styles.heroStatCard}>
              <span className={styles.heroStatLabel}>Avg health</span>
              <span className={styles.heroStatValue}>
                {stats.averageHealth} pts
              </span>
              <div className={styles.healthSpark}>
                <div
                  className={styles.sparkFill}
                  style={{ width: `${stats.averageHealth}%` }}
                />
              </div>
              <span className={styles.heroStatSub}>
                {stats.healthBuckets.strong} excellent •{" "}
                {stats.healthBuckets.watch} watchlist
              </span>
            </div>
          </div>
        </section>

        <section className={styles.filters}>
          <div className={styles.search}>
            <input
              type="search"
              placeholder="Search by name, ID, or category"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className={styles.searchHint}>
              Health recalculates on return
            </span>
          </div>

          <div className={styles.filterGroup}>
            {["All", "Available", "Rented", "Under Maintenance"].map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  className={`${styles.filterButton} ${
                    statusFilter === status ? styles.activeFilter : ""
                  }`}
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </section>

        <section className={styles.inventorySection}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>Inventory</p>
              <h2>Equipment list</h2>
              <p className={styles.sectionSub}>
                Showing {filteredEquipment.length} of {equipment.length} items •{" "}
                {stats.rented} out • {stats.maintenance} in maintenance
              </p>
            </div>
            <div className={styles.badgeStack}>
              <span className={styles.badge}>
                Overdue: {stats.overdue || "None"}
              </span>
              <span className={styles.badge}>
                Rentals active: {stats.rented}
              </span>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {filteredEquipment.map((item) => {
              const statusClass =
                statusClassMap[item.status] || "statusAvailable";
              const actionLabel =
                item.status === "Available"
                  ? "Start checkout"
                  : item.status === "Rented"
                  ? "Log return"
                  : "Schedule repair";

              return (
                <article key={item.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div>
                      <p className={styles.itemId}>{item.id}</p>
                      <h3>{item.name}</h3>
                      <p className={styles.itemMeta}>{item.category}</p>
                    </div>
                    <span className={`${styles.status} ${styles[statusClass]}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className={styles.healthBlock}>
                    <div className={styles.healthRow}>
                      <span>Health</span>
                      <span className={styles.healthValue}>
                        {item.health} pts
                      </span>
                    </div>
                    <div className={styles.healthBar}>
                      <div
                        className={styles.healthFill}
                        style={{ width: `${item.health}%` }}
                      />
                    </div>
                    <p className={styles.healthNote}>{item.notes}</p>
                  </div>

                  <div className={styles.metaGrid}>
                    <div>
                      <span className={styles.label}>Location</span>
                      <p className={styles.value}>{item.location}</p>
                    </div>
                    <div>
                      <span className={styles.label}>Last checkout</span>
                      <p className={styles.value}>
                        {formatDate(item.lastCheckout)}
                      </p>
                    </div>
                    <div>
                      <span className={styles.label}>Due</span>
                      <p className={styles.value}>
                        {item.due ? formatDate(item.due) : "On shelf"}
                      </p>
                    </div>
                    <div>
                      <span className={styles.label}>Renter</span>
                      <p className={styles.value}>{item.renter || "—"}</p>
                    </div>
                    <div>
                      <span className={styles.label}>Last serviced</span>
                      <p className={styles.value}>
                        {formatDate(item.lastServiced)}
                      </p>
                    </div>
                    <div>
                      <span className={styles.label}>Status note</span>
                      <p className={styles.value}>
                        {item.status === "Under Maintenance"
                          ? "Auto-hidden from search until repaired"
                          : "Visible to renters"}
                      </p>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.tag}>
                      {item.status === "Rented"
                        ? `Due ${formatDate(item.due)}`
                        : item.status === "Under Maintenance"
                        ? "Queued for repairs"
                        : "Available now"}
                    </div>
                    <button type="button" className={styles.primaryAction}>
                      {actionLabel}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.dashboard}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionKicker}>Dashboard</p>
              <h2>Operational snapshot</h2>
              <p className={styles.sectionSub}>
                Health buckets, overdue rentals, and active maintenance at a
                glance.
              </p>
            </div>
          </div>

          <div className={styles.dashboardGrid}>
            <div className={styles.statCard}>
              <div className={styles.statRow}>
                <p className={styles.statLabel}>Available</p>
                <p className={styles.statValue}>{stats.available}</p>
              </div>
              <p className={styles.statHint}>
                Ready for checkout. Auto-updates when health is recalculated.
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statRow}>
                <p className={styles.statLabel}>Rented</p>
                <p className={styles.statValue}>{stats.rented}</p>
              </div>
              <p className={styles.statHint}>
                Active rentals with tracked return windows.
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statRow}>
                <p className={styles.statLabel}>Under maintenance</p>
                <p className={styles.statValue}>{stats.maintenance}</p>
              </div>
              <p className={styles.statHint}>
                Hidden from searches until an admin repairs and resets health.
              </p>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statRow}>
                <p className={styles.statLabel}>Overdue rentals</p>
                <p className={styles.statValue}>{stats.overdue || "None"}</p>
              </div>
              <p className={styles.statHint}>
                Flagged for late-fee calculations on return.
              </p>
            </div>
          </div>

          <div className={styles.lowerGrid}>
            <div className={styles.healthPanel}>
              <div className={styles.panelHeader}>
                <h3>Health distribution</h3>
                <span className={styles.panelSub}>
                  Average {stats.averageHealth} pts
                </span>
              </div>
              <div className={styles.buckets}>
                {[
                  { label: "80-100 pts", value: stats.healthBuckets.strong },
                  { label: "50-79 pts", value: stats.healthBuckets.stable },
                  { label: "20-49 pts", value: stats.healthBuckets.watch },
                  { label: "<20 pts", value: stats.healthBuckets.critical },
                ].map((bucket) => (
                  <div key={bucket.label} className={styles.bucketRow}>
                    <div className={styles.bucketLabel}>{bucket.label}</div>
                    <div className={styles.bucketBar}>
                      <div
                        className={styles.bucketFill}
                        style={{
                          width: `${(bucket.value / equipment.length) * 100}%`,
                        }}
                      />
                    </div>
                    <div className={styles.bucketValue}>{bucket.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.maintenancePanel}>
              <div className={styles.panelHeader}>
                <h3>Maintenance queue</h3>
                <span className={styles.panelSub}>
                  {maintenanceQueue.length} items hidden
                </span>
              </div>
              <div className={styles.queue}>
                {maintenanceQueue.map((item) => (
                  <div key={item.id} className={styles.queueRow}>
                    <div>
                      <p className={styles.queueTitle}>
                        {item.name} <span>#{item.id}</span>
                      </p>
                      <p className={styles.queueMeta}>
                        Health {item.health} pts • Last serviced{" "}
                        {formatDate(item.lastServiced)}
                      </p>
                    </div>
                    <span className={styles.queueStatus}>Hidden</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.activityPanel}>
              <div className={styles.panelHeader}>
                <h3>Recent activity</h3>
                <span className={styles.panelSub}>
                  Check-outs, returns, flags
                </span>
              </div>
              <div className={styles.activityList}>
                {activityLog.map((log) => {
                  const activityClass =
                    activityClassMap[log.type] || activityClassMap.checkout;
                  return (
                    <div key={log.id} className={styles.activityRow}>
                      <span
                        className={`${styles.activityDot} ${styles[activityClass]}`}
                      />
                      <div>
                        <p className={styles.activityTitle}>{log.title}</p>
                        <p className={styles.activityDetail}>{log.detail}</p>
                      </div>
                      <span className={styles.activityTime}>{log.at}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Temp;
