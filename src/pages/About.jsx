import React from "react";
import { Package, Heart, Shield, Users, Target, Zap } from "lucide-react";
import styles from "./About.module.css";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function FeatureCard({ icon, title, description, variant }) {
  const Icon = icon;
  return (
    <div className={styles.featureCard}>
      <div
        className={`${styles.featureIconWrapper} ${
          variant === "blue"
            ? styles.featureIconBlue
            : variant === "green"
            ? styles.featureIconGreen
            : styles.featureIconPurple
        }`}
      >
        <Icon className={styles.featureIcon} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <PageNav />
      {/* Header */}
      <div className={styles.headerSection}>
        <div className={styles.headerInner}>
          <div className={styles.headerRow}>
            <div className={styles.headerIconBox}>
              <Package className={styles.headerIcon} />
            </div>
            <h1 className={styles.headerTitle}>GearGuard</h1>
          </div>
          <p className={styles.headerSubtitle}>
            Simplifying sports equipment rentals for university gyms with smart
            tracking and maintenance management.
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Mission Section */}
        <section className={`${styles.card} ${styles.missionCard}`}>
          <div className={styles.missionHeader}>
            <div className={styles.missionIconBox}>
              <Target className={styles.missionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
          </div>
          <p className={styles.missionText}>
            GearGuard aims to revolutionize how university gyms manage their
            sports equipment. We provide a comprehensive solution that tracks
            every item, monitors equipment health, and ensures students always
            have access to well-maintained gear for their activities.
          </p>
        </section>

        {/* Features Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            <FeatureCard
              icon={Shield}
              title="Asset Tracking"
              description="Every item has a unique ID and status tracking. Know exactly where your equipment is at all times."
              variant="blue"
            />

            <FeatureCard
              icon={Zap}
              title="Health Monitoring"
              description="Automatic health tracking ensures equipment is maintained before it becomes unusable."
              variant="green"
            />

            <FeatureCard
              icon={Users}
              title="User History"
              description="Track rental history and calculate late fees automatically for seamless management."
              variant="purple"
            />
          </div>
        </section>

        {/* How It Works */}
        <section className={`${styles.card} ${styles.howItWorksCard}`}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <div className={styles.stepsList}>
            <div className={styles.stepRow}>
              <div className={styles.stepNumberWrapper}>
                <div className={styles.stepNumber}>1</div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Browse Equipment</h3>
                <p className={styles.stepText}>
                  Students can search and filter available sports equipment in
                  real-time.
                </p>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepNumberWrapper}>
                <div className={styles.stepNumber}>2</div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Check Out Items</h3>
                <p className={styles.stepText}>
                  Admins log who took what and when, with automatic health
                  deduction on each rental.
                </p>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepNumberWrapper}>
                <div className={styles.stepNumber}>3</div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Automatic Maintenance</h3>
                <p className={styles.stepText}>
                  When health drops below 20%, items are flagged for maintenance
                  automatically.
                </p>
              </div>
            </div>

            <div className={styles.stepRow}>
              <div className={styles.stepNumberWrapper}>
                <div className={styles.stepNumber}>4</div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Late Fee Calculation</h3>
                <p className={styles.stepText}>
                  System automatically calculates late fees based on return
                  dates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Universities Section */}
        <section className={styles.teamSection}>
          <div className={styles.teamIconWrapper}>
            <div className={styles.teamIconBox}>
              <Heart className={styles.teamIcon} />
            </div>
          </div>
          <h2 className={styles.teamTitle}>Built for Universities</h2>
          <p className={styles.teamText}>
            GearGuard is designed specifically for university gyms to streamline
            equipment management, reduce losses, and ensure students always have
            access to quality sports gear.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
