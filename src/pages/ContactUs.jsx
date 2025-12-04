import React from "react";
import styles from "./ContactUs.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <PageNav />
      <div className={styles.headerSection}>
        <div className={styles.headerInner}>
          <div className={styles.headerRow}>
            <div className={styles.headerIconBox}>
              <i className={`fas fa-shield-halved ${styles.headerIcon}`} />
            </div>
            <h1 className={styles.headerTitle}>GearGuard</h1>
          </div>
          <p className={styles.headerSubtitle}>
            Get in touch with our team to learn more about our equipment
            management system or to request support.
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <section className={styles.contactInfoSection}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <div className={styles.contactInfoGrid}>
            <div className={styles.contactInfoCard}>
              <div
                className={`${styles.contactIconWrapper} ${styles.contactIconBlue}`}
              >
                <i className={`fas fa-envelope ${styles.contactIcon}`} />
              </div>
              <h3 className={styles.contactInfoTitle}>Email Us</h3>
              <p className={styles.contactInfoContent}>support@gearguard.edu</p>
            </div>

            <div className={styles.contactInfoCard}>
              <div
                className={`${styles.contactIconWrapper} ${styles.contactIconGreen}`}
              >
                <i className={`fas fa-phone-volume ${styles.contactIcon}`} />
              </div>
              <h3 className={styles.contactInfoTitle}>Call Us</h3>
              <p className={styles.contactInfoContent}>+1 (555) 123-4567</p>
            </div>

            <div className={styles.contactInfoCard}>
              <div
                className={`${styles.contactIconWrapper} ${styles.contactIconPurple}`}
              >
                <i className={`fas fa-location-dot ${styles.contactIcon}`} />
              </div>
              <h3 className={styles.contactInfoTitle}>Visit Us</h3>
              <p className={styles.contactInfoContent}>
                123 University Ave, Campus Center
              </p>
            </div>

            <div className={styles.contactInfoCard}>
              <div
                className={`${styles.contactIconWrapper} ${styles.contactIconOrange}`}
              >
                <i className={`fas fa-calendar-days ${styles.contactIcon}`} />
              </div>
              <h3 className={styles.contactInfoTitle}>Support Hours</h3>
              <p className={styles.contactInfoContent}>
                Mon-Fri: 8am-6pm, Sat: 10am-4pm
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.contactFormCard}`}>
          <div className={styles.formHeader}>
            <div className={styles.formIconBox}>
              <i className={`fas fa-headset ${styles.formIcon}`} />
            </div>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
          </div>

          <form
            className={styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                rows={5}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              <i className={`fas fa-paper-plane ${styles.buttonIcon}`} />
              <span>Send Message</span>
            </button>
          </form>
        </section>

        {/* Office Locations */}
        <section className={`${styles.card} ${styles.locationsCard}`}>
          <div className={styles.locationsHeader}>
            <div className={styles.locationsIconBox}>
              {/* location-dot for clarity */}
              <i className={`fas fa-location-dot ${styles.locationsIcon}`} />
            </div>
            <h2 className={styles.sectionTitle}>Our Locations</h2>
          </div>

          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <h3 className={styles.locationTitle}>Main Office</h3>
              <p className={styles.locationAddress}>
                123 University Ave
                <br />
                Campus Center, Room 201
                <br />
                University City, 12345
              </p>
              <div className={styles.locationDetails}>
                <div className={styles.locationDetail}>
                  <i className={`fas fa-phone ${styles.locationDetailIcon}`} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={styles.locationDetail}>
                  <i
                    className={`fas fa-envelope ${styles.locationDetailIcon}`}
                  />
                  <span>main@gearguard.edu</span>
                </div>
              </div>
            </div>

            <div className={styles.locationCard}>
              <h3 className={styles.locationTitle}>Sports Complex</h3>
              <p className={styles.locationAddress}>
                456 Athletic Drive
                <br />
                Equipment Desk, First Floor
                <br />
                University City, 12345
              </p>
              <div className={styles.locationDetails}>
                <div className={styles.locationDetail}>
                  <i className={`fas fa-phone ${styles.locationDetailIcon}`} />
                  <span>+1 (555) 987-6543</span>
                </div>
                <div className={styles.locationDetail}>
                  <i
                    className={`fas fa-envelope ${styles.locationDetailIcon}`}
                  />
                  <span>sports@gearguard.edu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Website */}
        <section className={styles.socialSection}>
          <div className={styles.socialIconWrapper}>
            <div className={styles.socialIconBox}>
              {/* share-nodes instead of globe */}
              <i className={`fas fa-share-nodes ${styles.socialMainIcon}`} />
            </div>
          </div>
          <h2 className={styles.socialTitle}>Connect With Us</h2>
          <p className={styles.socialText}>
            Follow us on social media for updates, tips, and news about
            GearGuard.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <i className={`fab fa-facebook-f ${styles.socialIcon}`} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <i className={`fab fa-twitter ${styles.socialIcon}`} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <i className={`fab fa-instagram ${styles.socialIcon}`} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <i className={`fab fa-linkedin-in ${styles.socialIcon}`} />
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
