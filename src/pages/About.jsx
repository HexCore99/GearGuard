import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutPage}>
      <PageNav />
      <div className={styles.content}>
        <div className={styles.description}>
          <h1> About-Us</h1>
          <p>
            GearGuard was created to make sports and outdoor activities more
            accessible, convenient, and enjoyable for everyone. We specialize in
            providing a wide range of high-quality sports equipment for rent,
            from bicycles, rollerblades, and skateboards to skis, snowboards,
            tennis rackets, and balls. Our goal is to help people of all ages
            and skill levels experience the joy of being active without the need
            for a large investment in personal equipment. We take pride in
            offering reliable, well-maintained gear and a seamless rental
            experience, ensuring that every customer can focus on having fun and
            staying active. At SportKitRentalHub, we believe that trying new
            sports, exploring the outdoors, and staying fit should be simple,
            affordable, and stress-free.
          </p>
        </div>

        <div className={styles.infoGrid}>
          <section className={`${styles.card} ${styles.hoursCard}`}>
            <h2>Hours</h2>
            <ul className={styles.hours}>
              <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
