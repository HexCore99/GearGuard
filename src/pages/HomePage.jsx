import React from "react";
import { Search, CheckCircle, Clock } from "lucide-react";
import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <PageNav />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          University Sports Equipment Rental System
        </h1>
        <p className={styles.heroDescription}>
          Access quality sports equipment with a streamlined checkout process.
          Track availability, monitor equipment health, and manage rentals
          efficiently.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>Browse Equipment</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Equipment Items</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>1,200+</div>
            <div className={styles.statLabel}>Active Students</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statValue}>Return Rate</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorksSection}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconBlue}`}>
              <Search className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>Browse & Select</h3>
            <p className={styles.featureDescription}>
              Search our inventory and check real-time availability of sports
              equipment.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconPurple}`}>
              <CheckCircle className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>Reserve & Checkout</h3>
            <p className={styles.featureDescription}>
              Complete a quick checkout with accountability measures in place.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.iconPink}`}>
              <Clock className={styles.icon} />
            </div>
            <h3 className={styles.featureTitle}>Use & Return</h3>
            <p className={styles.featureDescription}>
              Track your rental period and return equipment on time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaDescription}>
            Join hundreds of students using GearGuard for equipment rentals.
          </p>
          <button className={styles.ctaButton}>Create Account</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>GearGuard</div>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>
              Privacy
            </a>
            <a href="#" className={styles.footerLink}>
              Terms
            </a>
            <a href="#" className={styles.footerLink}>
              Contact
            </a>
          </div>
          <div className={styles.footerCopyright}>© 2024 GearGuard</div>
        </div>
      </footer>
    </div>
  );
}
